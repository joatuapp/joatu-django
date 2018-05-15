$(document).ready(function () {
    var userId = $('#userId').attr('value');
    if (userId != '') {  //fix /api/profiles// 404 (Not Found) fix
        $.getJSON('/api/profiles/' + userId + '/', function (data) {
            $('#numb_CAPS').text(data.profile_wallet.wallet);
        });
    }
});
