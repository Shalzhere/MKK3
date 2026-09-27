// =========================================================
// TOGGLE DARK MODE
// =========================================================

// 1. Ambil elemen tombol berdasarkan id-nya
const toggleBtn = document.getElementById('toggleMode');

// 2. Fungsi untuk mengganti label tombol sesuai mode yang aktif
function updateLabel() {
  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = 'Light Mode';
  } else {
    toggleBtn.textContent = 'Dark Mode';
  }
}

// 3. Beri perintah: "Jika tombol diklik, jalankan fungsi ini"
toggleBtn.addEventListener('click', function () {
  // 4. Tambah atau hapus class 'dark-theme' pada elemen <body> otomatis
  document.body.classList.toggle('dark-theme');

  // 5. Sesuaikan teks tombolnya
  updateLabel();
});

// 6. Pastikan label tombol sesuai kondisi awal saat halaman pertama dibuka
updateLabel();
