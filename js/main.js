

window.xland = {
	
	init : function()
	{
	    // Init Skrollr
	    var s = skrollr.init({
	        render: function(data) {
	            //Debugging - Log the current scroll position.
	            //console.log(data.curTop);
	        }
   		});

   		var height = $(window).height();
   		//$("#slide-1").height(height);
	}
};