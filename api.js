// Swiper.js Projeler Carousel Başlatma Kodu
const swiper = new Swiper('.swiper', {

    direction: 'horizontal',

    loop: true,

    speed: 600,

    autoplay: {
        delay: 3500, // 3.5 saniye bekle
        disableOnInteraction: false, // Kullanıcı dokunduktan sonra da devam et
    },

    slidesPerView: 1, // Mobil varsayılanı (tek slayt)
    spaceBetween: 30, // Slaytlar arası boşluk

    breakpoints: {
        640: {
            slidesPerView: 2, // 2 slayt göster
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3, // 3 slayt göster
            spaceBetween: 30,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Noktalara tıklanabilir yapar
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});