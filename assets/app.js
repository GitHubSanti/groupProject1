$(document).ready(function(){ 

$("#fmega").hide()
$("#list").hide()

$("#submit-btn").click(function(e){
    e.preventDefault()
    var location = $("#search-input").val().trim()
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=food&by-chloe&location="+location;
    
$.ajax({
    url: myurl,
    headers: {
        'Authorization':'Bearer hMCpjFUoT7ODiFsjTHANudhiTR_64AdWbQLNNwwZjuEcEiaHIROcy2OXbpXEKsuCRd3KDmiflByIdZWJQY4klSRMwR7nkcuD82do3vhdTl5DZME2meZ37I16VtvkW3Yx',
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
        console.log(data.businesses);
        $("#resturant-results").empty()
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

        $("#websearch").hide(2000)
        $("#list").show(3000)
        
        }
    })
})




    
})