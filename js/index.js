define('index', ['widget'], function(require, exports, module) {
	var Widget = require('widget');

	Widget.autoRenderAll(function() {
		var numInput = Widget.query("#J_GoodNum");
		var msg = $("#J_LeftNum");

		/* 使用aspect暴露的接口 */
		numInput.after('change', function(result, num) {
			if(!result) {
				msg.addClass("error").html("输入错误");
				return;
			}

			if(num >= 0) {
				msg.removeClass("error").html("剩余" + num + "件库存");
			} else {
				msg.addClass("error").html("库存不足");
			}
		});
	});
});