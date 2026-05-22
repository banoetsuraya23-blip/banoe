# 📸 Panduan Upload Gambar

## 📁 Struktur Folder

```
noe-portfolio/
└── public/
    └── images/
        ├── profile.jpg          ← Foto profil untuk Hero section
        └── robloxin-aja.jpg     ← Screenshot portfolio Robloxin Aja
```

---

## 🖼️ **1. Foto Profil (Hero Section)**

### **Gambar yang Digunakan:**
Foto dengan pose natural, background hijau, setengah badan.

### **Spesifikasi:**
- **Filename**: `profile.jpg`
- **Location**: `public/images/profile.jpg`
- **Format**: JPG atau PNG
- **Recommended Size**: 800x800px (square untuk circular display)
- **Aspect Ratio**: 1:1 (square)
- **File Size**: < 500KB (optimized)

### **Editing Requirements:**
1. **Crop**: Square (1:1) - fokus pada wajah dan upper body
2. **Resolution**: High quality, minimal 800x800px
3. **Brightness**: Adjust agar wajah terlihat jelas
4. **Sharpness**: Tingkatkan ketajaman
5. **Background**: Pertahankan background hijau natural

### **Quick Edit (Lightroom/Photoshop):**
```
Crop: 1:1 square
Exposure: +0.3 to +0.5
Contrast: +15
Clarity: +25
Sharpening: 70-80
Export: JPG, Quality 90%, 800x800px
```

### **Display Style:**
- ✅ Circular shape (`rounded-full`)
- ✅ Maroon glow effect around border
- ✅ Pulse animation on glow
- ✅ Hover zoom effect (scale 1.05)
- ✅ Shadow maroon untuk depth

---

## 🎮 **2. Portfolio Image (Robloxin Aja)**

### **Gambar yang Digunakan:**
Screenshot website Robloxin Aja dengan Roblox characters.

### **Spesifikasi:**
- **Filename**: `robloxin-aja.jpg`
- **Location**: `public/images/robloxin-aja.jpg`
- **Format**: JPG atau PNG
- **Recommended Size**: 1200x800px
- **Aspect Ratio**: 3:2 (landscape)
- **File Size**: < 800KB (optimized)

### **Editing Requirements:**
1. **Crop**: 3:2 landscape - fokus pada hero section website
2. **Resolution**: High quality untuk preview
3. **Brightness**: Pastikan text terlihat jelas
4. **Sharpness**: Tingkatkan ketajaman UI elements

### **Quick Edit:**
```
Crop: 3:2 landscape (1200x800px)
Sharpness: +20
Clarity: +15
Export: JPG, Quality 85%, 1200x800px
```

### **Display Style:**
- ✅ Rectangular card
- ✅ Rounded corners
- ✅ Hover scale effect (1.1x)
- ✅ Shadow on hover
- ✅ Smooth transition

---

## 📋 **Upload Steps**

### **Step 1: Prepare Images**
```bash
# Edit kedua gambar sesuai spesifikasi di atas
# Save dengan nama yang benar:
- profile.jpg (800x800px, square)
- robloxin-aja.jpg (1200x800px, landscape)
```

### **Step 2: Create Folder**
```bash
# Jika folder belum ada, buat folder images
cd noe-portfolio/public
mkdir images
```

### **Step 3: Upload Files**
```bash
# Copy kedua file ke folder public/images/
noe-portfolio/
└── public/
    └── images/
        ├── profile.jpg          ← Upload di sini
        └── robloxin-aja.jpg     ← Upload di sini
```

### **Step 4: Verify**
```bash
# Jalankan development server
npm run dev

# Buka browser
http://localhost:5173

# Check:
1. Hero section - Foto profil muncul (circular dengan glow maroon)
2. Portfolio section - Screenshot Robloxin Aja muncul
```

---

## 🎨 **Image Optimization Tips**

### **Online Tools (Gratis):**

#### **1. TinyPNG / TinyJPG**
- URL: https://tinypng.com
- Fungsi: Compress tanpa kehilangan kualitas
- Hasil: File size 50-70% lebih kecil

