function printdate()
{
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  return n;

}
//alert("Welcome to Auto Class Launcher.\n----------------------------------------\nToday is "+printdate()+"."+"\n\nKEEP THIS TAB OPEN IN THE BACKGROUND to auto launch Google Meets according to your timetable.\n\nHave a great day ahead :)")
//alert("working");
$(document).ready(function() {
    var today = new Date();
    var cHour = today.getHours();
    var cMin = today.getMinutes();
    var cSec = today.getSeconds();
	  var cday = today.getDay();


  referencetime=((cHour*3600)+(cMin*60));      //time conversion to seconds
  //alert(referencetime);
  setTimeout(function(){location.reload();},60000);    //reloads page
	if((6240-referencetime)==0)
	{

		$("#superlink span").trigger("click");
		alert("works");
	}  //trigger link

	//alert(cday);
	//$( "."+cday ).css( {"border": "3px solid red"} );   //highlight req div acc to day
	$( "."+cday ).css("display:block");
	//alert(cday);
});
