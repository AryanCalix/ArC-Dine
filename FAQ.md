# ❓ Frequently Asked Questions (FAQ)

---

## General Questions

### Q: What is this project?
**A:** A full-stack Next.js restaurant menu website with shopping cart, 3D animations, and transaction management.

### Q: Is it free to use?
**A:** Yes! This project is open source under MIT license. Use it for personal or commercial projects.

### Q: Do I need coding experience?
**A:** Basic knowledge of web development helps, but the project is well-documented and easy to customize.

### Q: What technologies does it use?
**A:** Next.js 14, React, TypeScript, Tailwind CSS, Three.js, Framer Motion.

---

## Installation & Setup

### Q: How do I install this?
**A:** 
1. Install Node.js (18+)
2. Run `npm install`
3. Run `npm run dev`
4. Open http://localhost:3000

See INSTALLATION.md for detailed steps.

### Q: Why is installation taking so long?
**A:** Installing dependencies (especially Three.js) takes time. It's normal and usually takes 2-5 minutes depending on your internet speed.

### Q: I get "npm not found" error. What do I do?
**A:** Install Node.js from https://nodejs.org/. This includes npm.

### Q: Can I use Yarn instead of npm?
**A:** Yes! Replace `npm install` with `yarn install` and `npm run dev` with `yarn dev`.

### Q: Port 3000 is already in use. What now?
**A:** Run on different port: `npm run dev -- -p 3001`

---

## Features & Functionality

### Q: How does the transaction system work?
**A:** All data is stored in browser localStorage. No backend or database needed. Cart and order history persist across sessions.

### Q: Can customers actually pay?
**A:** Not by default. This is a frontend demo. For real payments, integrate Stripe, PayPal, or other payment gateways.

### Q: How do I add more menu items?
**A:** Edit `components/MenuGrid.tsx` and add items to the `menuItems` array. See CUSTOMIZATION.md for details.

### Q: Can I use real images instead of emojis?
**A:** Yes! Place images in `public/images/` folder and update the image paths. See CUSTOMIZATION.md for instructions.

### Q: How do I change the restaurant name?
**A:** Edit `app/layout.tsx` (metadata) and `components/Hero3D.tsx` (hero text).

### Q: Can I change the color scheme?
**A:** Yes! Edit `tailwind.config.js` to change the orange and black colors to your preferred palette.

---

## Performance

### Q: The 3D animation is slow on my device. What can I do?
**A:** 
- Reduce particle count in `components/Hero3D.tsx`
- Or disable 3D entirely and use a simple header
- See CUSTOMIZATION.md for instructions

### Q: How do I optimize for mobile?
**A:** The site is already mobile-optimized! But you can further optimize by:
- Reducing particle count
- Using smaller images
- Minimizing custom animations

### Q: Why is the build taking so long?
**A:** First build is always slower. Subsequent builds are faster due to caching.

---

## Deployment

### Q: How do I deploy this website?
**A:** Easiest way:
1. Push to GitHub
2. Connect to Vercel
3. Click Deploy
See DEPLOYMENT.md for detailed guide.

### Q: Is deployment free?
**A:** Yes! Vercel and Netlify offer free hosting for personal projects.

### Q: Do I need a custom domain?
**A:** No, you get a free subdomain (e.g., yoursite.vercel.app). Custom domains are optional.

### Q: How do I connect a custom domain?
**A:** In Vercel/Netlify settings, add your domain and follow DNS instructions.

---

## Data & Storage

### Q: Where is data stored?
**A:** In browser localStorage. Each user's data is stored locally on their device.

### Q: What happens if I clear browser data?
**A:** Cart and order history will be lost. For permanent storage, implement a backend database.

### Q: Can multiple users share the same cart?
**A:** Not by default. Each browser has its own cart. For shared carts, implement user accounts with backend.

### Q: Is the data secure?
**A:** localStorage is client-side only. For sensitive data or real transactions, use a backend with proper security.

### Q: How do I export order data?
**A:** Currently manual. For automated exports, you'll need to add export functionality or use a database.

---

## Customization

### Q: Can I change the menu items?
**A:** Yes! Edit `components/MenuGrid.tsx`. See CUSTOMIZATION.md.

