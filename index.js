// for Start Hours

let starthouradd = 00;

$("#Starthouradd").click(function(){
  if(starthouradd < 23){
    starthouradd++;
  }
  if (starthouradd>=23){
    starthouradd =0;
  }
  $("#starthour").val(starthouradd)
});

$("#Starthoursub").click(function(){
  if(starthouradd == 00){
    starthouradd = 24;
 }
  if(starthouradd > 0){
    starthouradd--;
  } 
  $("#starthour").val(starthouradd)
});


//for Start Min.

let startminadd = 00;

$("#Startminadd").click(function(){
if(startminadd < 59){
  startminadd+=2;
  if (startminadd>=60){
    startminadd =0;
  }
}
$("#Startmin").val(startminadd)
});

$("#Startminsub").click(function(){
  if(startminadd==00){
    startminadd = 60;
  }
  if(startminadd > 0){
    startminadd-=2;
  }
  $("#Startmin").val(startminadd)
});


// for End hours

let endhour = 00;

$("#Endhouradd").click(function(){
  if(endhour<23){
    endhour++;
  }
  if(endhour>=23){
    endhour = 0;
  }
 $("#Endhour").val(endhour)
});

$("#Endhoursub").click(function(){
  if(endhour == 00){
    endhour = 24;
 }
  if(endhour>0){
    endhour--;
  }
  $("#Endhour").val(endhour)
});


// for End Min

let endmin = 00;

$("#Endminadd").click(function(){

  if(endmin<59){
    endmin+=2;
    if(endmin>=60){
      endmin = 00;
     }
 }

 $("#Endmin").val(endmin)
});

$("#Endminsub").click(function(){
  if(endmin==0){
    endmin = 60;
  }
  if(endmin>0){
    endmin-=2;
    } 
  $("#Endmin").val(endmin)
});


// start alram

$("#Setbutton").click(function(){
  let setStartHour = $("#starthour").val();
  
  if(setStartHour>=0 && setStartHour<=23){
    starthouradd = Number(setStartHour);

    $("#starthour").removeClass("is-error");
  }else{
    $("#starthour").addClass("is-error");
   $("#starthour").val(0);
    
  }

  let setStartMin = $("#Startmin").val();

  if(setStartMin >= 0 && setStartMin<=59){
    startminadd = Number(setStartMin);
    $("#Startmin").removeClass("is-error");
  }else{
    $("#Startmin").addClass("is-error");
   $("#Startmin").val(0);
  }
  setAlram();
  
    });

  // setGoal Alarm

  let goalStatus = false;

$("#SetbuttonGoal").click(function(){

let setEndHour = $("#Endhour").val();



  if(setEndHour>=0 && setEndHour<=23){
    endhour = Number(setEndHour)
    
    $("#Endhour").removeClass("is-error");
  }else{
    $("#Endhour").addClass("is-error");
   $("#Endhour").val(0);
   
    }
  
  let setEndMin = $("#Endmin").val();


  if(setEndMin>=0 && setEndMin<=59){
    endmin = Number(setEndMin);

    $("#Endmin").removeClass("is-error");
  }else{
    $("#Endmin").addClass("is-error");
   $("#Endmin").val(0);
    }
    setAlramGoal();
    goalStatus = true; 
  });
    



    setInterval(()=>{
      let now = new Date();
      let currentHour = now.getHours();
      let currentMin = now.getMinutes();
      let currentSecond = now.getSeconds();
      

      $("#date-time").text(currentHour+":"+currentMin +":"+currentSecond);
      
      if(starthouradd == currentHour && startminadd == currentMin && currentSecond == 00){
        play();
        if(goalStatus ===true){
          nextStep();
          if(endhour >= starthouradd && endmin >= startminadd){
            alert("Congratulation!");
            goalStatus = false;
            endhour =0;
            endmin =0;
            $("#alarmStop").text("--:--");
          }
        }
      }

    },1000)

function play(){
      let audio = new Audio('./assets/clock.mp3');
      audio.play();
      audio.loop = true;
      $("#stopButton").removeClass("is-disable")
      $("#stopimg").removeClass("is-disable")
    
    $("#stopButton").click(function(){
      audio.pause();
      audio.currentTime = 0;
      $("#stopButton").addClass("is-disable")
      $("#stopimg").addClass("is-disable")
    })

  }

  function setAlram(){
    $("#alarmCreate").text(starthouradd+":"+startminadd);
  }

  function setAlramGoal(){
    $("#alarmStop").text(endhour+":"+endmin);
  }
  

function nextStep(){
let stepMinute = 5

 if(startminadd >= stepMinute){
startminadd = startminadd -stepMinute ;
 }else{
  starthouradd = starthouradd -1;
  startminadd = 60 - stepMinute;
};
setAlram();

 }
 

