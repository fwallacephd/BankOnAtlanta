//Global Variable
var demographics = [];
var services = [];

//Hide Demographics and Services
$("#display-demographics").hide();
$("#display-services").hide();
$("#display-result").hide()
$("#display-about").hide();


//Display Demographics
$(".neighborhood").on("click", function(){
  $("#display-neighborhood").hide();
  $("#display-demographics").show();
});


//Choose Demographics
$("#senior").on("click", function(){
  demographics.push("senior");
});

$("#veteran").on("click", function(){
  demographics.push("veteran");
});

$("#disability").on("click", function(){
  demographics.push("disability");
});

$("#business").on("click", function(){
  demographics.push("business");
});

$(".demographics-next").on("click", function(){
  $("#display-demographics").hide();
  $("#display-services").show();
});


//Choose Services
$("#education").on("click", function(){
  services.push("education");
});

$("#coaching").on("click", function(){
  services.push("coaching");
});

$("#mentoring").on("click", function(){
  services.push("mentoring");
});

$("#taxes").on("click", function(){
  services.push("taxes");
});

$(".services-next").on("click", function(){
  $("#display-services").hide();
  $("#display-result").show();
});


//Click HOME
$("#home").on("click", function(){
  $("#display-neighborhood").show();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide()
  $("#display-about").hide();
});

//CLICK WHO WE ARE
$("#whoweare").on("click", function(){
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about").show();
});
