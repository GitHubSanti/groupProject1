$(document).ready(function() {
  var config = {
    // Database to store API info retrieved
    apiKey: "AIzaSyDkb8sRAOvLBKigFGElko7UIT5hirbLo44",
    authDomain: "foodapp-a6b68.firebaseapp.com",
    databaseURL: "https://foodapp-a6b68.firebaseio.com",
    projectId: "foodapp-a6b68",
    storageBucket: "",
    messagingSenderId: "667672246134"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
  // var database = firebase.database();

  //Data retrieved from API call
  var yelpAPIData = {};

  var myurl =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=";
  var AuthorizationKey =
    "Bearer hMCpjFUoT7ODiFsjTHANudhiTR_64AdWbQLNNwwZjuEcEiaHIROcy2OXbpXEKsuCRd3KDmiflByIdZWJQY4klSRMwR7nkcuD82do3vhdTl5DZME2meZ37I16VtvkW3Yx";

  function makeAPICall(city) {
    myurl = myurl + city;

    $.ajax({
      url: myurl,
      headers: {
        Authorization: AuthorizationKey
      },
      method: "GET",
      dataType: "json",
      success: function(data) {
        if (city !== "") {
          var splashpage = $("#splashPage");
          splashpage.hide();
          resturantListPage.show();
        }
        // Clear out list of resturants div
        $("#resturant-results").empty();

        console.log(data.businesses);

        data.businesses.forEach(element => {
          // Create necessary layout show individual resturant data
          var divDivider = $("<div class='divider'>");
          var divSection = $("<div class='section'>");
          var divRow = $("<div class='row'>");
          var divSectionLeftCol = $("<div class='col s8'>");
          var divSectionRightCol = $("<div class='col s4 mt-4'>");
          // Column 1 items
          var resturantName = $("<h5 id='resturantName' class=''>");
          var resturantRating = $("<p>");
          var resturantPrice = $("<p>");
          resturantName.text(element.name);
          resturantRating.text(
            element.rating + "/5 " + element.review_count + " reviews"
          );
          resturantPrice.text(element.price);
          // Column 2 items
          var resturantNumber = $("<p>");
          resturantNumber.text(element.display_phone);

          $("#resturant-results").append(divDivider);
          $("#resturant-results").append(divSection);
          // Append to column1 in resturant section (resturant name, resturant rating, resturant price)
          divSection.append(divRow);
          divRow.append(divSectionLeftCol);
          divRow.append(divSectionRightCol);
          divSectionLeftCol.append(resturantName);
          divSectionLeftCol.append(resturantRating);
          divSectionLeftCol.append(resturantPrice);
          // Append to column2 in resturant section
          divSectionRightCol.append(resturantNumber);

          element.location.display_address.forEach(displayAddressLine => {
            var resturantAddressline = $("<p>");
            resturantAddressline.text(displayAddressLine);
            divSectionRightCol.append(resturantAddressline);
          });
        });
      }
    });
  }

  // Find Food button on Splash Page
  $("#submit-btn").click(function(event) {
    event.preventDefault();
    var location = $("#search-input")
      .val()
      .trim();

    if (location == "") {
      alert("Please insert valid city!");
    }

    // Populate $("#resturant-results") with new API content
    makeAPICall(location);
  });

  $("#search").click(function(event) {
    $("#submit-btn").off("click");
    event.preventDefault();
    var location = $("#search")
      .val()
      .trim();

    // Populate $("#resturant-results") with new API content
    makeAPICall(location);

    console.log(
      $("#search")
        .val()
        .trim()
    );
  });

  // Hide Resturant list page initially
  var resturantListPage = $("#resturantlistsPage");
  resturantListPage.hide();
});
