# 🔐 Supabase Authentication Setup Guide

## What We've Built
- ✅ Login/Signup form with email & password
- ✅ User authentication required to access the menu
- ✅ User info display with logout button
- ✅ Protected routes (menu only accessible after login)

## 📋 Setup Instructions

### Step 1: Get Your Supabase Credentials

1. Go to [Supabase](https://app.supabase.com/)
2. Sign in or create a free account
3. Click "New Project"
4. Fill in:
   - **Project Name**: ArC-Dine (or any name you like)
   - **Database Password**: Choose a strong password (save it!)
   - **Region**: Choose closest to you
5. Wait 2-3 minutes for project creation

### Step 2: Get API Keys

1. In your Supabase project dashboard, click **Settings** (gear icon) in the left sidebar
2. Click **API** under Project Settings
3. You'll see two keys:
   - **Project URL**: Copy this (looks like: `https://xxxxx.supabase.co`)
   - **anon public key**: Copy this (long string starting with `eyJ...`)

### Step 3: Add Keys to Your Project

1. Open the `.env.local` file in your project root
2. Replace the placeholder values:
   ```env
   NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
   NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   ```

### Step 4: Configure Supabase Authentication

1. In Supabase dashboard, go to **Authentication** > **Providers**
2. Enable **Email** provider (should be enabled by default)
3. Go to **Authentication** > **URL Configuration**
4. Add `http://localhost:3000` to **Site URL**
5. Add `http://localhost:3000/**` to **Redirect URLs**

### Step 5: Disable Email Confirmation (Optional - For Testing)

By default, Supabase requires email verification. For local testing, you can disable it:

1. Go to **Authentication** > **Providers** > **Email**
2. Turn OFF **"Confirm email"**
3. Click **Save**

⚠️ **Note**: For production, keep email confirmation enabled for security!

### Step 6: Run Your App

```bash
npm run dev
```

Visit `http://localhost:3000` and you should see the login form!

## 🧪 Testing

1. **Create an account**: Use any email (if email confirmation is disabled)
2. **Sign in**: Use the credentials you just created
3. **Access menu**: You should now see the restaurant menu
4. **Logout**: Click the logout button in the top right

## 📊 Current Data Storage

Right now, cart and orders are still stored in **localStorage** (browser storage).

## 🚀 Next Steps (Optional Enhancements)

### Option 1: Store Cart & Orders in Supabase Database

This would allow users to access their cart/orders from any device!

**Benefits:**
- Cart syncs across devices
- Orders persist permanently
- View order history from anywhere

**What's needed:**
1. Create database tables in Supabase
2. Update CartContext to use Supabase instead of localStorage
3. Add real-time subscriptions for live updates

### Option 2: Add Social Login (Google, GitHub, etc.)

**Benefits:**
- Easier signup/login
- No password to remember

### Option 3: Add User Profiles

**Benefits:**
- Save delivery addresses
- Store payment methods
- Track favorite items

Would you like me to implement any of these enhancements?

## 🐛 Troubleshooting

### "Missing Supabase environment variables" error
- Make sure `.env.local` file exists in project root
- Check that the values don't have quotes or extra spaces
- Restart the dev server after adding environment variables

### Vercel Deployment Issues
- ✅ **Fixed**: Build errors on Vercel have been resolved with lazy-loading implementation
- For deployment instructions, see `VERCEL_DEPLOYMENT.md`
- Remember to add environment variables in Vercel Dashboard (Settings → Environment Variables)

### Can't sign in after creating account
- Check if email confirmation is enabled
- Look in Supabase dashboard under **Authentication** > **Users** to see if user was created

### Login form not showing
- Check browser console for errors
- Make sure all packages are installed: `npm install`

## 📝 Files Created/Modified

### New Files:
- `lib/supabase.ts` - Supabase client configuration
- `context/AuthContext.tsx` - Authentication state management
- `components/AuthForm.tsx` - Login/signup form component
- `.env.local` - Environment variables (add your keys here!)

### Modified Files:
- `app/layout.tsx` - Added AuthProvider wrapper
- `app/page.tsx` - Added authentication check and login form
- `.env.local.example` - Added Supabase configuration template

## 🔒 Security Notes

- Never commit `.env.local` to Git (it's already in `.gitignore`)
- The `anon` key is safe to use in client-side code
- For production, enable email confirmation
- Consider adding rate limiting for login attempts
