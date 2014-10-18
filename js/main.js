

window.xland = {
	
	init : function()
	{
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
	    // Init Skrollr
	    var s = skrollr.init({
	        render: function(data) {
	            //Debugging - Log the current scroll position.
	            //console.log(data.curTop);
	        }
   		});

   		var height = $(window).height();

   		// Keep minimum height 550
	    if(height <= 550)
	    {
			height = 550;
		} 

   		$(".homeSlide").height(height);
		$(".homeSlideTall").height(height*2);
   		$(".homeSlideTall2").height(height*3);

   		s.refresh('.homeSlide');
	}
};