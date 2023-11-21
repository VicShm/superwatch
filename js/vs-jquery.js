$(document).ready(function(){
		now1 = new Date()
  	minutes = (now1.getHours()) * 60 + now1.getMinutes();
  	noww = now1.getMinutes()
  	if (noww<10){noww='&nbsp;'+noww}
  	document.getElementById('minutes').innerHTML = noww
  	deg=-minutes*.25+180
  	now1= null

  $(".clock_scale").css("transform", "rotate("+deg+"deg)");
  setInterval(function(){
  	now1 = new Date()
  	noww = now1.getMinutes()
  	if (noww<10){noww='&nbsp;'+noww}
  	document.getElementById('minutes').innerHTML = noww
  	
  	minutes = (now1.getHours()) * 60 + now1.getMinutes();  	
  	deg=-minutes*.25+180
  	now1= null
  	$(".clock_scale").css("transform", "rotate("+deg+"deg)");
}, 5000);
});