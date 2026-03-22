import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { notionLoader } from '@luanroger/notion-astro-loader';
import {
  notionPageSchema,
  transformedPropertySchema,
} from "notion-astro-loader/schemas";

const notionContent = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    dataSourceId: import.meta.env.NOTION_DATABASE_ID,
    imageSavePath: 'assets/images/projects',
  }),
  schema: notionPageSchema({
    properties: z.object({
      project: transformedPropertySchema.title,
      client: transformedPropertySchema.rich_text,
      tags: transformedPropertySchema.rich_text,
      year: transformedPropertySchema.rich_text,
    }),
  }),
});

export const collections = { notionContent };