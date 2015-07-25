var picBox = ["cal.jpg","flower.jpg","god.jpg","palmtrees.jpg","smile.jpg","try.jpg",]

//1)Make sure you use picBox wherever you use the list of photos
//2) Decide what to call the variable holding one picture (that's at picBox[i]) and make sure your code has that variable name right.
$(document).ready(galleryPics);

function galleryPics(){
	for (var i = 0; i < picBox.length; i++) { 
		var picture2 = pictureBox[i];
		alert("hi");
		var htmlstring = '<div><img src = "' +  pictureBox[i] + '" width=500px height=500px></div>';
		$("#gallery").append(htmlstring);
	}
};


