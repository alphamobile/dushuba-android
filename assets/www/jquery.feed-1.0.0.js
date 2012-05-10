(function($) {
	$.fn.feed = function(opt) {
		opt = $.extend({url:'', count:5, success: null}, opt)
		var idd = $(this).attr('id');
		if (opt.url==null||opt.url=='') { $('#'+idd).empty();return }
		
		$('#'+idd).empty().append('<div style="text-align:center; padding:0px;"><img src="loader.gif" /></div>');
		$.ajax({url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+opt.count+'&output=json&q='+encodeURIComponent(opt.url)+'&callback=?',dataType:'json',
				success: function(data) {
					if (jQuery.isFunction(opt.success)) opt.success(data);
				}
		});
	}
})(jQuery);