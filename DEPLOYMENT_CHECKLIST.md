# ✅ Deployment Checklist for ArC Dine

## Pre-Deployment

### Code Quality
- [x] All changes committed to `backend-testing` branch
- [x] Local build succeeds (`npm run build`)
- [x] No console errors in development
- [x] All features tested locally

### Supabase Setup
- [ ] Supabase project created
- [ ] `NEXT_PUBLIC_SUPABASE_URL` obtained
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` obtained
- [ ] Email provider enabled in Supabase
- [ ] Email confirmation settings configured (ON for production, OFF for testing)

### Vercel Setup
- [ ] Vercel account created
- [ ] GitHub repository connected to Vercel
- [ ] Project imported in Vercel

## Deployment Steps

### 1. Push Code to GitHub
```bash
git status                    # Verify clean state
git push origin backend-testing
```
- [x] Code pushed successfully
- [x] Latest commit: "Fix Vercel build error by making Supabase client lazy-loaded"

### 2. Configure Vercel Environment Variables
- [ ] Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL` for all environments
- [ ] Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` for all environments
- [ ] Save all variables

### 3. Deploy
- [ ] Trigger deployment (automatic or manual redeploy)
- [ ] Wait for build to complete
- [ ] Build succeeds ✅
- [ ] Deployment URL generated

### 4. Configure Supabase for Production
- [ ] Copy your Vercel deployment URL
- [ ] Go to Supabase → Authentication → URL Configuration
- [ ] Add Site URL: `https://your-app.vercel.app`
- [ ] Add Redirect URL: `https://your-app.vercel.app/**`
- [ ] Save configuration

## Post-Deployment Testing

### Basic Functionality
- [ ] Visit deployment URL
- [ ] Page loads without errors
- [ ] Login form appears
- [ ] UI looks correct (no styling issues)

### Authentication
- [ ] Can create new account
- [ ] Can sign in with credentials
- [ ] User email displays correctly
- [ ] Can logout successfully
- [ ] Redirects work properly

### Application Features
- [ ] Menu grid displays correctly
- [ ] Can add items to cart
- [ ] Cart modal opens and works
- [ ] Can view cart items
- [ ] Can remove items from cart
- [ ] Can place order
- [ ] Order appears in order history
- [ ] Can cancel order
- [ ] Order history displays correctly

### Responsive Design
- [ ] Desktop view works
- [ ] Tablet view works
- [ ] Mobile view works
- [ ] Bottom navigation works on mobile
- [ ] All buttons are clickable
- [ ] No layout breaks

### Performance
- [ ] Initial page load is fast
- [ ] No console errors
- [ ] No 404 errors for assets
- [ ] Images load properly

## Production Readiness

### Security
- [ ] Email confirmation enabled (for production)
- [ ] Environment variables properly set
- [ ] No secrets in code
- [ ] `.env.local` in `.gitignore`

### Monitoring (Optional)
- [ ] Vercel Analytics enabled
- [ ] Error tracking setup (Sentry, etc.)
- [ ] Performance monitoring setup

### Documentation
- [x] VERCEL_DEPLOYMENT.md created
- [x] SUPABASE_SETUP.md updated
- [x] README.md updated
- [ ] Team members informed of deployment

## Branch Strategy

### Current Setup
- `backend-testing` - Testing branch (✅ deployed)
- `main` - Production branch (when ready)

### Next Steps
- [ ] Test thoroughly on `backend-testing` deployment
- [ ] Create pull request from `backend-testing` to `main`
- [ ] Review changes
- [ ] Merge to `main` for production deployment

## Rollback Plan

If issues occur:
1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "..." → "Promote to Production"
4. Investigate and fix issues
5. Redeploy when fixed

## Status

**Current Status**: ✅ Code ready for deployment  
**Branch**: `backend-testing`  
**Last Commit**: Fix Vercel build error by making Supabase client lazy-loaded  
**Build Status**: ✅ Passing locally  

**Next Action Required**: 
1. Add Supabase environment variables to Vercel
2. Trigger deployment
3. Test on live URL
4. Update Supabase redirect URLs

---

**Updated**: Latest build fixes applied  
**Ready for**: Vercel deployment with environment variables
