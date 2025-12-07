# 📦 Complete Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (VS Code recommended)

### Check if Node.js is installed:
```bash
node --version
npm --version
```

If not installed, download from: https://nodejs.org/

---

## Installation Steps

### Method 1: Quick Install (Recommended)

1. **Open Terminal/Command Prompt**
   - Windows: Press `Win + R`, type `cmd`, press Enter
   - Mac: Press `Cmd + Space`, type "Terminal", press Enter
   - Linux: Press `Ctrl + Alt + T`

2. **Navigate to Project Folder**
   ```bash
   cd path/to/restaurant-menu
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   This will take 2-3 minutes and install all required packages.

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   Go to: http://localhost:3000

   You should see your restaurant menu website! 🎉

---

### Method 2: Step-by-Step with Verification

#### Step 1: Verify Project Structure
```bash
# Check if all main folders exist
ls -la
```

You should see:
- `app/` folder
- `components/` folder
- `context/` folder
- `package.json` file

#### Step 2: Clean Install
```bash
# Remove any existing dependencies (if any)
rm -rf node_modules package-lock.json

# Install fresh
npm install
```

#### Step 3: Verify Installation
```bash
# Check if node_modules folder was created
ls node_modules

# Should show many packages installed
```

#### Step 4: Run Development Server
```bash
npm run dev
```

You should see output like:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

#### Step 5: Test in Browser
1. Open http://localhost:3000
2. Check if 3D animation loads
3. Try adding items to cart
4. Test checkout functionality

---

## Build for Production

### Development Build (Local Testing)
```bash
npm run dev
# Server runs with hot reload
# Changes appear instantly
```

### Production Build (Deployment)
```bash
# Build optimized version
npm run build

# Start production server
npm start
```

---

## Troubleshooting Installation

### Issue 1: "npm not found"
**Solution:**
1. Install Node.js from https://nodejs.org/
2. Choose LTS (Long Term Support) version
3. Restart terminal after installation
4. Verify: `node --version`

### Issue 2: "EACCES: permission denied"
**Solution (Mac/Linux):**
```bash
sudo npm install
```
Or fix npm permissions:
```bash
sudo chown -R $USER:$GROUP ~/.npm
sudo chown -R $USER:$GROUP ~/.config
```

**Solution (Windows):**
- Run Command Prompt as Administrator
- Or use: `npm install --force`

### Issue 3: "Port 3000 is already in use"
**Solution:**
```bash
# Use different port
npm run dev -- -p 3001

# Or kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Issue 4: "Module not found" errors
**Solution:**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 5: TypeScript errors
**Solution:**
```bash
# Ensure TypeScript is installed
npm install typescript @types/node @types/react @types/react-dom --save-dev

# Restart development server
npm run dev
```

### Issue 6: Canvas/WebGL not working
**Solution:**
- Update browser to latest version
- Enable hardware acceleration:
  - Chrome: Settings > System > Use hardware acceleration
  - Firefox: about:config > webgl.force-enabled = true
- Try different browser

### Issue 7: Slow installation
**Solution:**
```bash
# Use faster registry (optional)
npm config set registry https://registry.npmjs.org/

# Or use Yarn (alternative package manager)
npm install -g yarn
yarn install
```

### Issue 8: Build fails
**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

---

## Verify Installation Checklist

✅ **Basic Setup:**
- [ ] Node.js 18+ installed
- [ ] npm/yarn working
- [ ] Project files present
- [ ] package.json exists

✅ **Dependencies:**
- [ ] `npm install` completed without errors
- [ ] node_modules folder created
- [ ] package-lock.json generated

✅ **Development Server:**
- [ ] `npm run dev` starts without errors
- [ ] Server runs on port 3000
- [ ] No console errors

✅ **Website Features:**
- [ ] Homepage loads
- [ ] 3D animation visible
- [ ] Menu items display
- [ ] Add to cart works
- [ ] Cart modal opens
- [ ] Checkout creates order
- [ ] Order history shows orders

