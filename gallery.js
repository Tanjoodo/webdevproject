function generateThumbs(directory, lastImage)
{
	var imgs = "";
	var boilerplate = 'height="256" width="256"';
	var mydiv = document.createElement("div");
	mydiv.className = "imagecontainer";
	for (var i = 1; i <= lastImage; ++i)
	{
		imgs = imgs + '<img src="assets/'+directory+'/thumbs/'+i+'.jpg" alt="'+i+'"'+
		boilerplate+'onclick="setImage(directory, '+i+', lastImage);" style="margin:5px" />';
	}
	
	mydiv.innerHTML = imgs;
	var footer = document.getElementById("footer");
	document.body.insertBefore(mydiv, footer);

}

