// scroll aos
AOS.init({
  duration: 1200,
});
// main menu slide
var clickCount = 0;
$('.main-menu-btn').on('click', function(){
    if(clickCount%2 != 0){
    $('.main-menu').slideDown(300);
}
else{
  $('.main-menu').slideUp(300);
}
clickCount = clickCount + 1;
});
// futura-video
gsap.registerPlugin(ScrollTrigger);
const textAnimation = gsap.to(".f-i-sub", {
  opacity: 1,
  duration: 1,
  ease: "sine.inOut",
  paused: true,
delay: 0.3,
});
gsap.to(".f-i-vedio-box", {
    scrollTrigger: {
    trigger: ".f-i-vedio-box",
    start: 'top center',
    end: 'center center',
    toggleActions: "restart none reverse none",
    onEnter: () => textAnimation.play(),
    onLeaveBack: () => textAnimation.reverse(),
  },
  width: "1920px",
  height: "880px",
  borderRadius: 0,
  duration: 1, 
  x:-673, y:-354,
});
// FUTURA swiper
var futuraswiper = new Swiper(".futuraSwiper", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  speed: 1200,
  observer: true,
  observeParents: true,
  watchOverflow: true,
  on: {
    slideChange: function () {
      $('.menu-link').removeClass('active');
      $('.menu-link').eq(futuraswiper.activeIndex).addClass('active');
    },
    reachEnd: function () {
      setTimeout(function () {
        futuraswiper.params.touchReleaseOnEdges = true;
        futuraswiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
    reachBeginning: function () {
      setTimeout(function () {
        futuraswiper.params.touchReleaseOnEdges = true;
        futuraswiper.params.mousewheel.releaseOnEdges = true;
      }, 500);
    },
  }
});
//FUTURA swiper menu click
$('.menu-link').on('click', function(e) {
  e.preventDefault(); 
  var targetId = $(this).attr('href');
  $('.menu-link').removeClass('active');
    $(this).addClass('active');
  futuraswiper.slideTo($(targetId).index()); 
});
gsap.to(".futuraSwiper", {
  scrollTrigger: {
  trigger: ".futuraSwiper",
  start: '0px',
  end: 'bottom',
  toggleActions: "restart none reverse none",
},
delay: 0.3,
});
// t-banner scroll pen effect
var lastScrollTop = 0;
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
    if(scrollTop >= 4300) { 
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { 
            $(".pen-effect").addClass("active");
        } else {
            $(".pen-effect").removeClass("active");
        }
        lastScrollTop = scrollTop;
    } 
});
// best-collections swiper&scroll
gsap.registerPlugin(ScrollTrigger);
var bestswiper = new Swiper('.bestSwiper', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  speed: 1200,
  on: {
    slideChange: function() {
        setTimeout(function () {
          bestswiper.params.touchReleaseOnEdges = false;  
          bestswiper.params.mousewheel.releaseOnEdges = false;
        });
    },
    reachEnd: function() {
        setTimeout(function () {
          bestswiper.params.touchReleaseOnEdges = true;
          bestswiper.params.mousewheel.releaseOnEdges = true;
        }, 500);
    },
    reachBeginning: function() {
        setTimeout(function () {
          bestswiper.params.touchReleaseOnEdges = true;
          bestswiper.params.mousewheel.releaseOnEdges = true;
        }, 500);
    }
}
});
gsap.to('.collection-box', {
  scrollTrigger: {
    trigger: '.collection-text-box',
    start: '0px',
    end: 'bottom top',
    scrub: 1,
  },
});
// best-collection-popup
$('.collection-text-box').click(function(){
  $('.popup-box').addClass('active');
  $('.collection-text-box').addClass('active');
  $('.collection-text-box .c-title').addClass('active');
});
$('.popup-closebtn').on('click',function(){
  $('.popup-box').removeClass('active');
  $('.collection-text-box').removeClass('active');
  $('.collection-text-box .c-title').removeClass('active');
});