### Q: Can I add more pages?
**A:** Yes! Create new files in the `app/` folder. Next.js uses file-based routing.

### Q: How do I add user authentication?
**A:** Use NextAuth.js. See CUSTOMIZATION.md for advanced features.

### Q: Can I integrate with a backend?
**A:** Yes! You can add API routes in `app/api/` or connect to external APIs.

### Q: How do I add a payment gateway?
**A:** Integrate Stripe, PayPal, or other providers. See their documentation for Next.js integration.

---

## Troubleshooting

### Q: 3D animation not showing
**A:**
- Update browser to latest version
- Enable hardware acceleration in browser settings
- Check console (F12) for WebGL errors

### Q: Cart not saving between sessions
**A:**
- Check if localStorage is enabled in browser
- Check browser privacy settings
- Try different browser

### Q: Build fails with errors
**A:**
```bash
# Clean and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Q: Page shows blank screen
**A:**
- Check browser console (F12) for errors
- Ensure all dependencies installed
- Try clearing browser cache

### Q: TypeScript errors everywhere
**A:**
- Run `npm install` to ensure types are installed
- Check `tsconfig.json` exists
- Restart development server

---

## Browser Compatibility

### Q: Which browsers are supported?
**A:** 
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ⚠️ Internet Explorer (not supported)

### Q: Does it work on mobile?
**A:** Yes! Fully responsive and tested on iOS and Android.

### Q: Why does 3D look different in different browsers?
**A:** WebGL implementation varies. Chrome generally has best performance.

---

## Updates & Maintenance

### Q: How do I update dependencies?
**A:**
```bash
npm update
# or for major updates
npm install next@latest react@latest
```

### Q: Will this break my site?
**A:** Test in development first before updating production.

### Q: How do I contribute improvements?
**A:** See CONTRIBUTING.md for guidelines.

### Q: Where can I report bugs?
**A:** Create an issue on GitHub or contact the maintainer.

---

## Business & Commercial Use

### Q: Can I use this for my restaurant?
**A:** Yes! It's free for commercial use under MIT license.

### Q: Do I need to credit the creator?
**A:** Not required, but appreciated!

### Q: Can I sell this or modified versions?
**A:** Yes, MIT license allows commercial use.

### Q: Can I remove the "powered by" text?
**A:** Yes, you can customize all text and branding.

---

## Advanced Features

### Q: How do I add a backend database?
**A:** Use Prisma with PostgreSQL, MongoDB, or other databases. See documentation for database integration.

### Q: Can I add real-time updates?
**A:** Yes! Use Socket.io, Pusher, or Firebase for real-time features.

### Q: How do I add user accounts?
**A:** Use NextAuth.js for authentication. See their documentation.

### Q: Can I integrate with delivery services?
**A:** Yes! Integrate APIs from delivery platforms like Uber Eats, DoorDash, etc.

### Q: How do I add email notifications?
**A:** Use services like SendGrid, Mailgun, or Nodemailer.

---

## Performance & Optimization

### Q: How fast is this website?
**A:** Very fast! Next.js provides excellent performance. Check with Lighthouse.

### Q: Can I improve loading speed?
**A:**
- Optimize images
- Reduce 3D complexity
- Use Next.js Image component
- Enable caching

### Q: Does it work offline?
**A:** Basic functionality yes (cached), but 3D requires assets to load.

---

## Cost & Hosting

### Q: How much does it cost to host?
**A:**
- **Free tier**: Vercel/Netlify (perfect for starting)
- **Paid**: $5-20/month for more features

### Q: What about bandwidth costs?
**A:** Free tiers include generous bandwidth (100GB+/month).

### Q: Do I need a server?
**A:** No! Deploy to serverless platforms like Vercel.

---

## Support & Help

### Q: Where can I get help?
**A:**
1. Read documentation files
2. Check this FAQ
3. Search online (Stack Overflow, GitHub)
4. Check browser console for errors

### Q: Is there a community?
**A:** Check GitHub for discussions and issues.

### Q: Can I hire someone to customize this?
**A:** Yes! Many freelancers can help with customization.

---

## Still Have Questions?

- 📖 Read the documentation files
- 🔍 Search online for specific issues
- 💬 Ask in developer communities
- 📧 Contact for support

---

**Happy building! 🚀**
