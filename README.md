# Sound Sorcery

An astro website for Sound Sorcery which is a bi-monthly jam for women & gender diverse baddies in Gadigal Country

## Technologies

This website is built with:

- [Astro](https://astro.build/) - A modern static site builder
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Sanity](https://www.sanity.io/) - Headless CMS for content management

## Prerequisites

- Node.js (v22.x or higher)
- npm or yarn
- Sanity account

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/soundsorcerydev/website.git
   cd website
   ```

2. Install Dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up Environment Variables
- Create a ```.env``` file in the root directory
- Add the following variables:
   ```sh
   PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   PUBLIC_SANITY_DATASET=production
   ```

## Development

   ```sh
   npm run dev
   # or
   yarn dev
   ```
   Your site should now be running at ```http://localhost:4321```

## Content management (Sanity Studio)

    Sanity Studio can be accessed at ```http://localhost:4321/admin```

## Build for production

   ```sh
   npm run build
   # or
   yarn build
   ```

## Project Structure

Inside of the Astro project, you'll see the following folders and files:

```text
/
├── astro.config.mjs      # Astro configuration
├── public/               # Static assets
├── src/
│   ├── assets/           # Images used
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── lib/              # Utility functions
│   ├── pages/            # Astro pages
│   ├── sanity/           # Sanity Schema
│   └── styles/           # Global styles
├── sanity.config.ts      # Sanity configuration
└── tailwind.config.cjs   # Tailwind configuration
└── tsconfig.json         # Typescript configuration
```

## License

MIT License

Copyright (c) [2025] [Ash Sahu]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.