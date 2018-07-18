$(document).ready(function () {
    
    $('#form_reset_start').submit(function (e) { //login the user through Django-rest-auth
        var data_to_send = $('#form_reset_start').serializeObject(); //serialize data form  
        final_data = JSON.stringify(data_to_send);
        var csrf = $('#login').find('input[name=csrfmiddlewaretoken]').val();    //auth token
        $.ajax({
            url: '/rest-auth/password/reset/',
            method: "POST",
            data: final_data,
            dataType: "json",
            contentType: 'application/json; charset=UTF-8',  // add this line
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                $('#email-succ').show();

            },
            error: function (error) {                

            }
        });
        e.preventDefault();
    });
});