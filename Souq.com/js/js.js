$('.searchBtn').click(function(){
    if($('.mini-search').css('display')=='none'){
        $('.mini-search').css('display','flex')
    } else if($('.mini-search').css('display')=='flex'){
        $('.mini-search').css('display','none')
    }
});

$('.fa-bars, .side-button').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('.side-button').fadeToggle(400);
    $('.main').toggleClass('main-fade').animate({
        transition: '.5s'
    });
});

$('.navbar-collapse .navbar-nav .dropdown a').click(function(){
    $(this).next('.dropdown-content').slideToggle();
});




var card = document.querySelector('.carouselContainer'),
    nextButton = document.querySelector('button.next'),
    prevButton = document.querySelector('button.prev')

var currentMargin = 0
nextButton.onclick = function () {
  currentMargin = currentMargin - 200
  card.style.marginLeft = currentMargin + "px"
  console.log('clicked')
}

prevButton.onclick = function () {
  currentMargin = currentMargin + 200
  card.style.marginLeft = currentMargin + "px"
}
 