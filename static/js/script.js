$(document).ready(function () {
 var webAuth = new auth0.WebAuth({
    domain: 'joatu.auth0.com',
    clientID: 'bh2te39B_H6H0yVqIwgsZbWCA-AoENZV',
    redirectUri: 'http://localhost:8000',
    audience: 'https://' + 'joatu.auth0.com' + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email'
  });

$("#btnfb").click(function(){
 webAuth.authorize({
 connection : 'facebook'
 });
});
$("#btngoogle").click(function(){
 webAuth.authorize({
 connection : 'google'
 });
});

if( window.location.hash!== undefined && window.location.hash.length > 0  ){
 webAuth.parseHash({ hash: window.location.hash }, function(err, authResult) {
    if (err) {
      return console.log(err);
    }
    webAuth.client.userInfo(authResult.accessToken, function(err, user) {
      console.log(user)
      console.log(user.email);
    });
  });
}
});
