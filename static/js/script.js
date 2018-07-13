$(document).ready(function () {

    $('#logout').click(function(e){
        var csrf = $('#mySidenav').find('input[name=csrfmiddlewaretoken]').val();    //auth token
        $.ajax({
            url: '/rest-auth/logout/',
            method: "POST",
            contentType: 'application/json; charset=UTF-8',  // add this line
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                window.location.href = "/";

            }
        });
        e.preventDefault();
    });

    var userId = $('#userId').attr('value');
    if (userId) {  //fix /api/profiles// 404 (Not Found) fix
        $.getJSON('/api/profiles/' + userId + '/', function (data) {
            $('#numb_CAPS').text(data.profile_wallet.wallet);
        });
    }
});
