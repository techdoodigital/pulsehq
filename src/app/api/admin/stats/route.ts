import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

export async function GET() {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [totalUsers, totalTickets, openTickets, newsletterSubscribers, recentTickets, recentUsers] =
    await Promise.all([
      db.user.count(),
      db.supportTicket.count(),
      db.supportTicket.count({ where: { status: "open" } }),
      db.newsletterSubscriber.count(),
      db.supportTicket.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true, email: true } } },
      }),
      db.user.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        select: { id: true, name: true, email: true, role: true, createdAt: true },
      }),
    ]);

  return NextResponse.json({
    totalUsers,
    totalTickets,
    openTickets,
    newsletterSubscribers,
    recentTickets,
    recentUsers,
  });
}
