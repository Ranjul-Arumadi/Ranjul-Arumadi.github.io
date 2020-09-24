var n;
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

  n = weekday[d.getDay()];
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
  setTimeout(function(){location.reload();},58000);    //reloads page


  /*-----MONDAY-----*/


  //trigger for monday P1 8:20
  if((30000-referencetime==0) && (temp=="Monday"))
  {

    $("#LSD span").trigger("click");
    //alert("works");
  }
  //triggers for monday P2 9:10
  else if((33000-referencetime==0) && (temp=="Monday"))
  {

    $("#DE span").trigger("click");
    //alert("works");
  }
  //triggers for monday P3 10:00
  else if((36000-referencetime==0) && (temp=="Monday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }
  //triggers for monday P4 10:50
  else if((39000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P5 11:40
  else if((42000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }
  //triggers for monday P6 12:30
  else if((45000-referencetime==0) && (temp=="Monday"))
  {

    $("#Lab span").trigger("click");
    //alert("works");
  }

  /*-----Tuesday-----*/


  //trigger for Tuesday P1 8:20
  if((30000-referencetime==0) && (temp=="Tuesday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }
  //triggers for Tuesday P2 9:10
  else if((33000-referencetime==0) && (temp=="Tuesday"))
  {

    $("#DS span").trigger("click");
    //alert("works");
  }
  //triggers for Tuesday P3 10:00
  else if((36000-referencetime==0) && (temp=="Tuesday"))
  {

    $("#Java span").trigger("click");
    //alert("works");
  }
  //triggers for Tuesday P4 10:50
  else if((39000-referencetime==0) && (temp=="Tuesday"))
  {

    $("#LSD span").trigger("click");
    //alert("works");
  }
  //triggers for Tuesday P5 11:40
  else if((42000-referencetime==0) && (temp=="Tuesday"))
  {

    $("#Activity span").trigger("click");
    //alert("works");
  }
  //triggers for Tuesday P6 12:30
  else if((45000-referencetime==0) && (temp=="Tuesday"))
  {

    $("#Activity span").trigger("click");
    //alert("works");
  }


  /*-----WEDNESDAY-----*/


  //trigger for Wednesday P1 8:20
  if((30000-referencetime==0) && (temp=="Wednesday"))
  {

    $("#Java span").trigger("click");
    //alert("works");
  }
  //triggers for Wednesday P2 9:10
  else if((33000-referencetime==0) && (temp=="Wednesday"))
  {

    $("#DS span").trigger("click");
    //alert("works");
  }
  //triggers for Wednesday P3 10:00
  else if((36000-referencetime==0) && (temp=="Wednesday"))
  {

    $("#SE span").trigger("click");
    //alert("works");
  }
  //triggers for Wednesday P4 10:50
  else if((39000-referencetime==0) && (temp=="Wednesday"))
  {

    $("#Lab1 span").trigger("click");
    $("#Lab2 span").trigger("click");
    //alert("works");
  }
  //triggers for Wednesday P5 11:40
  else if((42000-referencetime==0) && (temp=="Wednesday"))
  {

    $("#Lab1 span").trigger("click");
    $("#Lab2 span").trigger("click");
    //alert("works");
  }
  //triggers for Wednesday P6 12:30
  else if((45000-referencetime==0) && (temp=="Wednesday"))
  {

    $("#Lab1 span").trigger("click");
    $("#Lab1 span").trigger("click");
    //alert("works");
  }


  /*-----Thursday-----*/


  //trigger for Thursday P1 8:20
  if((30000-referencetime==0) && (temp=="Thursday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }
  //triggers for Thursday P2 9:10
  else if((33000-referencetime==0) && (temp=="Thursday"))
  {

    $("#Java span").trigger("click");
    //alert("works");
  }
  //triggers for Thursday P3 10:00
  else if((36000-referencetime==0) && (temp=="Thursday"))
  {

    $("#LSD span").trigger("click");
    //alert("works");
  }
  //triggers for Thursday P4 10:50
  else if((39000-referencetime==0) && (temp=="Thursday"))
  {

    $("#DS span").trigger("click");
    //alert("works");
  }
  //triggers for Thursday P5 11:40
  else if((42000-referencetime==0) && (temp=="Thursday"))
  {

    $("#LSD span").trigger("click");
    //alert("works");
  }
  //triggers for Thursday P6 12:30
  else if((45000-referencetime==0) && (temp=="Thursday"))
  {

    $("#Maths span").trigger("click");
    //alert("works");
  }

/*-----Friday-----*/


  //trigger for Friday P1 7:50
  if((28200-referencetime==0) && (temp=="Friday"))
  {

    $("#SE span").trigger("click");
    //alert("works");
  }
  //triggers for Friday P2 8:35
  else if((30900-referencetime==0) && (temp=="Friday"))
  {

    $("#Java span").trigger("click");
    //alert("works");
  }
  //triggers for Friday P3 09:20
  else if((33600-referencetime==0) && (temp=="Friday"))
  {

    $("#DE span").trigger("click");
    //alert("works");
  }
  //triggers for Friday P4 10:05
  else if((36300-referencetime==0) && (temp=="Friday"))
  {

    $("#DS span").trigger("click");
    //alert("works");
  }
  //triggers for Friday P5 10:50
  else if((39000-referencetime==0) && (temp=="Friday"))

    $("#Minor span").trigger("click");
    //alert("works");
  }
  //triggers for Friday P6 11:35
  else if((41700-referencetime==0) && (temp=="Friday"))
  {

    $("#Minor span").trigger("click");
    //alert("works");
  }


  /*-----Saturday-----*/


  //trigger for Saturday P1 8:20
  if((30000-referencetime==0) && (temp=="Saturday"))
  {

    $("# span").trigger("click");
    //alert("works");
  }
  //triggers for Saturday P2 9:10
  else if((33000-referencetime==0) && (temp=="Saturday"))
  {

    $("# span").trigger("click");
    //alert("works");
  }
  //triggers for Saturday P3 10:00
  else if((36000-referencetime==0) && (temp=="Saturday"))
  {

    $("#Activity span").trigger("click");
    //alert("works");
  }
  //triggers for Saturday P4 10:50
  else if((39000-referencetime==0) && (temp=="Saturday"))
  {

    $("#Activity span").trigger("click");
    //alert("works");
  }
  //triggers for Saturday P5 11:40
  else if((42000-referencetime==0) && (temp=="Saturday"))
  {

    $("#Activity span").trigger("click");
    //alert("works");
  }
  //triggers for Saturday P6 12:30
  else if((45000-referencetime==0) && (temp=="Saturday"))
  {

    $("#Activity span").trigger("click");
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

    $("#Lab1 span").trigger("click");
    //alert("works");
    $("#Lab2 span").trigger("click");
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
  /*if(n>3)
  {
    $('html,body').animate({ scrollTop: 9999 }, 'slow');   //scroll to bottom
  }
	/*



});
