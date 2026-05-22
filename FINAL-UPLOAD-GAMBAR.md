# ✅ FINAL - Upload Gambar Portfolio

## 🎯 **LOKASI FOTO PROFIL**

Foto profil **HANYA** ada di **Hero Section (Halaman Home)** dengan layout:

```
┌─────────────────────────────────────────────────────────┐
│                    HERO SECTION                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌──────────┐              Hello, I'm                  │
│  │          │              Banoe Izdihar Tsuraya        │
│  │  FOTO    │              [Animated Tagline]           │
│  │  BULAT   │              [Deskripsi Singkat]          │
│  │  GLOW    │              [View My Work] [Get Touch]   │
│  │ MAROON   │              [Instagram] [WhatsApp]       │
│  └──────────┘                                           │
│   (KIRI)                    (KANAN)                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### **Efek Foto Profil:**
- ✅ **Bentuk**: Lingkaran (circular)
- ✅ **Glow Effect**: Maroon/merah (blur-xl)
- ✅ **Animasi**: Pulse glow (berkedip halus)
- ✅ **Border**: Red border (4px)
- ✅ **Hover**: Scale 1.05 (zoom sedikit)
- ✅ **Shadow**: Red shadow
- ✅ **Decorative**: 2 blur circles di pojok

---

## 📸 **2 GAMBAR YANG PERLU DIUPLOAD**

### **1. Foto Profil** (`profile.jpg`)
**Digunakan di:**
- ✅ Hero.jsx (halaman home, kiri, circular dengan glow maroon)

**Path:**
```
noe-portfolio/public/images/profile.jpg
```

**Spesifikasi:**
- Format: JPG
- Size: 800x800px (square/persegi)
- File size: < 500KB
- Crop: 1:1 ratio (square)

---

### **2. Screenshot Robloxin Aja** (`robloxin-aja.jpg`)
**Digunakan di:**
- ✅ Portfolio.jsx (portfolio section, center)

**Path:**
```
noe-portfolio/public/images/robloxin-aja.jpg
```

**Spesifikasi:**
- Format: JPG
- Size: 1200x800px (landscape)
- File size: < 800KB
- Crop: 3:2 ratio (landscape)

---

## 🚀 **CARA UPLOAD - 3 LANGKAH**

### **LANGKAH 1: Simpan Gambar dari Chat**

1. **Foto Profil Anda:**
   - Klik kanan pada foto profil di chat
   - Pilih "Save image as..." / "Simpan gambar sebagai..."
   - Nama file: `profile.jpg` (lowercase, huruf kecil)
   - Simpan ke: Desktop (sementara)

2. **Screenshot Robloxin Aja:**
   - Klik kanan pada screenshot website di chat
   - Pilih "Save image as..." / "Simpan gambar sebagai..."
   - Nama file: `robloxin-aja.jpg` (lowercase, dengan dash)
   - Simpan ke: Desktop (sementara)

---

### **LANGKAH 2: Copy ke Folder Project**

**Cara A: File Explorer (Paling Mudah)**
1. Buka File Explorer
2. Navigate ke: `D:\Personal Branding\noe-portfolio\public\images\`
3. Copy kedua file dari Desktop ke folder ini

**Cara B: Drag & Drop di VS Code**
1. Buka VS Code
2. Di sidebar kiri, expand: `noe-portfolio` → `public` → `images`
3. Drag & drop kedua file dari Desktop ke folder `images`

---

### **LANGKAH 3: Test di Browser**

```bash
cd noe-portfolio
npm run dev
```

Buka browser: `http://localhost:5173`

**Check:**
- ✅ Hero section (paling atas) - Foto profil circular di kiri dengan glow maroon
- ✅ Portfolio section - Screenshot Robloxin Aja di center

---

## 📂 **STRUKTUR FOLDER FINAL**

```
noe-portfolio/
├── public/
│   └── images/                    ← Folder ini
│       ├── profile.jpg            ← Upload foto Anda (800x800px)
│       └── robloxin-aja.jpg       ← Upload screenshot (1200x800px)
├── src/
│   └── components/
│       ├── Hero.jsx               ✅ Pakai profile.jpg (circular, glow)
│       ├── About.jsx              ✅ Tidak ada foto (sudah dihapus)
│       └── Portfolio.jsx          ✅ Pakai robloxin-aja.jpg
```

---

## ⚠️ **PENTING - NAMA FILE HARUS EXACT**

### **✅ BENAR:**
```
profile.jpg          (lowercase, .jpg)
robloxin-aja.jpg     (lowercase, dengan dash, .jpg)
```

### **❌ SALAH:**
```
Profile.jpg          (capital P)
PROFILE.jpg          (semua capital)
profile.JPG          (capital JPG)
profile.png          (format png)
robloxin_aja.jpg     (underscore, bukan dash)
robloxinaja.jpg      (tanpa dash)
robloxin aja.jpg     (ada spasi)
```

---

## ⚠️ **PENTING - LOKASI HARUS EXACT**

