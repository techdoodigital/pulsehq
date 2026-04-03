import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const status = searchParams.get("status");

  const tickets = await db.supportTicket.findMany({
    where: status ? { status } : undefined,
    include: { user: { select: { name: true, email: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(tickets);
}

export async function PATCH(req: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status, response } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Ticket ID is required" }, { status: 400 });
  }

  const data: Record<string, string> = {};
  if (status) data.status = status;
  if (response) data.response = response;

  const ticket = await db.supportTicket.update({
    where: { id },
    data,
  });

  return NextResponse.json(ticket);
}
