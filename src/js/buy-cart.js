//获取cookie
var sGoods = getCookie('goods');
var aGoods = sGoods ? JSON.parse(sGoods) : [];
for(var i=0;i<aGoods.length;i++){
	var oGoods = aGoods[i];
//	获取索要添加的位置
	var oBuyed = document.getElementById('buyed');
	var oTr = document.createElement('tr');
	oTr.className = 'goods-list';
	oTr.innerHTML = '<td class="checkbox"><input id="se" type="checkbox" /></td><td class="goods-info" colspan="2"><div class="tx-img"><a href=""><img width="60" height="80" src="'+oGoods.url+'"/> </a></div><div class="tx-info"><p>'+oGoods.brand+'</p><p><a href="" style="color: #000;">'+oGoods.name+'</a></p><p>'+oGoods.color+'尺码：'+oGoods.size+'</p><p id="ID" >'+oGoods.id+'</p></div></td><td class="goods-price">'+oGoods.price+'</td><td class="goods-num"><p><a href="javascript:;">-</a><input value="'+oGoods.num+'" type="text" /><a href="javascript:;">+</a></p><p><span>余量有限</span></p></td><td class="goods-collect"><p><a href="javascript:;">移至收藏夹</a></p><p><a id="del" href="javascript:;">删除</a></p></td>'
	oBuyed.appendChild(oTr);
}
//var oDel = document.getElementById('del');
oAllTr = Array.from(document.getElementsByClassName('goods-list'));
oAllTr.forEach(function(v){
	$(v).on('click','#del',function(){
		$(v).css('display','none');
//		遍历cookie
		aGoods.every(function(v,k){
			var oID = document.getElementById('ID');
			if(v.id === oID.innerHTML){
				aGoods.splice(k,k+1);
			}
		})
	})
})
//var oSe = $('#se');
var oCheckBox = $('.checkbox');
var oSe = oCheckBox.find('#se');
var oCal = document.getElementsByClassName('calculate')[0];
var oSelected = document.getElementById('selected');
oSelected.onclick = function(){
	oSe.attr('checked','checked');
}
console.log(oSelected);
oCal.onclick = function(){
		if(oSe.prop('checked')){
			location.href = 'buy-list.html';
		}
}
