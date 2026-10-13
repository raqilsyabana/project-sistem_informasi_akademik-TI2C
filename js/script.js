// ===== BAGIAN MAHASISWA 2 (Beranda) =====
// pastikan semua elemen HTML (DOM) sudah dimuat sebelum menjalankan script
// pembungkus utama yang krusial
// fungsinya menahan eksekusi script sampai seluruh elemen HTML selesai dimuat oleh browser
document.addEventListener('DOMContentLoaded', function() {
    
    /* 1. Sapaan Dinamis Berdasarkan Waktu */
    const heroTitle = document.querySelector('.hero-content h1');
    
    // mengambil waktu (jam) saat ini menggunakan new Date().getHours(). 
    // jika dibuka pagi hari, teks judul otomatis berubah menjadi "Selamat Pagi", begitu pula untuk Siang, Sore, dan Malam
    if (heroTitle) {
        // logika ini mengambil jam lokal dari sistem pengguna
        // menggunakan struktur percabangan if...else if, skrip mengecek nilai jam
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

        // mengubah teks h1 pada hero section
        heroTitle.textContent = `${sapaan} di Website Kelas TI-2C`;
    }

    /* 2. Penanda Menu Navigasi Aktif (Active Link) */
    // mengambil URL halaman yang sedang dibuka
    // script akan mengecek URL halaman yang sedang dibuka (window.location.href)
    // jika cocok dengan salah satu tautan menu di Navbar, tautan tersebut akan diberi class active (biasanya untuk memberikan efek warna berbeda agar pengguna tahu sedang berada di halaman mana) 
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.menu a');
    // perulangan (forEach) pada setiap tautan menu (.menu a)
    menuItems.forEach (item => {
        // jika URL pada link sama dengan URL halaman saat ini, tambahkan class 'active'
        // jika href dari tautan tersebut cocok dengan URL saat ini
        // class CSS bernama active akan ditambahkan ke tautan tersebut menggunakan item.classList.add('active') 
        if (item.href === currentLocation) {
            item.classList.add('active');
        }
    });

    /*3. Interaksi Tombol (Contoh Event Listener) */
    const tombolMulai = document.querySelector('.btn-primary');
    
    if (tombolMulai) {
        // menambahkan pendengar kejadian (addEventListener) pada tombol "Mulai Jelajahi". 
        // saat diklik tombol tersebut akan mencetak pesan "Mengarahkan ke halaman Profil Kelas..." di dalam console browser
        tombolMulai.addEventListener('click', function() {
            // menampilkan pesan di console browser saat tombol diklik
            console.log('Mengarahkan ke halaman Profil Kelas...');
        });
    }

});

// ===== BAGIAN MAHASISWA 3 (Profil dan perkuliahan) =====

// ===== BAGIAN MAHASISWA 4 (Kontak) =====