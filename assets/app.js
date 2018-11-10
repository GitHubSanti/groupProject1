$(document).ready(function(){ 


$("#submit-btn").click(function(e){
    e.preventDefault()
    var location = $("#search-input").val().trim()
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location="+location;
    
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
            var imgNew = $("<img>")
            var divItem = $("<div>")
            var pNew = $("<p>")

            pNew.prepend(element.name)
            pNew.prepend(element.display_phone)
            pNew.prepend(element.image_url)
            pNew.prepend(element.rating)
            console.log(element.location.display_address)
            imgNew.attr("src", element.image_url);
            divItem.append(imgNew)
            $("#resturant-results").append(divItem);
        });
        
        
        }
    })
})




    
})