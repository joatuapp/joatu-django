$(document).ready(function () {
 var webAuth = new auth0.WebAuth({
    domain: 'joatu.auth0.com',
    clientID: 'bh2te39B_H6H0yVqIwgsZbWCA-AoENZV',
    redirectUri: 'http://localhost:8000',
    audience: 'https://' + 'joatu.auth0.com' + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });


    webAuth.authorize();


//$.ajax(settings).done(function (response) {
//  console.log(response);
//});
//    var userId = $('#userId').attr('value');
//    if (userId) {  //fix /api/profiles// 404 (Not Found) fix
//        $.getJSON('/api/profiles/' + userId + '/', function (data) {
//            $('#numb_CAPS').text(data.profile_wallet.wallet);
//        });
//    }
});
