# 📄 Google Drive Setup - CV & River of Life

## 🎯 Overview

Dua tombol di About section yang akan membuka file di Google Drive:
1. **Unduh CV** - Link ke CV PDF di Google Drive
2. **River of Life** - Link ke River of Life document di Google Drive

---

## 📋 **Step-by-Step Setup**

### **Step 1: Upload File ke Google Drive**

#### **Upload CV:**
1. Buka Google Drive: https://drive.google.com
2. Klik **New** → **File upload**
3. Pilih file CV (format: PDF)
4. Tunggu sampai upload selesai

#### **Upload River of Life:**
1. Di Google Drive yang sama
2. Klik **New** → **File upload**
3. Pilih file River of Life (format: PDF/DOCX/Image)
4. Tunggu sampai upload selesai

---

### **Step 2: Set File Permission (Public)**

#### **Untuk CV:**
1. Klik kanan pada file CV
2. Pilih **Share** atau **Get link**
3. Di bagian "General access", klik dropdown
4. Pilih **Anyone with the link**
5. Set permission: **Viewer** (read-only)
6. Klik **Copy link**

#### **Untuk River of Life:**
1. Klik kanan pada file River of Life
2. Pilih **Share** atau **Get link**
3. Di bagian "General access", klik dropdown
4. Pilih **Anyone with the link**
5. Set permission: **Viewer** (read-only)
6. Klik **Copy link**

---

### **Step 3: Extract File ID**

#### **Format Link Google Drive:**
```
https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing
```

#### **Contoh:**
```
Link lengkap:
https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7/view?usp=sharing

File ID:
1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7
```

#### **Cara Extract:**
1. Copy link yang didapat dari Step 2
2. Cari bagian setelah `/d/` dan sebelum `/view`
3. Itu adalah **File ID** Anda

---

### **Step 4: Update Code**

#### **File Location:**
```
noe-portfolio/src/components/About.jsx
```

#### **Find This Code:**
```jsx
{/* Download CV & River of Life Buttons */}
<div className="space-y-3">
  <a
    href="https://drive.google.com/file/d/YOUR_CV_FILE_ID/view"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary w-full text-center inline-block"
  >
    <span className="flex items-center justify-center gap-2">
      <svg>...</svg>
      Unduh CV
    </span>
  </a>
  
  <a
    href="https://drive.google.com/file/d/YOUR_RIVER_OF_LIFE_FILE_ID/view"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary w-full text-center inline-block"
  >
    <span className="flex items-center justify-center gap-2">
      <svg>...</svg>
      River of Life
    </span>
  </a>
</div>
```

#### **Replace:**
```jsx
// Ganti YOUR_CV_FILE_ID dengan File ID CV Anda
href="https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7/view"

// Ganti YOUR_RIVER_OF_LIFE_FILE_ID dengan File ID River of Life Anda
href="https://drive.google.com/file/d/7p6O5n4M3l2K1j0I9h8G7f6E5d4C3b2A1/view"
```

---

## 🎨 **Visual Guide**

