# Yudnata Portfolio

A personal portfolio website featuring a retro pixel-art aesthetic, built with modern web technologies. This project showcases my work, skills, and background as a Fullstack Developer.

## Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Custom Pixel Art Assets & React Icons
- **Fonts**: Google Fonts (Press Start 2P, VT323, Silkscreen) loaded via `next/font`
- **Deployment**: Vercel

## Features

- **Pixel Art Theme**: Consistent retro design system with custom interactive elements.
- **Responsive Design**: Fully optimized for desktop and mobile devices.
- **Interactive UI**:
  - Typewriter effect intro dialogs.
  - Project cards with modal details.
  - Custom pixel-styled navigation and buttons.
- **SEO Optimized**:
  - Fully configured Metadata API.
  - Semantic HTML structure (`<figure>`, `<section>`, etc).
  - Dynamic `sitemap.xml` and `robots.txt`.
  - JSON-LD Structured Data for rich search results.
  - Open Graph tags for social media sharing.
- **Performance**:
  - Optimized images with `next/image`.
  - Google Fonts optimization (zero layout shift).
  - Security headers configuration via `vercel.json`.

## Getting Started

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yudnata/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Application routes and page logic (App Router).
- `components/`: Reusable UI components (Layout, SEO, Pixel UI).
- `data/`: Static content data (Projects, Experience, Skills).
- `public/`: Static assets (Images, Icons).
- `styles/`: Global styles and Tailwind configuration.
- `types/`: TypeScript type definitions.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1.Push your code to a Git repository (GitHub/GitLab).
2.Import the project into Vercel.
3.Vercel will automatically detect Next.js and configure the build settings.
4.Your site will be live within minutes.

## License

[MIT](LICENSE)
