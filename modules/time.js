function time(seconds) {
	if (seconds < 3600) {
		var timetick = ((seconds/60).toFixed(0) + ' minutes and ' + seconds%60 + ' seconds.');
	}
	else if (seconds >= 3600) {
		 timetick = ((seconds/3600).toFixed(0) + ' hours ' + ((seconds%3600)/60).toFixed(0) + ' minutes and ' + ((seconds%3600)%60).toFixed(0) + ' seconds');
	}
	return timetick;
}
exports.print = time;