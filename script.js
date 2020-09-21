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
  //alert(referencetime);
  console.log(referencetime);
  setTimeout(function(){location.reload();},45000);    //reloads page
  //trigger for monday P1 8 20
  if((46800-referencetime==0) && (temp=="Monday"))
  {

    $("#LSD span").trigger("click");
    //alert("works");
  }
  //triggers for monday P2
  else if((47100-referencetime==0) && (temp=="Monday"))
  {

    $("#DE span").trigger("click");
    //alert("works");
  }
  //triggers for monday P3
  else if((47500-referencetime==0) && (temp=="Monday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }
  //triggers for monday P4
  else if((47600-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P5
  else if((47800-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P6
  else if((49680-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  /*if((30000-referencetime==0) && (temp=="Monday"))
	{

		$("#LSD span").trigger("click");
		//alert("works");
	}
  //triggers for monday P2
  else if((32400-referencetime==0) && (temp=="Monday"))
	{

		$("#DE span").trigger("click");
		//alert("works");
	}
  //triggers for monday P3
  else if((36000-referencetime==0) && (temp=="Monday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }
  //triggers for monday P4
  else if((39000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P5
  else if((42000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P6
  else if((45000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  */

	//alert(cday);
	$( "."+cday ).css( {"border": "3px dashed red"} );   //highlight req div acc to day
	$( "."+cday ).css("display:block");




});
$(document).ready(function() {

            $("button").click(function() {
                $(document).scrollTop($(document).height());
            });
        });
