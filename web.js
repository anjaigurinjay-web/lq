function bukaMenu(event, idTab) {
    // 1. Sembunyikan semua konten tab
    const semuaKonten = document.querySelectorAll('.tab-content');
    semuaKonten.forEach(konten => {
        konten.classList.remove('active');
    });

    // 2. Tampilkan tab yang dipilih
    const target = document.getElementById(idTab);
    if (target) {
        target.classList.add('active');
    }

    // 3. Pindah kelas 'active' pada tombol
    const semuaTombol = document.querySelectorAll('.nav-btn');
    semuaTombol.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const tombolAktif = event.currentTarget;
    tombolAktif.classList.add('active');

    // 4. Geser indikator pil kaca dengan mulus
    geserIndikator(tombolAktif);
}

function geserIndikator(tombol) {
    const indikator = document.querySelector('.nav-indicator');
    if (indikator && tombol) {
        indikator.style.width = `${tombol.offsetWidth}px`;
        indikator.style.transform = `translateX(${tombol.offsetLeft}px)`;
    }
}

// Set posisi awal indikator saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    const tombolAktifPertama = document.querySelector('.nav-btn.active');
    if (tombolAktifPertama) {
        setTimeout(() => {
            geserIndikator(tombolAktifPertama);
        }, 50);
    }
});

// Sesuaikan posisi indikator jika ukuran layar/browser diubah
window.addEventListener('resize', () => {
    const tombolAktif = document.querySelector('.nav-btn.active');
    if (tombolAktif) {
        geserIndikator(tombolAktif);
    }
});