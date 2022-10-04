// src/pages/api/examples.ts
import { prisma } from "@/server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

const topics = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await prisma.example.findMany();
  res.status(200).json(examples);
};

export default topics;
