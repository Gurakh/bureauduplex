import { defineCollection } from "astro:content";
import { notionLoader } from "notion-astro-loader";

const notionContent = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_DATABASE_ID,
  }),
});

export const collections = { notionContent };