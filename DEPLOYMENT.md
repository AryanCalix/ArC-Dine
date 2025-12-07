# 🚀 Deployment Guide

Complete guide to deploying your restaurant menu website to production.

---

## Quick Deploy to Vercel (Recommended - FREE)

### Why Vercel?
- ✅ Free for personal projects
- ✅ Automatic deployments from Git
- ✅ Built for Next.js
- ✅ Global CDN
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Zero configuration needed

### Deployment Steps:

#### 1. Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Restaurant Menu Website"

# Create repository on GitHub (github.com)
# Then connect and push:
git remote add origin https://github.com/yourusername/restaurant-menu.git
git branch -M main
git push -u origin main
```

#### 2. Deploy to Vercel

**Option A: Using Vercel Website**
1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live! 🎉

**Option B: Using Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts
```

#### 3. Access Your Website
- Your site will be live at: `your-project.vercel.app`
- Automatic HTTPS enabled
- Future pushes auto-deploy!

---

## Deploy to Netlify (Alternative - FREE)

### Steps:

#### 1. Build the Project
```bash
npm run build
```

#### 2. Deploy Options

**Option A: Netlify Drop (Easiest)**
1. Go to https://app.netlify.com/drop
2. Drag and drop your `.next` folder
3. Done!

**Option B: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

**Option C: Connect Git Repository**
1. Go to https://app.netlify.com
2. Click "Add new site" > "Import from Git"
3. Connect GitHub
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy!

---

## Deploy to AWS (Advanced)

### Using AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Using AWS EC2

1. **Create EC2 Instance**
   - Launch Ubuntu 20.04 instance
   - Configure security group (ports 22, 80, 443)

2. **Connect via SSH**
   ```bash
   ssh -i your-key.pem ubuntu@your-ec2-ip
   ```

