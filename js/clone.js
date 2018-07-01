//Global Variable
var demographics = [];
var services = [];

function getMonth(){
  let date = new Date();
  var monthWords = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let currentMonth = monthWords[date.getMonth()];
  return(currentMonth);
}

let baseUrl = "https://bankon-videos.firebaseio.com/";
let url = baseUrl + ".json"; //Firebase url


let verb = "GET"; // Get verb to get data
var params = {
      url: url,
      method: verb,
      success: function(data){
        console.log(data);
        let currentMonthWord = getMonth();
        let monthIndicator = data.videos[currentMonthWord]
        $('#video1').addClass("img-fluid text-center").append('<img src="' + monthIndicator.image1 + '" />');
        $('#video1').attr("href", monthIndicator.video1);
        $('#video2').addClass("img-fluid text-center").append('<img src="' + monthIndicator.image2 + '" />');
        $('#video2').attr("href", monthIndicator.video2);
      }
    }
$.ajax(params);



$('.navbar-collapse .nav-link').on('click', function(e){
 $("#navbarSupportedContent").collapse("hide");
});

$(".page").hide();
$("#display-about").show();

//Show Neighborhood List
$(".click").on("click", function(){
  $(".page").hide();
  $("#neighborhood-by-zip-list").show();
});


//Display Demographics
$(".click-link").on("click", function(){
  $(".page").hide();
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
  $(".page").hide();
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
  $(".page").hide();
  $("#display-result").show();
});

//Click HOME
$("#home").on("click", function(){
  $(".page").hide();
  $("#display-neighborhood").show();
});

//CLICK WHO WE ARE
$("#whoweare").on("click", function(){
  $(".page").hide();
  $("#display-about").show();
});

//CLICK BANK ACCOUNT
$("#bankaccount").on("click", function() {
  $(".page").hide();
  $("#display-about-account").show();
});


//CLICK OPEN ACCOUNT
$("#openaccount").on("click", function() {
  $(".page").hide();
  $("#display-open-account").show();
});


//CLICK ENTREPRENEURS
$("#business").on("click", function() {
  $(".page").hide();
  $("#display-entrepreneurs").show();
});


//CLICK MONEY MANAGEMENT
$("#management").on("click", function() {
  $(".page").hide();
  $("#display-management").show();
});


//CLICK CALENDAR
$("#calendar").on("click", function() {
  $(".page").hide();
  $("#display-calendar").show();
});


