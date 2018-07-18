$(document).ready(function () {


    $('#form_reset_confirm').submit(function (e) { //login the user through Django-rest-auth
        $('#password1-err').html("");


        if ($('#password1_reset').val() !== $('#password2_reset').val()) {
            $('#password1-err').html("Passwords didn't match.")
            e.preventDefault();
            return;
        }
        if ($('#password1_reset').val().length < 9) {
            $('#password1-err').html("Password too short! 8 characters minimum.");
            e.preventDefault();
            return;
        }
        var pathname = window.location.pathname; 
        var arr_url = pathname.split('/');
        var token = arr_url[arr_url.length - 2];
        var uid = arr_url[arr_url.length - 3]
        $('#token').val(token);
        $('#uid').val(uid);
        var data_to_send = $('#form_reset_confirm').serializeObject(); //serialize data form 
        final_data = JSON.stringify(data_to_send);
        var csrf = $('#login').find('input[name=csrfmiddlewaretoken]').val();    //auth token
        $.ajax({
            url: '/rest-auth/password/reset/confirm/',
            method: "POST",
            data: final_data,
            dataType: "json",
            contentType: 'application/json; charset=UTF-8',  // add this line
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {

                window.location.href = "/accounts/reset_password/success/";

            },
            error: function (error) {


                $('#password1-err').html(error.responseJSON.password1 || '');
                $('#password2-err').html(error.responseJSON.password2 || '');
                $('#reset-err').html(error.responseJSON.non_field_errors || '');


            }
        });
        e.preventDefault();
    });
});