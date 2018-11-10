var baseUrl = 'https://developers.zomato.com/api/v2.1/cities'
var data = {
    q: 'boston',
};

var headers = {
    user_key: '751388b7b15b5749d770a8b4eecd2816'
}

$.ajax({
    url: baseUrl,
    data: data,
    headers: headers,
}).done(function(response) {
    console.log(response);
})
