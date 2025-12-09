-- ============================================
-- ArC Dine - Supabase Database Schema
-- ============================================
-- This file contains the SQL to create tables for cart and orders
-- Run this in Supabase SQL Editor: https://app.supabase.com/project/YOUR_PROJECT/sql

-- ============================================
-- 1. CART ITEMS TABLE
-- ============================================
-- Stores current cart items for each user

CREATE TABLE IF NOT EXISTS cart_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  menu_item_id INTEGER NOT NULL,
  menu_item_name TEXT NOT NULL,
  menu_item_price INTEGER NOT NULL,
  menu_item_category TEXT NOT NULL,
  menu_item_description TEXT NOT NULL,
  menu_item_image TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure user can't have duplicate items in cart
  UNIQUE(user_id, menu_item_id)
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_cart_items_user_id ON cart_items(user_id);

-- ============================================
-- 2. ORDERS TABLE
-- ============================================
-- Stores completed orders

CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,  -- Format: ORD-timestamp-random
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total INTEGER NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('pending', 'completed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- ============================================
-- 3. ORDER ITEMS TABLE
-- ============================================
-- Stores items for each order (normalized structure)

CREATE TABLE IF NOT EXISTS order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id INTEGER NOT NULL,
  menu_item_name TEXT NOT NULL,
  menu_item_price INTEGER NOT NULL,
  menu_item_category TEXT NOT NULL,
  menu_item_description TEXT NOT NULL,
  menu_item_image TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);

-- ============================================
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================
-- Users can only see/modify their own data

-- Enable RLS
ALTER TABLE cart_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Cart Items Policies
CREATE POLICY "Users can view their own cart items"
  ON cart_items FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own cart items"
  ON cart_items FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items"
  ON cart_items FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items"
  ON cart_items FOR DELETE
  USING (auth.uid() = user_id);

-- Orders Policies
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own orders"
  ON orders FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own orders"
  ON orders FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own orders"
  ON orders FOR DELETE
  USING (auth.uid() = user_id);

-- Order Items Policies
CREATE POLICY "Users can view their own order items"
  ON order_items FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  ));

CREATE POLICY "Users can insert their own order items"
  ON order_items FOR INSERT
  WITH CHECK (EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND orders.user_id = auth.uid()
  ));

-- ============================================
-- 5. UPDATED_AT TRIGGER
-- ============================================
-- Automatically update updated_at timestamp

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_cart_items_updated_at
  BEFORE UPDATE ON cart_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- DONE! 
-- ============================================
-- Your tables are ready. 
-- Now update the CartContext to use these tables.
