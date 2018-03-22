//获取左侧窗口定位元素
var fixTop = 800;
var navLeft = document.getElementsByClassName('nav_left')[0];
var navRight = document.getElementsByClassName('nav_right')[0];
window.onscroll = function(){
	var sScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var leftTop = sScroll - 600 + 'px';
	if(sScroll >= fixTop){
		$('.nav_left').css({'opacity':1,'top':leftTop,'transform':'scale(1)','transition':'1s'});
		navRight.style.opacity = 1;
		navRight.style.top = sScroll - 800 + 'px';
		navRight.style.transform = 'scale(1)';
		navRight.style.transition = '1s';
	} else {
		navLeft.style.opacity = 0;
		navLeft.style.transform = 'scale(.5)';
		navRight.style.opacity = 0;
		navRight.style.transform = 'scale(.5)';
	}
}
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.weixin').mouseover(function(){
	$('.ewm').css({'display':'block','opacity':1});
})
$('.weixin').mouseout(function(){
	$('.ewm').css({'display':'none','opacity':'1'});
})


var sGoods = getCookie('goods');
var aGoods = sGoods ? JSON.parse(sGoods) :[];
for(var i =0;i<aGoods.length;i++){
	var oGoods = aGoods[i];
	var oNum = document.getElementById('num');
	oNum.innerHTML = oGoods.num;
}