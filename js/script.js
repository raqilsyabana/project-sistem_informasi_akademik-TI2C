// ===== BAGIAN MAHASISWA 2 (Beranda) =====
// Pastikan semua elemen HTML (DOM) sudah dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    
    /* 1. Sapaan Dinamis Berdasarkan Waktu */
    const heroTitle = document.querySelector('.hero-content h1');
    
    if (heroTitle) {
        const jam = new Date().getHours();
        let sapaan = 'Selamat Datang';

        if (jam >= 5 && jam < 11) {
            sapaan = 'Selamat Pagi';
        } else if (jam >= 11 && jam < 15) {
            sapaan = 'Selamat Siang';
        } else if (jam >= 15 && jam < 18) {
            sapaan = 'Selamat Sore';
        } else {
            sapaan = 'Selamat Malam';
        }

        // Mengubah teks h1 pada hero section
        heroTitle.textContent = `${sapaan} di Website Kelas TI-2C`;
    }

    /* 2. Penanda Menu Navigasi Aktif (Active Link) */
    // Mengambil URL halaman yang sedang dibuka
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.menu a');

    menuItems.forEach(item => {
        // Jika URL pada link sama dengan URL halaman saat ini, tambahkan class 'active'
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    /*3. Interaksi Tombol (Contoh Event Listener) */
    const tombolMulai = document.querySelector('.btn-primary');
    
    if (tombolMulai) {
        tombolMulai.addEventListener('click', function() {
            // Menampilkan pesan di console browser saat tombol diklik
            console.log('Mengarahkan ke halaman Profil Kelas...');
        });
    }

});

// ===== BAGIAN MAHASISWA 3 (Profil dan perkuliahan) =====

// ===== BAGIAN MAHASISWA 4 (Kontak) =====