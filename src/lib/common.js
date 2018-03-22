function bufferMove(obj,target,fn,ratio){
	var ratio = ratio || 8;
	clearInterval(timer);
	var timer = null;
	timer = setInterval(function(){
		var allOK = true;
		for(var attr in target){
			var cur = 0;
			if(attr === 'opacity'){
				cur = parseInt(getStyle(obj,'opacity') * 100);
			} else{
				cur = parseInt(getStyle(obj,attr));
			}
			var speed = (target[attr] - cur) / ratio;
			speed = speed > 0? Math.ceil(speed) : Math.floor(speed);
			var next = cur + speed;
			if(attr === 'opacity'){
				obj.style.opacity = next /100;
				obj.style.filter = 'alpha( opacity = ' + next + ')';
			} else{
				obj.style[attr] = next + 'px';
			}
			if(next !== target[attr]){
				allOK = false;
			}
		}
		if(allOK){
			clearInterval(timer);
			if(fn){
				fn();
			}
		}
	},50);
}
//
///*
//	获取当前样式值
//*/
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

//封装获取cookie的函数
function setCookie(name,value,days,path){
	days =days || 0;
	path = path || '/';
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + days);
	document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate + ';path=' + path;
}
//读取cookie的函数
function getCookie(name){
	var newCookie = document.cookie.split(';');
	for(var i =0;i<newCookie.length;i++){
		var result = newCookie[i].split('=');
		if(result[0] === name){
			return decodeURIComponent(result[1]);
		}
	}
}
//cookie的删除
function removeCookie(name,path){
	document.cookie = name + '=;expires=-1' + path;
}
