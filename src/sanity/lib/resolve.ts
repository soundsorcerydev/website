import { defineLocations } from "sanity/presentation";
import type { PresentationPluginOptions } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
    locations: {
        // Project locations - these are the main documents
        project: defineLocations({
            select: {
                title: "title",
                slug: "slug.current",
                showInNavbar: "showInNavbar",
                // Select sections to help with the presentation tool's understanding
                sections: "sections[]{title}",
            },
            resolve: (doc) => ({
                locations: [
                    {
                        title: doc?.title || "Untitled Project",
                        href: `/projects/${doc?.slug}`,
                        // This creates the main project page link
                    },
                ],
            }),
        }),

        // Gallery section locations - for referencing nested content
        gallerySection: defineLocations({
            select: {
                title: "title",
                // Need to get parent info to build the URL
                parentSlug: "^.slug.current",
                parentTitle: "^.title",
            },
            resolve: (doc, context) => {
                // Get the parent document (project) information
                const parentSlug = doc?.parentSlug;

                if (!parentSlug) {
                    return { locations: [] };
                }

                return {
                    locations: [
                        {
                            title: `${doc?.title || "Untitled Section"} (in ${doc?.parentTitle || "Project"})`,
                            href: `/projects/${parentSlug}#${encodeURIComponent(doc?.title || "")}`,
                            // Optional: create an anchor link to the specific section
                        },
                    ],
                };
            },
        }),
    },
};
