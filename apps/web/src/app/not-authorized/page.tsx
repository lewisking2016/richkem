import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export const metadata = { title: "Access denied" };

export default function NotAuthorized() {
  return (
    <div className="grid place-items-center py-20 text-center">
      <span className="bg-danger-50 grid h-16 w-16 place-items-center rounded-full text-danger"><ShieldAlert size={30} /></span>
      <div className="mt-4 text-6xl font-black text-danger">403</div>
      <h1 className="mt-2 text-2xl font-extrabold">Access denied</h1>
      <p className="mt-1 max-w-sm text-sm text-muted">
        You don't have permission to view this page. If you think this is a mistake, sign in with the right account or contact support.
      </p>
      <div className="mt-6 flex gap-2">
        <Link href="/" className="btn btn-primary">Go home</Link>
        <Link href="/help" className="btn btn-outline">Contact support</Link>
      </div>
    </div>
  );
}