### **About Section Layout:**
```
┌─────────────────────────────────────────┐
│              About Me                   │
├─────────────────────────────────────────┤
│                                         │
│  [Background Info]                      │
│  [Education Timeline]                   │
│  [Hobbies]                              │
│                                         │
│  [Career Goals]                         │
│  [Soft Skills]                          │
│  [Hard Skills]                          │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  📄 Unduh CV                      │ │ ← Button 1
│  └───────────────────────────────────┘ │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │  📊 River of Life                 │ │ ← Button 2
│  └───────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔧 **Button Styles**

### **Unduh CV (Secondary Button):**
```css
Background: Red (#A4161A)
Text: White
Icon: Download icon
Hover: Lighter red + shadow
```

### **River of Life (Primary Button):**
```css
Border: Red outline
Text: Red
Icon: Chart/graph icon
Hover: Filled red background
```

---

## 📝 **Example Implementation**

### **Complete Code Example:**
```jsx
{/* Download CV & River of Life Buttons */}
<div className="space-y-3">
  {/* CV Button */}
  <a
    href="https://drive.google.com/file/d/1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7/view"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary w-full text-center inline-block"
  >
    <span className="flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Unduh CV
    </span>
  </a>
  
  {/* River of Life Button */}
  <a
    href="https://drive.google.com/file/d/7p6O5n4M3l2K1j0I9h8G7f6E5d4C3b2A1/view"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-primary w-full text-center inline-block"
  >
    <span className="flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      River of Life
    </span>
  </a>
</div>
```

---

## ✅ **Testing Checklist**

### **Before Publishing:**
- [ ] CV file uploaded ke Google Drive
- [ ] River of Life file uploaded ke Google Drive
- [ ] Kedua file set ke "Anyone with the link"
- [ ] Permission set ke "Viewer"
- [ ] File ID sudah di-extract
- [ ] Code sudah diupdate dengan File ID yang benar
- [ ] Test link di browser (buka link langsung)

### **After Update:**
- [ ] Run `npm run dev`
- [ ] Buka About section
- [ ] Klik tombol "Unduh CV" → Harus buka Google Drive viewer
- [ ] Klik tombol "River of Life" → Harus buka Google Drive viewer
- [ ] Test di mobile browser
- [ ] Test di different browsers (Chrome, Firefox, Safari)

---

## 🔍 **Troubleshooting**

### **Link tidak bisa dibuka?**

#### **Problem 1: Permission denied**
```
Error: "You need permission to access this file"
```
**Solution:**
- Kembali ke Google Drive
- Klik kanan file → Share
- Pastikan "Anyone with the link" selected
- Save changes

#### **Problem 2: File ID salah**
```
Error: "File not found"
```
**Solution:**
- Double check File ID
- Pastikan tidak ada spasi atau karakter extra
- Copy ulang link dari Google Drive

#### **Problem 3: Link format salah**
```
Link tidak membuka Google Drive viewer
```
**Solution:**
- Pastikan format: `https://drive.google.com/file/d/FILE_ID/view`
- Jangan gunakan format `/open` atau `/edit`
- Gunakan `/view` untuk viewer mode

---

## 📊 **Alternative: Direct Download**

### **Jika ingin direct download (bukan viewer):**

#### **Change URL format:**
```jsx
// Viewer mode (default)
href="https://drive.google.com/file/d/FILE_ID/view"

// Direct download
href="https://drive.google.com/uc?export=download&id=FILE_ID"
```

#### **Example:**
```jsx
<a
  href="https://drive.google.com/uc?export=download&id=1a2B3c4D5e6F7g8H9i0J1k2L3m4N5o6P7"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary w-full text-center inline-block"
>
  Unduh CV
</a>
```

**Note:** Direct download akan langsung download file tanpa preview.

---

## 🎯 **Best Practices**

### **File Naming:**
```
✅ CV_Banoe_Izdihar_Tsuraya.pdf
✅ River_of_Life_Banoe.pdf
❌ cv.pdf
❌ document.pdf
```

### **File Size:**
```
CV: < 2MB (recommended)
River of Life: < 5MB (recommended)
```

### **File Format:**
```
CV: PDF (recommended)
River of Life: PDF, DOCX, or Image (PNG/JPG)
```

---

## 📝 **Quick Summary**

### **3 Steps to Setup:**

1. **Upload files** ke Google Drive
2. **Set permission** ke "Anyone with the link"
3. **Update code** dengan File ID

### **2 Links to Update:**
```jsx
// CV Link
href="https://drive.google.com/file/d/YOUR_CV_FILE_ID/view"

// River of Life Link
href="https://drive.google.com/file/d/YOUR_RIVER_OF_LIFE_FILE_ID/view"
```

### **File Location:**
```
noe-portfolio/src/components/About.jsx
```

---

**Setelah setup, tombol akan membuka file di Google Drive viewer!** 📄✨
