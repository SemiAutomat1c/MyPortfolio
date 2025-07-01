# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase your skills, projects, and professional experience. Inspired by clean, minimalist designs like [Jakub Žitník's portfolio](https://jzitnik.dev/en/).

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Sections for About, Skills, Projects, and Contact
- Project filtering by category
- Contact form with validation
- Customizable color scheme and styling

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone this repository or download the files
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update your personal information in the following files:

- `src/components/Hero.tsx`: Update your name, location, and social media links
- `src/components/About.tsx`: Update your bio and work experience
- `src/components/Skills.tsx`: Update your frontend and backend skills
- `src/components/Projects.tsx`: Update your project information
- `src/components/Contact.tsx`: Update your contact information
- `src/components/Footer.tsx`: Update your name and social media links

### Images

Replace the placeholder images with your own:

1. Add your profile picture to `public/images/profile.jpg`
2. Add project images to `public/images/` and update the paths in `src/components/Projects.tsx`

### Colors and Styling

Customize the color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#3498db', // Change this to your preferred primary color
      secondary: '#6c757d', // Change this to your preferred secondary color
      dark: '#1a1a1a',
      light: '#f8f9fa',
    },
  },
},
```

## Deployment

This portfolio can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Vercel will automatically detect Next.js and configure the build settings

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Framer Motion](https://www.framer.com/motion/)
- [Jakub Žitník's portfolio](https://jzitnik.dev/en/) for design inspiration 