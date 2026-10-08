import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "*.json" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      type: z.string(),
      eventDate: z.string(),
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
