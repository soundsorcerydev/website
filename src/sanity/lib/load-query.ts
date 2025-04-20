import { type QueryParams } from "@sanity/client";
import { getClient } from "./sanityClient";
import dotenv from 'dotenv';
dotenv.config();

const visualEditingEnabled = process.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === "true";
const token = process.env.PUBLIC_SANITY_API_READ_TOKEN;

export async function loadQuery<QueryResponse>({
    query,
    params,
    preview = visualEditingEnabled,
}: {
    query: string;
    params?: QueryParams;
    preview?: boolean;
}) {
    if (preview && !token) {
        throw new Error(
            "The `SANITY_API_READ_TOKEN` environment variable is required for preview mode."
        );
    }

    const client = getClient(preview);
    const perspective = preview ? "previewDrafts" : "published";

    // Use the appropriate client based on preview mode
    const { result, resultSourceMap } = await client.fetch(
        query,
        params ?? {},
        {
            filterResponse: false,
            perspective,
            resultSourceMap: preview ? "withKeyArraySelector" : false,
            stega: preview,
        }
    );

    return {
        data: result,
        sourceMap: resultSourceMap,
        perspective,
    };
}