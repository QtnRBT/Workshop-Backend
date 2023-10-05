import express from "express";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

// this is the way to import the Category type from the Prisma schema
import type { Category } from "@prisma/client";

const prisma = new PrismaClient();

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const { name } = req.body;
  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  return res.json(category);
});

router.get("/", async (req: Request, res: Response) => {
  const categories = await prisma.category.findMany();
  return res.json(categories);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  return res.json(category);
});

router.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const category = await prisma.category.update({
    where: {
      id: id,
    },
    data: {
      name,
    },
  });
  return res.json(category);
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await prisma.category.delete({
    where: {
      id: id,
    },
  });
  return res.json(category);
});

export default router;
