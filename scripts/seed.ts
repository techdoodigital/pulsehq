import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";
import bcrypt from "bcryptjs";

const adapter = new PrismaLibSql({ url: "file:dev.db" });
const db = new PrismaClient({ adapter });

async function seed() {
  const hash = await bcrypt.hash("admin123", 10);
  await db.user.upsert({
    where: { email: "dev@pulsehq.io" },
    update: { role: "admin" },
    create: { email: "dev@pulsehq.io", name: "Admin", password: hash, role: "admin" },
  });
  console.log("Admin seeded: dev@pulsehq.io / admin123");
}

seed()
  .then(() => db.$disconnect())
  .catch((e: unknown) => {
    console.error(e);
    db.$disconnect();
    process.exit(1);
  });
