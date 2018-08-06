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

$("#num1").text(image1)
$("#num2").text(image2)
$("#num3").text(image3)
$("#num4").text(image4)

$("target").text(largeNum)

$("#num1").attr("value", image1 )
$("#num2").attr("value", image2 )
$("#num3").attr("value", image3 )
$("#num4").attr("value", image4 )

 }
$(".button").on('click', function(){
    var num=$(this).attr("value")
    sum = +sum + +num
    if(sum==largeNum){
        $("h1").text("youwin")
    }
    if(sum>largeNum){
        $("h1").text("youlose")
    }
    $(".totalsum").text(sum)
    
    console.log(sum)
})


startGame()
console.log(largeNum)
