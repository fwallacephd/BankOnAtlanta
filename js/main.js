//Global Variables
var demographics = {}
var services = {};
var providersByDemographic = [];

//Provider Records
var providers = [
 {
  name: "Access to Capital for Entrepreneurs",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults", "Entrepreneurs", "Small Buisness Owners"]
 },

 {
  name: "Atlanta Community Food Bank",
  link: "",
  description: "",
  services: ["Referrals to Financial Education Classes"],
  demographics: ["Adults", "Families"]
 },

 {
  name: "Atlanta Housing Authority/Choice Neighborhoods",
  link: "",
  description: "",
  services: ["Referrals to Financial Education Classes"],
  demographics: ["Adults"]
 },

 {
  name: "AUC Consortium, Inc.",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Financial Education & Coaching for Businesses", "Homebuyer/Homeownership Classes", " Referrals to Financial Education Classes", "Financial Empowerment Workshops"],
  demographics: ["Adults", "College Student", "Entrepreneurs", "Small Buisness Owners"]
 },

 {
  name: "CareSource",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults"]
 },

 {
  name: "Center for Working Families",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults", "Families"]
 },

 {
  name: "ClearPoint Financial Solutions:  A Division of Money Management, Inc.",
  link: "",
  description: "",
  services: ["Personalized Financial Coaching/Counseling"],
  demographics: ["Adults"]
 },

 {
  name: "Community Sustainability Enterprise",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Personalized Financial Coaching/Counseling"],
  demographics: ["High School Students", "College Students", "Adults", "Entrepreneurs", "Small Buisness Owners"]
 },

 {
  name: "Department of Corrections (City of Atlanta)",
  link: "",
  description: "",
  services: [],
  demographics: ["Re-Entry Citizens ", "Adults"]
 },

 {
  name: "Department of Watershed Management (City of Atlanta)",
  link: "",
  description: "",
  services: ["Homebuyer/Homeownership Classes", "Referrals to Financial Education Classes", "Tax Preparation Assistance"],
  demographics: ["Re-Entry Citizens", "Adults"]
 },

 {
  name: "EVERFI",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Homebuyer/Homeownership Classes"],
  demographics: ["Foreign Born Adults", "Foreign Born Youth Elementary School Students", "Middle School Students", "High School Students", "College Students", "Adults", "Entrepreneurs", "Small Buisness Owners"]
 },

  {
  name: "Exodus Financial Education Group, LLC",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Personalized Financial Coaching/Counseling"],
  demographics: ["College Students", "Re-Entry Citizens", "Adults", "Entrepreneurs", "Small Business Owners"]
 },

  {
  name: "Georgia Micro Enterprise Network",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Financial Education & Coaching for Businesses ", "Homebuyer/Homeownership Classes", "Personalized Financial Coaching/Counseling", "Referrals to Financial Education Classes", "Business Loan Preparation Classes"],
  demographics: ["Foreign Born Youth", "Foreign Born Adults", "High School Students", "College Students", "Persons with Disabilities", "Re-Entry Citizens", "Adults", "Entrepreneurs", "Small Business Owners"]
 },

  {
  name: "Georgia Watch",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Train-the-Trainer Class: Conducting a Financial Literacy Class", "Scams & Identity Theft Workshops", "Understanding Medical Debt Class", "Understanding Utility Bills Classes", "Debt & Debt Collection Classes", "Predatory Lending Workshops"],
  demographics: ["Re-Entry Citizens", "Foreign Born Adults", "Foreign Born Youth", "Adults", "Entrepreneurs", "Small Business Owners"]
 },

]

//End of Partner Records.


//Function to Sort Records by Demographics
function sortDemographics(providers, demographics){
  var sortedDemographicRecords = [];
  for (var record of providers) {
    if (record.demographics in demographics) {
      sortedDemographicRecords.push(record);
    }
  };
  return (sortedDemographicRecords)
};

//Function to Sort Records by Services
function sortedServices(providers, services) {
  var sortedServiceRecords = [];
  for (var record of providers) {
    if (record.services in services) {
      sortedServiceRecords.push (record);
    }
  };
  return (sortedServiceRecords);
}



//ReCollapse on the NavBar
$('.navbar-collapse .nav-link').on('click', function(){
 $("#navbarSupportedContent").collapse("hide");
});


//Show only the neighborhoods on first page
$(".page").hide();
$("#display-neighborhood").show();

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
$(".demographic").on("click", function() {
  var storeDemo = $(this).attr("data-demographic");
  demographics[storeDemo] = true;
});


$(".demographics-next").on("click", function(){
  $(".page").hide();
  $("#display-services").show();
  providersByDemographic = sortDemographics(providers, demographics);
});


sortedServices(providersByDemographic, services)

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


