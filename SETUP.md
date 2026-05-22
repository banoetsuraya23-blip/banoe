# 🚀 Quick Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation Steps

### 1. Install Dependencies
```bash
cd noe-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:5173**

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 🎯 Next Steps

### Customize Your Portfolio

1. **Add Your Photo**
   - Place your photo in `public/images/profile.jpg`
   - Update `src/components/Hero.jsx` to use your photo

2. **Add Certificate Images**
   - Create folder: `public/certificates/`
   - Add your certificate images
   - Update `src/components/Certificates.jsx`

3. **Upload Your CV**
   - Place your CV in `public/cv/`
   - Update the link in `src/components/About.jsx`

4. **Add More Projects**
   - Edit `src/components/Portfolio.jsx`
   - Add project images to `public/projects/`

## 🎨 Customization Tips

### Change Colors
Edit `tailwind.config.js` to modify the color scheme.

### Modify Content
All content is in the component files under `src/components/`.

### Add Sections
Create new components and import them in `src/App.jsx`.

## 📦 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies Not Installing
Try:
```bash
npm cache clean --force
npm install
```

### Build Errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules
npm install
```

## 📞 Need Help?

Check the main README.md for more detailed information.

---

Happy coding! 🎉
