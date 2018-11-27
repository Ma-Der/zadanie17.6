var os = require('os');
var time = require('./time');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
	type = 'OSX';
	} else if(type === 'Windows_NT') {
	type = 'Windows';
	}
	console.log('System: '.dim.gray, type);
	console.log('Release: '.red, release);
	var cpu = os.cpus()[0].model;
	console.log('CPU Model: '.blue, cpu);
	var uptime = os.uptime();
	var timer = time.print(uptime);
	console.log('Uptime: '.green, timer);
	var userInfo = os.userInfo();
	console.log('User name: '.yellow, userInfo.username);
	console.log('Home dir: '.grey, userInfo.homedir);
}
exports.print = getOSinfo;