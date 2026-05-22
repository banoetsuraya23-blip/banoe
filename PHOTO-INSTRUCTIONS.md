# 📸 Instruksi Foto Profil

## Cara Menambahkan Foto Profil

### 1. **Persiapan Foto**
Dari foto yang Anda berikan, lakukan editing berikut:

#### Spesifikasi Editing:
- **Crop**: Potong menjadi setengah badan (dari kepala sampai pinggang)
- **Aspect Ratio**: Portrait (3:4 atau 9:16)
- **Resolusi**: Minimal 800x1000px untuk kualitas terbaik
- **Format**: JPG atau PNG
- **Background**: Pertahankan background asli (hijau/natural)
- **Efek**:
  - Tingkatkan sharpness/ketajaman
  - Adjust brightness & contrast untuk tampilan profesional
  - Color grading yang natural
  - Slight vignette untuk fokus pada subjek

#### Tools yang Bisa Digunakan:
1. **Adobe Photoshop** (Profesional)
   - Camera Raw Filter untuk enhancement
   - Smart Sharpen untuk ketajaman
   - Adjustment Layers untuk color grading

2. **Lightroom** (Mudah & Cepat)
   - Preset: Portrait Professional
   - Clarity: +20 hingga +30
   - Sharpening: 60-80
   - Noise Reduction jika perlu

3. **Online Tools** (Gratis):
   - Photopea.com (mirip Photoshop)
   - Canva.com (dengan Pro features)
   - Remove.bg (untuk background removal jika perlu)

### 2. **Styling untuk "Keluar dari Border"**
Foto sudah di-setup untuk efek "keluar dari border":
- Subjek akan tampak menonjol keluar dari container
- Background tetap terlihat di belakang
- Shadow effect untuk depth
- Hover effect: slight zoom

### 3. **Upload Foto**

#### Langkah-langkah:
```bash
# 1. Simpan foto hasil edit dengan nama: profile.jpg
# 2. Letakkan di folder: noe-portfolio/public/images/
# 3. Path lengkap: noe-portfolio/public/images/profile.jpg
```

#### Struktur Folder:
```
noe-portfolio/
├── public/
│   └── images/
│       └── profile.jpg  ← Letakkan foto di sini
├── src/
└── ...
```

### 4. **Verifikasi**
Setelah foto diupload:
1. Jalankan: `npm run dev`
2. Buka browser: `http://localhost:5173`
3. Foto akan muncul di Hero section
4. Jika foto tidak muncul, cek:
   - Nama file harus: `profile.jpg` (huruf kecil semua)
   - Lokasi: `public/images/profile.jpg`
   - Format: JPG atau PNG

### 5. **Tips Hasil Terbaik**

#### Pencahayaan:
- Foto asli sudah bagus dengan natural light
- Pastikan wajah tidak terlalu gelap atau terang

#### Pose:
- Pose santai sudah sempurna
- Ekspresi natural dan confident

#### Background:
- Background hijau natural sudah bagus
- Tidak perlu dihapus, justru menambah karakter

#### Editing:
- Jangan over-edit
- Pertahankan natural look
- Focus pada ketajaman dan clarity

---

## 🎨 Contoh Editing Workflow (Lightroom)

1. **Import** foto ke Lightroom
2. **Basic Adjustments**:
   - Exposure: +0.3 hingga +0.5
   - Contrast: +15
   - Highlights: -10
   - Shadows: +20
   - Whites: +10
   - Blacks: -5

3. **Clarity & Sharpness**:
   - Clarity: +25
   - Texture: +15
   - Sharpening: 70
   - Masking: 50

4. **Color Grading**:
   - Vibrance: +10
   - Saturation: +5
   - HSL: Adjust skin tones jika perlu

5. **Crop**:
   - Aspect Ratio: 3:4
   - Crop dari kepala sampai pinggang
   - Pastikan komposisi seimbang

6. **Export**:
   - Format: JPG
   - Quality: 90%
   - Resize: Width 800px (maintain aspect ratio)
   - Sharpen for Screen: Standard

---

## 📝 Catatan Penting

- Foto akan di-display dengan rounded corners (border-radius)
- Hover effect akan membuat foto sedikit zoom
- Shadow effect sudah di-setup untuk depth
- Responsive untuk semua ukuran layar

---

**Jika ada masalah atau butuh bantuan editing, silakan hubungi!** 📸✨
