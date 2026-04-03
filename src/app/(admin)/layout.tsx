import { requireAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import AdminShell from "./admin-shell";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  if (!session) {
    redirect("/dashboard");
  }

  return <AdminShell>{children}</AdminShell>;
}
