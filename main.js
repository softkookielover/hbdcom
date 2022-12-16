var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var firstvar = ""
function new_image()
{
 fabric.Image.fromURL('BirthdayImage.jpg' , function(Img) {
    firstvar = Img;

    firstvar.scaletoWidth(700);
    firstvar.scaletoHeight(510);
    firstvar.set({
        top:0,
        left:0
    });
    canvas.add(firstvar);
});
	
}

function playSound(){
	x.play();
    console.log("play");
}
