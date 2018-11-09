$(document).ready(function(){

    
    var typeSearch = "/search";
    var queryparam = "https://developers.zomato.com/api/v2.1"+typeSearch;
    queryparam.q = "food";
    queryparam.entity_id = "301";
    var queryurl = $.param(queryparam)
    
    var http = require('http');
    http.createServer(function (queryurl, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(queryurl.url);
    res.end();
    }).listen(8080);

    })