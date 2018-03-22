//获取底部的二级元素
$('.tree-left ol>li').click(function(){
	$(this).children('i').toggleClass('active').remove('active').parent('li').next().toggleClass('focus');
})
//信息的判断
//引入正则
//获取姓名元素
$('#name').blur(function(){
	var regName = /^[\u2E80-\u9FFF]+$/;
	if(!regName.test($('#name').val())){
		$('#hidden').css({'display':'inline-block','color':'red'});
	} else {
		$('#hidden').css('display','none');
	}
})
var oDefaultValue = $('#error').val();
$('#address').blur(function(){
	var regAddress = /^[\u2E80-\u9FFF]+$/;
	if(!regAddress.test($('#address').val())){
		$('#error').html('地址中不能包含特殊字符');
		$('#error').css('color','red');
	} else {
		$('#error').html(oDefaultValue);
		$('#error').css('color','#5b5b5b');
	}
})
//地址字数限制
var oAddress = document.getElementById('address');
var oNum = document.getElementById('num');
var cut = function(){
	if(this.value.length>35){
		this.value = this.value.slice(0,35);
	}
	oNum.innerHTML = 35 - this.value.length;
}.bind(oAddress);
//创建中文标示
var isInputChinese;
oAddress.oninput = function(){
	if(!isInputChinese){
		cut();
	}
}
oAddress.addEventListener('compositionstart',function(){
	isInputChinese = true;
	if(!isInputChinese){
		cut();
	}
})
oAddress.addEventListener('compositionend',function(){
	isInputChinese = false;
	cut();
})
//手机号验证
var regPhoneNum = /^[1][3,4,5,7,8][0-9]{9}$/;
$('#mobile').blur(function(){
	if(!regPhoneNum.test($('#mobile').val())){
		$('#phone').html('手机号格式有误！');
		$('#phone').css('color','red');
	} else {
		$('#phone').html('');
	}
})


//cookie数据的写入
//获取cookie
var sGoods = getCookie('goods');
var oGoodsInfo = document.getElementById('goods-info');
var aGoods = sGoods ? JSON.parse(sGoods) :[];
for(var i =0;i<aGoods.length;i++){
	var oGoods = aGoods[i];
	var oTr = document.createElement('tr');
	oTr.innerHTML = '<tr id="goods"><td style="border-left: 1px solid #D6D3D3" ><a href=""><img id="goods-img" src="'+oGoods.url+'"/></a></td><td style="text-align: left;"><p>'+oGoods.brand+'</p><p>'+oGoods.name+'</p><p>颜色：'+oGoods.color+' &nbsp; 尺寸：'+oGoods.size+'</p></td><td>'+oGoods.price+'</td><td style="border-right: 1px solid #d6d3d3;">'+oGoods.num+'</td></tr>'
	oGoodsInfo.appendChild(oTr);
}
