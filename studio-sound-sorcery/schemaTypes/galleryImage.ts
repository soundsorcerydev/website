// For individual images with metadata
export default {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'object',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'caption',
            title: 'Caption',
            type: 'string',
        },
        {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            description: 'Important for accessibility and SEO',
        },
    ],
}