#### **2. Squoosh**
- URL: https://squoosh.app
- Fungsi: Resize & compress dengan preview
- Hasil: Kontrol penuh atas quality vs size

#### **3. Photopea**
- URL: https://photopea.com
- Fungsi: Edit online (mirip Photoshop)
- Hasil: Crop, adjust, export

### **Photoshop Quick Action:**
```
1. Open image
2. Image > Image Size
   - Profile: 800x800px
   - Robloxin: 1200x800px
3. Filter > Sharpen > Smart Sharpen (Amount: 100%, Radius: 1.0)
4. File > Export > Save for Web
   - Format: JPG
   - Quality: 80-90
   - Optimize: checked
5. Save
```

---

## 🔍 **Troubleshooting**

### **Gambar tidak muncul?**

#### **Check 1: Filename**
```bash
# Harus exact match (case-sensitive)
✅ profile.jpg
❌ Profile.jpg
❌ profile.JPG
❌ profile.png (jika di code pakai .jpg)
```

#### **Check 2: Location**
```bash
# Harus di folder public/images/
✅ public/images/profile.jpg
❌ public/profile.jpg
❌ src/images/profile.jpg
❌ images/profile.jpg
```

#### **Check 3: File Size**
```bash
# Jika file terlalu besar, browser lambat load
Profile: < 500KB
Robloxin: < 800KB

# Compress jika lebih besar
```

#### **Check 4: Browser Cache**
```bash
# Clear cache jika gambar tidak update
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

---

## 📊 **Expected Results**

### **Hero Section (Profile Photo):**
```
┌─────────────────────────────────────┐
│                                     │
│  ┌──────────┐    Hello, I'm        │
│  │          │    Banoe Izdihar      │
│  │  Photo   │    Tsuraya            │
│  │  Bulat   │                       │
│  │  Glow    │    [Tagline]          │
│  │  Maroon  │    [Description]      │
│  └──────────┘    [Buttons]          │
│                                     │
└─────────────────────────────────────┘
```

### **Portfolio Section (Robloxin Aja):**
```
┌─────────────────────────────────────┐
│         Portfolio                   │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │                             │   │
│  │  [Robloxin Aja Screenshot]  │   │
│  │  with Roblox Characters     │   │
│  │                             │   │
│  └─────────────────────────────┘   │
│                                     │
│  Robloxin Aja                       │
│  Gaming Community Website           │
│  [Description]                      │
│  [Tags] [GitHub Link]               │
│                                     │
└─────────────────────────────────────┘
```

---

## ✅ **Checklist**

### **Before Upload:**
- [ ] Foto profil sudah di-edit (800x800px, square)
- [ ] Screenshot Robloxin Aja sudah di-crop (1200x800px)
- [ ] Kedua file sudah di-compress (< 500KB & < 800KB)
- [ ] Filename sudah benar (lowercase, .jpg)

### **After Upload:**
- [ ] Folder `public/images/` sudah dibuat
- [ ] File `profile.jpg` ada di `public/images/`
- [ ] File `robloxin-aja.jpg` ada di `public/images/`
- [ ] Development server running (`npm run dev`)
- [ ] Browser dibuka (`http://localhost:5173`)
- [ ] Foto profil muncul di Hero section
- [ ] Screenshot muncul di Portfolio section
- [ ] Hover effects berfungsi
- [ ] Loading speed cepat

---

## 🎯 **Quick Summary**

### **2 Gambar yang Perlu Diupload:**

1. **profile.jpg**
   - Size: 800x800px (square)
   - Location: `public/images/profile.jpg`
   - Display: Circular dengan maroon glow

2. **robloxin-aja.jpg**
   - Size: 1200x800px (landscape)
   - Location: `public/images/robloxin-aja.jpg`
   - Display: Rectangular card dengan hover effect

### **Upload Location:**
```
noe-portfolio/public/images/
```

### **Verify:**
```bash
npm run dev
# Check Hero & Portfolio sections
```

---

**Selamat mengupload! Gambar akan langsung muncul setelah diupload!** 📸✨
