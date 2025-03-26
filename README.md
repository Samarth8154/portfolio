# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, TailwindCSS, and Framer Motion. Inspired by the Cursor homepage design.

## Features

- 🎨 Modern and clean design with gradient effects
- ✨ Smooth animations and transitions
- 📱 Fully responsive layout
- 🎯 Optimized performance
- 🌙 Dark theme optimized
- 🔍 SEO friendly

## Tech Stack

- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- React Icons
- React Scroll
- Hero Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

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

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deployment

### GitHub Pages

1. Install the gh-pages package:
```bash
npm install gh-pages --save-dev
```

2. Add these scripts to your package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

## Custom Domain Setup

### GitHub Pages

1. Add a CNAME file in the public folder with your domain
2. Configure your domain's DNS settings:
   - Add an A record pointing to GitHub Pages IPs
   - Add a CNAME record pointing to your GitHub Pages URL

### Vercel/Netlify

1. Add your custom domain in the project settings
2. Follow the provided DNS configuration instructions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
