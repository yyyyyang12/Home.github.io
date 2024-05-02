$(document).ready(function(){
/* ---------------------------헤더------------------------------------------------------- */
    $('header').hover(function(){
        $('.logoOn').fadeOut(0).siblings().fadeIn(0)
    }, function(){
        $('.logoOff').fadeOut(0).siblings().fadeIn(0);
    })
    $('header').hover(function(){
        $('.subNav').stop().slideToggle()
    })
    $('header').mouseenter(function(){
        $('header').css({
            backgroundColor:'rgba(255,255,255,0.95)'
        })
        $('.subNav li a').css({
            color:'#333'
        })
        $('.subBg').css({
            backgroundColor:'rgba(255,255,255,0.95)',
            visibility:'visible'
        })
    })
    $('header').mouseleave(function(){
        $('header').css({
            backgroundColor:'rgba(255,255,255,0)'
        })
        $('.subNav li a').css({
            color:'#fff'
        })
        $('.subBg').css({
            backgroundColor:'rgba(255,255,255,0)',
            visibility:'hidden'
        })
    })


    var didScroll;
var lastScrollTop = 0;
var delta = 500;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('hd-down').addClass('hd-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('hd-up').addClass('hd-down');
        }
    }
    
    lastScrollTop = st;
}

/* -------------------------슬라이드-------------------------------------------------- */
    var num3 = 0
    setInterval(function(){
        if(num3 < 2){
            num3++
        }else{
            num3 = 0
        }
        $('.slide ul li').fadeOut()
        $('.slide ul li').eq(num3).fadeIn()
    }, 3000)

    /*  ---------------------탭 커텐츠------------------------------------------------ */

    $('.tabBtn li').click(function(){

        $('.tabBtn li a').removeClass()
        $(this).children('a').addClass('on')

        var li = $(this).index()

        $('.tabCon ul').hide()
        $('.tabCon ul').eq(li).show()
    })

    /* --------------------하단 컨텐츠------------------------------------------------ */

    $('.mCon ul').hover(function(){
        $(this).children('.mCon_1').stop().animate({top:-200}, 500, 'swing');
    }, function(){
        $(this).children('.mCon_1').stop().animate({top:700}, 300, 'swing')
    })

    /* --------------------사이드 바-------------------------------------------------- */
    $('.side').mouseenter(function(){
        $(this).css({
            right:'0',
            backgroundColor:'rgba(0,0,0,0.7)'
        })
    })
    $('.side').mouseleave(function(){
        $(this).css({
            right:'-200px',
            backgroundColor:'rgba(0,0,0,0.0)'
        })
    })
/*     $('.sMenu').click(function(){
        $('.side').animate({right:0})
        $('#sbtnOn').removeClass().siblings().addClass('visi')
    })
    $('#sbtnOff').click(function(){
        $('.side').animate({right:-200})
        $('#sbtnOff').removeClass().siblings().addClass('visi')
    }) */


    /* ------------------이벤트-------------------------------------------------------  */
    $('.eBtn1').hover(function(){
        $('.ea').css({
            transform:'scale(1.2)',
        })
    }, function(){
        $('.ea').css({
            transform:'scale(1)'
        })
    })
    $('.eBtn1').click(function(){
        $(this).css({
            visibility:'hidden',
        })
        $('.ea').css({
            marginTop: '0',
            marginLeft: '0',
            borderRadius: '0',
            border:'7px outset #fff',
            width: '1300px',
            height: '700px',
        })
        $('.eaa').css({
            zIndex:'5'
        })
    })
    $('.ea').click(function(){
        $(this).css({
            width:'100px',
            height:'100px',
            marginLeft:'210px',
            marginTop:'300px',
            border:'7px solid #fff',
            borderRadius:'50%'
        })
        setTimeout(function(){
            $('.eaa').css({
                zIndex:'0'
            })
        }, 200)
        $('.eBtn1').css({
            visibility:'visible'
        })
    })
    $('.eBtn2').hover(function(){
        $('.eb').css({
            transform:'scale(1.2)'
        })
    }, function(){
        $('.eb').css({
            transform:'scale(1)'
        })
    })
    $('.eBtn2').click(function(){
        $(this).css({
            visibility:'hidden'
        })
        $('.eb').css({
            marginTop: '0',
            marginLeft: '0',
            border:'7px outset #fff',
            borderRadius: '0',
            width: '1300px',
            height: '700px',
        })
        $('.ebb').css({
            zIndex:'5'
        })
    })
    $('.eb').click(function(){
        $(this).css({
            width:'100px',
            height:'100px',
            marginLeft:'470px',
            marginTop:'300px',
            border:'7px solid #fff',
            borderRadius:'50%'
        })
        setTimeout(function(){
            $('.ebb').css({
                zIndex:'0'
            })
        }, 200)
        $('.eBtn2').css({
            visibility:'visible'
        })
    })

    $('.eBtn3').hover(function(){
        $('.ec').css({
            transform:'scale(1.2)'
        })
    }, function(){
        $('.ec').css({
            transform:'scale(1)'
        })
    })
    $('.eBtn3').click(function(){
        $(this).css({
            visibility:'hidden'
        })
        $('.ec').css({
            marginTop: '0',
            marginLeft: '0',
            borderRadius: '0',
            border:'7px outset #fff',
            width: '1300px',
            height: '700px',
        })
        $('.ecc').css({
            zIndex:'5'
        })
    })
    $('.ec').click(function(){
        $(this).css({
            width:'100px',
            height:'100px',
            marginLeft:'730px',
            marginTop:'300px',
            border:'7px solid #fff',
            borderRadius:'50%'
        })
        setTimeout(function(){
            $('.ecc').css({
                zIndex:'0'
            })
        }, 200)
        $('.eBtn3').css({
            visibility:'visible'
        })
    })

    $('.eBtn4').hover(function(){
        $('.ed').css({
            transform:'scale(1.2)'
        })
    }, function(){
        $('.ed').css({
            transform:'scale(1)'
        })
    })
    $('.eBtn4').click(function(){
        $(this).css({
            visibility:'hidden'
        })
        $('.ed').css({
            marginTop: '0',
            marginLeft: '0',
            border:'7px outset #fff',
            borderRadius: '0',
            width: '1300px',
            height: '700px',
        })
        $('.edd').css({
            zIndex:'5'
        })
    })
    $('.ed').click(function(){
        $(this).css({
            width:'100px',
            height:'100px',
            marginLeft:'990px',
            marginTop:'300px',
            border:'7px solid #fff',
            borderRadius:'50%'
        })
        $('.edd').css({
            zIndex:'0'
        })
        $('.eBtn4').css({
            visibility:'visible'
        })
    })
})


