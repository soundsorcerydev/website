export default {
    name: 'gallerySection',
    title: 'Gallery Section',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Section Title',
            type: 'string',
            description: 'Subtitle (e.g., "Jazz Sirens")',
        },
        {
            name: 'description',
            title: 'Section Description',
            type: 'text',
            description: 'Optional description',
        },
        {
            name: 'quotes',
            title: 'Section Quotes',
            type: 'text',
            description: 'Quotes from the event',
        },
        {
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text',
                            description: 'Important for accessibility and SEO',
                        }
                    ]
                }
            ],
            options: {
                layout: 'grid'
            }
        },
        {
            name: 'videos',
            title: 'Videos',
            type: 'array',
            description: 'Optional videos for this section',
            of: [
                {
                    type: 'object',
                    title: 'Video',
                    fields: [
                        {
                            name: 'title',
                            title: 'Video Title',
                            type: 'string',
                            description: 'Title of the video',
                        },
                        {
                            name: 'url',
                            title: 'Video URL',
                            type: 'url',
                            description: 'URL to the video (YouTube, Vimeo, etc.)',
                        },
                        {
                            name: 'caption',
                            title: 'Caption',
                            type: 'text',
                            description: 'optional caption',
                        },
                    ]
                }
            ],
            options: {
                layout: 'grid'
            }
        },
    ],
}