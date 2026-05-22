# 📊 Skills Component - Dokumentasi Lengkap

## 📁 File Location
```
noe-portfolio/src/components/Skills.jsx
```

---

## 🎯 Struktur Kode (Dikelompokkan)

### 1️⃣ **DATA SKILLS**
```javascript
// Technical Skills dengan Progress Bar
const technicalSkills = [
  { name: 'HTML', percentage: 80, color: 'from-accent-light to-accent' },
  { name: 'CSS', percentage: 75, color: 'from-accent to-accent-medium' },
  { name: 'JavaScript', percentage: 50, color: 'from-accent-medium to-accent-dark' },
  { name: 'React', percentage: 20, color: 'from-accent-dark to-accent' },
]

// Design & Soft Skills dengan Progress Bar
const designAndSoftSkills = [
  { name: 'Figma', percentage: 50, color: 'from-purple-600 to-purple-800' },
  { name: 'Editing', percentage: 60, color: 'from-blue-600 to-blue-800' },
  { name: 'Teamwork', percentage: 85, color: 'from-green-600 to-green-800' },
  { name: 'Adaptability', percentage: 80, color: 'from-yellow-600 to-yellow-800' },
]
```

**Penjelasan:**
- `name`: Nama skill
- `percentage`: Nilai skill (0-100)
- `color`: Gradient color untuk progress bar

---

### 2️⃣ **PERHITUNGAN RATA-RATA**
```javascript
// Gabungkan semua skills
const allSkills = [...technicalSkills, ...designAndSoftSkills]

// Hitung rata-rata
const averagePercentage = Math.round(
  allSkills.reduce((sum, skill) => sum + skill.percentage, 0) / allSkills.length
)
```

**Cara Kerja:**
1. Gabungkan array `technicalSkills` dan `designAndSoftSkills`
2. Jumlahkan semua percentage
3. Bagi dengan total jumlah skills
4. Bulatkan hasilnya

**Contoh Perhitungan:**
```
HTML: 80%
CSS: 75%
JavaScript: 50%
React: 20%
Figma: 50%
Editing: 60%
Teamwork: 85%
Adaptability: 80%

Total: 500%
Jumlah Skills: 8
Rata-rata: 500 / 8 = 62.5% → 63%
```

---

### 3️⃣ **HTML STRUCTURE**

#### A. **Section Header**
```jsx
<div data-aos="fade-up">
  <h2 className="section-heading text-center">Skills & Technologies</h2>
  <div className="w-20 h-1 bg-accent mx-auto mb-4"></div>
  <p className="text-center text-text-muted max-w-2xl mx-auto mb-12">
    Technologies and tools I work with to bring ideas to life
  </p>
</div>
```

#### B. **Progress Bars Container**
```jsx
<div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
  {/* LEFT: Progress Bars */}
  <div className="space-y-6">
    {/* Technical Skills */}
    {/* Design & Soft Skills */}
  </div>

  {/* RIGHT: Circular Average */}
  <div className="flex justify-center lg:justify-end">
    {/* Circular Progress */}
  </div>
</div>
```

**Layout:**
- Desktop: 2 kolom (bars kiri, circle kanan)
- Mobile: 1 kolom (stack vertical)

---

### 4️⃣ **PROGRESS BAR (Horizontal)**

#### HTML Structure:
```jsx
<div>
  {/* Label & Percentage */}
  <div className="flex justify-between items-center mb-2">
    <span className="text-text-light font-medium">{skill.name}</span>
    <span className="text-accent font-semibold">{skill.percentage}%</span>
  </div>
  
  {/* Progress Bar */}
  <div className="w-full bg-bg-primary rounded-full h-3 overflow-hidden">
    <div
      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
      style={{ width: `${skill.percentage}%` }}
    >
      {/* Shine Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-progress-shine"></div>
    </div>
  </div>
</div>
```

#### CSS Classes:
```css
/* Container */
.w-full - Width 100%
.bg-bg-primary - Background color
.rounded-full - Fully rounded corners
.h-3 - Height 12px
.overflow-hidden - Hide overflow

/* Progress Fill */
.bg-gradient-to-r - Gradient left to right
.rounded-full - Rounded corners
.transition-all - Smooth transition
.duration-1000 - 1 second duration
```

#### Inline Style:
```javascript
style={{ width: `${skill.percentage}%` }}
```
**Fungsi:** Set width sesuai percentage skill

---

### 5️⃣ **CIRCULAR PROGRESS (Average)**

#### HTML Structure:
```jsx
<div className="relative w-48 h-48">
  {/* SVG Circle */}
  <svg className="w-full h-full transform -rotate-90">
    {/* Background Circle */}
    <circle
      cx="96" cy="96" r="80"
      stroke="currentColor"
      strokeWidth="12"
      fill="none"
      className="text-bg-primary"
    />
    
    {/* Progress Circle */}
    <circle
      cx="96" cy="96" r="80"
      stroke="url(#gradient)"
      strokeWidth="12"
      fill="none"
      strokeDasharray={`${2 * Math.PI * 80}`}
      strokeDashoffset={`${2 * Math.PI * 80 * (1 - averagePercentage / 100)}`}
      strokeLinecap="round"
    />
    
    {/* Gradient */}
    <defs>
      <linearGradient id="gradient">
        <stop offset="0%" stopColor="#A4161A" />
        <stop offset="50%" stopColor="#BA181B" />
        <stop offset="100%" stopColor="#E5383B" />
      </linearGradient>
    </defs>
  </svg>
  
  {/* Center Text */}
  <div className="absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-5xl font-bold text-accent">{averagePercentage}%</span>
    <span className="text-sm text-text-muted">Average</span>
  </div>
</div>
```

