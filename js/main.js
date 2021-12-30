$(function(){
    // Hamburger
    $('.menu__opener') .click(function(){
        $('.menu__collapse') .toggleClass('d-none') .css('order', '1');
        $('.header__nav') .toggleClass('menu-opened');
    });
    $('.menu-opened li a') .click(function(){
        $('.menu__collapse') .toggleClass('d-none') .css('order', '1');
        $('.header__nav') .toggleClass('menu-opened');
    });
    // Preloader
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1200);
    });
    // Modal Window
    $('.footer__btn, .header__btn').click(function(e){
        e.preventDefault();
    $('#exampleModal').arcticmodal();
    });
    // carousel SLICK-SLIDER
    $('.consultation__elements').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
    });    
});
  // Yandex map 
  ymaps.ready(init);
  function init(){ 
      // Создание карты.    
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [46.47412857443835,30.746008499999924],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 18
      });
  }