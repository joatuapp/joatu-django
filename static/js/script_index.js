$(document).ready(function () {

    $('#login').submit(function (e) { //login the user through Django-rest-auth
        var data_to_send = $('#login').serializeObject(); //serialize data form 
        data_to_send.email=data_to_send.email.toLowerCase(); 
        final_data = JSON.stringify(data_to_send);
        var csrf = $('#login').find('input[name=csrfmiddlewaretoken]').val();    //auth token
        $.ajax({
            url: '/rest-auth/login/',
            method: "POST",
            data: final_data,
            dataType: "json",
            contentType: 'application/json; charset=UTF-8',  // add this line
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                window.location.href = "/projects/list/";

            },
            error: function (error) {                
                $('#login-err').html(error.responseJSON.non_field_errors || '');
                $('#password-err').html(error.responseJSON.password || '');
                if($('#login-err').text()){
                    $('#login-err').show();
                    $('#password-err').hide();
                }
                else if($('#password-err').text()){
                    $('#password-err').show();
                    $('#login-err').hide()
                }
                else{
                    $('#password-err').hide();
                    $('#login-err').hide()
                }

            }
        });
        e.preventDefault();
    });


    $('#registration_button').click(function(e){
        e.preventDefault();
        $('#registration').show()
    });

    $('#backdrop_registration').click(function(e){
        e.preventDefault();
        $('#registration').hide()
    });
    
    $('#terms_window').on('click', '#backdrop_terms', function (e){
        e.preventDefault();
        $('#terms_window').hide()
        $('#backdrop_terms').remove();
    });


    $('#terms_link').click(function(e){
        e.preventDefault();
        $('#terms_window').load(url_terms_en +'#backdrop_terms');
        $('#terms_window').show()

    });
   
    $('#terms_window').on('click', '#accepted_terms_modal', function (e){
        e.preventDefault();
        $('#checkConditions').prop('checked', true);
        $('#terms_window').hide();
        $('#backdrop_terms').remove();

    })

    $('#registration_form').submit(function (e) { //login the user through Django-rest-auth
        $('#password1-err').html("");
        $('#age-err').html("");        
        $('#terms-err').html("")
        
        if($('#password1_registration').val() !== $('#password2_registration').val()){
            $('#password1-err').html("Passwords didn't match.")
            e.preventDefault();
            return;
        }
        if(!$('#checkConditions').prop('checked')){
            $('#terms-err').html("Please read and accept the terms and conditions.");
            e.preventDefault();
            return;
        }

        if($('#password1_registration').val().length < 9){
            $('#password1-err').html("Password too short! 8 characters minimum.");
            e.preventDefault();
            return;
        }
        

        var data_to_send = $('#registration_form').serializeObject(); //serialize data form 
        if(data_to_send.termsIsAccepted==="on"){
            data_to_send.termsIsAccepted="true";
        } else {
            data_to_send.termsIsAccepted = "false";
        } 
        
        data_to_send.email=data_to_send.email.toLowerCase();
        final_data = JSON.stringify(data_to_send);
        var csrf = $('#login').find('input[name=csrfmiddlewaretoken]').val();    //auth token
        $.ajax({
            url: '/rest-auth/registration/',
            method: "POST",
            data: final_data,
            dataType: "json",
            contentType: 'application/json; charset=UTF-8',  // add this line
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                window.location.href = "/profiles/create/";

            },
            error: function (error) {
                

                $('#email-err').html(error.responseJSON.email || '');
                $('#password1-err').html(error.responseJSON.password1 || '');
                $('#password2-err').html(error.responseJSON.password2|| '');
                $('#terms-err').html(error.responseJSON.termsIsAccepted || '');
                $('#registration-err').html(error.responseJSON.non_field_errors|| '');

                
            }
        });
        e.preventDefault();
    });

    
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          
        }, false);

    
});