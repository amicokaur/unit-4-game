//there are 5 randomly generated numbers.
//line 2-6 are my global variable 
var sum= 0
var image1;
var image2;
var image3;
var image4;
var largeNum;
function startGame(){
    image1= Math.floor(Math.random()*10)+1
    image2= Math.floor(Math.random()*10)+1
    image3= Math.floor(Math.random()*10)+1
    image4= Math.floor(Math.random()*10)+1
largeNum= Math.floor(Math.random()*30)+30
$("#img1").data(image1)

}
startGame()