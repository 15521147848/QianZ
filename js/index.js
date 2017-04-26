// 页面一
//滚屏
$(function(){
    $('#dowebok').fullpage({
    loopHorizontal:"true",
    scrollingSpeed:300,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'firethPage','sixPage','sevPage','lastPage'],
    menu:'myMenu',
    afterLoad: function(anchorLink, index){
		var loadedSection = $(this);
		liMouse(index-1);
		Nav(index);
		scrollFunc(anchorLink);

		}
  });
//首页轮播图
var mySwiper1 = new Swiper('.swiper-container1', {
	autoplay: 10000,//可选选项，自动滑动
	autoplayDisableOnInteraction : false,
	loop: true,//循环播放
	pagination : '.swiper-pagination',
	// paginationClickable  :true,
	grabCursor:true,
	simulateTouch : true,
	paginationOverable :true,
	bulletClass : 'my-bullet',
	bulletActiveClass : 'my-bullet2',
})
$('.my-bullet').mouseover(function(){
var Index = $(this).index();
mySwiper1.slideTo(Index+1);
})
//文字跑马灯
var speed = 0;
var MarqueeTime = 0;
var speedTop = parseInt($(".Marquee .li").css("height"))/100;
$('.Marquee .span').mouseover(function(){
	clearInterval(MarqueeTime);
})
$('.Marquee .span').mouseout(function(){
	strar();
})
function strar(){
MarqueeTime = setInterval(function(){
	$('.Marquee .span .li').css({
		"margin-top":-speed+'rem'
	})
	speed = speed +speedTop;
	if(speed>=speedTop*5){
		speed=0;
	}
},2000)
}
strar();
// 向下翻滚按钮
$('.toDownBtn span').click(function(){
$.fn.fullpage.moveSectionDown();
})
// 导航栏小横条位置

function liMouse(index){
		var li = $(".nav #myMenu .li");
		var line = $(".nav .smLine");
		var Left = (index*80)+15;;
		$(li).eq(index).css({"color":"#00dfb9"}).siblings().css({"color":"#ccc"});
		$(line).css({"left":Left+'px'});
		$(li).mouseover(function(){
			$(this).css({"color":"#00dfb9"});
		})
		$(li).mouseover(function(){
		var lIndex = $(this).index();
		var tLeft = (lIndex*80)+15 
		$(line).css({"left":tLeft+'px'});
		})	
		$(li).mouseout(function(){
		$(li).eq(index).css({"color":"#00dfb9"}).siblings().css({"color":"#ccc"});

		$(line).css({"left":Left+'px'});
		})

		}

// $()
// alert(lineLeft);

// 浮动模块触摸效果
function fixedMouse(png,pngMod){
$(png).mouseover(function(){
	var Index = $(this).index()-1;
	var right = parseInt($(pngMod).eq(Index).css("width"));
	$(this).css("opacity",".4")
	$(pngMod).eq(Index).css("right","50px");
	
})
$(png).mouseout(function(){
	var Index = $(this).index()-1;
	var right = parseInt($(pngMod).eq(Index).css("width"));
	$(pngMod).eq(Index).mouseover(function(){
	$(this).css("right",'50px');
	$(png).eq(Index).css("opacity",".4")
	})
	$(pngMod).eq(Index).mouseout(function(){
	$(pngMod).eq(Index).css("right",-(right+50)+'px');
	$(png).eq(Index).css("opacity",".8")
	})
	$(pngMod).eq(Index).css("right",-(right+50)+'px');
	$(png).eq(Index).css("opacity",".8");
})
}
(function(){
	var btnX=0;
	$('.fixedList .btn').click(function(){
	btnX++;
	if(btnX%2==0){
		console.log(btnX);
	$(this).css({"background-positionX":"0px"})
	$('.fixedList .list').css({
		'right':'0px',
		'opacity':'0.8'
	})
	if(btnX==10){
		btnX=0;
	}
	}else{
	console.log(btnX);
	$(this).css({"background-positionX":"-32px"})
	$('.fixedList .list').css({
		'right':'-100px',
		'opacity':'0.1'
	});
}
})
})()
fixedMouse(".png",".pngMod");
$('.pngFree').click(function(){$.fn.fullpage.moveSectionDown();})
$('.pngOne').click(function(){$.fn.fullpage.moveSectionUp();})
//鼠标滚动事件




// 页面二







// 页面四

//鼠标滑动换图
function mouseImg(imgIndex,i){
	
	$(imgIndex).mousemove(function(){
	var Left = parseInt($(this).offset().left);
	var Top = parseInt($(this).offset().top);
	$(i).css({
		left:(Left)+'px',
		top:(Top)+'px'
	})
	$(this).css({
		"background-positionY":"-150px",
	})
	})
	$(imgIndex).mouseout(function(){
	var Index = $(this).index();
	$(this).css({
		"background-positionY":"0px",
	})
	})

}
mouseImg(".sectionFour ul li",".sectionFour ul .bg");




//页面七

var mySwiper2 = new Swiper('.swiper-container2', {
	autoplay: 1000,//可选选项，自动滑动
	autoplayDisableOnInteraction : false,
	loop:true,
	width:480,
	height:240,
	grabCursor:true,
}) 
// 
$('.opction li').mouseover(function(){
var Index = $(this).index()-1;
var Top = Index*43;
var Left = Index*1.6;
$('.liB').css({"top":Top+'px'})
$('.liB2').css({"left":Left+'rem'})
mySwiper2.slideTo(Index+2);
})

setInterval(function(){
	strat();
},100)
function strat(){
	var index = (mySwiper2.activeIndex-1)
	if(index>=3){
		index=0;
	}
$('.liB').css({"top":(index*43)+'px'})
$('.liB2').css({"left":(index*1.6)+'rem'}) 
$('.opction li').eq(index).css({
	"color":"#FFF",
	"font-weigth":"bold"
}).siblings().css({
	"color":"#ccc",
	"font-weigth":"normal"
})
}


//鼠标滚动事件 导航栏缩放

function scrollFunc(pageIndex){
var nav = $('.nav');
var nav2 = $('.navTwo');
var logo = $('.nav .logo img');
var li = $('#myMenu');
var phone = $('.phoneNum');
var Line = $('.nav .smLine');
if(pageIndex=='firstPage'){
	// alert(pageIndex);
	nav.css({"background":"transparent"});
	logo.css({"width":"75%"});
	phone.css({"transform":"scale(1)"})
	// li.css({'transform':'scale(1)'});
	li.css({'transform':'scale(1)'});
	Line.css({"transform":"scale(1)"});
	nav.css({"top":"0px"});
	// 响应式 iphone5 - iphone6 plus
	nav2.css({"background":"transparent"})

}else{
	nav.css({"background":"rgba(0,0,0,0.5)"});
	nav.css({"top":"-5px"})
	logo.css({"width":"55%"});
	phone.css({"transform":"scale(.8)"});
	li.css({'transform':'scale(.9)'});
	Line.css({"width":"45px"});
	// 响应式 iphone5 - iphone6 plus
	nav2.css({"background":"rgba(0,0,0,0.4)"})
}	
}


// 响应式iphone5 - iphone6 plus
// 导航栏
function Nav(index){
$('.navTwo .List a').eq(index-1).css({
	"background":"#111",
	"color":"#00dfb9"
}).siblings().css({
	"background":"#3A3A3A",
	"color":"#fff"
})
}
// 点击隐藏导航栏
var NavX = 0;
$('.Fun').click(function(){
	NavX++;
	if(NavX%2==0){
	$(this).css("opacity",".5");
	$('.navTwo .List').css({
		"right":"-1.9rem"
	})
	}else{
	$(this).css("opacity","1");
	$('.navTwo .List').css({
		"right":"0rem"

	
	})
	NavX=NavX-2;
}
})

})
// 响应式页面三 swiper
var mySwiper3 = new Swiper('.swiper-container3', {
	autoplay: 2000,//可选选项，自动滑动
	loop:true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	autoplayDisableOnInteraction : false,
})
// 响应页面五 swiper
var mySwiper4 = new Swiper('.swiper-container4', {
	autoplay: 2000,//可选选项，自动滑动
	loop:true,
	prevButton:'.swiper-button-prev',
	nextButton:'.swiper-button-next',
	autoplayDisableOnInteraction : false,
})