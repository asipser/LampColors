
document.addEventListener('touchmove', function(e) {
    e.preventDefault();
    var touch = e.touches[0];
    alert(touch.pageX + " - " + touch.pageY);
}, false);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	r = Math.floor(r*scale);
	g = Math.floor(g * scale);
	b = Math.floor(b * scale);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function colorTracker(e){
				var x = e.pageX - this.offsetLeft;
				var y = e.pageY - this.offsetTop;
				selectionInfo = canvas.getImageData(x,y,1,1).data;
				var[r,g,b] = selectionInfo;
				$('#brightness').css('background-color',rgbToHex(r,g,b));
			}