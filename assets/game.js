//there are 5 randomly generated numbers.
//line 2-6 are my global variable 
 var sum= 0
 var random1;
 var random2;
 var random3;
 var random4;
 var largeNum;
 function startGame(){
     random1= Math.floor(Math.random()*10)+1
     random2= Math.floor(Math.random()*10)+1
     random3= Math.floor(Math.random()*10)+1
    random4= Math.floor(Math.random()*10)+1
 largeNum= Math.floor(Math.random()*30)+30 
$("#img1").data(random1)

// $("#num1").text(random1)
// $("#num2").text(random2)
// $("#num3").text(random3)
// $("#num4").text(random4)

$("target").text(largeNum)

$("#num1").attr("value", random1 )
$("#num2").attr("value", random2 )
$("#num3").attr("value", random3 )
$("#num4").attr("value", random4 )

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
