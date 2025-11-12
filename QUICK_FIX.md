# Quick Fix Guide for "File Not Found" Error

## Your Problem
When users refresh pages or click on research links (SURASOFT, AI Proctoring, Askari LLM), they get "File not found" errors.

## Solution
Your domain `antuminintelligence.co.tz` needs server configuration to handle client-side routing.

## Step-by-Step Fix

### Step 1: Rebuild Your Project
```bash
npm run build
```

### Step 2: Check Your Build Output
After building, verify that `.htaccess` is in your `dist` folder:
```bash
ls dist/.htaccess
```
If it's there, you're good! If not, the file is in `public/.htaccess` and should be copied automatically.

### Step 3: Upload to Your Server
Upload **ALL contents** of the `dist` folder to your web server, including:
- `index.html`
- `.htaccess` ← **This is critical!**
- `assets/` folder
- All other files

### Step 4: Verify Apache Configuration

**If you're using Apache** (most common for `.co.tz` domains):

1. **Enable mod_rewrite:**
   ```bash
   sudo a2enmod rewrite
   sudo systemctl restart apache2
   ```

2. **Check your Apache virtual host configuration:**
   Edit your Apache config file (usually in `/etc/apache2/sites-available/`):
   ```apache
   <Directory /var/www/html>
       AllowOverride All
       Require all granted
   </Directory>
   ```
   Replace `/var/www/html` with your actual web root directory.

3. **Restart Apache:**
   ```bash
   sudo systemctl restart apache2
   ```

### Step 5: Test
1. Clear your browser cache
2. Try visiting: `https://antuminintelligence.co.tz/research`
3. Try clicking on a research item like SURASOFT
4. Try refreshing any page

## If You're Using Nginx Instead

If your server uses Nginx, you need to configure it differently. See `nginx.conf.example` and update your Nginx configuration to include:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Then restart Nginx:
```bash
sudo systemctl restart nginx
```

## Still Not Working?

1. **Check file permissions:**
   ```bash
   chmod 644 .htaccess
   chmod 755 dist/
   ```

2. **Check Apache error logs:**
   ```bash
   sudo tail -f /var/log/apache2/error.log
   ```

3. **Verify .htaccess is being read:**
   - Add a test line to `.htaccess` that should cause an error
   - If Apache doesn't show an error, `.htaccess` isn't being read
   - Check that `AllowOverride All` is set in your Apache config

4. **Contact your hosting provider** if you don't have server access

## What These Files Do

- **`.htaccess`** (Apache): Tells Apache to serve `index.html` for all routes
- **`_redirects`** (Netlify): Same thing but for Netlify hosting
- **`vercel.json`** (Vercel): Same thing but for Vercel hosting

All of these ensure that when someone visits `/research/surasoft` directly, the server serves `index.html` instead of looking for a file that doesn't exist.

