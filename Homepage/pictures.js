var picBox = ["bubbles.jpg","cal.jpg","flower.jpg","god.jpg","palmtrees.jpg","smile.jpg","try.jpg",]

//define a variable pictures1 in js to hold one favorite pic
var likepic = function(picSource){
	console.log("You clicked pic" + picSource);
	displayFavePic(picSource);
	//var picture1 = picSource; 
	//update variable to be the picsource of this picture

};
//1)Make sure you use picBox wherever you use the list of photos
//2) Decide what to call the variable holding one picture (that's at picBox[i]) and make sure your code has that variable name right.
$(document).ready(galleryPics);

function galleryPics(){
	for (var i = 0; i < picBox.length; i++) {
		var picSource = picBox[i];
		console.log("pic" + picSource)
		var htmlstring = '<div><img src = "' +  picSource + '" width=450px height=450px onclick="likepic(\''+ picSource +'\')"></div>';
		$("#gallery").append(htmlstring);
	}
};

var displayFavePic = function(pic) {
	var htmlstring = '<div><img src = "' +  pic + '" width=450px height=450px onclick="likepic(\''+ pic +'\')"></div>';
		$("#favPic").append(htmlstring);
}

//define a function displayFavePic(){
 	//add the pictures1 to the div with id favePic
//}