#### SVG Circle Calculation:
```javascript
// Circumference (keliling lingkaran)
const circumference = 2 * Math.PI * radius
// radius = 80, maka circumference = 502.65

// Stroke Dash Array (total panjang garis)
strokeDasharray = 502.65

// Stroke Dash Offset (berapa yang di-hide)
strokeDashoffset = circumference * (1 - percentage / 100)

// Contoh: 63% progress
strokeDashoffset = 502.65 * (1 - 0.63) = 185.98
// Artinya: 63% terlihat, 37% tersembunyi
```

#### Transform Rotate:
```css
transform: -rotate-90deg
```
**Fungsi:** Putar -90° agar progress mulai dari atas (12 o'clock)

---

### 6️⃣ **ANIMASI**

#### A. **Progress Bar Shine**
```css
/* Keyframe */
@keyframes progress-shine {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

/* Class */
.animate-progress-shine {
  animation: progress-shine 2s ease-in-out infinite;
}
```

**Cara Kerja:**
1. Shine dimulai dari kiri (-100%)
2. Bergerak ke kanan sampai 400%
3. Loop infinite setiap 2 detik

#### B. **Circular Progress Transition**
```css
.transition-all {
  transition-property: all;
  transition-timing-function: ease-out;
  transition-duration: 1000ms;
}
```

**Cara Kerja:**
- Saat `strokeDashoffset` berubah
- Animasi smooth selama 1 detik
- Easing: ease-out (cepat di awal, lambat di akhir)

---

### 7️⃣ **RESPONSIVE DESIGN**

#### Desktop (lg: 1024px+):
```jsx
<div className="grid lg:grid-cols-[1fr_auto] gap-8">
  {/* Progress bars: flexible width */}
  {/* Circular: auto width */}
</div>
```

#### Mobile (< 1024px):
```jsx
<div className="grid gap-8">
  {/* Stack vertical */}
  {/* Progress bars: full width */}
  {/* Circular: centered */}
</div>
```

---

## 🎨 **Color Scheme**

### Technical Skills:
```javascript
HTML: 'from-accent-light to-accent'        // Red gradient
CSS: 'from-accent to-accent-medium'        // Red gradient
JavaScript: 'from-accent-medium to-accent-dark' // Red gradient
React: 'from-accent-dark to-accent'        // Red gradient
```

### Design & Soft Skills:
```javascript
Figma: 'from-purple-600 to-purple-800'     // Purple
Editing: 'from-blue-600 to-blue-800'       // Blue
Teamwork: 'from-green-600 to-green-800'    // Green
Adaptability: 'from-yellow-600 to-yellow-800' // Yellow
```

### Circular Progress:
```html
<linearGradient id="gradient">
  <stop offset="0%" stopColor="#A4161A" />   <!-- Red dark -->
  <stop offset="50%" stopColor="#BA181B" />  <!-- Red medium -->
  <stop offset="100%" stopColor="#E5383B" /> <!-- Red light -->
</linearGradient>
```

---

## 📊 **Data Flow**

```
1. Define Skills Data
   ↓
2. Calculate Average
   ↓
3. Render Progress Bars (map through skills)
   ↓
4. Render Circular Progress (use average)
   ↓
5. Apply Animations (CSS)
```

---

## 🔧 **Cara Menambah Skill Baru**

### Technical Skill:
```javascript
const technicalSkills = [
  // ... existing skills
  { name: 'TypeScript', percentage: 40, color: 'from-blue-500 to-blue-700' },
]
```

### Design/Soft Skill:
```javascript
const designAndSoftSkills = [
  // ... existing skills
  { name: 'Communication', percentage: 90, color: 'from-pink-600 to-pink-800' },
]
```

**Otomatis:**
- Progress bar akan muncul
- Rata-rata akan di-recalculate
- Circular progress akan update

---

## 🎯 **Key Features**

### ✅ **Automatic Average Calculation**
- Hitung otomatis dari semua skills
- Update real-time saat data berubah

### ✅ **Animated Progress**
- Shine effect pada bars
- Smooth transition pada circular

### ✅ **Responsive Layout**
- Desktop: side-by-side
- Mobile: stacked

### ✅ **Color Coded**
- Technical: Red theme
- Design: Purple/Blue
- Soft Skills: Green/Yellow

### ✅ **Grouped Display**
- Technical Skills section
- Design & Soft Skills section
- Clear visual separation

---

## 📝 **Summary**

### Komponen Utama:
1. **Data Skills** - Array of skills dengan percentage
2. **Average Calculation** - Math.round & reduce
3. **Progress Bars** - Horizontal bars dengan gradient
4. **Circular Progress** - SVG circle dengan strokeDashoffset
5. **Animations** - CSS keyframes untuk shine effect

### Teknologi:
- **React** - Component & state
- **Tailwind CSS** - Styling
- **SVG** - Circular progress
- **CSS Animations** - Shine effect

---

**Total Skills: 8**
**Average: 63%** (calculated automatically)

🎉 **Component siap digunakan!**
