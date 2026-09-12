import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, Req } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { JwtStrategy } from "../auth/jwt.strategy";

@Controller("products")
export class ProductsController {
  constructor(private products: ProductsService) {}

  @Get()
  list(
    @Query("q") q?: string,
    @Query("category") category?: string,
    @Query("sort") sort?: string,
    @Query("page") page?: string,
    @Query("perPage") perPage?: string,
  ) {
    return this.products.list({
      q, category, sort,
      page: page ? parseInt(page, 10) : 1,
      perPage: perPage ? parseInt(perPage, 10) : 20,
    });
  }

  @Get(":slug")
  get(@Param("slug") slug: string) {
    return this.products.get(slug);
  }

  @Post()
  @UseGuards(JwtStrategy)
  create(
    @Req() req: { user: { id: number } },
    @Body() body: { title: string; priceKes: number; description?: string; stock?: number; categoryId?: number; status?: "DRAFT" | "ACTIVE" },
  ) {
    return this.products.create(req.user.id, body);
  }

  @Put(":id")
  @UseGuards(JwtStrategy)
  update(
    @Req() req: { user: { id: number } },
    @Param("id") id: string,
    @Body() body: { title?: string; priceKes?: number; stock?: number; status?: "DRAFT" | "ACTIVE" | "ARCHIVED" },
  ) {
    return this.products.update(req.user.id, parseInt(id, 10), body);
  }
}
