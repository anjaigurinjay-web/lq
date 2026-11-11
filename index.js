function bukaMenu(event, idTab) {
    const semuaKonten = document.querySelectorAll('.tab-content');
    semuaKonten.forEach(konten => {
        konten.classList.remove('active');
    });

    const target = document.getElementById(idTab);
    if (target) {
        target.classList.add('active');
    }

    const semuaTombol = document.querySelectorAll('.nav-btn');
    semuaTombol.forEach(btn => {
        btn.classList.remove('active');
    });
    
    const tombolAktif = event.currentTarget;
    tombolAktif.classList.add('active');

    geserIndikator(tombolAktif);
}

function geserIndikator(tombol) {
    const indikator = document.querySelector('.nav-indicator');
    if (indikator && tombol) {
        indikator.style.width = `${tombol.offsetWidth}px`;
        indikator.style.transform = `translateX(${tombol.offsetLeft}px)`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tombolAktifPertama = document.querySelector('.nav-btn.active');
    if (tombolAktifPertama) {
        setTimeout(() => {
            geserIndikator(tombolAktifPertama);
        }, 50);
    }

    const navContainer = document.querySelector('.floating-nav');
    const semuaTombol = document.querySelectorAll('.nav-btn');

    semuaTombol.forEach(btn => {

        btn.addEventListener('mouseenter', (e) => {
            geserIndikator(e.currentTarget);
        });
    });

    if (navContainer) {
        navContainer.addEventListener('mouseleave', () => {
            const tombolAktif = document.querySelector('.nav-btn.active');
            if (tombolAktif) {
                geserIndikator(tombolAktif);
            }
        });
    }
});

window.addEventListener('resize', () => {
    const tombolAktif = document.querySelector('.nav-btn.active');
    if (tombolAktif) {
        geserIndikator(tombolAktif);
    }
});