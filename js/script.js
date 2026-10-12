// ===== BAGIAN MAHASISWA 2 (Beranda) =====

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