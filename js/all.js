(function(cash) { "use strict";

 var ios = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) ||      navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || $(window).width()<980;

                 
	//center_image//////////////////////////////////////////////////////////////////////////////////////////
                 
	var obj;
	function center_image(){
		$('.center_img').each(function(){
			obj = $(this);
			var bg_ratio = obj.attr('data-width-img')/obj.attr('data-height-img');
			var wrapper_ratio = obj.parent().width()/obj.parent().height();
			if(bg_ratio<wrapper_ratio){
				var center = (obj.parent().width()/bg_ratio - obj.parent().height())*(-0.5);
				obj.css({'left':'0px', 'top':center, 'width':'100%', 'height':'auto'});
			}
			else{
				var center_hor = (bg_ratio*obj.parent().height() - obj.parent().width())*(-0.5);
				obj.css({'left':center_hor, 'top':'0px', 'height':'100%', 'width':'auto'});
			}
		});
	}
                 
    var WebFontConfig = {
        google: { families: [ 'Oswald::latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
                 
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	//center_bg/////////////////////////////////////////////////////////////////////////////////////////////
                 
	function center_bg(){
		$('.center-image1').each(function(){
		  var bgSrc = $(this).attr('src');
		  $(this).parent().css({'background-image':'url('+bgSrc+')'});
		  $(this).remove();
		});
	}
	center_bg();
                 

  ////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  	//sliders///////////////////////////////////////////////////////////////////////////////////////////////

    //===================top-home-slider========================================================================/
                 
    var home_container;         
		 $(function(){
			 home_container = $('.home-baner').swiper({
				slidesPerView: 1,
                loop: true,
                calculateHeight: true,
                grabCursor: true  
			});
		});
    
    $('.our-offers-block').on( "click", function() { 
			var eqIndex = $('.our-offers-block').index(this);
			home_container.swipeTo(eqIndex);
			home_container.stopAutoplay();
			return false;
		}); 
            
     
   //===================category-slider========================================================================//    
                 
     var category_container;         
		 $(function(){
			 category_container = $('.category-baner').swiper({
				slidesPerView: 'auto',
                loop: false,
                grabCursor: true,
                onInit: function() {   
                    var indexText = $('.category-slide').index(this);
                        $('.category-desc .cat_t').text($('.category-text').eq(indexText).parent().find('.slide_cat_t').text());
                        $('.category-desc .cat_t_text').text($('.category-text').eq(indexText).parent().find('.slide_cat_t_text').text());
                        $('.category-desc .subcat').text($('.category-text').eq(indexText).parent().find('.slide_subcat').text());
                        $('.category-desc .subcat_text').text($('.category-text').eq(indexText).parent().find('.slide_subcat_text').text());   
                }
			});
		});
                 
        $('.category-wraper .slide-prev').on( "click", function() {
            category_container.swipePrev();
            return false;
          });

        $('.category-wraper .slide-next').on( "click", function() {
            category_container.swipeNext();
            return false;
          });
    
       $('.category-slide').on( "click", function() { 
           var indexText = $('.category-slide').index(this);
                   $('.category-desc .cat_t').text($('.category-text').eq(indexText).parent().find('.slide_cat_t').text());
                   $('.category-desc .cat_t_text').text($('.category-text').eq(indexText).parent().find('.slide_cat_t_text').text());
                   $('.category-desc .subcat').text($('.category-text').eq(indexText).parent().find('.slide_subcat').text());
                   $('.category-desc .subcat_text').text($('.category-text').eq(indexText).parent().find('.slide_subcat_text').text());
		           $('.category-desc .avto').attr('src',$('.category-text').eq(indexText).find('img').attr('src'));
		          
       });
                 
                
    //===================price-slider========================================================================//             
    
    var numb_price = 3;
    var price_container;         
		 $(function(){
			 price_container = $('.price-baner').swiper({
				slidesPerView: numb_price,
                loop: true,
                calculateHeight: true,
                grabCursor: true,
                onInit: function(swiper){
					  if($(window).width()<=741){
						price_container.params.slidesPerView = 1;
					  } else if($(window).width()<=1202){
						price_container.params.slidesPerView = 2;
					  }
					    else {
						price_container.params.slidesPerView = 3;
					  } 
				} 
			});
		});
                 
        $('.navig .slide-prev').on( "click", function() {
            price_container.swipePrev();
            return false;
          });

        $('.navig .slide-next').on( "click", function() {
            price_container.swipeNext();
            return false;
          });
                 
    var price2_container;         
		 $(function(){
			 price2_container = $('.price-baner2').swiper({
				slidesPerView: 1,
                calculateHeight: true,
                grabCursor: true
			});
		});
                 
        $('.pricing-arrow .slide-prev').on( "click", function() {
            price2_container.swipePrev();
            return false;
          });

        $('.pricing-arrow .slide-next').on( "click", function() {
            price2_container.swipeNext();
            return false;
          });             
                 
    //===================people-slider========================================================================// 
                 
    var people_container;         
		 $(function(){
			 people_container = $('.man-baner').swiper({
				slidesPerView: 'auto',
                loop: false,
                calculateHeight: true,
                grabCursor: true  
			});
		});
                         
    var comments_container;         
		 $(function(){
			 comments_container = $('.comments-baner').swiper({
				slidesPerView: 1,
                loop: true,
                calculateHeight: true,
                grabCursor: true,
				onInit: function(swiper){
					var activeIndex = comments_container.activeLoopIndex;
				    $('.slide-mov-wrap .slide-mov').find('.man-slide').eq(activeIndex).addClass('active');
				},
				onSlideChangeStart: function(swiper){
				     var activeIndex = comments_container.activeLoopIndex;
					 $('.slide-mov-wrap .slide-mov').find('.man-slide').removeClass('active');
					 $('.slide-mov-wrap .slide-mov').find('.man-slide').eq(activeIndex).addClass('active');
				}
			});
			 
		  $('.comments-baner .slide-prev').on( "click", function() {
            comments_container.swipePrev();
            return false;
          });

          $('.comments-baner .slide-next').on( "click", function() {
            comments_container.swipeNext();
            return false;
          });
		});
				 
	    $('.category-slide').on('click', function(){
			 if ($(this).hasClass('act')) {
				 $(this).removeClass('act');
			 }else {
				 $('.category-slide').removeClass('act');
				 $(this).addClass('act');
			 }
			return false;
	});			 
                 
    //===================post-slider========================================================================//  
                 
     var post_container;         
		 $(function(){
			 post_container = $('.post-baner').swiper({
				slidesPerView: 1,
                loop: true,
                calculateHeight: true, 
                grabCursor: true  
			});
		});
                 
        $('.post-baner .slide-prev').click(function(){
            post_container.swipePrev();
            return false;
          });

        $('.post-baner .slide-next').on( "click", function() {
            post_container.swipeNext();
            return false;
          }); 
                 
    //==================join-slider========================================================================//  
     
    var numb = 4;             
     var join_container;         
		 $(function(){
			 join_container = $('.join-us-baner').swiper({
				slidesPerView: numb,
                loop: true,
                calculateHeight: true, 
                grabCursor: true,
                onInit: function(swiper){
                    join_container.params.slidesPerView = numb;
                    if ($(window).width()<=600) {
                        join_container.params.slidesPerView = 1;
                       }else if($(window).width()<=900){
						join_container.params.slidesPerView = 2;
					  } else if($(window).width()<=1202){
						join_container.params.slidesPerView = 3;
					  } else {
						join_container.params.slidesPerView = 4;
					  } 
                    
				} 
			});
		});
                 
        $('.join-us-baner .slide-prev').on( "click", function() {
            join_container.swipePrev();
            return false;
          });

        $('.join-us-baner .slide-next').on( "click", function() {
            join_container.swipeNext();
            return false;
          });              
                 
	////////////////////////////////////////////////////////////////////////////////////////////////////////
                 
	function rax(){
                if ($(window).width()<=600) {
                        numb = 1;
                       }else if($(window).width()<=900){
						numb = 2;
					  } else if($(window).width()<=1202){
						numb = 3;
					  } else {
						numb = 4;
					  }
               if($(window).width()<=768){
						numb_price = 1;
					  } else if($(window).width()<=1202){
						numb_price = 2;
					  }
					    else {
						numb_price = 3;
					  } 
              
       }           
    rax();            
                 
	////////////////////////////////////////////////////////////////////////////////////////////////////////
	
    $('.container-mix').mixItUp({
        animation: {
            enable: true		
        }
    }); 
                 
	  
  ////////////////////////map///////////////////////////////////////////////////////////////////////////////
                 
  function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'img/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"));

		var styles = []
		
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});
      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});
	
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	
	}
                 
    /////////////////////REMOVE HOVER///////////////////////////////////////////////////////////////
                 
	removeHoverCSSRule();
	function removeHoverCSSRule() {
	  if ('createTouch' in document) {
		try {
		  var ignore = /:hover/;
		  for (var i = 0; i < document.styleSheets.length; i++) {
			var sheet = document.styleSheets[i];
			if (!sheet.cssRules) {
			  continue;
			}
			for (var j = sheet.cssRules.length - 1; j >= 0; j--) {
			  var rule = sheet.cssRules[j];
			  if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText)) {
				sheet.deleteRule(j);
			  }
			}
		  }
		}
		catch(e) {
		}
	  }
	}
    
    $(function() {
         $(".datepicker").datepicker();
    }); 
    
                 
    /////////////////////mobile icon///////////////////////////////////////////////////////////////             
           
                 
    $('.menu-mobile-icon, .close-menu').on( "click", function() {
             if($('.navigation nav').hasClass('active')){ 
                $('.menu-mobile-icon').show();
                $('.navigation nav').removeClass('active'); 
                $('body').removeClass('fix');
             }else{
                $('.menu-mobile-icon').hide();
                $('.navigation nav').addClass('active');
                $('body').addClass('fix');
             }
             return false;
    });
                              
                 
    $('.drop-menu > a').on( "click", function() {
        var LinkThis = $(this).parent();
        if (LinkThis.find('span').hasClass('slide')) {
            LinkThis.find('span').removeClass('slide');
        }else {
            $('.link span').removeClass('slide');
            LinkThis.find('span').addClass('slide');
        }
        
        return false;
    });
                 
    $('.drop').on( "click", function() {
			if($('.drop-list').hasClass('act')){
				$(this).find('.drop-list').removeClass('act');
				$(this).find('span').slideUp(300);
			}else{
               $('.drop span').slideUp(300);
				$(this).find('.drop-list').addClass('act');
                
				$(this).find('span').slideDown(300);
			}
			return false;
		});
		
    $('.drop span a').on( "click", function() {
			$(this).parent().parent().find('b').text($(this).text());
			$('.drop').find('span').slideUp(300);
		});                             
                         
                 
    ////////////////////////////////////////////////////////////////////////////////////
                 
    $('.reply').on( "click", function() {
       if ($(this).find('.block-vote').hasClass('show')) {
          $(this).find('.block-vote').removeClass('show');
       }else {
          $('.block-vote').removeClass('show');
          $(this).find('.block-vote').addClass('show');
       }
        return false;
    });             
                 
    if($(".fancybox").length){             
		var fancy;
		$(function(){             
		   var fancy = $(".fancybox").fancybox({
				loop:true,
				nextClick: true,
				showNavArrows: true
		   });
		});
	}
    
    $('.check-answer').click(function(){
        if($('input[name="correct"]').is(':checked')) 
        {
           $('input[name="correct"]').parent().find('.correct').addClass('chek');
           $('input[name="correct"]').parent().find('label').hide();       
       }else{
          return false;
       }
    }); 
                 
    $('.check-answer').click(function(){
        if($('input[name="incorrect"]').is(':checked')) 
        {
            $('input[name="incorrect"]').parent().find('.incorrect').addClass('chek');
            $('input[name="incorrect"]').parent().find('label').hide(); 
       }else{
           return false;
       }
    });             
        
    $('.check-answer').click(function(){
        if($('input[name="incorrect2"]').is(':checked')) 
        {
           $('input[name="incorrect2"]').parent().find('.incorrect').addClass('chek');
            $('input[name="incorrect2"]').parent().find('label').hide(); 
            
       }else{
           return false;
       }
    });
                 
    ////////////////////////PAGE NAVIGATION///////////////////////////////////////
        
  
	$('.page-nav .page-nav-button a').click(function (){
        var ThisUrl = $(this).attr('href');
        $(this).addClass('act');
        $(this).find('span').addClass('act');
        
        $('#pageContent').load( ThisUrl, function() {
           $(".datepicker").datepicker(); 
            $('.drop').on( "click", function() {
			if($('.drop-list').hasClass('act')){
				$(this).find('.drop-list').removeClass('act');
				$(this).find('span').slideUp(300);
			}else{
               $('.drop span').slideUp(300);
				$(this).find('.drop-list').addClass('act');
                
				$(this).find('span').slideDown(300);
			}
			return false;
         });
		
         $('.drop span a').on( "click", function() {
                $(this).parent().parent().find('b').text($(this).text());
                $('.drop').find('span').slideUp(300);
            }); 
         });
       
        return false;

	});
        
    ///////////////////////LOAD WINDOW/////////////////////////////////////////////////////////////////////////////////
                 
	$(window).load(function(){
    	center_image();
    	$('.load').hide();
        if($('#map-canvas-contact').length==1){
		initialize('map-canvas-contact');}
    });  
                 
	//////////////////////RESIZE WINDOW//////////////////////////////////////////////////////////////////////////////////
                 
	$(window).resize(function(){
		$('body *').addClass('animation-stop');
		rax();
		center_image();
		$('body *').removeClass('animation-stop');
        
	});
                 
    //////////////////////ABOUT TABS//////////////////////////////////////////////////////////////////////////////////
				 
    $('.tabs-menu ul li a').click(function(){
    
    var a = $(this);
    var active_tab_class = 'active-tab-menu';
    var the_tab = '.' + a.attr('data-tab');
		$('.tabs-menu ul li a').removeClass(active_tab_class);
		   a.addClass(active_tab_class);
				$('.tabs-content .tabs').css({
				  'display' : 'none'
				});
		   $(the_tab).show();
    return false;
    });
	
	//////////////////////TESTIMONIALS CLICK//////////////////////////////////////////////////////////////////////////////////
				 
	$('.slide-mov-wrap .slide-mov .man-slide').on('click', function(){
	    if($(this).hasClass('active')) return false;
		   var val = $(this).parent().parent().find('.slide-mov').index($(this).parent());
	       comments_container.swipeTo(val);
		   $('.slide-mov-wrap .slide-mov .man-slide').removeClass('active');
		   $(this).addClass('active');
	});	 
                 
    /////////////////////////////GOOGLE MAPS///////////////////////////////////////////////////////////////////////////                 
                 
    function initialize(obj) {
		var lat = $('#'+obj).attr("data-lat");
        var lng = $('#'+obj).attr("data-lng");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = 'img/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"), 10);

		var styles = []
		
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});
      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});
	
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	
	}
                 
                 

})(jQuery);                 