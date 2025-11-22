# Deployment & Optimization Guide

## GitHub Pages Setup

### Initial Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `/docs` folder
   - Save

2. **Configure Custom Domain** (Optional):
   - Add CNAME file in docs/ with your domain
   - Update DNS records:
     ```
     Type: CNAME
     Name: www
     Value: mind-xai.github.io
     ```

3. **Enable HTTPS**:
   - GitHub Pages automatically provides SSL
   - Check "Enforce HTTPS" in settings

## Cloudflare CDN Integration

### Setup Steps

1. **Add Site to Cloudflare**:
   - Sign up at cloudflare.com
   - Add your domain
   - Update nameservers to Cloudflare's

2. **DNS Configuration**:
   ```
   Type: CNAME
   Name: @
   Content: mind-xai.github.io
   Proxy: Enabled (orange cloud)
   ```

3. **Performance Optimizations**:

   **Speed Settings**:
   - Auto Minify: HTML, CSS, JS ✓
   - Brotli Compression: ✓
   - HTTP/2: ✓
   - HTTP/3 (QUIC): ✓
   - 0-RTT Connection Resumption: ✓

   **Caching**:
   - Caching Level: Standard
   - Browser Cache TTL: Respect Existing Headers
   - Always Online: ✓

   **Page Rules**:
   ```
   URL: *mind-xai.com/*
   Settings:
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 month
   - Browser Cache TTL: 4 hours
   ```

4. **Security Settings**:
   - SSL/TLS: Full (Strict)
   - Always Use HTTPS: ✓
   - Automatic HTTPS Rewrites: ✓
   - Minimum TLS Version: 1.2
   - TLS 1.3: ✓

5. **Firewall Rules**:
   - Bot Fight Mode: ✓
   - Security Level: Medium
   - Challenge Passage: 30 minutes

## Performance Optimization

### Image Optimization

1. **Compress Images**:
   - Use WebP format when possible
   - Compress with tools like ImageOptim, TinyPNG
   - Target: < 100KB per image

2. **Implement Lazy Loading**:
   ```html
   <img src="placeholder.jpg" data-src="actual-image.jpg" class="lazy" alt="Description">
   ```

3. **Responsive Images**:
   ```html
   <picture>
     <source srcset="image-small.webp" media="(max-width: 640px)" type="image/webp">
     <source srcset="image-large.webp" media="(min-width: 641px)" type="image/webp">
     <img src="image.jpg" alt="Description">
   </picture>
   ```

### CSS Optimization

- **Build Process**: Already minified via Tailwind
- **Critical CSS**: Consider inlining above-the-fold CSS
- **Purge Unused**: Tailwind automatically removes unused styles

### JavaScript Optimization

- **Minification**: Use terser for production
  ```bash
  npm install -D terser
  terser docs/js/main.js -c -m -o docs/js/main.min.js
  ```

- **Defer Non-Critical JS**:
  ```html
  <script src="main.js" defer></script>
  ```

### Service Worker (PWA)

Create `docs/sw.js`:
```javascript
const CACHE_NAME = 'mind-xai-v1';
const urlsToCache = [
  '/',
  '/css/output.css',
  '/js/main.js',
  '/js/i18n.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

Register in index.html:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

## Monitoring & Analytics

### Grafana Integration (Future)

1. **Setup Metrics Endpoint**:
   - Deploy backend API for metrics
   - Endpoints: `/api/metrics/uptime`, `/api/metrics/requests`, etc.

2. **Grafana Dashboard**:
   ```json
   {
     "dashboard": {
       "title": "Mind-Xai Global Metrics",
       "panels": [
         {
           "title": "Server Uptime",
           "targets": [{"expr": "up{job='mind-xai'}"}]
         }
       ]
     }
   }
   ```

### Prometheus Integration

1. **Metrics Collection**:
   ```yaml
   scrape_configs:
     - job_name: 'mind-xai'
       static_configs:
         - targets: ['api.mind-xai.com:9090']
   ```

2. **Key Metrics**:
   - Request rate
   - Response time
   - Error rate
   - Server uptime
   - Geographic distribution

### Google Analytics (Optional)

Add to `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Testing

### Performance Testing

1. **Lighthouse**:
   ```bash
   npm install -g lighthouse
   lighthouse https://mind-xai.com --view
   ```
   
   Targets:
   - Performance: > 90
   - Accessibility: > 95
   - Best Practices: > 90
   - SEO: > 95

2. **PageSpeed Insights**:
   - https://pagespeed.web.dev/
   - Test both mobile and desktop

3. **WebPageTest**:
   - https://www.webpagetest.org/
   - Test from multiple locations globally

### Accessibility Testing

- **WAVE**: https://wave.webaim.org/
- **axe DevTools**: Browser extension
- **Screen Reader Testing**: Test with NVDA/JAWS

### Cross-Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Backup & Recovery

### Automated Backups

GitHub automatically versions all changes. Additional backup:

```bash
# Clone repository
git clone https://github.com/Mind-Xai/Mind-Xai-HQ.git

# Create backup
tar -czf mind-xai-backup-$(date +%Y%m%d).tar.gz Mind-Xai-HQ/
```

### Disaster Recovery

1. Repository is on GitHub (backed up)
2. DNS on Cloudflare (exportable)
3. Can redeploy to any static host in minutes

## Scalability

### Current Setup
- GitHub Pages: 100GB/month bandwidth
- Cloudflare: Unlimited bandwidth (free tier)

### Migration Options (If Needed)

1. **AWS S3 + CloudFront**:
   - Virtually unlimited scale
   - Pay-per-use pricing
   - Global edge locations

2. **Vercel**:
   - Zero-config deployment
   - Global CDN
   - Automatic HTTPS

3. **Netlify**:
   - Similar to Vercel
   - Advanced form handling
   - Serverless functions

## Maintenance

### Regular Tasks

**Weekly**:
- Check analytics for errors
- Review contact form submissions
- Monitor uptime

**Monthly**:
- Update dependencies: `npm update`
- Review and update content
- Check broken links
- Security audit: `npm audit`

**Quarterly**:
- Performance audit
- Accessibility review
- SEO optimization check
- Update translations

## Troubleshooting

### Common Issues

1. **CSS not updating**:
   ```bash
   npm run build
   git add docs/css/output.css
   git commit -m "Update CSS"
   git push
   ```

2. **GitHub Pages not deploying**:
   - Check Actions tab for errors
   - Verify Pages settings
   - Check CNAME file if using custom domain

3. **Slow loading**:
   - Check Cloudflare cache hit rate
   - Optimize images
   - Review JavaScript size

## Support

For issues or questions:
- GitHub Issues: https://github.com/Mind-Xai/Mind-Xai-HQ/issues
- Email: support@mind-xai.com (configure as needed)

---

Last Updated: 2025-11-22
