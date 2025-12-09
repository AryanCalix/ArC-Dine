# 🚀 Vercel Deployment Guide for ArC Dine

## ✅ Recent Fixes Applied

### Build Error Fix (Completed)
The Vercel build error **"Missing Supabase environment variables"** has been fixed by implementing lazy-loading for the Supabase client. This allows the build to complete successfully even when environment variables aren't set during build time.

**Changes Made:**
- ✅ Lazy-loaded Supabase client initialization
- ✅ Added server-side rendering checks
- ✅ Added error handling for auth initialization
- ✅ Client-side mount tracking to prevent hydration issues

## 📋 Deployment Steps

### Step 1: Ensure Your Code is Pushed to GitHub

```bash
# Check current branch
git branch --show-current
# Should show: backend-testing

# Check status
git status
# Should show: nothing to commit, working tree clean

# View recent commits
git log --oneline -3
```

Current commits on `backend-testing`:
- ✅ Fix Vercel build error by making Supabase client lazy-loaded
- ✅ Add Supabase authentication setup with AuthForm and AuthContext
- ✅ Add acli.exe to gitignore

### Step 2: Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"** or select existing project
3. Import your GitHub repository: `AryanCalix/ArC-Dine`
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Environment Variables in Vercel

**CRITICAL**: You must add your Supabase credentials as environment variables in Vercel!

1. Go to your project in Vercel Dashboard
2. Click **Settings** tab
3. Click **Environment Variables** in the left sidebar
4. Add the following variables:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Production, Preview, Development |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` | Production, Preview, Development |

**Where to get these values:**
1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Open your project
3. Go to **Settings** > **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

5. Click **Save** for each variable

### Step 4: Redeploy After Adding Environment Variables

After adding environment variables:
1. Go to **Deployments** tab
2. Click **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Check **"Use existing Build Cache"** (optional)
5. Click **"Redeploy"**

### Step 5: Configure Supabase for Production

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Open your project
3. Go to **Authentication** > **URL Configuration**
4. Add your Vercel domain to:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: `https://your-app.vercel.app/**`
5. Save changes

**Note**: Replace `your-app` with your actual Vercel app name.

### Step 6: Test Your Deployment

1. Visit your Vercel deployment URL
2. Test the following:
   - ✅ Login form appears
   - ✅ Can create a new account
   - ✅ Can sign in with credentials
   - ✅ Menu displays after login
   - ✅ Cart functionality works
   - ✅ Can place orders
   - ✅ Can view order history
   - ✅ Logout works properly

## 🔧 Troubleshooting

### Build Still Failing?

**Error: "Missing Supabase environment variables"**
- ✅ **Fixed**: This should no longer occur with the lazy-loading implementation
- If still happening, ensure you've pulled the latest changes from `backend-testing`

**Error: "Module not found: @supabase/supabase-js"**
```bash
# Make sure package is in package.json
npm install @supabase/supabase-js --save
git add package.json package-lock.json
git commit -m "Add @supabase/supabase-js dependency"
git push origin backend-testing
```

### Runtime Errors After Deployment

**Error: "Missing Supabase environment variables" at runtime**
- Environment variables not set in Vercel
- Go to Vercel Dashboard → Settings → Environment Variables
- Add both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Redeploy

**Login form not working**
- Check Supabase URL Configuration includes your Vercel domain
- Check browser console for CORS errors
- Verify environment variables are correctly set

**Authentication not persisting**
- Check browser cookies are enabled
- Verify Supabase auth is configured correctly
- Check for console errors

### Deployment is Slow

- Enable Build Cache in Vercel settings
- Consider upgrading to Vercel Pro if you need faster builds

## 📊 Deployment Checklist

Before deploying to production:

- [ ] Code is pushed to `backend-testing` branch
- [ ] Local build succeeds (`npm run build`)
- [ ] Supabase project is created
- [ ] Supabase environment variables are ready
- [ ] Vercel project is created/configured
- [ ] Environment variables added to Vercel
- [ ] Supabase redirect URLs include Vercel domain
- [ ] Test deployment on Vercel preview
- [ ] All features tested on production
- [ ] Email confirmation settings configured
- [ ] Error monitoring setup (optional)

## 🎯 Post-Deployment

### Monitor Your Deployment

1. **Vercel Analytics**: Enable in project settings
2. **Error Tracking**: Consider adding Sentry or LogRocket
3. **Performance**: Use Vercel Speed Insights

### Continuous Deployment

Vercel automatically deploys when you push to GitHub:
- Push to `backend-testing` → Preview deployment
- Merge to `main` → Production deployment

### Branch Strategy

Current setup:
- `backend-testing` - Development/testing branch
- `main` - Production branch (when ready)

**Recommended workflow:**
1. Develop and test on `backend-testing`
2. Create pull request to `main` when ready
3. Review and merge
4. Vercel auto-deploys to production

## 🔐 Security Best Practices

- ✅ Never commit `.env.local` to Git
- ✅ Use environment variables for all secrets
- ✅ Enable email confirmation in production
- ✅ Use Row Level Security (RLS) in Supabase
- ✅ Implement rate limiting for API routes
- ✅ Keep dependencies updated

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs)

## 🆘 Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Check Supabase dashboard for auth errors
4. Review this guide's troubleshooting section

---

**Status**: ✅ Ready for deployment
**Last Updated**: Build error fixed - Supabase client now lazy-loaded
**Branch**: backend-testing
**Next Step**: Add environment variables to Vercel and deploy!
