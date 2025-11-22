# Contributing to Mind-Xai Website

Thank you for your interest in contributing to the Mind-Xai website! We welcome contributions from the community.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Mind-Xai-HQ.git
   cd Mind-Xai-HQ
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Workflow

### Building the Website

```bash
# Development mode (watch for changes)
npm run dev

# Production build
npm run build

# Serve locally
npm run serve
```

### Making Changes

1. **Code Style**:
   - Follow existing code patterns
   - Use Tailwind CSS utility classes
   - Keep JavaScript vanilla (no frameworks)
   - Maintain semantic HTML structure

2. **Testing**:
   - Test on multiple browsers (Chrome, Firefox, Safari, Edge)
   - Test responsive design (mobile, tablet, desktop)
   - Test dark/light mode
   - Test all language translations
   - Verify accessibility (keyboard navigation, screen readers)

3. **Commit Messages**:
   ```
   feat: Add new feature
   fix: Fix bug
   docs: Update documentation
   style: Format code
   refactor: Refactor code
   test: Add tests
   chore: Update dependencies
   ```

## 🌍 Adding Translations

To add a new language:

1. Edit `docs/js/i18n.js`
2. Add a new language object following the existing pattern
3. Add the language option to the dropdown in `docs/index.html`
4. Test all sections with the new translation

Example:
```javascript
pt: {
  nav: {
    home: "Início",
    overview: "Visão Geral",
    // ... more translations
  }
}
```

## 🎨 Design Guidelines

- **Colors**: Use the defined Tailwind color palette (primary, accent)
- **Spacing**: Follow Tailwind's spacing scale
- **Typography**: Use Inter font family
- **Icons**: Use emoji or SVG icons
- **Animations**: Keep them subtle and purposeful

## 📝 Pull Request Process

1. **Update documentation** if needed
2. **Test thoroughly**:
   - All pages load correctly
   - No console errors
   - Responsive design works
   - Dark mode works
   - Translations work
3. **Build CSS**: Run `npm run build` before committing
4. **Create PR** with:
   - Clear title and description
   - Screenshots of visual changes
   - List of testing performed

## 🐛 Bug Reports

When reporting bugs, please include:

- **Description**: What happened?
- **Expected**: What should happen?
- **Steps**: How to reproduce?
- **Environment**: Browser, OS, screen size
- **Screenshots**: If applicable

## 💡 Feature Requests

We welcome feature suggestions! Please:

- **Check existing issues** first
- **Describe the feature** clearly
- **Explain the use case**
- **Consider implementation** complexity

## 🔒 Security

Never commit:
- API keys or secrets
- Personal information
- Credentials

See [SECURITY.md](SECURITY.md) for security policy.

## ✅ Code Review

All contributions are reviewed for:

- **Code quality**: Clean, readable, maintainable
- **Performance**: No unnecessary computations
- **Accessibility**: WCAG compliant
- **Security**: No vulnerabilities
- **Documentation**: Changes are documented

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Progressive Web Apps](https://web.dev/progressive-web-apps/)

## 🙏 Thank You

Every contribution, no matter how small, is valued and appreciated!

---

© 2025 Mind-Xai Systems. All Rights Reserved.
