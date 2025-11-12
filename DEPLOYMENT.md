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
✅ **Already configured!** The `.htaccess` file is in the `public` folder and will be automatically copied to `dist` during build.

**Steps:**
1. Build your project: `npm run build`
2. Upload the **entire contents** of the `dist` folder to your Apache server's web root directory
3. The `.htaccess` file will be in the same directory as `index.html` (this is correct!)
4. Ensure `mod_rewrite` is enabled on your Apache server:
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```
5. Make sure your Apache virtual host allows `.htaccess` overrides:
   ```apache
   <Directory /var/www/html>
       AllowOverride All
   </Directory>
   ```

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
   - **For Apache:** Verify `.htaccess` is in the `dist` folder after build and uploaded to your server
   - **For Netlify:** Check that `_redirects` is in the `dist` folder (it should be automatically)
   - **For Vercel:** Verify `vercel.json` is in your project root
   - Check that the file was included in your build output
   - Clear your browser cache and try again
   - Check server error logs for any configuration issues

2. **Apache-specific issues:**
   - Ensure `mod_rewrite` is enabled: `sudo a2enmod rewrite && sudo systemctl restart apache2`
   - Check that `.htaccess` file permissions allow reading: `chmod 644 .htaccess`
   - Verify your Apache virtual host allows `.htaccess` overrides with `AllowOverride All`
   - Check Apache error logs: `sudo tail -f /var/log/apache2/error.log`

3. **Netlify:**
   - Ensure `_redirects` is in the `public` folder (it will be copied to `dist` during build)
   - Check Netlify's deploy logs for any errors

4. **Vercel:**
   - The `vercel.json` should be in the root of your project
   - Check Vercel's deployment logs

