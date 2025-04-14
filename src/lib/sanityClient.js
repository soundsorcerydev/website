import { createClient } from "@sanity/client";
import dotenv from 'dotenv';

dotenv.config();

export const sanityClient = createClient({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    apiVersion:'2025-04-04',
    useCdn: false,
});