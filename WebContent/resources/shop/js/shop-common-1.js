$(function(){
	//内页顶部手机二维码显示s_phone
	if($('.s_pagestop').length >0){
	    $('.s_phone').on('mousemove',function(){
	    	$(this).find('.s_phonedown').show();
	    });
		  $('.s_phone').on('mouseout',function(){
			$(this).find('.s_phonedown').hide();
		});
		  $('.s_about').on('mousemove',function(){
	    	$(this).find('.s_litwo').show();
	    });
		  $('.s_about').on('mouseout',function(){
			$(this).find('.s_litwo').hide();
		});
		  $('.s_server').on('mousemove',function(){
	    	$(this).find('.s_litwo').show();
	    });
		  $('.s_server').on('mouseout',function(){
			$(this).find('.s_litwo').hide();
		});
		  $('.s_map').on('mousemove',function(){
	    	$(this).find('.s_litwo').show();
	    });
		  $('.s_map').on('mouseout',function(){
			$(this).find('.s_litwo').hide();
		});
	}
	//内页顶部手机二维码显示s_phone
	if($('.s_pagestop').length >0){
	    $('.s_phone').on('mousemove',function(){
	    	$(this).find('.s_phonedown').show();
	    });
		  $('.s_phone').on('mouseout',function(){
			$(this).find('.s_phonedown').hide();
		});
		  $('.s_about').on('mousemove',function(){
	    	$(this).find('.s_litwo').show();
	    });
		  $('.s_about').on('mouseout',function(){
			$(this).find('.s_litwo').hide();
		});
		  $('.s_server').on('mousemove',function(){
	    	$(this).find('.s_litwo').show();
	    });
		  $('.s_server').on('mouseout',function(){
			$(this).find('.s_litwo').hide();
		});
		  $('.s_map').on('mousemove',function(){
	    	$(this).find('.s_litwo').show();
	    });
		  $('.s_map').on('mouseout',function(){
			$(this).find('.s_litwo').hide();
		});
	}
	//列表分类
	if($('.classrb_top').length >0){
		var i="";
		 $('.classrb_top').on('mousemove','ul li',function(){
				i=$(this).index();
			    $('.classrb_top ul li a').removeClass('classrbhover');
			    $(this).find('a').addClass('classrbhover');
			    $('.classrb_center ul li').hide();
			    $('.classrb_center ul').find('li').eq(i).show();
		});
	}
	//详情页描述 参数 咨询 评价切换
	if($('.detailcr_ch').length >0){
		var a="";
		 $('.detailcr_c').on('click','ul li',function(){
		 	i=$(this).index();

		    $('.detailcr_c ul li span').removeClass('hover');
		    $(this).find('span').addClass('hover');
		 	if(i > 0){
		 		$('.detailcr_ch .detailcont').hide();
			    $('.detailcr_ch ').find('.detailcont').eq(i).show();
		 	}else{
		 		$('.detailcr_ch .detailcont').show();
		 	}
		});
	}
	//列表主题 商品 商铺 活动 切换
	if($('.list_func').length >0){
		var n="";
		$('.list_func ul li').on('click',function(){
			n=$(this).index();
			$('.list_func ul li').find('a').removeClass('funchover');
			$(this).find('a').addClass('funchover');
			$('.list_func .s_list').hide();
			$('.list_func ').find('.s_list').eq(n).show();
		});
	}
	//菜单导航
	if($('.nav').length >0){
		 $('.nav').on('mousemove','ul li',function(){
			    $(this).find('p').show();
		});
		 $('.nav').on('mouseout','ul li',function(){
			    $(this).find('p').hide();
		});
	}
})
