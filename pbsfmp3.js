var playerDiv = $('#jwplayer-1-div');
var flashvars = playerDiv.find('param[name="flashvars"]').attr("value");
var allVars = flashvars.split('&');
var file = $.grep(allVars, function(a) {
	return a.indexOf('file=') === 0;
})[0];
var url = file.replace('file=', '');
url = decodeURIComponent(url);
playerDiv.after('<a href="' + url + '">Download</a>');
