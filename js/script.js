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
const tombolHari = document.querySelectorAll(".btn-hari");
const barisJadwal = document.querySelectorAll("#isi-jadwal tr");

tombolHari.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const hariDipilih = tombol.dataset.hari;

    tombolHari.forEach(function (t) {
      t.classList.remove("aktif");
    });
    tombol.classList.add("aktif");

    barisJadwal.forEach(function (baris) {
      if (hariDipilih === "Semua" || baris.dataset.hari === hariDipilih) {
        baris.hidden = false;
      } else {
        baris.hidden = true;
      }
    });
  });
});

// ===== BAGIAN MAHASISWA 4 (Kontak) =====
// 1. Data dosen
const dataDosen = [
  { nama: "Kukuh Muhammad, M.T.", matkul: "Pemrograman Web Dasar", telepon: "0812-0000-0001", email: "kukuh@pnc.ac.id" },
  { nama: "Anchieta Ave Avillanova, M.Pd", matkul: "Bahasa Inggris Teknik", telepon: "0812-0000-0002", email: "avi@pnc.ac.id" },
  { nama: "Andesita Prihantara, S.T., M.Eng", matkul: "Jaringan Komputer", telepon: "0812-0000-0003", email: "andes@pnc.ac.id" },
  { nama: "Muhammad Abdul Muin, M.Kom", matkul: "Desain Antarmuka Interaktif", telepon: "0812-0000-0004", email: "muin@pnc.ac.id" },
  { nama: "Cahya Vikasari, S.T., M.Eng", matkul: "Rekayasa Perangkat Lunak", telepon: "0812-0000-0005", email: "cahya@pnc.ac.id" },
  { nama: "Ir Fajar Mahardika, S.Kom., M.Kom", matkul: "Pemrograman Mobile", telepon: "0812-0000-0006", email: "fajar@pnc.ac.id" },
  { nama: "Nur Wahyu Rahadi, S.Kom., M.Eng", matkul: "Manajemen Risiko", telepon: "0812-0000-0007", email: "wahyu@pnc.ac.id" },
  { nama: "Farhatun Sa'diyah", matkul: "Kewarganegaraan", telepon: "0812-0000-0008", email: "farhatun@pnc.ac.id" }
];
 
// 2. Ambil elemen dari kontak.html
const kolomCariDosen = document.getElementById("cari-dosen");
const hasilDosen = document.getElementById("hasil-dosen");
const infoDosen = document.getElementById("info-dosen");
 
// 3. Fungsi untuk menampilkan kartu dosen
function tampilkanDosen(daftar) {
  hasilDosen.innerHTML = "";
 
  daftar.forEach(function (dosen) {
    const kartu = document.createElement("div");
    kartu.className = "card kartu-dosen";
    kartu.innerHTML =
      '<h3 class="matkul-dosen">' + dosen.matkul + "</h3>" +
      '<p class="baris-info baris-nama">' + dosen.nama + "</p>" +
      '<p class="baris-info">' + '<a href="tel:' + dosen.telepon + '">' + dosen.telepon + "</a></p>" +
      '<p class="baris-info">' + '<a href="mailto:' + dosen.email + '">' + dosen.email + "</a></p>";
    hasilDosen.appendChild(kartu);
  });
 
  if (daftar.length === 0) {
    infoDosen.textContent = "Dosen tidak ditemukan. Coba kata kunci lain.";
  } else {
    infoDosen.textContent = "";
  }
}
 
// 4. Jalankan pencarian saat mengetik
if (kolomCariDosen) {
  kolomCariDosen.addEventListener("input", function () {
    const kataKunci = kolomCariDosen.value.toLowerCase().trim();
 
    // Kolom kosong: jangan tampilkan apa-apa
    if (kataKunci === "") {
      hasilDosen.innerHTML = "";
      infoDosen.textContent = "";
      return;
    }
 
    const hasil = dataDosen.filter(function (dosen) {
      return dosen.nama.toLowerCase().includes(kataKunci) ||
             dosen.matkul.toLowerCase().includes(kataKunci);
    });
 
    tampilkanDosen(hasil);
  });
}
 