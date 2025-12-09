# 🔧 URGENT: Add Environment Variables to Vercel

## ❗ Current Issue
Your deployment is showing: **"Missing Supabase environment variables"**

This means the environment variables are **not set in Vercel**. Follow these steps to fix it:

---

## 📝 Quick Fix (5 minutes)

### Step 1: Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://app.supabase.com/)
2. Open your project (or create one if you haven't)
3. Click **Settings** (gear icon) → **API**
4. Copy these two values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

---

### Step 2: Add to Vercel Dashboard

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project: **ArC-Dine**
3. Click **Settings** tab
4. Click **Environment Variables** in the left sidebar
5. Add **first variable**:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Your Supabase project URL (paste from Step 1)
   - **Environments**: Check all three boxes (Production, Preview, Development)
   - Click **Save**

6. Add **second variable**:
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon key (paste from Step 1)
   - **Environments**: Check all three boxes (Production, Preview, Development)
   - Click **Save**

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Paste your Supabase URL when prompted

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
# Paste your Supabase anon key when prompted
```

---

### Step 3: Redeploy

After adding environment variables, you **must redeploy**:

1. Go to **Deployments** tab in Vercel
2. Find the latest deployment
3. Click the **three dots (...)** menu
4. Click **Redeploy**
5. ✅ Confirm redeploy
6. Wait for deployment to complete (2-3 minutes)

---

### Step 4: Test Again

1. Visit your deployment URL
2. Try logging in with Google
3. Should work now! ✅

---

## 🔍 Verify Environment Variables Are Set

### In Vercel Dashboard:
1. Go to Settings → Environment Variables
2. You should see both variables listed
3. They should be enabled for all environments

### Check Deployment Logs:
1. Go to Deployments → Click latest deployment
2. Click **Build Logs**
3. Look for any errors related to environment variables

---

## 🐛 Still Not Working?

### Issue 1: Variables Not Taking Effect
**Solution**: Make sure you redeployed **after** adding the variables

### Issue 2: Google OAuth Not Working
**Cause**: Google provider not enabled in Supabase

**Solution**:
1. Go to Supabase Dashboard
2. Navigate to **Authentication** → **Providers**
3. Find **Google** provider
4. Toggle it **ON**
5. You'll need to:
   - Create a Google OAuth app in [Google Cloud Console](https://console.cloud.google.com/)
   - Add Client ID and Client Secret to Supabase
   - Add authorized redirect URIs

**Authorized Redirect URI**:
```
https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback
```

Replace `YOUR_PROJECT_REF` with your actual Supabase project reference.

---

## 📋 Checklist

- [ ] Got Supabase URL from dashboard
- [ ] Got Supabase anon key from dashboard
- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` to Vercel
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` to Vercel
- [ ] Both variables set for all environments
- [ ] Redeployed after adding variables
- [ ] Tested login after redeploy

---

## 📸 Visual Guide

### Where to Find Supabase Keys:
```
Supabase Dashboard
  └── Your Project
      └── Settings (gear icon)
          └── API
              ├── Project URL ← Copy this
              └── Project API keys
                  └── anon public ← Copy this
```

### Where to Add in Vercel:
```
Vercel Dashboard
  └── Your Project (ArC-Dine)
      └── Settings
          └── Environment Variables
              └── Add Variable
                  ├── Key: NEXT_PUBLIC_SUPABASE_URL
                  ├── Value: [paste URL]
                  └── Environments: [✓] All
```

---

## ⏱️ Expected Time
- Getting keys: 2 minutes
- Adding to Vercel: 2 minutes
- Redeploying: 3 minutes
- **Total: ~7 minutes**

---

## 🎯 After This Is Done

### Enable Google OAuth (Optional)
If you want Google login to work:
1. See detailed guide: [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)
2. Or follow Supabase docs: https://supabase.com/docs/guides/auth/social-login/auth-google

### Configure Production URLs
1. Go to Supabase → Authentication → URL Configuration
2. Add your Vercel URL:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: `https://your-app.vercel.app/**`

---

## 🆘 Need Help?

### Quick Links:
- [Vercel Environment Variables Docs](https://vercel.com/docs/concepts/projects/environment-variables)
- [Supabase Setup Guide](./SUPABASE_SETUP.md)
- [Full Deployment Guide](./VERCEL_DEPLOYMENT.md)

### Common Mistakes:
- ❌ Not redeploying after adding variables
- ❌ Only adding variables to one environment
- ❌ Copying wrong key (service_role instead of anon)
- ❌ Extra spaces in variable values

---

**Priority**: 🔴 HIGH - Your app won't work until this is fixed!

**Action**: Add the environment variables now and redeploy!
