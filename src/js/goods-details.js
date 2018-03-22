//获取到选项卡列表元素
//$('.goods-data').each().onmouseover(function(){
//	$(this).addClass('active').siblings().removeClass('active');
//})
//鼠标滑入所有的选项卡,显示对应的边框
var smallBox = document.getElementById('small-map');
var smallImg = Array.from(smallBox.children);
var bigImg = document.getElementById('big-map');
var oLargeImg = document.getElementsByClassName('largeimg')[0];
var oLargeBox = document.getElementsByClassName('large-box')[0];
var oShadow = document.getElementById('shadow');
var oBigBox = document.getElementById('big-map');
var oBox = document.getElementsByClassName('goods-map')[0];
var oBigs = document.getElementById('bigs');
var oLarges = document.getElementById('larges');
smallImg.forEach(function(v){
	v.onmouseover = function(){
		$(this).addClass('active').siblings().removeClass('active');
	}
})


// 遮罩层最大的left和top值
var maxL = 0;
var maxT = 0;
// 大图片最大的left和top值
var maxLargeImgL  = 0;
var maxLargeImgT  = 0;
oBigBox.onmouseover = function(){
		oLargeBox.style.display = 'block';
		oShadow.style.display = 'block';
	// 获取最大的left和top值
	maxL = oBigBox.offsetWidth - oShadow.offsetWidth;
	maxT = oBigBox.offsetHeight - oShadow.offsetHeight;
	
	maxLargeImgL = oLargeImg.offsetWidth - oLargeBox.offsetWidth;
	maxLargeImgT = oLargeImg.offsetHeight - oLargeBox.offsetHeight;
}
oBigBox.onmousemove = function(ev){
	var e = ev || window.event;
	var iL = e.pageX - oShadow.offsetWidth / 2 - oBigBox.offsetLeft - oBox.offsetLeft;
	var iT = e.pageY - oShadow.offsetHeight / 2 - oBigBox.offsetTop - oBox.offsetTop;

	// 限定左侧
	if(iL < 0) {
		iL = 0;
	}

	// 限定上侧
	if(iT < 0) {
		iT = 0;
	}

	// 限定右侧
	if(iL > maxL) {
		iL = maxL;
	}

	// 限定下侧
	if(iT > maxT) {
		iT = maxT;
	}
	oShadow.style.left = iL + 'px';
	oShadow.style.top  = iT + 'px';
	// 让大图移动
	oLargeImg.style.left  = - iL * maxLargeImgL / maxL + 'px';
	oLargeImg.style.top   = - iT * maxLargeImgT / maxT + 'px';
}
oBigBox.onmouseout = function(){
	oLargeBox.style.display = 'none';
	oShadow.style.display = 'none';
}

//商品评论
//872.2222290039062
var oAssessment = document.getElementsByClassName('goods-attr-tit')[0];
var oFixLeft = document.getElementsByClassName('fix-left')[0];
var oFixRight = document.getElementsByClassName('fix-right')[0];
var oPJ = document.getElementsByClassName('pingjia')[0];
var oContList = document.getElementsByClassName('con-list')[0];
window.onscroll = function(){
	var sScroll = document.body.scrollTop || document.documentElement.scrollTop;
	if(sScroll >= 871){
		oAssessment.style.position = 'fixed';
		oAssessment.style.top = 0;
	} else {
		oAssessment.style.position = 'static';
	}
	if(sScroll >= 777.7777709960938){
		oFixLeft.style.transform = 'scale(1)';
		oFixLeft.style.opacity = 1;
		oFixLeft.style.display = 'block';
		oFixLeft.style.transition = '1s';
		
	} else {
		oFixLeft.style.transform = 'scale(.5)';
		oFixLeft.style.opacity = '0';
		oFixLeft.style.display = 'none';

		
	}
}
oPJ.onclick = function(){
		oContList.style.display = 'none';
		window.scrollTo(0,870);
}
var oInfo =document.getElementsByClassName('info');
for(var i = 0;i<oInfo.length;i++){
	oInfo[i].onmouseover = function(){
		$(this).addClass('focus').parent().siblings().children().removeClass('focus');
	}
}
// 右侧悬浮关闭
var oCloser = document.getElementsByClassName('closer')[0];
oCloser.onclick = function(){
	oFixRight.style.display = 'none';
}


