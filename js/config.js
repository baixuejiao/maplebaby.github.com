var VERSION = new Date().getTime();
seajs.config({

	alias: {
		'$': 'jquery/jquery/1.10.1/jquery',
		'popup': 'arale/popup/1.1.6/popup',
		'confirmBox': 'arale/dialog/1.3.0/confirmbox',
		'event':'arale/events/1.1.0/events-debug',
		'widget':'arale/widget/1.1.1/widget',

		'json': 'gallery/json/1.0.3/json',
		'es5-safe': 'gallery/es5-safe/0.9.3/es5-safe',
	},

	map: [
		[/^(.*)$/, '$1?t=' + VERSION || '']
	],

	preload: [
		Function.prototype.bind ? '' : 'es5-safe',
    	this.JSON ? '' : 'json',
    	'$'
	],

	comboExcludes: /.*/,
	comboSuffix: VERSION ? '?t=' + VERSION : '',

	debug: false
});