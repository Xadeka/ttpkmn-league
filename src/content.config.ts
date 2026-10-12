import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "*.json" }),
  schema: () =>
    z.object({
      name: z.string(),
      type: z.string(),
      date: z.string(),
      decklists: z.array(
        z.object({
          placement: z.number().positive(),
          playerName: z.string(),
          deckName: z.string(),
        }),
      ),
    }),
});

export const collections = { events };
