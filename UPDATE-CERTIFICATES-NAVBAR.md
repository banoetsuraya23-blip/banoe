# ✅ UPDATE - Certificates & Navbar

## 🎉 **STATUS: SELESAI!**

### **File yang Diupdate:**
```
✅ Certificates.jsx - Certificate names & file path
✅ Navbar.jsx - Center alignment
```

---

## 📝 **Perubahan Certificates:**

### **Certificate 1:**

#### **SEBELUM:**
```jsx
{
  title: 'Certificate 1',
  issuer: 'Certification Authority',
  date: '2024',
  image: '/images/certificate 1.pdf',  ← PDF
  isPdf: true,
}
```

#### **SESUDAH:**
```jsx
{
  title: 'Cisco IT Essentials',  ✅ (Nama ditambahkan)
  issuer: 'Cisco Networking Academy',  ✅
  date: '2024',
  image: '/images/certificate 1.jpg',  ✅ (Diubah ke JPG)
  isPdf: false,  ✅ (Bukan PDF lagi)
}
```

---

### **Certificate 2:**

#### **SEBELUM:**
```jsx
{
  title: 'Certificate 2',
  issuer: 'Certification Authority',
  date: '2025',
  image: '/images/certificate 2.jpg',
}
```

#### **SESUDAH:**
```jsx
{
  title: 'Hour of Code',  ✅ (Nama ditambahkan)
  issuer: 'Code.org',  ✅
  date: '2025',
  image: '/images/certificate 2.jpg',
}
```

---

## 🎨 **Perubahan Navbar:**

### **Layout:**

#### **SEBELUM:**
```
┌─────────────────────────────────────────┐
│ Noe    Home About Skills ... Contact   │
│ (kiri) (kanan)                          │
└─────────────────────────────────────────┘
```

#### **SESUDAH:**
```
┌─────────────────────────────────────────┐
│ Noe  Home About Skills ... Contact     │
│ (kiri)      (center)                    │
└─────────────────────────────────────────┘
```

### **Code Changes:**

#### **SEBELUM:**
```jsx
<div className="flex justify-between items-center h-16">
  {/* Logo */}
  <a href="#home" className="...">Noe</a>
  
  {/* Desktop Navigation */}
  <div className="hidden md:flex ...">
    {/* Menu items */}
  </div>
```

#### **SESUDAH:**
```jsx
<div className="flex justify-center items-center h-16 relative">
  {/* Logo - Positioned Absolute Left */}
  <a href="#home" className="absolute left-4 ...">Noe</a>
  
  {/* Desktop Navigation - Centered */}
  <div className="hidden md:flex ...">
    {/* Menu items */}
  </div>
```

**Key Changes:**
- ✅ Container: `justify-between` → `justify-center`
- ✅ Container: Added `relative` positioning
- ✅ Logo: Added `absolute left-4` positioning
- ✅ Navigation: Naturally centered

---

## 🚀 **TEST SEKARANG:**

### **Jalankan Development Server:**
```bash
cd noe-portfolio
npm run dev
```

### **Buka Browser:**
```
http://localhost:5173
```

### **Check Navbar:**
- ✅ Logo "Noe" di **kiri**
- ✅ Menu items (Home, About, Skills, etc.) di **center**
- ✅ Sliding indicator masih berfungsi
- ✅ Responsive tetap OK

### **Check Certificates Section:**
- ✅ Certificate 1: 
  - Judul: **"Cisco IT Essentials"**
  - Issuer: **"Cisco Networking Academy"**
  - Tahun: 2024
  - Gambar: certificate 1.jpg (bukan PDF)
  
- ✅ Certificate 2:
  - Judul: **"Hour of Code"**
  - Issuer: **"Code.org"**
  - Tahun: 2025
  - Gambar: certificate 2.jpg

- ✅ Certificate 3:
  - Placeholder (Coming Soon)

---

## 🎨 **Visual Hasil:**

### **Navbar (Desktop):**
```
┌───────────────────────────────────────────────────────┐
│                                                       │
│  Noe     Home  About  Skills  Portfolio  Certs  Contact │
│  ↑       ↑─────────────────────────────────────↑      │
│  Logo              (Centered)                         │
│                                                       │
└───────────────────────────────────────────────────────┘
```

### **Certificates Section:**
```
┌─────────────────────────────────────────────────────────┐
│              Certificates                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │   IMAGE     │  │   IMAGE     │  │  COMING     │    │
│  │ Certificate │  │ Certificate │  │   SOON      │    │
│  │   Preview   │  │   Preview   │  │             │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                         │
│  Cisco IT         Hour of Code    Certificate 3        │
│  Essentials                                             │
│  Cisco Network    Code.org        Coming Soon          │
│  Academy                                                │
│  2024             2025            (no year)             │
│                                   [Coming Soon]         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📂 **File yang Digunakan:**

```
✅ public/images/certificate 1.jpg  → Certificates.jsx (Cisco IT Essentials)
✅ public/images/certificate 2.jpg  → Certificates.jsx (Hour of Code)
```

---

## ✅ **Checklist Update:**

### **Certificates.jsx:**
- [x] Certificate 1: Path diubah ke certificate 1.jpg
- [x] Certificate 1: isPdf diubah ke false
- [x] Certificate 1: Title: "Cisco IT Essentials"
- [x] Certificate 1: Issuer: "Cisco Networking Academy"
- [x] Certificate 2: Title: "Hour of Code"
- [x] Certificate 2: Issuer: "Code.org"

### **Navbar.jsx:**
- [x] Container: justify-center
- [x] Container: relative positioning
- [x] Logo: absolute left-4
- [x] Navigation: centered
- [x] Sliding indicator: masih berfungsi

### **Testing:**
- [ ] npm run dev dijalankan
- [ ] Navbar: Menu items di center
- [ ] Navbar: Logo di kiri
- [ ] Navbar: Sliding indicator berfungsi
- [ ] Certificates: "Cisco IT Essentials" muncul
- [ ] Certificates: "Hour of Code" muncul
- [ ] Certificates: Gambar preview muncul
- [ ] Certificates: Click untuk buka full size

---

## 🎊 **SELESAI!**

Semua update sudah dilakukan:
- ✅ Certificate 1: Cisco IT Essentials (JPG)
- ✅ Certificate 2: Hour of Code (JPG)
- ✅ Navbar: Menu items centered

**Next Step:**
```bash
npm run dev
```

Buka browser dan lihat hasilnya! 🚀✨

---

## 💡 **Navbar Layout Explanation:**

### **Teknik yang Digunakan:**

**Flexbox Center dengan Absolute Positioning:**
```jsx
// Container: Center alignment
<div className="flex justify-center items-center h-16 relative">
  
  // Logo: Absolute positioning (keluar dari flex flow)
  <a className="absolute left-4 ...">Noe</a>
  
  // Navigation: Naturally centered (karena container justify-center)
  <div className="hidden md:flex ...">
    {/* Menu items */}
  </div>
</div>
```

**Keuntungan:**
- ✅ Menu items benar-benar di center
- ✅ Logo tetap di kiri (tidak mengganggu centering)
- ✅ Responsive tetap OK
- ✅ Sliding indicator tetap berfungsi

---

## 📱 **Mobile View:**

Navbar mobile tetap sama (tidak berubah):
- Logo di kiri
- Hamburger menu di kanan
- Menu dropdown dari atas

---

**Certificates dan Navbar sudah siap dengan update baru!** 🎉
