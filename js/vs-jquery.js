$(document).ready(function(){
	 now1 = new Date()
     noww = now1.getMinutes()   
     minutes = (now1.getHours()) * 60 + noww;   
     
    deg=minutes*.25+180

    $(".clock_scale").css("transform", "rotate("+deg+"deg)");
    $("#minutes").css("transform", "rotate(-"+deg+"deg)");


    if (noww<10) {noww='&nbsp;'+noww}
    document.getElementById('minutes').innerHTML = noww
     
     now1= null
    
    setInterval(function(){
  	      now1 = new Date()
     noww = now1.getMinutes()   
     minutes = (now1.getHours()) * 60 + noww;   
     
    deg=minutes*.25+180

    $(".clock_scale").css("transform", "rotate("+deg+"deg)");
    $("#minutes").css("transform", "rotate(-"+deg+"deg)");


    if (noww<10) {noww='&nbsp;'+noww}
    document.getElementById('minutes').innerHTML = noww
     
     now1= null
}, 5000);
});