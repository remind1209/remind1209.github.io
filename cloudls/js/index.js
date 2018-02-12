(function(){
	// ban
	// $(".ban1-pic").hover(function(){
	// 	$(this).stop().animate({"width":"1064px","margin-left":"-532px"},600);
	// },function(){
	// 	$(this).stop().animate({"width":"1044px","margin-left":"-522px"},600);
	// })

	// ban动画
	$('.ban1').mousemove(function(e) {
		var offsetX = e.clientX / window.innerWidth - 0.5,
			offsetY = e.clientY / window.innerHeight - 0.5;
		var _left = -50 * offsetX;    //如果想动的幅度更大，可以调整 -40 的值
		var _top = -50 * offsetY;     //如果想动的幅度更大，可以调整 -40 的值
		//应用公式
		$('.ban1 .ban1-p').css('left',_left*1.4).css('top',_top*0.4);  //将您的left值和top值先+此数值，*的小数越大，动的越大，否则越小
	});

	// 点击查看更多
	$(".more").click(function(){
		var moretext = $(this).text();
		if(moretext == "查看更多"){
			$(".ban2").height(691);
			$(".ban2 ul").height(552);
            $(this).text("收起");
            $(this).css("margin-left","-20px");
		}else{
			$(".ban2").height(405);
			$(".ban2 ul").height(266);
            $(this).text("查看更多");
            $(this).css("margin-left","-40px");
		}
	})

	//times
	$(".times ul li div img").hover(function(){
		$(this).stop().animate({"width":"190px"})
	},function(){
		$(this).stop().animate({"width":"176px"})
	})
	$(".times ul li div img").click(function(){
		document.documentElement.style.overflow='hidden';
		var picx = $(this).attr("data");
		if(picx == "./images/big1.png"){
			$(".mark .pics").width(1000);
			$(".mark .pics").height(640);
		}else{
			$(".mark .pics").width(1000);
			$(".mark .pics").height(450);
		}
		$(".mark").show();
		$("embed").height(0);
		$(".mark img").attr("src",picx);
		$(".markbg").click(function(){
			close();
		})
		$(".mark .close").click(function(){
			close();
		})
		function close(){
			$(".mark").hide();
			$("embed").height(450);
			document.documentElement.style.overflow='auto';
		}
	})

	//薪资
	var len = $(".mright-list li").length;
	var liH = $(".mright-list li").height();
	var timer = null;
	$(".mright-list ul").height((len+1)*liH);
	var inx = 0;
	change();
	function change(){
		timer = setInterval(function(){
			inx++;
			if(inx>len-1){
				inx = 0;
			}
			$(".money-left li").eq(inx).fadeIn().siblings().hide();
			$(".mright-list ul").animate({"margin-top":-liH},function(){
				$(".mright-list ul li:eq(0)").appendTo($(".mright-list ul"));
				$(".mright-list ul").css({"margin-top":0});
			});
			var test = $(".mright-list ul li").eq(1).html();
			$(".mright-b").html(test);
		},2000)
	}
})()