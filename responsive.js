new Swiper("#swiper-2",{
    slidesPerView: 3.5,
    centeredSlides:true,
    spaceBetween: 20,
    lazyLoading: true,
    loop: true,
    keyboard:{
        enabled:true,
    },
    navigation:{
        nextEl:"#nav-right",
        prevEl:"#nav-left",
    }
})