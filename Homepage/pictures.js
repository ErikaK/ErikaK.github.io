var picture = ["cal.jpg","flower.jpg","god.jpg","palmtrees.jpg","smile.jpg","try.jpg",]

function galleryPics(){
	for (var i = 0; i < picture.length; i++) { 
		var picture = picture[i];
		alert("hi");
		var htmlstring = '<div><img src = "' +  picture[i] + '" width=500px height=500px></div>';
		$("#gallery").append(htmlstring);
	}
};


