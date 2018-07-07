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
        let currentMonthWord = getMonth();
        let monthIndicator = data.videos[currentMonthWord];
        $('#video1').addClass("img-fluid text-center").append('<img src="' + monthIndicator.image1 + '" />');
        $('#video1').attr("href", monthIndicator.video1);
        $('#video2').addClass("img-fluid text-center").append('<img src="' + monthIndicator.image2 + '" />');
        $('#video2').attr("href", monthIndicator.video2);
      }
    }
$.ajax(params);


