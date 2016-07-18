(function  ($) {
	/*全局变量*/
	boxs  = $(".box");
	aBoxW = $(".box").outerWidth();
	count = $(".box").length;
	aWidth = $(window).width();
	cols = Math.floor(aWidth/aBoxW);
	document.body.onload=function(){
		window.href="http://img.zcool.cn/community/013cb15648986a32f87512f6d87dc8.gif"
	}
	var pics = {
		"data":[{"src":"1.png"},{"src":"2.png"},{"src":"4.png"}]
	}
	var img={}
	window.onscroll =scroll;
	function scroll(){
		// 检测最后一张图片滚动到底部
		var tItem = boxs[boxs.length-1].offsetTop+Math.floor(boxs[boxs.length-1].offsetHeight)/2;
		var sTop = document.body.scrollTop;
		var height = document.documentElement.clientHeight;
		loadStatus = (tItem<sTop+height)?true:false;
		if(loadStatus){
			$.ajax({
				type:"get",
				url:"",
				dataType:"json",
				success:function(d){
					for(var i = 0 ; i<pics.data.length;i++){
						img.src = "pics/"+d.data[i].src;
						console.log(img.src)
						var cnt = "<div class='box'>"+"<div class='pic'>"+"<img src="+img.src+ " alt=''>"+"</div></div>";
						$("#main").append(cnt);
					}
				},
				error:function(){
					console.log("傻逼了吧");
				}

			});
			
		}
		
	}
	var Waterfall = (function(){
		function Waterfall(element,options){
			this.settings = $.extend(true,$.fn.Waterfall.defaults,options||{});
			this.element = element;
			this.init();
		}
		Waterfall.prototype={
			init:function(){
				var me = this;	
								
			},
			
			render:function(){
				$("#main").css({
					"width":cols*aBoxW,
					"margin": "0 auto",
					"height":'auto'
				})
				var arr = [];
				for (var i = 0; i<count; i++) {
					if(i<cols){
						arr.push(boxs[i].offsetHeight);
						// console.log(arr)
					}else{
						var minH = Math.min.apply(null,arr);
						index = arr.indexOf(minH)
						$(boxs[i]).css({
							'top':arr[index],
							'left':index * aBoxW,
							'position':'absolute'
						})
						arr[index] = minH + boxs[i].offsetHeight;
					}
				}
			},
		}
		return Waterfall;
	})();
	$.fn.Waterfall = function(options){
		return this.each(function(){
			var me = $(this),
			instance =  me.data("Waterfall");
			if(!instance){
				instance = new Waterfall(me,options);
				me.data("Waterfall",instance);
			}
			if($.type(options)==="string")return instance[options]();
		});
	};

	$.fn.Waterfall.defaults = {}
})(jQuery);