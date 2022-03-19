$(".carousel").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
})

$(".bargericon").on('click', ()=>{
    $('.header_nav').addClass('open');
    return false
})

$("body").on('click',()=>{
    $('.header_nav').removeClass('open');
})