const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        const productDropdown = document.getElementById('product-dropdown');

        // Toggle buka/tutup menu utama saat hamburger diklik
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Interaksi khusus dropdown produk pada layar mobile (ketika diklik)
        const productToggle = document.querySelector('.product-toggle');
        productToggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                productDropdown.classList.toggle('active');
            }
        });

        // Tutup menu saat salah satu link diklik (opsional, agar UX lebih baik di mobile)
        document.querySelectorAll('.nav-link:not(.product-toggle)').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
            });
        });

        const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideInterval = 4000; // Waktu berganti gambar dalam milidetik (4 detik)

    function nextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    // Jalankan otomatis setiap interval waktu tertentu
    setInterval(nextSlide, slideInterval);

  document.getElementById('creditForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman

        // Ambil data dari input form
        const nama = document.getElementById('nama').value.trim();
        const tipeMobil = document.getElementById('tipeMobil').value;
        const dp = document.getElementById('dp').value.trim();
        const tenor = document.getElementById('tenor').value;
        const domisili = document.getElementById('domisili').value.trim();

        // Nomor WhatsApp Tujuan
        const noWA = '6285745444995';

        // Format Pesan WhatsApp (menggunakan \n untuk enter)
        const pesanTeks = 
`*HALO SALES SUZUKI, SAYA INGIN PENAWARAN SIMULASI KREDIT*

*Data Pemohon:*
• *Nama:* ${nama}
• *Tipe Mobil & OTR:* ${tipeMobil}
• *Rencana DP:* ${dp}
• *Tenor:* ${tenor}
• *Domisili:* ${domisili}

Mohon dibantu hitungkan rincian simulasi kredit dan promo terbarunya. Terima kasih!`;

        // Encode seluruh pesan agar aman untuk URL WhatsApp
        const urlWA = `https://wa.me/${noWA}?text=${encodeURIComponent(pesanTeks)}`;

        // Buka WhatsApp di tab/aplikasi baru
        window.open(urlWA, '_blank');
    });


    document.getElementById('tradeInForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Mencegah reload halaman

            // Ambil nilai dari input
            const nama = document.getElementById('nama').value.trim();
            const alamat = document.getElementById('alamat').value.trim();
            const mobilLama = document.getElementById('mobilLama').value.trim();
            const tahunMobil = document.getElementById('tahunMobil').value.trim();
            const kmMobil = document.getElementById('kmMobil').value.trim();
            const unitSuzuki = document.getElementById('unitSuzuki').value;

            // Nomor WhatsApp Tujuan
            const noWA = '6285745444995';

            // Format Pesan WhatsApp
            const pesanTeks = 
`*HALO SALES SUZUKI, SAYA INGIN PENAWARAN TRADE IN (TUKAR TAMBAH)*

*Data Pengajuan Trade In:*
• *Nama:* ${nama}
• *Alamat:* ${alamat}
• *Mobil Sebelumnya:* ${mobilLama}
• *Tahun Mobil:* ${tahunMobil}
• *Kilometer (KM):* ${kmMobil}
• *Unit Suzuki Impian:* ${unitSuzuki}

Mohon dibantu appraisal/penilaian harga mobil lama saya dan penawaran unit Suzuki impian saya. Terima kasih!`;

            // Encode seluruh pesan agar aman untuk URL WhatsApp
            const urlWA = `https://wa.me/${noWA}?text=${encodeURIComponent(pesanTeks)}`;

            // Buka WhatsApp di tab/aplikasi baru
            window.open(urlWA, '_blank');
        });