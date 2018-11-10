$(document).ready(function(){ 


$("#submit-btn").click(function(e){
    e.preventDefault()
    var location = $("#search-input").val().trim()
    console.log(location);

    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location="+location;

    console.log(myurl)

$.ajax({
url: myurl,
headers: {
    'Authorization':'Bearer hMCpjFUoT7ODiFsjTHANudhiTR_64AdWbQLNNwwZjuEcEiaHIROcy2OXbpXEKsuCRd3KDmiflByIdZWJQY4klSRMwR7nkcuD82do3vhdTl5DZME2meZ37I16VtvkW3Yx',
},
method: 'GET',
dataType: 'json',
success: function(data){
    console.log(data);
}
    })
})




    
})