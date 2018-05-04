$(document).ready(function(){
    var page = 1;
    var user_id = $('#userId').val(); // get the profile ID of the current user
    var activity_selected;
    var spinner = $( ".spinner" ).spinner(); // launch Jquery UI spinner
    var number_of_roles;

    $( function() {$( "#dialog" ).dialog({autoOpen: false,show: {effect: "fade",duration: 200}, hide: {effect: "fade",duration: 200}});}); // dialog box

    $('.timepicker').pickatime();
    $('.datepicker').pickadate();
    
    /// PAGE1
    $('input[name=category]').click(function(e){ //when the user click on one of the category input
        $('input[name=sub_category]:checked').prop('checked',false);
        $('.select_sub_category').hide(); // hide all the subcategories div 
        $(this).parentsUntil('.select_category').next('.select_sub_category').show();// find parent and then show the next select_sub_category
    });

    /// PAGE4
    $('#hub').click(function(){//when user click on "My community Hub"
        $('#address').show(); // show address input
        $.getJSON('/rest_api/profiles/'+user_id+'/', function(data){    //get data from user
            $.getJSON(data.profile_hub[0].hub,function(result){     // get Hub's data
                $('#address_number').val(result.number).prop('disabled', true);        // give value to the input and disabled = true
                $('#address_street').val(result.street).prop('disabled', true);        // "  "
                $('#address_postal_code').val(result.postal_code).prop('disabled', true);      // "    "
                $('#address_city').val(result.city).prop('disabled', true);       //      " "
            });

        });

     })

     $('#other').click(function(){// when user click on "other"
        $('#address').show(); // show address
        $('#address_number').val('').prop('disabled', false);   // give no value and disabled =  false
        $('#address_street').val('').prop('disabled', false);   // "    "   
        $('#address_postal_code').val('').prop('disabled', false);  //  "    "
        $('#address_city').val('').prop('disabled', false);     //  "     "
     })



    /// PAGE5
    $('#yes_answer').click(function(){
        $('#more_than_1_role_is_true').show();
    });
    $('#no_answer').click(function(){
        $('#more_than_1_role_is_true').hide();
    });

    /// Buttons
        //Create buton #button_start_create
    $('#button_right').append( // Append the button to go to the next page
        $('<a>').attr({'id':'button_start_create','class':'flat_button_success'}).text('I Understand')
    );

        //Action button #button_start_create
    $('#button_right').on('click','#button_start_create', function(e){//go from disclaimer page to page 1
        e.preventDefault();//block the a href
        $(this).remove(); // remove the button
        $('#disclaimer').toggle('fade',200)// hide disclaimer page
        $('#page_1').delay(205).toggle('fade',200)//show page 1
        $('#button_right').append(//add button for next page
            $('<a>').attr({'id':'button_next','class':'flat_button_success'}).text('Next')
        );
    });


        //Action button #button_next 
    $('#button_right').on('click','#button_next', function(e){
        e.preventDefault();//block the href

        //data_validation
        if(page===1){ // Validation page 1
            if($('input[name=sub_category]:checked').length===0 || $('input[name=category]:checked').length===0 ){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===2){ // Validation page 2
            if($('input[name=activity_type]:checked').length===0){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===3){ // Validation page 3
            var filled=$("#page_3 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===4){ // Validation page 4
            var filled=$("#page_4 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===5 && activity_selected.includes('volunteers') ){ // validation page 5
            if($('input[name=more_than_1_role]:checked').length===0){
                $( "#dialog" ).dialog( "open" );
                return;
            } 
        }
        if(page===6){ // Validation page 6
            var filled=$("#page_6 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===7){ // Validation page 7
            var filled=$("#page_7 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===8){ // Validation page 8
            var filled=$("#page_8 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===9){ // Validation page 9
            var filled=$("#page_9 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }

        // Page Animation
        $('#page_'+page).toggle('fade',200);//hide the current page
        $('#buttons').toggle('fade',200);//hide the button next
        if(page===4){
            activity_selected= $('input[name=activity_type]:checked').map(function(_, el) {
                return $(el).val();
            }).get();
            if(activity_selected.includes('attendees')){ //if activiy is an offer show div numbers of attendees
                $('#attendees_div').show(); // show the div
            }
            else{
                $('#attendees_div').hide();     // hide the div
            }     
            if(activity_selected.includes('volunteers')){ //if activiy is a project show div numbers of volunteers roles
                $('#volunteers_div').show();
            }
            else {     //if activity is an offer add the preview button on the next page
                $('#volunteers_div').hide();
                $('#button_right').empty();
                $('#button_right').append(  // Add button preview
                    $('<a>').attr({'id':'button_preview','class':'flat_button_preview'}).text('Preview')// create the button preview
                );
            }
        }
        if(page===5){   // identify numbers of roles
            if($('input[name=more_than_1_role]:checked').val()==='yes'){  // if there is more than one role
                number_of_roles=$('#numbers_of_roles').val();
            }
            else{
                number_of_roles=null;
                $('#button_right').delay(500).hide(); // hide the button
                $('#button_right').empty(); // remove the next button
                $('#button_right').append(  // Add button preview
                    $('<a>').attr({'id':'button_preview','class':'flat_button_preview'}).text('Preview')// create the button preview
                );
                $('#button_right').show();  // show the button
            }
        }

        if(page===(4+ parseInt(number_of_roles))){  // Create Button preview at the right page for role
            $('#button_right').delay(500).hide(); // hide the button
            $('#button_right').empty(); // remove the next button
            $('#button_right').append(  // Add button preview
                $('<a>').attr({'id':'button_preview','class':'flat_button_preview'}).text('Preview')// create the button preview
            );
            $('#button_right').show();  // show the button
        }


        page +=1;// get the number of the new page
        if(page===2){
            $('#button_left').append(//add button for previous page
                $('<a>').attr({'id':'button_previous','class':'flat_button_danger'}).text('Previous')// create the button previous
            );
        }
        $('#page_'+page).delay(205).toggle('fade',200);//show the new page
        $('#buttons').delay(205).toggle('fade',200);//show the button next

    });

        //Action button #button_previous
    $('#button_left').on('click', '#button_previous',function(e){
        e.preventDefault();//block the href
        $('#page_'+page).toggle('fade',200);//hide the current page
        $('#buttons').toggle('fade',200);//hide the button next
        if($('#button_preview').length!=0){ // remove preview button
            $('#button_right').empty();
            $('#button_right').append(//add button for next page
                $('<a>').attr({'id':'button_next','class':'flat_button_success'}).text('Next')
            );
        }
        if(page===2){
            $('#button_left').empty();
        }
        page -=1;// get the number of the new page

        $('#page_'+page).delay(205).toggle('fade',200);//show the new page
        $('#buttons').delay(205).toggle('fade',200);//show the button next
    });

        //Action button #button_edit
    $('#button_left').on('click', '#button_edit',function(e){
        e.preventDefault();//block the href
        $('#buttons').hide('fade',200);     //hide buttons
        $('#button_left').empty();      //remove edit button    
        $('#button_right').empty();     //remove submit button
        $('#preview_page').empty().toggle('fade',200); // Empty the preview page
        page=1
        $('#page_'+page).toggle('fade',200);//show the first page
        $('#button_right').append(//add button for next page
            $('<a>').attr({'id':'button_next','class':'flat_button_success'}).text('Next')
        );
        $('#buttons').delay(205).show('fade',200);     //show buttons

    });
        

        //Action button #button_preview
    $('#button_right').on('click', '#button_preview',function(e){
        e.preventDefault();//block the href
        
        if(page===10){ // Validation page 10
            var filled=$("#page_10 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===9){ // Validation page 9
            var filled=$("#page_9 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===8){ // Validation page 8
            var filled=$("#page_8 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===7){ // Validation page 7
            var filled=$("#page_7 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }
        if(page===6){ // Validation page 6
            var filled=$("#page_6 input[required]").filter(function () {
                return $.trim($(this).val()).length == 0
            }).length == 0;
            if(!filled){
                $( "#dialog" ).dialog( "open" );
                return;
            }
        }


        // Format Date and time
        var $input_date_start = $('#date_start').pickadate()
        var $input_time_start = $('#time_start').pickatime()
        var $input_date_end = $('#date_end').pickadate()
        var $input_time_end = $('#time_end').pickatime()
        var picker_date_start = $input_date_start.pickadate('picker')
        var picker_time_start = $input_time_start.pickatime('picker')
        var picker_date_end = $input_date_end.pickadate('picker')
        var picker_time_end = $input_time_end.pickatime('picker')
        var start = picker_date_start.get('select','yyyy-mm-dd')+'T'+picker_time_start.get('select','HH:i')+':00';
        var end = picker_date_end.get('select','yyyy-mm-dd')+'T'+picker_time_end.get('select','HH:i')+':00';
        //var final_start = new Date(start);
        //var final_end = new Date(end).;


        // Generat <form></form>
        var project_type;
        $('#role_2 *').prop("disabled",false); // enable all the data input of Role 2
        $('#role_3 *').prop("disabled",false); // enable all the data input of Role 3
        $('#role_4 *').prop("disabled",false); // enable all the data input of Role 4
        $('#role_5 *').prop("disabled",false); // enable all the data input of Role 5
        // identify Project_type
        if(!activity_selected.includes('volunteers')){ 
            project_type ='CO';
        }
        else if(!activity_selected.includes('attendees')){
            project_type ='CP';
        }
        else{
            project_type ='BO';
        }
        $('#inputName').val($('#name').val());
        $('#inputDescription').val($('#description').val());
        $('#inputStartDate').val(start);
        $('#inputEndDate').val(end);
        $('#inputCategory').val($('input[name=category]:checked').val());
        $('#inputSubCategory').val($('input[name=sub_category]:checked').val());
        $('#inputNumber').val($('#address_number').val());
        $('#inputStreet').val($('#address_street').val());
        $('#inputCity').val($('#address_city').val());
        $('#inputZip').val($('#address_postal_code').val());
        $('#selectType').val(project_type);
        $('#inputAttendeeSeat').val($('#number_attendees').val());
        $('#inputAttendeeMinRegistration').val($('#attendees_min_reg').val());
        

        if(project_type==="CO"){
            $('#role_2 *').prop("disabled",true); // disable all the data input of Role 2
            $('#role_3 *').prop("disabled",true); // disable all the data input of Role 3
            $('#role_4 *').prop("disabled",true); // disable all the data input of Role 4
            $('#role_5 *').prop("disabled",true); // disable all the data input of Role 5
        }
        if(project_type!="CO"){ // fill in the Role data if it is not a community offer
            /// add the first role
            $('#inputRole1Title').val($('#title_role_1').val());
            $('#inputRole1Description').val($('#description_role_1').val());
            $('#inputRole1Seat').val($('#number_volunteers_role_1').val()); 
            $('#inputRole1MinimumRegistration').val($('#number_min_role_1').val());   


            if(number_of_roles>1){
                //add the second role in the form
                $('#inputRole2Title').val($('#title_role_2').val());
                $('#inputRole2Description').val($('#description_role_2').val());
                $('#inputRole2Seat').val($('#number_volunteers_role_2').val()); 
                $('#inputRole2MinimumRegistration').val($('#number_min_role_2').val());  

                if(number_of_roles >4){ // if user select 5 roles
                    $('#inputRole5Title').val($('#title_role_5').val());
                    $('#inputRole5Description').val($('#description_role_5').val());
                    $('#inputRole5Seat').val($('#number_volunteers_role_5').val()); 
                    $('#inputRole5MinimumRegistration').val($('#number_min_role_5').val());  
                }
                else{
                    $('#role_5 *').prop("disabled",true);
                }
                if(number_of_roles >3){ // if user select 4 or more roles
                    $('#inputRole4Title').val($('#title_role_4').val());
                    $('#inputRole4Description').val($('#description_role_4').val());
                    $('#inputRole4Seat').val($('#number_volunteers_role_4').val()); 
                    $('#inputRole4MinimumRegistration').val($('#number_min_role_4').val());  
                }
                else{
                    $('#role_4 *').prop("disabled",true);
                }
                if(number_of_roles>2){// if user select 3 or more roles
                    $('#inputRole3Title').val($('#title_role_3').val());
                    $('#inputRole3Description').val($('#description_role_3').val());
                    $('#inputRole3Seat').val($('#number_volunteers_role_3').val()); 
                    $('#inputRole3MinimumRegistration').val($('#number_min_role_3').val());  
                }
                else{
                    $('#role_3 *').prop("disabled",true);
                }

            }
            else{
                $('#role_2 *').prop("disabled",true);
                $('#role_3 *').prop("disabled",true);
                $('#role_4 *').prop("disabled",true);
                $('#role_5 *').prop("disabled",true);
            }
            
        }

        // Load the page
        $('#page_'+ page).toggle('fade',200);
        $('#buttons').hide();
        $('#button_right').empty();
        $('#button_right').append(  // Add button Submit
            $('<a>').attr({'id':'button_submit','class':'flat_button_success'}).text('Submit')// create the button Submit
        );
        $('#button_left').empty();
        $('#button_left').append(  // Add button edit
            $('<a>').attr({'id':'button_edit','class':'flat_button_danger'}).text('Edit')// create the button edit
        );
        $('#preview_page').load(template + ' #content_template',function(){// load the detail project templatte
            $('#project_name').text($('#inputName').val());
            var start = new Date($('#inputStartDate').val()),// convert string to date
            locale = "en-us",//english
            month = start.toLocaleString(locale, { month: "long" });//month name
            var date = month + ' ' + start.getDate();
            $('#date_start_template').text(date);//show date start
            minutes = start.getMinutes(); // get minutes
            if(minutes===0){    //add another 0 if minutes = 0
                minutes='00';
            }
            var start_time_conv = start.getHours() + 'H' + minutes; //format hours
            $('#time_start_template').text(start_time_conv);//show hours
            var address = $('#inputNumber').val() + ' ' + $('#inputStreet').val() + ', ' + $('#inputZip').val(); // format address
            $('#project_address').text(address); //show project address
            $('#icon_category').append(
                $('<object>').attr({'data':logo, 'width':'50','height':'50', 'type':'image/svg+xml'})
            );
            $.getJSON('/rest_api/profiles/'+user_id+'/',function(data){
            $('#project_organizer').text(data.display_name); //show name of organizer
            });
            $('#project_description').text( $('#inputDescription').val());//show 

            if(project_type!="CO"){     // if project_type is not a community offer only, load the Volunteers role
                if (number_of_roles>1){
                    for(i=1; i<=number_of_roles; i++){
                        var title = $('#inputRole'+i+'Title').val();
                        var description =$('#inputRole'+i+'Description').val();
                        var num_seats= 'Places Available: 0/' +$('#inputRole'+i+'Seat').val();
                        $('#roles').append(
                            $('<li>').css('margin-bottom','5px').append(
                                $('<div>').attr('class','row').css({display:'flex', 'align-items':'center'}).append(
                                    $('<div>').attr('class','col-8').css({'border':'1px solid black', 'border-radius':'10px'}).append(
                                        $('<span>').css('display','block').text(title)
                                    ).append(
                                        $('<span>').css('display','block').text(description)
                                    ).append(
                                        $('<span>').css('display','block').text(num_seats)
                                    )
                                )
                            )
                        );
                    }
                }
                else{
                    var title = $('#inputRole1Title').val();
                    var description =$('#inputRole1Description').val();
                    var num_seats= 'Places Available: 0/' +$('#inputRole1Seat').val();
                    $('#roles').append(
                        $('<li>').css('margin-bottom','5px').append(
                            $('<div>').attr('class','row').css({display:'flex', 'align-items':'center'}).append(
                                $('<div>').attr('class','col-8').css({'border':'1px solid black', 'border-radius':'10px'}).append(
                                    $('<span>').css('display','block').text(title)
                                ).append(
                                    $('<span>').css('display','block').text(description)
                                ).append(
                                    $('<span>').css('display','block').text(num_seats)
                                )
                            )
                        )
                    );
                }
                $('#show_roles').show();
            }
            if(project_type!="CP"){     // if project_type is not a community project only, load the Attendees
                var registered='Registered: 0/' + $('#inputAttendeeSeat').val();
                $('#number_attendees_registration').text(registered);
                $('#show_attendees').show();
            }

        }) 




        $('#discussion_container').remove();
        $('#preview_page').delay(205).toggle('fade',200);
        $('#buttons').delay(300).show();
    });

        //Action button #button_submit
    $('#button_right').on('click', '#button_submit',function(e){
        var data_to_send = $('#form_create_project').serializeObject(); //serialize data form  
        final_data = JSON.stringify(data_to_send);      
        console.log(final_data);
        var csrf = $('#form_create_project').find('input[name=csrfmiddlewaretoken]').val();    //auth token
        $.ajax({
            url: '/rest_api/projects/',
            data: final_data ,
            dataType:"json",
            method: "POST",
            contentType: 'application/json; charset=UTF-8',  // add this line
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function(result){
                window.location.href = "/list_projects/";
            
            }
        });
        e.preventDefault();
    });
})
