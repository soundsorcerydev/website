import { createClient } from "@sanity/client";
import dotenv from 'dotenv';
dotenv.config();

export const sanityClient = createClient({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2025-04-04',
    useCdn: false,

    token: process.env.PUBLIC_SANITY_API_READ_TOKEN,
    perspective: "previewDrafts",
    stega: {
        enabled: true,
        studioUrl: '/admin',
    },
    eventSourceOptions: {
        withCredentials: true,
    }
});

// Preview client with token
export const previewClient = createClient({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.PUBLIC_SANITY_DATASET,
    apiVersion: '2025-04-04',
    useCdn: false,
    token: process.env.PUBLIC_SANITY_API_READ_TOKEN,
    perspective: "previewDrafts",
    stega: {
        enabled: true,
        studioUrl: '/studio',
    },
    eventSourceOptions: {
        withCredentials: true,
    }
});

// Helper function to get the right client
export function getClient(usePreview = false) {
    return usePreview ? previewClient : sanityClient;
}