# Deployment Configuration Guide

This guide explains how to fix the "Page Not Found" issue when deploying your React SPA.

## The Problem

When you deploy a Single Page Application (SPA) with client-side routing, direct navigation to routes like `/contact` or `/about` will fail because the server tries to find a file at that path, which doesn't exist. All routes should serve `index.html` and let React Router handle the routing.

## Solution by Hosting Platform

### Vercel
✅ **Already configured!** The `vercel.json` file in the root directory will automatically handle all routes.

**Deploy:**
```bash
npm run build
vercel deploy
```

### Netlify
✅ **Already configured!** The `public/_redirects` file will be automatically included in your build.

**Deploy:**
1. Build your project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. The `_redirects` file will automatically redirect all routes to `index.html`

### Apache Server
✅ **Already configured!** Copy the `.htaccess` file to your server's root directory (same location as `index.html`).

**Steps:**
1. Build your project: `npm run build`
2. Upload the contents of the `dist` folder to your Apache server
3. Make sure `.htaccess` is in the root directory (where `index.html` is)
4. Ensure `mod_rewrite` is enabled on your Apache server

### Nginx Server
✅ **Configuration example provided!** Use `nginx.conf.example` as a reference.

**Steps:**
1. Build your project: `npm run build`
2. Copy the contents of `dist` to `/usr/share/nginx/html` (or your web root)
3. Update `nginx.conf.example` with your domain name
4. Copy it to your Nginx configuration directory (usually `/etc/nginx/sites-available/`)
5. Enable the site and restart Nginx

### GitHub Pages
For GitHub Pages, you need to set the base path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/', // Add this line
  // ... rest of config
})
```

Then create a `404.html` file in the `public` folder that redirects to `index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace('/your-repo-name/');
    </script>
  </head>
  <body></body>
</html>
```

### Other Static Hosting Services
Most static hosting services support one of the above methods. Check their documentation for:
- URL rewriting rules
- Redirect configuration
- SPA support settings

## Testing Locally

After building, test your deployment locally:

```bash
npm run build
npm run preview
```

Then try navigating directly to routes like `http://localhost:4173/contact` to verify they work.

## Troubleshooting

1. **Routes still not working after deployment:**
   - Verify the configuration file is in the correct location
   - Check that the file was included in your build output
   - Clear your browser cache and try again

2. **Netlify:**
   - Ensure `_redirects` is in the `public` folder (it will be copied to `dist` during build)
   - Check Netlify's deploy logs for any errors

3. **Apache:**
   - Verify `mod_rewrite` is enabled: `a2enmod rewrite`
   - Check Apache error logs if issues persist

4. **Vercel:**
   - The `vercel.json` should be in the root of your project
   - Check Vercel's deployment logs

