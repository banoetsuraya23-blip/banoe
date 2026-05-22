# 📸 Setup Foto Profil - Instruksi Final

## Foto yang Digunakan
Foto baru dengan pose yang lebih natural dan profesional.

---

## 🎯 Spesifikasi Editing

### 1. **Cropping**
- **Area**: Potong dari kepala sampai pinggang (setengah badan)
- **Aspect Ratio**: 3:4 (Portrait)
- **Komposisi**: 
  - Kepala di 1/3 bagian atas
  - Ruang di atas kepala: sedikit (headroom)
  - Badan sampai pinggang terlihat

### 2. **Enhancement untuk Tampilan Profesional**

#### Sharpness & Clarity:
```
Sharpening: 70-80
Clarity: +25 hingga +30
Texture: +15
Detail: High
```

#### Brightness & Contrast:
```
Exposure: +0.3 hingga +0.5
Contrast: +15 hingga +20
Highlights: -10
Shadows: +20
Whites: +10
Blacks: -5
```

#### Color Grading:
```
Temperature: Sedikit warm (+5 hingga +10)
Vibrance: +10
Saturation: +5
Skin Tone: Natural, tidak over-saturated
```

#### Background:
```
- Pertahankan background hijau natural
- Slight blur pada background (jika perlu)
- Focus pada subjek
```

---

## 🛠️ Tools & Workflow

### **Option 1: Adobe Lightroom (Recommended)**

#### Step-by-step:
1. **Import** foto ke Lightroom
2. **Crop Tool** (R):
   - Aspect Ratio: 3:4
   - Crop dari kepala sampai pinggang
   - Pastikan komposisi seimbang

3. **Basic Panel**:
   - Exposure: +0.4
   - Contrast: +18
   - Highlights: -10
   - Shadows: +20
   - Whites: +10
   - Blacks: -5

4. **Presence Panel**:
   - Clarity: +28
   - Texture: +15
   - Vibrance: +10
   - Saturation: +5

5. **Detail Panel**:
   - Sharpening: 75
   - Radius: 1.0
   - Detail: 25
   - Masking: 50 (hold Alt untuk preview)

6. **HSL Panel** (Optional):
   - Adjust skin tones jika perlu
   - Orange: Saturation -5 hingga -10
   - Yellow: Luminance +5

7. **Effects Panel** (Optional):
   - Vignette: -5 hingga -10 (subtle)
   - Feather: 50

8. **Export**:
   - Format: JPG
   - Quality: 90%
   - Resize: Width 800px
   - Sharpen for Screen: Standard
   - Save as: `profile.jpg`

---

### **Option 2: Photoshop**

#### Step-by-step:
1. **Open** foto di Photoshop
2. **Crop Tool** (C):
   - Ratio: 3:4
   - Crop setengah badan

3. **Camera Raw Filter**:
   - Basic: Adjust exposure, contrast, shadows
   - Detail: Sharpening 70-80
   - HSL: Adjust colors

4. **Smart Sharpen**:
   - Filter > Sharpen > Smart Sharpen
   - Amount: 100%
   - Radius: 1.0px

5. **Adjustment Layers**:
   - Curves: Slight S-curve untuk contrast
   - Vibrance: +10 hingga +15

6. **Save for Web**:
   - Format: JPG
   - Quality: 80-90
   - Width: 800px
   - Save as: `profile.jpg`

---

### **Option 3: Online Tools (Gratis)**

#### Photopea.com (Mirip Photoshop):
1. Upload foto
2. Crop Tool: 3:4 ratio
3. Filter > Camera Raw
4. Adjust: Exposure, Contrast, Clarity
5. Filter > Sharpen > Smart Sharpen
6. Export as JPG

#### Canva Pro:
1. Upload foto
2. Edit Photo > Adjust
3. Brightness: +10
4. Contrast: +15
5. Clarity: +20
6. Sharpen: High
7. Download as JPG (800px width)

---

## 📁 Upload Instructions

### 1. **Save File**
```
Filename: profile.jpg
Format: JPG
Size: ~200-500KB (after optimization)
Dimensions: 800x1000px (recommended)
```

### 2. **Upload Location**
```bash
noe-portfolio/
└── public/
    └── images/
        └── profile.jpg  ← Letakkan di sini
```

### 3. **Verify**
```bash
# Run development server
npm run dev

# Open browser
http://localhost:5173

# Check Hero section
# Foto akan muncul dengan rounded corners & shadow
```

---

## 🎨 Expected Result

### Visual Style:
- ✅ Sharp & clear (seperti foto kamera profesional)
- ✅ Natural colors (tidak over-saturated)
- ✅ Good contrast (subjek menonjol dari background)
- ✅ Professional look (clean & polished)

### Technical:
- ✅ Aspect ratio: 3:4 (portrait)
- ✅ Resolution: 800x1000px
- ✅ File size: <500KB
- ✅ Format: JPG

### Display:
- ✅ Rounded corners (border-radius: 1.5rem)
- ✅ Shadow effect untuk depth
- ✅ Hover zoom effect (scale 1.05)
- ✅ Responsive untuk semua device

---

## 🔍 Quality Checklist

Sebelum upload, pastikan:
- [ ] Foto sudah di-crop setengah badan
- [ ] Sharpness tinggi (tidak blur)
- [ ] Brightness & contrast sudah optimal
- [ ] Warna natural (tidak terlalu saturated)
- [ ] Background tetap terlihat
- [ ] File size <500KB
- [ ] Filename: `profile.jpg` (lowercase)

---

## 💡 Tips untuk Hasil Terbaik

### DO:
✅ Crop dengan komposisi yang baik
✅ Enhance sharpness & clarity
✅ Adjust brightness untuk tampilan cerah
✅ Pertahankan natural look
✅ Test di berbagai device

### DON'T:
❌ Over-sharpen (akan terlihat artificial)
❌ Over-saturate colors (tidak natural)
❌ Crop terlalu ketat (beri ruang)
❌ Remove background (pertahankan asli)
❌ Over-edit (keep it natural)

---

## 🚀 Quick Start (5 Menit)

### Menggunakan Lightroom:
1. Import foto → Crop 3:4 → Setengah badan
2. Preset: Portrait Professional
3. Clarity +25, Sharpening 75
4. Export: JPG, 800px, Quality 90%
5. Save as `profile.jpg`
6. Upload ke `public/images/`
7. Done! ✨

---

## 📞 Troubleshooting

### Foto tidak muncul?
- Cek nama file: harus `profile.jpg` (lowercase)
- Cek lokasi: `public/images/profile.jpg`
- Clear cache: Ctrl+Shift+R

### Foto blur?
- Re-export dengan quality lebih tinggi
- Pastikan sharpening sudah applied
- Check original resolution

### Warna tidak natural?
- Reduce saturation
- Adjust white balance
- Use natural color grading

---

**Selamat mengedit! Hasil akhir akan terlihat profesional dan menarik!** 📸✨
