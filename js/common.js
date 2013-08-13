$(document).ready(function(){
					$('.hov75').hover(function(){$(this).find('img').fadeTo(120,0.75)},function(){$(this).find('img').fadeTo(60,1)});
					
					
					$(window).load(function(){
						$('.bw').BlackAndWhite({
							webworkerPath : false,
							responsive:true,
							//invertHoverEffect: true,
							HoverEffect: true,
							speed: {fadeIn: 150,fadeOut: 60 }
						});
					});
					
					//visual animation
					$('.mark img').hover(
						function(){
							$(this).parents(1).find('.visual_back2').stop().fadeTo(220,1);$(this).parents(1).find('h1.mark').stop().fadeTo(100,0.1);
							$(this).parents(1).find('.mark.pos2').stop().animate({'marginTop':'8px','marginLeft':'-14px','opacity': 0.20},100);
							$(this).parents(1).find('.mark.pos3').stop().animate({'marginTop':'-8px','marginLeft':'14px','opacity': 0.14},140);
										},

						function(){
							$(this).parents(1).find('.visual_back2').stop().fadeTo(100,0);$(this).parents(1).find('h1.mark').stop().fadeTo(250,0.4);
							$(this).parents(1).find('.mark.pos2').stop().animate({'marginTop':0,'marginLeft':0,'opacity': 0},100);
							$(this).parents(1).find('.mark.pos3').stop().animate({'marginTop':0,'marginLeft':0,'opacity': 0},140);
										}
					)
					
					
					$('.portfolio .item').each(function(i){
						
						if(i%2==1)
						$(this).find('.inner .hover .color').addClass('green');
						else
						$(this).find('.inner .hover .color').addClass('purple');
						})
					
					$('.portfolio .item .inner').hover(function(){$(this).find('.hover .color').stop().fadeTo(150,0);$(this).find('.hover .magnifier').stop().fadeTo(150,0);},function(){$(this).find('.hover .color').stop().fadeTo(60,0.40);$(this).find('.hover .magnifier').stop().fadeTo(60,1);});
					
					
					// plus_anchor
					$('body').plusAnchor({
						easing: 'easeInOutExpo',
						offsetTop:0,
						speed: 600,
						onInit: function( base ) {

							if ( base.initHash != '' && $(base.initHash).length > 0 ) {
								window.location.hash = 'hash_' + base.initHash.substring(1);
								window.scrollTo(0, 0);

								$(window).load( function() {

									timer = setTimeout(function() {
										$(base.scrollEl).animate({
											scrollTop: $( base.initHash ).offset().top
										}, base.options.speed, base.options.easing);
									}, 2000); // setTimeout

								}); // window.load
							}; // if window.location.hash

						} // onInit
					});
					
					
					//colorbox
					$('.port1').colorbox({rel:'port1'});
					$('.port2').colorbox({rel:'port2'});
					$('.port3').colorbox({rel:'port3'});
					$('.port4').colorbox({rel:'port4'});
					$('.port5').colorbox({rel:'port5'});
					$('.port6').colorbox({rel:'port6'});
					$('.port7').colorbox({rel:'port7'});
					$('.youtube').colorbox({iframe:true, innerWidth:640, innerHeight:390});
						   
});
