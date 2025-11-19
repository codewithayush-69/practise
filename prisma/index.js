import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// CREATE - Insert
const create = async () => {
  const user = await prisma.user.create({
    data: { name: "John", email: "john@test.com" },
  });
  console.log("Created:", user);
};

// READ - Get all
const read = async () => {
  const users = await prisma.user.findMany();
  console.log("All users:", users);
};

// UPDATE - Modify
const update = async () => {
  const user = await prisma.user.update({
    where: { id: 1 },
    data: { name: "John Updated" },
  });
  console.log("Updated:", user);
};

// DELETE - Remove
const deleteUser = async () => {
  try {
    const user = await prisma.user.delete({
      where: { id: 3 },
    });
    console.log("Deleted:", user);
  } catch (error) {
    console.error(error)
  }
};

const main = async () => {
  // await read();
  // await create();
  // await update();
  await deleteUser();
};

main().finally(() => prisma.$disconnect());
