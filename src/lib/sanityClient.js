import { createClient } from "@sanity/client";
import dotenv from 'dotenv';

dotenv.config();

export const sanityClient = createClient({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: false,
});