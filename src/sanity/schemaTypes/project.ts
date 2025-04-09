export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string',
            description: 'Name of the project category that will appear in the navbar',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            description: 'Used for the URL',
        },
        {
            name: 'showInNavbar',
            title: 'Show in Navbar',
            type: 'boolean',
            description: 'Should this gallery appear in the navbar?',
            initialValue: true,
        },
        {
            name: 'navbarOrder',
            title: 'Navbar Order',
            type: 'number',
            description: 'Position in the navbar menu (lower numbers appear first)',
            hidden: ({ document }: { document: { showInNavbar?: boolean } }) => !document?.showInNavbar,
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short description of the gallery',
        },
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Featured image for this gallery (optional)',
        },
        {
            name: 'sections',
            title: 'Gallery Sections',
            type: 'array',
            of: [{ type: 'gallerySection' }],
            description: 'Add sections like "Jazz Sirens", "Brass Night", etc.',
        },
    ],
}