# Quick Setup Guide 🚀

## Step-by-Step Installation

### 1️⃣ Prerequisites Check

Make sure you have Node.js installed:
```bash
node --version
# Should show v18.0.0 or higher
```

If Node.js is not installed, download it from [nodejs.org](https://nodejs.org/)

### 2️⃣ Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (may take 2-3 minutes).

### 3️⃣ Start Development Server

```bash
npm run dev
```

### 4️⃣ Open in Browser

Visit: **http://localhost:3000**

That's it! Your restaurant website should now be running! 🎉

## 🐛 Troubleshooting

### Error: "npm not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal after installation

### Error: "Port 3000 already in use"
- Kill the process using port 3000, or
- Run on a different port: `npm run dev -- -p 3001`

### Error: Canvas/WebGL issues
- Update your browser to the latest version
- Enable hardware acceleration in browser settings

### Error: Module not found
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Check code quality
```

## 📦 What Gets Installed

Main dependencies:
- **next** - React framework
- **react** - UI library
- **three** - 3D graphics
- **@react-three/fiber** - React + Three.js
- **@react-three/drei** - 3D helpers
- **framer-motion** - Animations
- **tailwindcss** - Styling

## 🌐 Deployment Options

### Vercel (Recommended - Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify

### Other Platforms
- Heroku
- AWS
- DigitalOcean
- Railway

## 💡 Tips

- Use Chrome/Edge for best 3D performance
- Clear browser cache if styles don't update
- Check console (F12) for any errors
- Use React DevTools for debugging

## 🆘 Need Help?

Common issues and solutions:
1. **Blank page**: Check browser console for errors
2. **Slow 3D animation**: Reduce particle count in Hero3D.tsx
3. **Cart not saving**: Check localStorage is enabled
4. **Build errors**: Delete `.next` folder and rebuild

---

Happy coding! 🎨✨
