$(document).ready(function () {

    $('#login').submit(function (e) { //login the user through Django-rest-auth
        var data_to_send = $('#login').serializeObject(); //serialize data form  
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
                console.log(error);
                if (error.responseJSON.non_field_errors) {
                    switch (error.responseJSON.non_field_errors[0]) {
                        case 'Must include \"username\" and \"password\".':
                            alert('missing email');
                            break;
                        case 'Unable to log in with provided credentials.':
                            alert('Wrong password or email');
                            break;
                        default:
                            alert('sorry something wrong happened');
                            break;
                    }
                }
                else if(error.responseJSON.password){
                    if(error.responseJSON.password[0]=="This field may not be blank."){
                        alert('missing password');
                    }
                    else{
                        alert('something went wrong!')
                    }
                }
            }
        });
        e.preventDefault();
    });


    $('#registration_button').click(function(e){
        e.preventDefault();
        $('#registration').show()
    });

    $('.backdrop').click(function(e){
        e.preventDefault();
        $('#registration').hide()
    });



    $('#registration_form').submit(function (e) { //login the user through Django-rest-auth
        var data_to_send = $('#registration_form').serializeObject(); //serialize data form  
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
                console.log('success');
                window.location.href = "/profiles/create/";

            },
            error: function (error) {
                console.log(error);
                if (error.responseJSON.non_field_errors) {
                    switch (error.responseJSON.non_field_errors[0]) {
                        case "The two password fields didn't match.":
                            alert('Please enter the same password twice');
                            break;
                        case 'Unable to log in with provided credentials.':
                            alert('Wrong password or email');
                            break;
                        default:
                            alert('sorry something wrong happened');
                            break;
                    }
                }
                else if(error.responseJSON.password1){
                    switch (error.responseJSON.password1[0]) {
                        case "This field may not be blank.":
                            alert('missing password');
                            break;
                        case "This password is too short. It must contain at least 8 characters.":
                            alert('Your password should be at least 8 characters');
                            break;
                        default:
                            alert('Something went wrong!');
                            break;
                    }

                } 
                else if(error.responseJSON.password2){
                    if(error.responseJSON.password2[0]=="This field may not be blank."){
                        alert('missing password');
                    }
                    else{
                        alert('something went wrong!')
                    }
                } 
                else if(error.responseJSON.email){
                    switch (error.responseJSON.email[0]) {
                        case "A user is already registered with this e-mail address.":
                            alert('This email is already taken!');
                            break;
                        case 'Enter a valid email address.':
                            alert('Invalid email address');
                            break;
                        case 'This field may not be blank.':
                            alert('Please enter an email');
                            break;
                        default:
                            alert('Something went wrong!');
                            break;
                    }
                } 
            }
        });
        e.preventDefault();
    });
});