3. **Install Dependencies**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install Node.js
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install nginx
   sudo apt install nginx -y
   
   # Install PM2
   sudo npm install -g pm2
   ```

4. **Upload Project**
   ```bash
   # From local machine
   scp -i your-key.pem -r ./* ubuntu@your-ec2-ip:/home/ubuntu/restaurant-menu
   ```

5. **Build and Run**
   ```bash
   cd /home/ubuntu/restaurant-menu
   npm install
   npm run build
   
   # Start with PM2
   pm2 start npm --name "restaurant-menu" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/restaurant-menu
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
   
   Enable:
   ```bash
   sudo ln -s /etc/nginx/sites-available/restaurant-menu /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## Deploy to DigitalOcean (Medium Difficulty)

### Using App Platform

1. **Create Account** at digitalocean.com
2. **Create App**
   - Choose GitHub repository
   - Select repository
   - Configure build:
     - Build command: `npm run build`
     - Run command: `npm start`
3. **Deploy**

### Using Droplet

Similar to AWS EC2 steps above:
1. Create Ubuntu droplet
2. SSH into droplet
3. Install Node.js, nginx, PM2
4. Upload and build project
5. Configure nginx
6. Set up firewall

---

## Deploy to Heroku

```bash
# Install Heroku CLI
# Download from: https://devcenter.heroku.com/articles/heroku-cli

# Login
heroku login

# Create app
heroku create your-restaurant-menu

# Deploy
git push heroku main

# Open app
heroku open
```

**Create Procfile:**
```
web: npm start
```

**Package.json scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT"
  }
}
```

---

## Deploy to Railway

1. Go to https://railway.app
2. Sign in with GitHub
3. New Project > Deploy from GitHub
4. Select repository
5. Railway auto-detects Next.js
6. Deploy!

---

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as shown
5. Wait for propagation (5-10 minutes)

### Netlify
1. Site settings > Domain management
2. Add custom domain
3. Follow DNS instructions
4. Enable HTTPS

### General DNS Settings
Add these records to your domain:

**For root domain (example.com):**
```
Type: A
Name: @
Value: [provided IP]
```

**For www (www.example.com):**
```
Type: CNAME
Name: www
Value: [provided domain]
```

---

## Environment Variables for Production

### On Vercel/Netlify:
1. Go to project settings
2. Find "Environment Variables"
3. Add:
   ```
   NEXT_PUBLIC_APP_NAME=Your Restaurant
   NEXT_PUBLIC_APP_URL=https://yoursite.com
   NODE_ENV=production
   ```

---

## Performance Optimization for Production

### 1. Build Optimizations

**next.config.js:**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: [],
    formats: ['image/webp'],
  },
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### 2. Enable Compression
Most platforms enable this automatically, but verify:
- Gzip compression
- Brotli compression

### 3. CDN Configuration
- Use Vercel/Netlify built-in CDN
- Or configure Cloudflare CDN

---

## Monitoring and Analytics

### Add Google Analytics (Optional)

**Install:**
```bash
npm install @next/third-parties
```

**Add to layout.tsx:**
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Monitor Performance
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)

---

## SSL/HTTPS

All recommended platforms provide free SSL:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ Railway: Automatic

For self-hosted (AWS/DigitalOcean):
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal
sudo certbot renew --dry-run
```

---

## Backup Strategy

### Database Backup (when you add backend)
```bash
# Automated backups
# Set up daily backups of localStorage data
# Export to JSON files
```

### Code Backup
- Git repository (GitHub/GitLab)
- Automatic with version control

---

## Deployment Checklist

**Pre-Deployment:**
- [ ] All features tested locally
- [ ] No console errors
- [ ] Build succeeds (`npm run build`)
- [ ] Environment variables configured
- [ ] Custom domain purchased (optional)
- [ ] Analytics set up (optional)

**Deployment:**
- [ ] Code pushed to Git
- [ ] Platform connected to repository
- [ ] Build and deploy successful
- [ ] Website accessible via URL
- [ ] HTTPS enabled
- [ ] Custom domain connected (if applicable)

**Post-Deployment:**
- [ ] Test all features in production
- [ ] Check mobile responsiveness
- [ ] Verify 3D animations work
- [ ] Test cart and checkout
- [ ] Check order history
- [ ] Monitor performance
- [ ] Set up uptime monitoring

---

## Continuous Deployment

### Automatic Deployment on Push

**Vercel/Netlify:**
- Automatic by default
- Every push to `main` triggers deployment
- Preview deployments for pull requests

**GitHub Actions (Self-hosted):**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy
        run: |
          # Your deployment script here
          echo "Deploying to production..."
```

---

## Rollback Strategy

### Vercel/Netlify:
- Go to deployments
- Select previous deployment
- Click "Promote to Production"

### Git-based:
```bash
# Revert to previous commit
git revert HEAD
git push origin main
```

---

## Troubleshooting Deployment

### Issue: Build Fails
**Solution:**
```bash
# Test build locally
npm run build

# Check build logs on platform
# Fix errors shown in logs
```

### Issue: 404 on Routes
**Solution:**
- Ensure output is set correctly
- Check platform routing configuration

### Issue: Environment Variables Not Working
**Solution:**
- Prefix with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

### Issue: Images Not Loading
**Solution:**
- Check image paths
- Verify public folder structure
- Configure image domains in next.config.js

---

## Cost Estimates

### Free Tier (Perfect for Starting)
- **Vercel**: Free for personal
- **Netlify**: Free (100GB bandwidth/month)
- **Railway**: $5 credit/month free

### Paid Options
- **Vercel Pro**: $20/month
- **Netlify Pro**: $19/month
- **AWS**: Pay as you go (~$5-50/month)
- **DigitalOcean**: $5-20/month

---

## Production URLs Example

After deployment:
- Vercel: `https://restaurant-menu.vercel.app`
- Netlify: `https://restaurant-menu.netlify.app`
- Custom: `https://yourrestaurant.com`

---

**Ready to deploy! Choose your platform and go live! 🚀**
