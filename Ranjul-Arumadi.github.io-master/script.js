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
temp=printdate();
//alert("Welcome to Auto Class Launcher.\n----------------------------------------\nToday is "+printdate()+"."+"\n\nKEEP THIS TAB OPEN IN THE BACKGROUND to auto launch Google Meets according to your timetable.\n\nHave a great day ahead :)")
//alert("working");
$(document).ready(function() {
    var today = new Date();
    var cHour = today.getHours();
    var cMin = today.getMinutes();
    var cSec = today.getSeconds();
	  var cday = today.getDay();


  referencetime=((cHour*3600)+(cMin*60));      //time conversion to seconds
  //alert(temp);
  setTimeout(function(){location.reload();},60000);    //reloads page
  //trigger for monday P1 8 20
	if((30000-referencetime==0) && (temp=="Monday"))
	{

		$("#LSD span").trigger("click");
		//alert("works");
	}
  //triggers for monday P2
  if((32400-referencetime==0) && (temp=="Monday"))
	{

		$("#DE span").trigger("click");
		//alert("works");
	}
  //triggers for monday P3
  if((36000-referencetime==0) && (temp=="Monday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }
  //triggers for monday P4
  if((39000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P5
  if((42000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P6
  if((45000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }

	//alert(cday);
	$( "."+cday ).css( {"border": "3px solid red"} );   //highlight req div acc to day
	$( "."+cday ).css("display:block");
	//alert(cday);
});
