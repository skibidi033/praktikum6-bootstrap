const formKontak = document.getElementById("formKontak");

// Mengambil modal konfirmasi
const modalKonfirmasi = new bootstrap.Modal(
    document.getElementById("modalKonfirmasi")
);

// Mengambil tombol Ya, Kirim
const tombolKirim = document.getElementById("konfirmasiKirim");

// Ketika form dikirim
formKontak.addEventListener("submit", function(event) {
    event.preventDefault();

    // Menampilkan modal konfirmasi
    modalKonfirmasi.show();
});

// Ketika tombol Ya, Kirim ditekan
tombolKirim.addEventListener("click", function() {

    // Menutup modal
    modalKonfirmasi.hide();

    // Menampilkan pesan berhasil
    alert("Pesan berhasil dikonfirmasi. Terima kasih!");

    // Mengosongkan form
    formKontak.reset();
});