$(document).ready(function(){

    
    var typeSearch = "/search";
    var queryparam = "https://developers.zomato.com/api/v2.1"+typeSearch;
    queryparam.q = "food";
    queryparam.entity_id = "301";
    var queryurl = $.param(queryparam)
    
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?&location=charlotte";



       $.ajax({
          url: myurl,
          headers: {
           'Authorization':'Bearer hMCpjFUoT7ODiFsjTHANudhiTR_64AdWbQLNNwwZjuEcEiaHIROcy2OXbpXEKsuCRd3KDmiflByIdZWJQY4klSRMwR7nkcuD82do3vhdTl5DZME2meZ37I16VtvkW3Yx',
       },
          method: 'GET',
          dataType: 'json',
          success: function(data){
           for (var i = 0; i < data.businesses.length; i++) {

           console.log(data.businesses[i].name);
           }
          }
       });

    })