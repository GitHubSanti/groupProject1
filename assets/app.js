$(document).ready(function(){ 
$("#websearch").show();
$("#fmega").hide()
$("#list").hide()
var apiCall = []
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
          var divSection = $("<div class='section'>")
          var divRow = $("<div class='row'>");
          var divSectionLeftCol = $("<div class='col s8'>");
          var divSectionRightCol = $("<div class='col s4 mt-4'>");
          // Column 1 items
          var resturantName = $("<h5 class='resturantName'>");
          var resturantRating = $("<p>");
          var resturantPrice = $("<p>");

            divSection.attr("data-id", element.id)

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
          apiCall.push(element.id);
          
          element.location.display_address.forEach(displayAddressLine => {
            var resturantAddressline = $("<p>");
            resturantAddressline.text(displayAddressLine);
            divSectionRightCol.append(resturantAddressline);
            
          });

        });
        console.log(apiCall)
        $("#websearch").hide(2000)
        $("#list").show(3000)
        }
    })
})

$(document).on("click",".section",function(){
    var that = $(this).attr("data-id");
    console.log(that);
    var queryurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/"+that;
    var queryurlreview ="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/"+that+"/reviews";
    //First AJAX Call for Restaurents
    $.ajax({
        url: queryurl,
        headers: {
            'Authorization':'Bearer hMCpjFUoT7ODiFsjTHANudhiTR_64AdWbQLNNwwZjuEcEiaHIROcy2OXbpXEKsuCRd3KDmiflByIdZWJQY4klSRMwR7nkcuD82do3vhdTl5DZME2meZ37I16VtvkW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function(data){
            // console.log(data)
            $("#fmega").show(3000)
            $("#list").hide(2000)
             
                // Create necessary layout show individual resturant data
                
                var divRow = $("<div class='row'>");
                var divSectionLeftCol = $("<div class='col s8'>");
                var divSectionRightCol = $("<div class='col s4 mt-4'>");
                // Column items
                var resturantName = $("<h5 class='resturantName'>");
                var resturantRating = $("<p>");
                var resturantPrice = $("<p>");
                var resturantImageDiv = $("<div>")
                var resturantNumber = $("<p>");

                resturantName.text(data.name);
                resturantRating.text(data.rating + "/5 " + data.review_count + " reviews");
                resturantPrice.text(data.price);
                resturantNumber.text(data.phone);
                data.photos.forEach(element => {
                    var resturantImage = $("<img>");
                    resturantImage.attr("src", element).attr("width","150px").attr("height","166px")
                    resturantImageDiv.append(resturantImage)
                });

                //Placement
                $("#firstrow").append(divRow);
                divRow.append(divSectionLeftCol);
                divRow.append(divSectionRightCol);
                divSectionLeftCol.append(resturantName);
                divSectionLeftCol.append(resturantRating);
                divSectionRightCol.append(resturantNumber);
                divSectionRightCol.append(resturantPrice);
                data.location.display_address.forEach(displayAddressLine => {
                    var resturantAddressline = $("<p>");
                    resturantAddressline.text(displayAddressLine);
                    divSectionRightCol.append(resturantAddressline)
                });

                $("#secondrow").append(resturantImageDiv)
            
        }
        
    })
    //Second AJAX Call for Reviews
    $.ajax({
        url: queryurlreview,
        headers: {
            'Authorization':'Bearer hMCpjFUoT7ODiFsjTHANudhiTR_64AdWbQLNNwwZjuEcEiaHIROcy2OXbpXEKsuCRd3KDmiflByIdZWJQY4klSRMwR7nkcuD82do3vhdTl5DZME2meZ37I16VtvkW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data)
            console.log(data.total);
            console.log(data.reviews);
            var resturantreviewsDiv = $("<div>")
            data.reviews.forEach(element => {
                var reviewname = $("<p>")
                var reviewrating = $("<p>")
                var reviewtext = $("<p>")
                var reviewimage = $("<img>")

                reviewname.text(element.user.name);
                reviewrating.text(element.rating);
                reviewtext.text(element.text);
                reviewimage.attr("src", element.user.image_url).attr("width", "50px").attr("height", "50px")

                
                resturantreviewsDiv.append(reviewname)
                .append(reviewimage)
                .append(reviewtext)
                .append(reviewrating)
                
            });
            
            $("#thirdrow").append(resturantreviewsDiv);

            

        }
        
    })

})
    
})