import { Injectable, NotFoundException, ForbiddenException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async list(opts: { q?: string; category?: string; sort?: string; page?: number; perPage?: number }) {
    const perPage = Math.min(opts.perPage ?? 20, 50);
    const page = Math.max(opts.page ?? 1, 1);

    const where: Record<string, unknown> = { status: "ACTIVE" };
    if (opts.q) where.title = { contains: opts.q };
    if (opts.category) where.category = { slug: opts.category };

    const orderBy =
      opts.sort === "low" ? { priceKes: "asc" as const }
      : opts.sort === "high" ? { priceKes: "desc" as const }
      : { createdAt: "desc" as const };

    const [items, total] = await Promise.all([
      this.prisma.product.findMany({
        where, orderBy,
        skip: (page - 1) * perPage,
        take: perPage,
        include: { seller: { select: { id: true, name: true } }, category: true },
      }),
      this.prisma.product.count({ where }),
    ]);

    return { items, total, page, perPage, pages: Math.ceil(total / perPage) };
  }

  async get(slug: string) {
    const p = await this.prisma.product.findUnique({
      where: { slug },
      include: { seller: { select: { id: true, name: true } }, category: true },
    });
    if (!p) throw new NotFoundException("Product not found");
    return p;
  }

  async create(userId: number, data: { title: string; priceKes: number; description?: string; stock?: number; categoryId?: number; status?: "DRAFT" | "ACTIVE" }) {
    const slug = data.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 70) + "-" + Date.now().toString(36);
    return this.prisma.product.create({
      data: {
        title: data.title,
        slug,
        description: data.description,
        priceKes: data.priceKes,
        stock: data.stock ?? 1,
        status: data.status ?? "DRAFT",
        categoryId: data.categoryId,
        sellerId: userId,
      },
    });
  }

  async update(userId: number, id: number, data: { title?: string; priceKes?: number; stock?: number; status?: "DRAFT" | "ACTIVE" | "ARCHIVED" }) {
    const p = await this.prisma.product.findUnique({ where: { id } });
    if (!p) throw new NotFoundException();
    if (p.sellerId !== userId) throw new ForbiddenException("Not your listing");
    return this.prisma.product.update({ where: { id }, data });
  }
}
