$(function () {
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    $('#profile-creation').on('click', function (e) {
        e.preventDefault()
        let profile = {
            display_name: $('#inputName').val(),
            birth_date: $('#inputBirthday').val(),
            postal_code: $('#inputZip').val(),
            city: $('#inputCity').val(),
            country: $('#inputCountry').val()
        }

        fetch('/api/profiles/create/', {
            method: "POST",
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "X-CSRFToken": getCookie("csrftoken"),
            },
            body: JSON.stringify(profile)
        }).then(
            response => response.json()
        ).then(
            response => {
                if(response.err){
                    $('#display-name-err').html(response.display_name || '')
                    $('#birth-date-err').html(response.birth_date || '')
                    $('#city-err').html(response.city || '')
                    $('#postal-code-err').html(response.postal_code || '')
                    $('#country-err').html(response.country || '')
                } else if(response.redirect){
                    window.location.replace(response.redirect)
                }
            }
        ).catch(e => {
        })
    })
})