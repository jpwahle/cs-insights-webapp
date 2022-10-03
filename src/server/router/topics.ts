import { z } from "zod";
import { env } from "../../env/server.mjs";
import { createRouter } from "./context";

const predictionServiceUrl = env.PREDICTION_SERVICE_URL;

export const topicRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.example.findMany();
    },
  })
  .query("getStatus", {
    async resolve() {
      const url = `${predictionServiceUrl}/api/v0/status`;
      const response = await fetch(url);
      return response.json();
    },
  });