//购物信息
var oColorInfo = document.getElementsByClassName('color-info');
for(var i =0;i<oColorInfo.length;i++){
	oColorInfo[i].onmouseover = function(){
		$(this).addClass('active-color').siblings().removeClass('active-color');
	}
}
var oSizeInfo = document.getElementsByClassName('size-info');
for(var i =0;i<oSizeInfo.length;i++){
	oSizeInfo[i].onmouseover = function(){
		$(this).addClass('active-color').siblings().removeClass('active-color');
	}
}

//购买商品的数量
var oNums = document.getElementById('nums');
var oSub = document.getElementById('sub');
var oAdd = document.getElementById('add');
oSub.onclick = function(){
	if(oNums.value > 1){
		oNums.value -= 1;
	} else {
		oNums.value = 1;
	}
}
var nums = 1;
oAdd.onclick = function(){
	nums +=1;
	oNums.value = nums;
}
var oGoodsNum = document.getElementById('goods_num');
var oBuyImg = document.getElementById('buyImg');
//设置页面信息交换
//接收cookie中的商品属性
var sGoods = getCookie('goods');
var aGoods = sGoods ? JSON.parse(sGoods) :[];
//将cookie中的商品遍历出来得出商品属性
for(var i =0;i<aGoods.length;i++){
	var oGoods = aGoods[i];
	
	$('.active').find('img').attr('src',oGoods.url);
	$('#bigs').attr('src',oGoods.url);
//	添加购物商品的数量
	$('#buy').click(function(){
		$('#buyImg').css({display:'block'});
		oGoods.num += parseInt(oNums.value);
		oGoodsNum.innerHTML = oGoods.num;
		var oNum = document.getElementById('num');
		oNum.innerHTML = oGoods.num;
	})
	
$(function(){
	var oNum = document.getElementById('num');
	oGoodsNum.innerHTML = oGoods.num;
	oNum.innerHTML = oGoods.num;
})
	
	
	
	
// 	历史浏览记录
//创建li追加到history中
var oLi = document.createElement('li');
oLi.innerHTML = '<a class="goods-img" href=""><img src="'+oGoods.url+'"/></a><p class="goods-pp">'+oGoods.brand+'</p><a class="goods-name" href="">'+oGoods.name+oGoods.id+'</a>'
var oHistory = document.getElementsByClassName('history')[0];
oHistory.appendChild(oLi);
//	创建a标签元素元素
var oA = document.createElement('a');
var oB = document.createElement('a');
var oC = document.createElement('a');
var oGoodsTit = document.getElementsByClassName('goods-data active')[0];
	oLarges.src = oGoods.url;
	oA.innerHTML = '<img src="'+oGoods.url+'"/>';
	oB.innerHTML = '<img src="'+oGoods.url+'"/>';
	oC.innerHTML = '<img src="'+oGoods.url+'"/>';
	oGoodsTit.appendChild(oA);
	document.getElementsByClassName('goods-data')[1].appendChild(oB);
	document.getElementsByClassName('goods-data')[2].appendChild(oC);
	var oPositionName = document.getElementById('positionName');
	var oPName = document.getElementById('p_name');
	oPositionName.innerHTML = oGoods.name;
	oPName.innerHTML =oGoods.name;
//	添加品牌
	var oBrand = document.getElementById('brand');
	oBrand.innerHTML = oGoods.brand;
//	品牌评论
	var oAssess = document.getElementById('access');
	var oAccess = document.getElementById('assess');
	oAccess.innerHTML = oGoods.assess;
	oAssess.innerHTML = oGoods.assess;
//	商品编号
	var oIdNum = document.getElementsByClassName('idnum')[0];
	oIdNum.innerHTML = '商品编号'+ oGoods.id +'';
//	商品价格
 	var oPrice = document.getElementById('price');
 	var oPri = document.getElementById('pri');
 	oPri.innerHTML = oGoods.price;
 	oPrice.innerHTML = oGoods.price;
 	
 	$('title').html(oGoods.tit);
}
