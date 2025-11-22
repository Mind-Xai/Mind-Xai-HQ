# Mind-Xai Website

This directory contains the Mind-Xai professional website built with modern web technologies.

## 🚀 Features

- **Modern UI/UX**: Built with Tailwind CSS for responsive, beautiful design
- **Multi-language Support**: English, Spanish, French, German, and Chinese
- **Interactive Elements**: Smooth animations, scroll effects, and dynamic content
- **Global Dashboard**: Real-time server statistics monitoring
- **Dark/Light Mode**: Automatic theme switching with user preference
- **Mobile Optimized**: Fully responsive design for all devices
- **SEO Friendly**: Optimized meta tags and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 📁 Structure

```
docs/
├── index.html          # Main HTML file
├── css/
│   ├── input.css       # Tailwind CSS source
│   └── output.css      # Compiled CSS (generated)
├── js/
│   ├── i18n.js         # Internationalization
│   └── main.js         # Main JavaScript functionality
├── images/             # Images and assets
└── assets/             # Additional assets
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Build CSS:
```bash
npm run build
```

3. Development mode (watch for changes):
```bash
npm run dev
```

4. Serve locally:
```bash
npm run serve
```

Then open http://localhost:8000 in your browser.

## 🌐 Multi-Language Support

The website supports 5 languages:
- 🇬🇧 English (default)
- 🇪🇸 Spanish
- 🇫🇷 French
- 🇩🇪 German
- 🇨🇳 Chinese

Language preferences are saved in localStorage and persist across sessions.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Content

All text content is in `docs/js/i18n.js` for easy translation updates.

## 📦 Deployment

The website is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

1. Build the CSS:
```bash
npm run build
```

2. Push to main branch - GitHub Actions will handle the rest.

## 🔧 Technologies

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Vanilla JS for interactivity
- **GitHub Pages**: Hosting
- **GitHub Actions**: CI/CD automation

## 📊 Performance

- Optimized for Core Web Vitals
- Lazy loading for images
- Minified CSS and JS
- CDN-ready (Cloudflare integration recommended)

## 🔒 Security

- Content Security Policy ready
- No external dependencies in production
- Secure form handling guidelines

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 License

© 2025 Mind-Xai Systems. All Rights Reserved.
