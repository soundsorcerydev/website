import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        featuredImage: z.string().optional(),
        gallery: z.array(
            z.object({
                image: z.string()
            })
        ).optional(),
    })
});

export const collections = {
    'projects': projectsCollection,
};