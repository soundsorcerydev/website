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
            description: 'Optional description for this section',
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
    ],
}