### **✅ BENAR:**
```
noe-portfolio/public/images/profile.jpg
noe-portfolio/public/images/robloxin-aja.jpg
```

### **❌ SALAH:**
```
noe-portfolio/public/profile.jpg           (tidak di folder images)
noe-portfolio/images/profile.jpg           (tidak di folder public)
noe-portfolio/src/images/profile.jpg       (di folder src)
noe-portfolio/src/assets/profile.jpg       (di folder assets)
```

---

## ✅ **CHECKLIST UPLOAD**

Sebelum test:
- [ ] Folder `public/images/` sudah ada
- [ ] Simpan foto profil dari chat
- [ ] Rename foto profil → `profile.jpg` (lowercase)
- [ ] Simpan screenshot Robloxin Aja dari chat
- [ ] Rename screenshot → `robloxin-aja.jpg` (lowercase, dash)
- [ ] Copy kedua file ke `noe-portfolio/public/images/`
- [ ] Verify: Ada 2 file di folder images

Setelah upload:
- [ ] Run: `npm run dev`
- [ ] Buka: `http://localhost:5173`
- [ ] Check Hero section: Foto profil circular di kiri
- [ ] Check Hero section: Glow maroon effect terlihat
- [ ] Check Hero section: Hover zoom berfungsi
- [ ] Check Portfolio section: Screenshot Robloxin Aja muncul
- [ ] Check Portfolio section: Hover scale berfungsi
- [ ] Test di mobile view (resize browser)

---

## 🎨 **VISUAL HASIL AKHIR**

### **Hero Section (Home):**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│    ╭─────────╮                                          │
│   ╱           ╲         Hello, I'm                      │
│  │   FOTO      │        Banoe Izdihar Tsuraya           │
│  │   PROFIL    │        Modern Developer Vibe           │
│  │   BULAT     │        [Deskripsi panjang...]          │
│   ╲  GLOW    ╱         [Buttons] [Social Links]         │
│    ╰─────────╯                                          │
│     ↑ Maroon glow                                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### **About Section:**
```
┌─────────────────────────────────────────────────────────┐
│              About Me                                   │
│              ─────────                                   │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Personal Info    │  │ Skills & Goals   │            │
│  │ - Background     │  │ - Career Goals   │            │
│  │ - Education      │  │ - Soft Skills    │            │
│  │ - Hobbies        │  │ - Hard Skills    │            │
│  │                  │  │ - CV Button      │            │
│  │                  │  │ - River of Life  │            │
│  └──────────────────┘  └──────────────────┘            │
│                                                         │
│  ↑ Tidak ada foto di sini                              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### **Portfolio Section:**
```
┌─────────────────────────────────────────────────────────┐
│              Portfolio                                  │
│              ─────────                                   │
│                                                         │
│        ┌──────────────────────────┐                     │
│        │                          │                     │
│        │  SCREENSHOT ROBLOXIN AJA │                     │
│        │  (Roblox Characters)     │                     │
│        │                          │                     │
│        └──────────────────────────┘                     │
│                                                         │
│        Robloxin Aja                                     │
│        Gaming Community Website                         │
│        [Description] [Tags] [Link]                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ❓ **TROUBLESHOOTING**

### **Gambar tidak muncul?**

**1. Check nama file:**
```bash
# Di terminal/command prompt:
cd noe-portfolio/public/images
dir

# Harus muncul:
profile.jpg
robloxin-aja.jpg
```

**2. Check browser console:**
- Tekan F12 di browser
- Lihat tab Console
- Cari error 404 (file not found)
- Jika ada 404, berarti nama atau lokasi salah

**3. Clear browser cache:**
```
Windows: Ctrl + Shift + R
Mac: Cmd + Shift + R
```

**4. Restart dev server:**
```bash
# Stop server: Ctrl + C
# Start lagi: npm run dev
```

**5. Check file size:**
```
Profile: < 500KB
Robloxin: < 800KB

Jika lebih besar, compress di: https://tinypng.com
```

---

## 🎯 **RINGKASAN**

### **Foto Profil:**
- ✅ Lokasi: Hero section (home, kiri)
- ✅ Bentuk: Circular (lingkaran)
- ✅ Efek: Glow maroon, pulse animation
- ✅ File: `public/images/profile.jpg`

### **Screenshot Robloxin Aja:**
- ✅ Lokasi: Portfolio section (center)
- ✅ Bentuk: Rectangular (card)
- ✅ Efek: Hover scale
- ✅ File: `public/images/robloxin-aja.jpg`

### **About Section:**
- ✅ Tidak ada foto
- ✅ Hanya text content (background, education, hobbies, skills)

---

## 📝 **NEXT STEPS**

Setelah upload gambar:

1. ✅ Test website di browser
2. ⚠️ Update Google Drive links untuk CV & River of Life
   - Lihat file: `GOOGLE-DRIVE-SETUP.md`
3. 🚀 Website siap deploy!

---

**Upload 2 gambar, langsung jadi!** 📸✨
