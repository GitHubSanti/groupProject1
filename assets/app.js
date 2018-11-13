$(document).ready(function(){ 

$("#fmega").hide()
$("#list").hide()

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
            divItem.append(pNew)
            pNew.prepend(element.display_phone)
            divItem.append(pNew)
            pNew.prepend(element.rating)
            console.log(element.location.display_address)
            imgNew.attr("src", element.image_url)
            divItem.append(imgNew)
            $("#resturant-results").append(divItem);
        });

        $("#search").hide(2000)
        $("#list").show(3000)
        
        }
    })
})




    
})