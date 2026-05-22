@echo off
echo ========================================
echo   UPLOAD FOTO PROFIL - HELPER SCRIPT
echo ========================================
echo.
echo LANGKAH:
echo 1. Simpan foto dari chat sebagai: profile.jpg
echo 2. Letakkan di Desktop
echo 3. Tekan Enter untuk copy ke project
echo.
pause

echo.
echo Checking folder...
if not exist "public\images\" (
    echo Creating images folder...
    mkdir "public\images"
)

echo.
echo Mencari profile.jpg di Desktop...
set "desktop=%USERPROFILE%\Desktop"
if exist "%desktop%\profile.jpg" (
    echo File ditemukan! Copying...
    copy "%desktop%\profile.jpg" "public\images\profile.jpg"
    echo.
    echo ✓ SUCCESS! Foto sudah di-copy ke project!
    echo.
    echo Lokasi: noe-portfolio\public\images\profile.jpg
    echo.
    echo Sekarang jalankan: npm run dev
    echo.
) else (
    echo.
    echo ✗ ERROR: File profile.jpg tidak ditemukan di Desktop
    echo.
    echo Pastikan:
    echo 1. Foto sudah disimpan dari chat
    echo 2. Nama file: profile.jpg (lowercase)
    echo 3. Lokasi: Desktop
    echo.
)

pause
