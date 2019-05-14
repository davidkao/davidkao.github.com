$(document).ready(function(){
					
					
					//function menu 
					$(window).scroll(function() {
 					var height_1 = $('header').height()-40;
					if($(this).scrollTop() >= height_1)
						$('.func_btn').addClass('autoflow');
					else
						$('.func_btn').removeClass('autoflow');
					});
					
					//detect mobile to disable some effect
					//mobile_colorbox();
					
					//fix main_visual  problem
					var width =  $(window).width();
						if ( width >= 1441 ){
							var adj_height =( width * 762 /1440 ) - 5;
							$('.full_back').css({'height':adj_height});
						 }
						 else if ( width >= 768 && width <=1440 )
						 	$('.full_back').css({'height':'762px'});
						 else
						 	$('.full_back').css({'height':'400px'});
					
					
					
					$(window).resize(function () {
					
						
						//detect mobile to disable some effect
						//mobile_colorbox();
						
						//fix main_visual  problem
						var width =  $(window).width();
						if ( width >= 1441 ){
							var adj_height =( width * 762 /1440 ) - 5;
							$('.full_back').height(adj_height);
						 }
						 else if ( width >= 768 && width <=1440 )
						 	$('.full_back').css({'height':'762px'});
						 else
						 	$('.full_back').css({'height':'400px'});
					});
					
					
					
					var resizeTimer;
					function resizeColorBox()
					{
						if (resizeTimer) clearTimeout(resizeTimer);
						resizeTimer = setTimeout(function() {
								if ($('#cboxOverlay').is(':visible')) {
										$.colorbox.load(true);
								}
						}, 300)
					}

					$(window).resize(resizeColorBox);
					window.addEventListener("orientationchange", resizeColorBox, false);
					
					
					//hover effect
					$('.hov75').hover(function(){$(this).find('img').fadeTo(120,0.75)},function(){$(this).find('img').fadeTo(60,1)});
					
					//black and white plugin	
					$(window).load(function(){
						$('.bw').BlackAndWhite({
							webworkerPath : false,
							responsive:true,
							//invertHoverEffect: true,
							HoverEffect: true,
							speed: {fadeIn: 150,fadeOut: 60 }
						});
					});
					
					/*
					$('.mark img').hover(
						function(){
							$(this).parents(1).find('.visual_back2').stop().fadeTo(220,1);$(this).parents(1).find('.mark.pos1').stop().fadeTo(150,0.04);
							$(this).parents(1).find('.mark.pos2').stop().animate({'marginTop':'8px','marginLeft':'-14px','opacity': 0.06},150);
							$(this).parents(1).find('.mark.pos3').stop().animate({'marginTop':'-8px','marginLeft':'14px','opacity': 0.02},150);
										},

						function(){
							$(this).parents(1).find('.visual_back2').stop().fadeTo(100,0);$(this).parents(1).find('.mark.pos1').stop().fadeTo(500,0.6);
							$(this).parents(1).find('.mark.pos2').stop().animate({'marginTop':0,'marginLeft':0,'opacity': 0},100);
							$(this).parents(1).find('.mark.pos3').stop().animate({'marginTop':0,'marginLeft':0,'opacity': 0},140);
										}
					)
					*/
					
					//add class 'black' to cover a black on portfolio
					$('.portfolio .item').each(function(i){
						$(this).find('.inner .hover .color').addClass('black');
					})
					
					// A portfolio hover effect
					$('.portfolio .item .inner').hover(function(){$(this).find('.hover .color').stop().fadeTo(150,0);$(this).find('.hover .magnifier').stop().fadeTo(150,0);},function(){$(this).find('.hover .color').stop().fadeTo(60,0.65);$(this).find('.hover .magnifier').stop().fadeTo(60,1);});
					
					
					
					
					//swipebox
					$(".swipebox").swipebox({
						hideBarsDelay : 4500, // 0 to always show caption and action bar
						videoMaxWidth : 1140, // videos max width
					});
						   
});


	