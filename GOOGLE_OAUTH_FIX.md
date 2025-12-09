# 🔧 Fix Google OAuth Redirect Issue

## ❌ Current Problem

When you click "Sign in with Google", it redirects to `http://localhost:3000` showing a blank white page instead of staying on your Vercel app.

---

## ✅ Solution: Update Supabase URL Configuration

You need to tell Supabase to redirect to your Vercel URL instead of localhost.

---

## 📋 Step-by-Step Fix (5 minutes)

### Step 1: Open Supabase URL Configuration

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Open your **ArC Dine** project
3. Click **Authentication** in the left sidebar
4. Click **URL Configuration**

---

### Step 2: Update Site URL

1. Find the **"Site URL"** field
2. Currently it says: `http://localhost:3000`
3. Change it to (copy exactly):
   ```
   https://arc-dine.vercel.app
   ```
4. Click **Save** (usually at the bottom)

---

### Step 3: Add Redirect URLs

1. Find the **"Redirect URLs"** section
2. You should see a list with `http://localhost:3000/**`
3. Click **"Add URL"** or the **+** button
4. Add this URL (copy exactly):
   ```
   https://arc-dine.vercel.app/**
   ```
   *(Note the `/**` at the end - it's important!)*
5. Click **Save**

**Keep both URLs:**
- ✅ `http://localhost:3000/**` (for local development)
- ✅ `https://arc-dine.vercel.app/**` (for production)

---

### Step 4: Test Google OAuth

1. Go to your app: https://arc-dine.vercel.app
2. Click **"Sign in with Google"**
3. Select your Google account
4. Should redirect back to your Vercel app ✅
5. You should be logged in!

---

## 🎯 What This Does

**Site URL:**
- Tells Supabase where your app is hosted
- Used as the default redirect after login

**Redirect URLs:**
- List of allowed URLs where users can be redirected
- Prevents redirect hijacking attacks
- Must include your production domain

---

## 📸 Visual Reference

### In Supabase Dashboard:

```
Authentication
  └── URL Configuration
      ├── Site URL
      │   └── https://arc-dine.vercel.app  ← Change this
      │
      └── Redirect URLs
          ├── http://localhost:3000/**  ← Keep this
          └── https://arc-dine.vercel.app/**  ← Add this
```

---

## 🐛 Troubleshooting

### Still redirecting to localhost?

**Clear browser cache:**
1. Press `Ctrl+Shift+Delete`
2. Select "Cookies and site data"
3. Clear data
4. Try again

**Or use incognito mode:**
1. Open incognito/private window
2. Visit https://arc-dine.vercel.app
3. Try Google login

---

### Getting "Invalid redirect URL" error?

**Check:**
1. Did you add the URL with `/**` at the end?
2. Is the URL exactly `https://arc-dine.vercel.app/**`?
3. No extra spaces?
4. Did you click Save?

---

### Google login popup closes immediately?

**This might mean:**
1. Google OAuth not properly configured
2. Check if Google provider is enabled: Supabase → Authentication → Providers → Google

**If Google provider is OFF:**
You need to set up Google OAuth credentials first (see below)

---

## 🔐 Setting Up Google OAuth (If Not Done)

If Google provider is disabled in Supabase, you need to set it up:

### Step 1: Create Google OAuth App

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen if prompted
6. Application type: **Web application**
7. Name: `ArC Dine`

### Step 2: Add Authorized Redirect URIs

In Google Cloud Console, add these redirect URIs:

```
https://YOUR_SUPABASE_PROJECT_REF.supabase.co/auth/v1/callback
```

**How to find YOUR_SUPABASE_PROJECT_REF:**
1. Go to Supabase Dashboard
2. Click Settings → API
3. Look at your Project URL: `https://xxxxx.supabase.co`
4. The `xxxxx` part is your project ref
5. So redirect URI is: `https://xxxxx.supabase.co/auth/v1/callback`

**Also add localhost for development:**
```
http://localhost:3000
```

### Step 3: Get Client ID and Secret

1. After creating, you'll see:
   - Client ID (starts with numbers)
   - Client Secret (random string)
2. Copy both

### Step 4: Add to Supabase

1. Go to Supabase → Authentication → Providers
2. Find **Google**
3. Toggle it **ON**
4. Paste:
   - Client ID
   - Client Secret
5. Click **Save**

### Step 5: Test

1. Go to https://arc-dine.vercel.app
2. Click "Sign in with Google"
3. Should work now! ✅

---

## ✅ Checklist

- [ ] Opened Supabase → Authentication → URL Configuration
- [ ] Changed Site URL to `https://arc-dine.vercel.app`
- [ ] Added `https://arc-dine.vercel.app/**` to Redirect URLs
- [ ] Kept `http://localhost:3000/**` in Redirect URLs
- [ ] Clicked Save
- [ ] Tested Google login
- [ ] Successfully logged in with Google ✅

---

## 📝 Summary

**Before:**
- Site URL: `http://localhost:3000`
- Redirect URLs: Only localhost
- Result: ❌ Redirects to localhost

**After:**
- Site URL: `https://arc-dine.vercel.app`
- Redirect URLs: Both localhost AND production
- Result: ✅ Redirects to production app

---

## 🎉 Done!

Once you complete these steps, Google OAuth will work perfectly on your production app!

**Current Status:**
- ✅ Cart/orders working per user
- ✅ Data syncing with Supabase
- ⏳ Google OAuth redirect (fix with this guide)

---

**Need help?** Check the troubleshooting section above or the browser console (F12) for errors.
