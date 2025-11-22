# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in the Mind-Xai website, please report it to us privately. We take all security reports seriously.

### How to Report

1. **Email**: Send details to security@mind-xai.com (if configured)
2. **GitHub**: Use GitHub's private vulnerability reporting feature
3. **Include**: 
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- **Initial Response**: Within 48 hours
- **Status Updates**: Every 7 days until resolved
- **Fix Timeline**: Critical issues within 7 days, others within 30 days

## Security Best Practices

### For Contributors

1. **Dependencies**: Always run `npm audit` before submitting PRs
2. **Secrets**: Never commit API keys, tokens, or credentials
3. **Validation**: Sanitize all user inputs
4. **HTTPS**: Always use HTTPS in production
5. **Updates**: Keep dependencies up to date

### For Deployment

1. **GitHub Pages**: Automatically uses HTTPS
2. **CSP Headers**: Configure Content Security Policy (see below)
3. **Cloudflare**: Use Cloudflare for additional DDoS protection
4. **Monitoring**: Set up security monitoring and alerts

## Content Security Policy

Add these headers when deploying to custom servers:

```
Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
  font-src 'self' https://fonts.gstatic.com; 
  img-src 'self' data: https:; 
  connect-src 'self';
```

## Known Limitations

- Forms currently use client-side validation only
- Mock data for server statistics (no backend exposure)
- Contact form needs backend integration for production use

## Security Measures Implemented

✅ **Client-Side**:
- Input validation on contact form
- XSS prevention through proper escaping
- CSRF protection not needed (no state-changing operations)
- localStorage usage for non-sensitive data only

✅ **Build Process**:
- No secrets in source code
- Automated dependency scanning via GitHub
- Minified assets to reduce attack surface

✅ **Best Practices**:
- HTTPS only in production
- No external script dependencies
- Service Worker for offline functionality
- Secure cookies settings (when applicable)

## Updates

This security policy is reviewed quarterly. Last review: 2025-11-22

---

© 2025 Mind-Xai Systems. All Rights Reserved.
