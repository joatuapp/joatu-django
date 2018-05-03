$(document).ready(function(){
    $( function() {$( "#dialog" ).dialog({autoOpen: false,show: {effect: "fade",duration: 200}, hide: {effect: "fade",duration: 200}});}); // dialog box
    $('#edit_profile').click(function(e){
        e.preventDefault();
        $('#content_profile').delay(200).slideUp(function() {
            $(this).empty();       
            
            $(this).load('/edit_profile/' + ' #edit_profile_form');
            $.getJSON('/rest_api/update_profile/', function(data){
                $("#inputName").val(data.display_name);
                $("#inputBirthday").val(data.birth_date);
                $("#inputStreet").val(data.street);
                $("#inputCity").val(data.city);
                $("#inputZip").val(data.postal_code);
                $("#inputCountry").val(data.country);
            });
         });
         $('#content_profile').delay(190).slideDown(function(){
            $('#button_edit').toggle();
         });
    })
    $('#main').on('click','#save_edit_profile',function(e){
        var url = '/rest_api/update_profile/';
        var csrf = $('#main').find('input[name=csrfmiddlewaretoken]').val();  
        var data_form = $('#main').find($("#edit_user_profile")).serialize();;
        $.ajax({
            url: url,
            data: data_form,
            method: "PUT",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function(result){
                $('#message_box').text('Your Profile has been changed with success.');
                $( "#dialog" ).dialog( "open" );
                $("#dialog").on( "dialogclose", function( event, ui ) {
                    window.location.href = "/";
                });
                
            }
        });
        e.preventDefault();
    })
});