✅ **Browser Compatibility:**
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Edge
- [ ] Works in Safari
- [ ] Responsive on mobile

---

## Platform-Specific Instructions

### Windows

```powershell
# Install with PowerShell
cd C:\path\to\restaurant-menu
npm install
npm run dev
```

Common Windows issues:
- Use PowerShell or Git Bash (not CMD)
- Disable antivirus temporarily if installation fails
- Run as Administrator if permission errors

### macOS

```bash
# Install with Terminal
cd /path/to/restaurant-menu
npm install
npm run dev
```

Common Mac issues:
- Install Xcode Command Line Tools: `xcode-select --install`
- Fix permissions: `sudo chown -R $USER ~/.npm`
- Use Homebrew for Node.js: `brew install node`

### Linux (Ubuntu/Debian)

```bash
# Update package manager
sudo apt update

# Install Node.js (if not installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Navigate and install
cd /path/to/restaurant-menu
npm install
npm run dev
```

---

## Environment Configuration

### Optional: Create .env.local file
```bash
# Copy example
cp .env.local.example .env.local

# Edit with your values
nano .env.local
```

Example `.env.local`:
```env
NEXT_PUBLIC_APP_NAME="My Restaurant"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

---

## IDE Setup (VS Code)

### Recommended Extensions:
1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **ESLint**
4. **Prettier - Code formatter**
5. **Auto Rename Tag**

### Install Extensions:
```bash
# Open VS Code
code .

# Install extensions from marketplace
# Or use command palette: Ctrl+Shift+P > Extensions: Install Extensions
```

### Recommended VS Code Settings:
Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

## Performance Optimization

### Faster Installation:
```bash
# Use npm ci for cleaner install
npm ci

# Or increase memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm install
```

### Faster Build:
```bash
# Build with more memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

---

## Post-Installation Steps

### 1. Test All Features
- Browse menu items
- Add items to cart
- Update quantities
- Remove items
- Clear cart
- Checkout
- View order history
- Test on mobile

### 2. Customize
- Update menu items in `components/MenuGrid.tsx`
- Change colors in `tailwind.config.js`
- Modify 3D animation in `components/Hero3D.tsx`

### 3. Deploy (Optional)
- Push to GitHub
- Deploy to Vercel
- Configure custom domain

---

## Package Versions

Installed packages (from package.json):

**Core:**
- next: ^14.0.0
- react: ^18.2.0
- react-dom: ^18.2.0

**3D & Animation:**
- three: ^0.159.0
- @react-three/fiber: ^8.15.0
- @react-three/drei: ^9.92.0
- framer-motion: ^10.16.0

**Styling:**
- tailwindcss: ^3.3.0
- autoprefixer: ^10.4.0
- postcss: ^8.4.0

**Development:**
- typescript: ^5.0.0
- @types/node: ^20.0.0
- @types/react: ^18.0.0
- @types/react-dom: ^18.0.0

---

## Success Indicators

You'll know installation is successful when:

1. ✅ `npm install` completes without errors
2. ✅ `npm run dev` starts the server
3. ✅ Browser shows the website at localhost:3000
4. ✅ 3D animation is visible and spinning
5. ✅ Menu items load correctly
6. ✅ Cart functionality works
7. ✅ No console errors (F12 to check)

---

## Getting Help

If you encounter issues:

1. **Check console** for error messages (F12)
2. **Read error messages** carefully
3. **Search for error** on Google/Stack Overflow
4. **Check documentation** files
5. **Try clean reinstall**

---

## Next Steps After Installation

1. ✅ Installation complete
2. 📖 Read FEATURES.md for all features
3. 🎨 Read README.md for customization
4. 🚀 Read SETUP_GUIDE.md for deployment
5. 🏗️ Start customizing for your restaurant!

---

**Installation Complete! Enjoy your restaurant website! 🎉**
