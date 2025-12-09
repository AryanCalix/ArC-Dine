# 🗄️ Supabase Database Setup Guide

## 🎯 What This Does

This guide will help you create the database tables needed to store cart and order data per user in Supabase.

**Benefits:**
- ✅ Each user has their own cart and orders
- ✅ Data syncs across devices
- ✅ No more shared data between users
- ✅ Permanent storage (not just browser localStorage)

---

## 📋 Step-by-Step Instructions

### Step 1: Open Supabase SQL Editor

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Open your **ArC Dine** project
3. Click **SQL Editor** in the left sidebar (icon looks like `</>`  )
4. Click **New Query** button

---

### Step 2: Copy and Run the SQL

1. Open the file `supabase_schema.sql` in your project
2. Copy **ALL** the SQL code (Ctrl+A, Ctrl+C)
3. Paste it into the Supabase SQL Editor
4. Click **Run** button (or press Ctrl+Enter)

**Expected Result:**
```
Success. No rows returned
```

This means all tables, indexes, and policies were created successfully! ✅

---

### Step 3: Verify Tables Were Created

1. In Supabase, click **Table Editor** in the left sidebar
2. You should see 3 new tables:
   - `cart_items` - Stores current cart items per user
   - `orders` - Stores completed orders per user
   - `order_items` - Stores items in each order

---

## 📊 What Was Created

### Tables:

1. **cart_items**
   - Stores current shopping cart for each user
   - One row per item in cart
   - Automatically deleted when user is deleted

2. **orders**
   - Stores order records
   - Contains order ID, total, status, timestamps
   - Links to user via user_id

3. **order_items**
   - Stores items within each order
   - Many items can belong to one order
   - Automatically deleted when order is deleted

### Security (RLS Policies):

✅ Users can **only see and modify their own data**
✅ No user can access another user's cart or orders
✅ Enforced at the database level

---

## 🧪 Test the Setup

After running the SQL:

1. **Redeploy your app on Vercel:**
   - Go to Vercel Dashboard
   - Redeploy the latest deployment
   - Wait for deployment to complete

2. **Test on your app:**
   - Visit https://arc-dine.vercel.app
   - Login with your account
   - Add items to cart → Should save to Supabase ✅
   - Place an order → Should save to Supabase ✅
   - Logout and login again → Cart and orders should persist ✅

3. **Test with different users:**
   - Create a second account
   - Add different items to cart
   - Each user should see only their own data ✅

---

## 🔍 View Data in Supabase

To see the data in Supabase:

1. Go to **Table Editor** in Supabase
2. Click on `cart_items` table → See all cart items
3. Click on `orders` table → See all orders
4. Click on `order_items` table → See items in orders

You'll see the `user_id` column showing which user owns each record.

---

## 🐛 Troubleshooting

### Error: "relation already exists"
**Cause:** Tables already created
**Solution:** This is fine! The tables are already there. No action needed.

### Error: "permission denied"
**Cause:** Not enough permissions
**Solution:** Make sure you're the project owner or have admin access

### Cart not saving
**Check:**
1. Did you run the SQL successfully?
2. Did you redeploy after updating the code?
3. Check browser console for errors (F12)
4. Check Supabase logs: Dashboard → Logs

### Orders not showing
**Check:**
1. Verify `orders` and `order_items` tables exist
2. Check RLS policies are enabled
3. Look for errors in browser console

---

## 📝 SQL Schema Reference

The SQL file creates:

```
Tables Created:
├── cart_items (9 columns)
│   ├── id (UUID, primary key)
│   ├── user_id (references auth.users)
│   ├── menu_item_id, name, price, etc.
│   └── quantity
│
├── orders (6 columns)
│   ├── id (TEXT, primary key)
│   ├── user_id (references auth.users)
│   ├── total, status
│   └── created_at, updated_at
│
└── order_items (9 columns)
    ├── id (UUID, primary key)
    ├── order_id (references orders)
    ├── menu_item_id, name, price, etc.
    └── quantity

RLS Policies:
├── cart_items (4 policies: SELECT, INSERT, UPDATE, DELETE)
├── orders (4 policies: SELECT, INSERT, UPDATE, DELETE)
└── order_items (2 policies: SELECT, INSERT)

Triggers:
└── Auto-update updated_at timestamps
```

---

## ✅ Checklist

- [ ] Opened Supabase SQL Editor
- [ ] Copied SQL from `supabase_schema.sql`
- [ ] Pasted and ran the SQL
- [ ] Saw "Success" message
- [ ] Verified tables exist in Table Editor
- [ ] Redeployed app on Vercel
- [ ] Tested adding items to cart
- [ ] Tested placing order
- [ ] Tested with multiple users
- [ ] Confirmed data is user-specific

---

## 🎉 Done!

Once you complete these steps:
- ✅ Each user will have their own cart and orders
- ✅ Data will sync across devices
- ✅ No more shared data between users
- ✅ Everything stored permanently in Supabase

---

**Need Help?** Check the troubleshooting section above or look for errors in:
- Browser console (F12 → Console tab)
- Supabase logs (Dashboard → Logs)

---

**Next:** Redeploy your app and test!
