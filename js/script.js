// ===== BAGIAN MAHASISWA 2 (Beranda) =====

// ===== BAGIAN MAHASISWA 3 (Profil dan perkuliahan) =====

// ===== BAGIAN MAHASISWA 4 (Kontak) =====
// 1. Data dosen (ganti dengan data dosen TI 2C yang asli)
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
 