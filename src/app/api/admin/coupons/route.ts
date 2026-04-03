import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin";
import { db } from "@/lib/db";

export async function GET() {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const coupons = await db.couponCode.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(coupons);
}

export async function POST(req: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { code, discount, maxUses, expiresAt } = await req.json();

  if (!code || !discount) {
    return NextResponse.json({ error: "Code and discount are required" }, { status: 400 });
  }

  const coupon = await db.couponCode.create({
    data: {
      code: code.toUpperCase(),
      discount: parseInt(discount),
      maxUses: maxUses ? parseInt(maxUses) : 0,
      expiresAt: expiresAt ? new Date(expiresAt) : null,
    },
  });

  return NextResponse.json(coupon);
}

export async function PATCH(req: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, active } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Coupon ID is required" }, { status: 400 });
  }

  const coupon = await db.couponCode.update({
    where: { id },
    data: { active },
  });

  return NextResponse.json(coupon);
}

export async function DELETE(req: Request) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Coupon ID is required" }, { status: 400 });
  }

  await db.couponCode.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
