//初始化插件
$(document).ready(function($){
	$('.list-group').paginathing({
//		一个页面显示32个商品列表
		perPage:32,//每个页面显示32个，看li总数可以分成几个页码
		prevText:'上一页',
		nextText:'下一页',
		pageCount:16,
		firstText:'首页',
		lastText:'尾页',
		containerClass:'panel',
		totalData:16
	})
	$('.list-group').paginathing({
//		一个页面显示32个商品列表
		perPage:32,//每个页面显示32个，看li总数可以分成几个页码
		prevText:'上一页',
		nextText:'下一页',
		pageCount:16,
		firstText:'首页',
		lastText:'尾页',
		containerClass:'paneltwo',
		totalData:16
	})
});
$('.closer').click(function(){
	$('.fix-right').css({'opacity':'0','display':'none'});
})



//购物车信息交互
//遍历ul下的所有的li
var oUl = $('.list-group');
//获取跳转链接按钮
var oJump = oUl.find('.goodsImg').click(function(){
	location.href = 'goods-details.html';
//	获取商品的各个属性
	var oId = $(this).attr('data-id');//编号
	var oName = $(this).attr('data-name');//名字
	var oBrand = $(this).attr('data-brand');//品牌
	var oPrice = $(this).attr('data-price');//价格
	var oSize = $(this).attr('data-size');//尺寸
	var oUrl = $(this).attr('data-url');//路径
	var oColor = $(this).attr('data-color');//颜色
	var oTit = $(this).attr('data-tit');//页面标题
	var oAccess = $(this).attr('data-assess');//品牌评论
//	创建商品的对象,将商品属性放入对象中
	var oGoods = {
		id:oId,
		name:oName,
		brand:oBrand,
		price:oPrice,
		size:oSize,
		url:oUrl,
		color:oColor,
		tit:oTit,
		assess:oAccess,
		num:1
	}
//	读取cookie查看cookie中是否含有商品
	var sGoods = getCookie('goods');
	var aGoods = sGoods ? JSON.parse(sGoods) : [];
	var notexites = aGoods.every(function(v){
		if(v.id === oGoods.id){
			return false;
		}
		return true;
	})
	if(notexites){
		aGoods.push(oGoods);
	}
//	传入cookie
	setCookie('goods',JSON.stringify(aGoods),7);
})
