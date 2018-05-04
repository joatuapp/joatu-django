$(document).ready(function(){
    var userId = $('#userId').attr('value');
    $.getJSON('/rest_api/profiles/'+userId+'/', function(data){
        $('#numb_CAPS').text(data.profile_wallet.wallet);
    });
});