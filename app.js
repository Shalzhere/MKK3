// =========================================================
// TOGGLE DARK MODE
// =========================================================

// 1. Ambil elemen tombol berdasarkan id-nya
const toggleBtn = document.getElementById('toggleMode');

// 2. Cek status memori saat web pertama dibuka
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  toggleBtn.textContent = 'Toggle Light Mode';
} else {
  toggleBtn.textContent = 'Toggle Dark Mode';
}

// 3. Beri perintah: "Jika tombol diklik, jalankan fungsi ini"
toggleBtn.addEventListener('click', function () {
  // 4. Tambah atau hapus class 'dark-theme' pada elemen <body> otomatis
  document.body.classList.toggle('dark-theme');

  // 5. Sesuaikan teks tombol dan SIMPAN statusnya ke memori browser
  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = 'Toggle Light Mode';
    localStorage.setItem('theme', 'dark');  // <-- Menyimpan status gelap
  } else {
    toggleBtn.textContent = 'Toggle Dark Mode';
    localStorage.setItem('theme', 'light'); // <-- Menyimpan status terang
  }
});


// =========================================================
// DROPDOWN NAVIGASI KUSTOM (PILL STYLE)
// =========================================================
const dropBtn = document.getElementById('customDropBtn');
const dropList = document.getElementById('customDropList');

// 1. Tampilkan / Sembunyikan list saat tombol diklik
dropBtn.addEventListener('click', function(e) {
  e.stopPropagation(); // Mencegah event menutup langsung
  dropList.classList.toggle('show');
});

// 2. Tutup dropdown otomatis jika user mengklik di luar area menu
window.addEventListener('click', function() {
  if (dropList.classList.contains('show')) {
    dropList.classList.remove('show');
  }
});
