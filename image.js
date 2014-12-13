<!--
function setImage(directory, current, lastNum)
{
	window.location.href = "image.html?image="+current+"&dir="+directory+"&last="+lastNum;
}

function setImageFirstTime(directory, current, lastNum)
{
	if (current > lastNum) current = lastNum;
	if (current < 1) current = 1;

	document.getElementById("imgcont").style.backgroundImage = "url(assets/" + directory + "/" + current + ".jpg)";
}

function nextImage(lastNum, current, directory)
{
	if (current >= lastNum)
		current = 1;
	else
		current++;

	return current;
}
	
function prevImage(lastNum, current, directory)
{
	if (current <= 1)
		current = lastNum;
	else
		current--;
	return current;
}


function shuffleImage(lastNum, directory)
{
	var num = Math.floor(1 + Math.random() * lastNum);
	return num;
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
//!-->
