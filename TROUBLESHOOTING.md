# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### Installation Issues

**Problem: "npm not found"**
```bash
Solution: Install Node.js from nodejs.org
```

**Problem: "Port 3000 in use"**
```bash
Solution: npm run dev -- -p 3001
```

**Problem: Installation fails**
```bash
Solution: 
rm -rf node_modules
npm install
```

### Runtime Issues

**Problem: Blank page**
```bash
Solution:
1. Check browser console (F12)
2. Clear cache
3. Restart dev server
```

**Problem: 3D not showing**
```bash
Solution:
1. Update browser
2. Enable hardware acceleration
3. Check WebGL support
```

**Problem: Cart not saving**
```bash
Solution:
1. Enable localStorage in browser
2. Check privacy settings
3. Try incognito mode
```

### Build Issues

**Problem: Build fails**
```bash
Solution:
rm -rf .next
npm run build
```

**Problem: TypeScript errors**
```bash
Solution:
npm install typescript --save-dev
```

---

**Still stuck? Check FAQ.md**
