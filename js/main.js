

window.xland = {
	
	currPage : 0,

	init : function()
	{
		window.xland.currPage = 0;

		$('body').imagesLoaded( function() {
			setTimeout(function() {
			      
			      // Resize sections
			      window.xland.adjustWindow();
			      
			      // Fade in sections
				  $('body').removeClass('loading').addClass('loaded');
				  
			}, 800);
		});
	},
	
	adjustWindow : function()
	{
		var height = $(window).height();

		var navHeight = $('.app-nav ul').height();
		var pos = (height/2) - (navHeight/2);
		$('.app-nav').css('top',pos + "px");
		$('.app-nav').css('opacity', 1);

	    // Init Skrollr
	    var s = skrollr.init({
	        render: function(data) {

		        //update wmenu
		        var highlightLink = null;
		        $(".wmenu a[data-menu-top]").each(function() {
		        	
		        	var menuTop = $(this).attr("data-menu-top");

		        	if (data.curTop >= menuTop) {
		        		highlightLink = $(this);
		        	}

		        	$(this).removeClass("active");
		        })

		        if (highlightLink) {
		        	highlightLink.addClass("active");
		        }
	        }
   		});

   		

   		

   		// Keep minimum height 550
	    if(height <= 550)
	    {
			height = 550;
		} 

   		$(".homeSlide").height(height);
   		$(".homeSlideMin").css("min-height",height);
		$(".homeSlideTall").height(height*2);
   		$(".homeSlideTall2").height(height*3);
		
   		s.refresh('.homeSlide');
   		skrollr.menu.init(s);

   		window.xland.getNavPos();
   		window.xland.getHash();
	},

	getHash: function()
	{
		var hash = location.hash.replace('#','');

		if (hash)
		{
			var link = $('.app-nav li[data-name='+hash+"] a")[0];
			skrollr.menu.click(link);
		}
	},

	getNavPos : function()
	{
		var slide1 = $('#home').height();
		var slide2 = $('#aboutme').height();
		var slide3 = $('#projects').height();

   		$(window).scroll(function(e) {
	        var winTop = $("body").scrollTop();

	        var panel;

	        if (winTop < slide1)
	        {
	        	panel = 1;
	        }
	        else if (winTop < slide1 + slide2)
	        {
	        	panel = 2;
	        }
	        else if (winTop < slide1 + slide2 + slide3)
	        {
	        	panel = 3;
	        }
	        else
	        {
	        	panel = 4;
	        }

	        if (panel != window.xland.currPage)
	        {
	        	$('.app-nav li[data-page='+window.xland.currPage+"]").removeClass('active');
	        	$('.app-nav li[data-page='+panel+"]").addClass('active');
	        	window.xland.currPage = panel;
	        }
	    });
	},
};