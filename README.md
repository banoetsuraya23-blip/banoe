# Noe Portfolio Website

A modern, minimalist portfolio website for **Banoe Izdihar Tsuraya (Noe)** - Aspiring Web Developer & Data Analyst.

## 🎨 Design Features

- **Dark-first design** with light mode toggle
- **Modern color palette** with red accent colors
- **Smooth animations** using AOS (Animate On Scroll)
- **Typed.js effect** on hero tagline
- **Fully responsive** design for all devices
- **Clean, minimalist** UI with generous whitespace

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **AOS** - Scroll animations
- **Typed.js** - Typing effect
- **Google Fonts** - Roboto & Google Sans

## 📦 Installation

1. Navigate to the project directory:
```bash
cd noe-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🚀 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📝 Customization Guide

### Update Profile Photo
Replace the placeholder in `src/components/Hero.jsx` with your actual photo:
```jsx
<img src="/path-to-your-photo.jpg" alt="Banoe Izdihar Tsuraya" className="w-full h-full object-cover rounded-full" />
```

### Add Certificates
1. Add certificate images to `public/certificates/` folder
2. Update the `certificates` array in `src/components/Certificates.jsx`

### Update CV Link
In `src/components/About.jsx`, update the Download CV button:
```jsx
<a href="/path-to-your-cv.pdf" download>
```

### Add More Projects
Edit the `projects` array in `src/components/Portfolio.jsx` to add more projects.

## 📂 Project Structure

```
noe-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🎨 Color Palette

- **Background**: `#0B090A`, `#161A1D`
- **Accent**: `#660708`, `#A4161A`, `#BA181B`, `#E5383B`
- **Text**: `#D3D3D3`, `#F5F3F4`, `#FFFFFF`
- **Tertiary**: `#B1A7A6`

## 📱 Sections

1. **Home** - Hero section with animated tagline
2. **About** - Personal background, education, and goals
3. **Skills** - Technical skills and competencies
4. **Portfolio** - Project showcase
5. **Certificates** - Professional certifications
6. **Contact** - Contact information and social links

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Banoe Izdihar Tsuraya**
- GitHub: [@akhtarakifa](https://github.com/akhtarakifa)
- LinkedIn: [Banoe Izdihar Tsuraya](https://www.linkedin.com/in/akhtar-akifa-sakhi-a47409360)
- Instagram: [@akhtarakifa](https://www.instagram.com/akhtarakifa/)

---

Built with ❤️ using React, Vite, and Tailwind CSS
