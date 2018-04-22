//Global Variable
var demographics = [];
var services = [];

//Show Neighborhood List
$(".click").on("click", function(){
  console.log("clicked");
  $("#neighborhood-by-zip-list").show();
  $("#display-neighborhood").hide();
});

//Hide Demographics and Services
$("#display-demographics").hide();
$("#display-services").hide();
$("#display-result").hide()
$("#display-about").hide();
$("#neighborhood-by-zip-list").hide();
$("#display-about-account").hide();
$("#display-open-account").hide();
$("#display-entrepreneurs").hide();
$("#display-management").hide();
$("#display-calendar").hide();


//Display Demographics
$(".click-link").on("click", function(){
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

$("#entrepreneurs").on("click", function(){
  demographics.push("entrepreneurs");
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
  $("#display-about-account").hide();
  $("#display-open-account").hide();
  $("#display-entrepreneurs").hide();
  $("#display-management").hide();
  $("#display-calendar").hide();
});

//CLICK WHO WE ARE
$("#whoweare").on("click", function(){
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about-account").hide();
  $("#display-open-account").hide();
  $("#display-entrepreneurs").hide();
  $("#display-management").hide();
  $("#display-calendar").hide();
  $("#display-about").show();
});

//CLICK BANK ACCOUNT
$("#bankaccount").on("click", function() {
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about").hide();
  $("#display-open-account").hide();
  $("#display-entrepreneurs").hide();
  $("#display-management").hide();
  $("#display-calendar").hide();
  $("#display-about-account").show();
});


//CLICK OPEN ACCOUNT
$("#openaccount").on("click", function() {
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about").hide();
  $("#display-about-account").hide();
  $("#display-entrepreneurs").hide();
  $("#display-management").hide();
  $("#display-calendar").hide();
  $("#display-open-account").show();
});


//CLICK ENTREPRENEURS
$("#business").on("click", function() {
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about").hide();
  $("#display-about-account").hide();
  $("#display-open-account").hide();
  $("#display-management").hide();
  $("#display-calendar").hide();
  $("#display-entrepreneurs").show();
});


//CLICK MONEY MANAGEMENT
$("#management").on("click", function() {
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about").hide();
  $("#display-about-account").hide();
  $("#display-open-account").hide();
  $("#display-entrepreneurs").hide();
  $("#display-calendar").hide();
  $("#display-management").show();
});


//CLICK CALENDAR
$("#calendar").on("click", function() {
  $("#display-neighborhood").hide();
  $("#display-demographics").hide();
  $("#display-services").hide();
  $("#display-result").hide();
  $("#display-about").hide();
  $("#display-about-account").hide();
  $("#display-open-account").hide();
  $("#display-entrepreneurs").hide();
  $("#display-management").hide();
  $("#display-calendar").show();
});
