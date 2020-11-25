jQuery(document).ready(function ($) {
    $(".product__main-photos").mousemove(function (e) {
        $(".product__main-photos .slick-current img").width($(".product__main-photos .slick-current").width() * 2);
        $(".product__main-photos .slick-current img").css("left", ($(".product__main-photos .slick-current").offset().left - e.pageX) + "px");
        $(".product__main-photos .slick-current img").css("top", ($(".product__main-photos .slick-current").offset().top - e.pageY) + "px");
    });

    $(".product__main-photos").mouseout(function (e) {
        $(".product__main-photos .slick-current img").width($(".product__main-photos .slick-current").width());
        $(".product__main-photos .slick-current img").css("left", "0px");
        $(".product__main-photos .slick-current img").css("top", "0px");
    });
})