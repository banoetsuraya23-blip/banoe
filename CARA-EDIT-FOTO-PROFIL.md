# 📸 Cara Edit Foto Profil - Crop & Remove Background

## 🎯 **Yang Perlu Dilakukan:**

1. **Crop** - Potong menjadi setengah badan (dari kepala sampai pinggang)
2. **Remove Background** - Hapus bagian putih di samping
3. **Save** - Simpan sebagai profile.png

---

## 🛠️ **OPSI A: Edit Online (Gratis & Mudah)**

### **1. Remove Background - Remove.bg**

**Website:** https://www.remove.bg

**Langkah:**
1. Buka https://www.remove.bg
2. Upload foto profile.png Anda
3. Tunggu proses otomatis (gratis)
4. Download hasil (background transparan)
5. Save sebagai: `profile-nobg.png`

**Hasil:** Background hijau dan putih akan dihapus, hanya Anda yang tersisa

---

### **2. Crop & Adjust - Photopea**

**Website:** https://www.photopea.com (Photoshop online gratis)

**Langkah:**

#### **A. Open File:**
1. Buka https://www.photopea.com
2. File → Open → Pilih `profile-nobg.png` (hasil dari remove.bg)

#### **B. Crop ke Setengah Badan:**
1. Pilih **Crop Tool** (C) di toolbar kiri
2. Drag untuk select area:
   - **Top**: Sedikit di atas kepala
   - **Bottom**: Sekitar pinggang/perut
   - **Left/Right**: Pas dengan bahu
3. Tekan **Enter** untuk crop

#### **C. Resize (Optional):**
1. Image → Image Size
2. Width: 800px
3. Height: 800px (atau auto)
4. Maintain aspect ratio: ✓
5. OK

#### **D. Save:**
1. File → Export As → PNG
2. Quality: 100%
3. Save sebagai: `profile.png`
4. Replace file lama di `noe-portfolio/public/images/`

---

### **3. Alternative - Canva**

**Website:** https://www.canva.com

**Langkah:**
1. Buka Canva (gratis, perlu sign up)
2. Create design → Custom size (800x800px)
3. Upload foto Anda
4. Gunakan **Background Remover** (fitur Pro, tapi ada free trial)
5. Crop ke setengah badan
6. Download sebagai PNG
7. Replace file di project

---

## 🛠️ **OPSI B: Edit dengan Software Desktop**

### **1. Paint.NET (Windows - Gratis)**

**Download:** https://www.getpaint.net

**Langkah:**
1. Install Paint.NET
2. Open profile.png
3. Select → Rectangle Select
4. Drag untuk select setengah badan
5. Image → Crop to Selection
6. Magic Wand → Click background putih
7. Delete (hapus background)
8. Save As → profile.png

---

### **2. GIMP (Windows/Mac/Linux - Gratis)**

**Download:** https://www.gimp.org

**Langkah:**
1. Install GIMP
2. Open profile.png
3. Tools → Selection Tools → Rectangle Select
4. Select area setengah badan
5. Image → Crop to Selection
6. Tools → Selection Tools → Fuzzy Select (Magic Wand)
7. Click background putih → Delete
8. File → Export As → profile.png

---

### **3. Photoshop (Berbayar)**

Jika Anda punya Photoshop:
1. Open profile.png
2. Crop Tool (C) → Crop ke setengah badan
3. Magic Wand Tool (W) → Select background
4. Delete
5. Save As → profile.png

---

## 🎨 **Spesifikasi Hasil Edit:**

### **Crop:**
```
┌─────────────────┐
│   ╭─────────╮   │  ← Kepala (sedikit di atas)
│  │   👤     │   │
│  │  Wajah   │   │
│  │  Bahu    │   │
│  │  Dada    │   │
│   ╰─────────╯   │  ← Pinggang/perut (potong di sini)
└─────────────────┘

❌ Jangan include: Kaki, tangan bawah
✅ Include: Kepala, wajah, bahu, dada, sebagian perut
```

### **Background:**
```
SEBELUM:
┌─────────────────┐
│ ░░░░ 👤 ░░░░░░ │  ← Background hijau + putih
└─────────────────┘

SESUDAH:
┌─────────────────┐
│      👤         │  ← Transparan (hanya Anda)
└─────────────────┘
```

### **File Specs:**
- **Format**: PNG (dengan transparency)
- **Size**: 800x800px (square)
- **Quality**: High (90-100%)
- **File size**: < 500KB
- **Background**: Transparent

---

## 🚀 **Setelah Edit:**

### **1. Replace File:**
```
Copy file baru → noe-portfolio/public/images/profile.png
(Replace file lama)
```

### **2. Test:**
```bash
npm run dev
```

### **3. Check:**
- ✅ Foto hanya menampilkan setengah badan
- ✅ Background transparan (tidak ada putih)
- ✅ Glow maroon terlihat lebih jelas
- ✅ Fokus ke wajah dan upper body

---

## 💡 **Tips:**

### **Untuk Hasil Terbaik:**
1. **Crop dulu** (setengah badan)
2. **Remove background** (hapus hijau + putih)
3. **Adjust brightness** (jika perlu)
4. **Sharpen** (tingkatkan ketajaman)
5. **Save as PNG** (dengan transparency)

### **Posisi Crop Ideal:**
```
Top: Sedikit di atas kepala (beri ruang)
Bottom: Sekitar pinggang/perut bagian atas
Left/Right: Pas dengan bahu (tidak terlalu ketat)
```

### **Background Removal:**
- Gunakan remove.bg untuk hasil cepat
- Atau manual dengan magic wand tool
- Pastikan edge rapi (tidak kasar)

---

## 🎯 **Rekomendasi Workflow:**

### **Cara Tercepat (5 menit):**
1. Upload ke remove.bg → Download
2. Upload ke Photopea → Crop → Save
3. Replace file di project
4. Test

### **Cara Terbaik (15 menit):**
1. Remove background dengan remove.bg
2. Edit di Photopea:
   - Crop ke setengah badan
   - Adjust brightness/contrast
   - Sharpen
   - Resize ke 800x800px
3. Export PNG quality 100%
4. Replace file di project
5. Test

---

## 📝 **Checklist Edit:**

- [ ] Foto di-crop ke setengah badan
- [ ] Background dihapus (transparan)
- [ ] Size: 800x800px
- [ ] Format: PNG
- [ ] Quality: High
- [ ] File size: < 500KB
- [ ] Edge rapi (tidak kasar)
- [ ] Brightness/contrast OK
- [ ] Sharpness OK
- [ ] File replaced di project
- [ ] Test di browser

---

## 🔄 **Jika Hasil CSS Tidak Memuaskan:**

Saya sudah adjust CSS untuk zoom dan crop, tapi:

**Kelebihan CSS:**
- ✅ Cepat (tidak perlu edit gambar)
- ✅ Bisa adjust kapan saja

**Kekurangan CSS:**
- ❌ Tidak bisa hapus background putih
- ❌ Crop tidak se-presisi manual edit
- ❌ File size tetap besar

**Rekomendasi:**
Edit gambar manual untuk hasil terbaik! 🎨

---

## 📞 **Butuh Bantuan?**

Jika bingung cara edit:
1. Coba remove.bg dulu (paling mudah)
2. Screenshot hasilnya
3. Tunjukkan ke saya
4. Saya akan bantu adjust CSS lebih lanjut

---

**Pilih salah satu cara di atas untuk hasil foto profil yang sempurna!** ✨
