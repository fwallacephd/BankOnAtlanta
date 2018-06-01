//Global Variables
let demographics = {};
let services = {};
let providersByDemographic = [];
let providerByServices = [];

//Provider Records
const providers = [
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
  demographics: ["Foreign Born Adults", "Foreign Born Youth", "Elementary School Students", "Middle School Students", "High School Students", "College Students", "Adults", "Entrepreneurs", "Small Buisness Owners"]
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

  {
  name: "HUD",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults"]
 },

  {
  name: "Invest Atlanta",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults"]
 },

  {
  name: "Jumpstart Coalition",
  link: "",
  description: "",
  services: [],
  demographics: ["Elementary School Students", "Middle School Students", "High School Students"]
 },

{
  name: "Lift Fund, Inc.",
  link: "",
  description: "",
  services: ["Personalized Financial Coaching/Counseling", "Referrals to Financial Education Classes", "Business Loan Preparation Classes"],
  demographics: ["Adults", "Small Business Owners", "Entrepreneurs"]
 },

{
  name: "Mayor's Office of Immigrant Affairs (Welcoming Atlanta)",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults", "Foreign Born Adults", "Foreign Born Youth"]
 },

{
  name: "On the Rise Financial Center",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults"]
 },

{
  name: "Operation Hope",
  link: "",
  description: "",
  services: ["Credit & Money Workshops", "Entrepreneur Training Program", "Homebuyer/Homeownership Classes", "General Financial Literacy Classes"],
  demographics: ["Adults", "Entrepreneurs", "Small Business Owners", "Middle School Students", "High School Students"]
 },

{
  name: "Right Path (The Community Foundation for Financial Literacy)",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults", "Women", "Families"]
 },

{
  name: "Salvation Army/Kroc Center",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults", "Persons with Disabilities"]
 },

{
  name: "Synergies Work",
  link: "",
  description: "",
  services: [],
  demographics: []
 },

{
  name: "United Way of Greater Atlanta",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Personalized Financial Coaching", "Referrals to Financial Education Classes", "Tax Preparation Assistance"],
  demographics: ["Elementary School Students", "Middle School Students", "High School Students", "College Students", "Re-Entry Citizens", "Adults", "Entrepreneurs", "Small Business Owners"]
 },


{
  name: "Urban Asset Builders",
  link: "",
  description: "",
  services: ["General Financial Literacy Classes", "Personalized Financial Coaching", "Referrals to Financial Education Classes", "Business Coaching/Mentoring", "Access to Capital & Education for Businesses", "Asset Building Education"],
  demographics: ["Elementary School Students", "Middle School Students", "High School Students", "College Students", "Senior Citizens", "Veterans", "Adults", "Entrepreneurs", "Small Business Owners"]
 },


{
  name: "Urban League of Greater Atlanta",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults"]
 },


{
  name: "U.S. Small Business Association-GA District",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults", "Entrepreneurs", "Small Business Owners"]
 },


{
  name: "Westside Works",
  link: "",
  description: "",
  services: [],
  demographics: ["Adults"]
 },


{
  name: "Women’s Entrepreneurship Initiative",
  link: "",
  description: "",
  services: ["Financial Education & Coaching for Businesses", "Personalized Financial Coaching", "Referrals to Financial Education"],
  demographics: ["Women", "Entrepreneurs", "Small Business Owners"]
 },


{
  name: "WorkSource Atlanta",
  link: "",
  description: "",
  services: ["Job/Occupational Skills Training", "Workplace Competency Training", "Job Searh Opportunities", "Job Placement"],
  demographics: ["Elementary School Students", "Middle School Students", "High School Students", "College Students", "Families", "Re-Entry Citizens", "Adults"]
 },

]

//End of Partner Records.


//Function to Sort Records by Demographics
function sortDemographics(providers, demographics){
  let sortedDemographicRecords = [];
  for (let record of providers) {
    for (let item of record.demographics){
      if (item in demographics) {
    sortedDemographicRecords.push(record);
      }
    }
  };
  return (sortedDemographicRecords)
};

//Function to Sort Records by Services
function sortedServices(providers, services) {
  let sortedServiceRecords = [];
  for (let record of providers) {
    for (let item of record.services){
      if (item in services) {
      sortedServiceRecords.push (record);
    }
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
  let storeDemo = $(this).attr("data-demographic");
  demographics[storeDemo] = true;
  console.log(storeDemo)
});


$(".demographics-next").on("click", function(){
  $(".page").hide();
  $("#display-services").show();
  providersByDemographic = sortDemographics(providers, demographics);
  console.log(providersByDemographic);
});


//Choose Services
$(".service").on("click", function(){
  let storeServices = $(this).attr("data-service").split(", ");
  for (let storeService of storeServices) {
    services[storeService] = true;
    console.log(services)
  }
});

$(".services-next").on("click", function(){
  $(".page").hide();
  $("#display-result").show();
  providerByServices = sortedServices(providersByDemographic, services)
  console.log(providerByServices);
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


