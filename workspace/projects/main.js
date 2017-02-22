function getCurrentTime(){
	var milliseconds = new Date().getTime();
	var milstr = milliseconds.toString();
	var mili = milstr.substring((milstr.length -5), (milstr.length -1));
	return mili;
}
var timeArray = new Array();
function getReactionTime(){
	var currentTime = getCurrentTime();
		timeArray.push(currentTime);
	var reactionTime = timeArray[timeArray.length -1] - timeArray[timeArray.length -2];
	var reactionTimeToString = reactionTime.toString();
	var decimal = reactionTimeToString.substring(0, reactionTimeToString.length-2)+"."+reactionTimeToString.substring(reactionTimeToString.length -2);
	var timeStorage = document.getElementById("time").innerHTML = decimal;

	if (isNaN(timeStorage) == true){
		document.getElementById("time").innerHTML = "0";
	} else {
		if (decimal.substring(0,1) == "."){
			document.getElementById("time").innerHTML = "0"+decimal+" sec";
		} else {
			document.getElementById("time").innerHTML = decimal+" sec";
		}
	}	
}

function getDivSizeWidth(){
	return ((Math.random()*100) + 100).toFixed();
}

function getDivSizeHeight(){
	return ((Math.random()*100) + 50).toFixed();
}
function getPositionX(){
	return (Math.random() * (document.documentElement.clientWidth - getDivSizeWidth())).toFixed();

}
function getPositionY(){
	return (Math.random() * (document.documentElement.clientHeight - getDivSizeHeight())).toFixed();
}

function getColor(){
	var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

function createDiv(){
	var divSizeWidth = getDivSizeWidth();
	var divSizeHeight = getDivSizeHeight();
	var positionX = getPositionX();
	var positionY = getPositionY();
	var color = getColor();
	var sheet = document.createElement('style')
			sheet.innerHTML = "#some {width:" + divSizeWidth +"px; "+ "height:" + divSizeHeight +"px; "+ "background-color:" + color +"; position: absolute; left:" + positionX + "px; top:" + positionY + "px;" + "}";
			document.body.appendChild(sheet);
}


function click(){
	document.getElementById("some").onclick = function() {
		getReactionTime();
		createDiv();
	}
}

window.onload = function(){
	document.getElementById("start").onclick = function() {
		getReactionTime();
		createDiv();
		click();
	}
}