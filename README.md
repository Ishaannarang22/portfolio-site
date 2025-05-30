# Portfolio Website

A minimalist, elegant portfolio website built with Next.js featuring a soft color palette and fully responsive design. The site showcases projects, blog posts, and contact information with subtle Three.js interactive elements.

## Features

- **Minimalist Design**: Clean, modern aesthetic with a soft color palette
- **Fully Responsive**: Optimized for both desktop and mobile devices
- **Content Management**: Easy-to-edit content system using JSON files
- **Interactive Elements**: Subtle Three.js floating particles animation
- **Dynamic Project Pages**: Individual pages for each project
- **Blog Integration**: Support for external blog posts
- **Contact Section**: Direct email and social media links

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Content Management

### Editing Your Information

All website content is managed through the `data/content.json` file. This makes it easy to update your portfolio without touching any code.

#### Personal Information

Update the `personal` section in `data/content.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "bio": "Your bio description...",
    "location": "Your Location",
    "year": "Your Academic Year",
    "university": "Your University",
    "major": "Your Major",
    "minor": "Your Minor"
  }
}
```

#### Contact Information

Update the `contact` section:

```json
{
  "contact": {
    "email": "your.email@example.com",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername",
    "instagram": "https://instagram.com/yourhandle"
  }
}
```

### Adding Projects

To add a new project, add an entry to the `projects` array in `data/content.json`:

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "name": "Project Name",
      "description": "Brief project description for the main page",
      "githubLink": "https://github.com/yourusername/project",
      "devpostLink": "https://devpost.com/software/project-name",
      "imageUrl": "/path/to/project/image.jpg",
      "detailsText": "Detailed description for the project page"
    }
  ]
}
```

**Required fields:**
- `id`: Unique identifier (used in URLs, use lowercase with hyphens)
- `name`: Project name
- `description`: Brief description shown on main page
- `githubLink`: Link to GitHub repository
- `detailsText`: Detailed description for project page

**Optional fields:**
- `devpostLink`: Link to Devpost submission
- `imageUrl`: Path to project image

### Adding Blog Posts

To add blog posts, update the `blog` array in `data/content.json`:

```json
{
  "blog": [
    {
      "title": "Your Blog Post Title",
      "url": "https://medium.com/@yourhandle/your-post-url"
    }
  ]
}
```

### Removing Content

To remove a project or blog post, simply delete its entry from the respective array in `data/content.json`.

## Project Structure

```
portfolio-site/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Home page
│   └── projects/[id]/
│       └── page.tsx        # Dynamic project pages
├── components/
│   ├── Hero.tsx            # Landing section
│   ├── Projects.tsx        # Projects section
│   ├── Blog.tsx           # Blog section
│   ├── Contact.tsx        # Contact section
│   └── FloatingParticles.tsx # Three.js animation
├── data/
│   └── content.json       # All website content
├── lib/
│   └── content.ts         # Content management utilities
└── public/               # Static assets
```

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Animation**: Three.js
- **Typography**: Inter font family
- **TypeScript**: Full type safety

## Customization

### Colors

The website uses a soft slate color palette. You can customize colors by modifying the Tailwind classes in the components or by updating the global CSS.

### Fonts

The site uses the Inter font family. To change fonts, update the font import in `app/globals.css` and modify the font-family declaration.

### Three.js Animation

The floating particles animation can be customized in `components/FloatingParticles.tsx`. You can adjust particle count, colors, movement speed, and other parameters.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment

The site can be deployed on any platform that supports Next.js:

- **Vercel** (recommended): Connect your GitHub repository for automatic deployments
- **Netlify**: Supports Next.js with build settings
- **Other platforms**: Any service supporting Node.js applications

## Contributing

Feel free to submit issues and enhancement requests!
