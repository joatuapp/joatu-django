$(document).ready(function(){

    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if(xhr.status===200){
            responseObject = JSON.parse(xhr.responseText);
            var projectsList=responseObject.projects;
            var demandsList=responseObject.demands;
            var offersList=responseObject.offers;
            // Show list of projects
            for (var i=0; i<projectsList.length; i++ ){
                $('#projects_table').append(
                    $('<li>').append(
                        $('<a>').attr({href:projectsList[i].project.url, class:"project_detail"}).append(
                            $('<span>').text(projectsList[i].project.name)
                )));
                  
            }
            // Show list of demands
            for (var i=0; i<demandsList.length; i++ ){
                $('#demands_table').append(
                    $('<li>').append(
                        $('<a>').attr({href:demandsList[i].demand.url, class:"demand_detail"}).append(
                            $('<span>').text(demandsList[i].demand.title)
                )));
                  
            }
            // Show list of offers
            for (var i=0; i<offersList.length; i++ ){
                $('#offers_table').append(
                    $('<li>').append(
                        $('<a>').attr({href:offersList[i].offer.url, class:"offer_detail"}).append(
                            $('<span>').text(offersList[i].offer.title)
                )));
                  
            }



///////////////////////////////////////////////////////////SHOW DETAIL/////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////PROJECT //////////////////////////////////////////////////////////////////////////////
           // Show project detail in the Content right balise when user click on the link in the list
           $('#projects_table').on('click', '.project_detail', function(e){
                e.preventDefault();
                var url = this.href;
                $('#container-right').empty();  // empty the right container
                $('#container-right').load('detail_project/' + ' #show_Detail_Project')
                $.getJSON( url, function( data ) {
                    $('#project_name').text(data.name);
                    $('#project_start').text(data.start);
                    $('#project_description').text(data.description);
                    var address = data.number + ' ' + data.street + ', ' + data.postal_code + ', ' + data.city 
                    $('#project_address').text(address);
                    $('#project_organizer').text(data.organizer);
                    $('#id_discussion').attr('value', data.id);
                    

                    for (i in data.discussion_project){
                        $('#project_discussion').append(
                            $('<li>').append(
                                $('<h3>').text(data.discussion_project[i].title)).append(
                                $('<p>').text(data.discussion_project[i].text)).append(
                                $('<ul id="'+data.discussion_project[i].title+'">'))
                            );


                            for (j in data.discussion_project[i].answer_discussion_project){
                                $('#'+data.discussion_project[i].title).append(
                                    $('<li>').append(
                                        $('<p>').text(data.discussion_project[i].answer_discussion_project[j].text)
                                    ));
                            }
                    }


                    //alert(data.volunteers[0].url)
                    if(data.project_type !="CP"){ ///show the attendees data
                        var attendees_url= data.attendees.url
                        $.getJSON( attendees_url, function( attendees_data ) {
                            $.each( attendees_data, function( key, val ) {
                                $('#content-right').append( "<li id='" + key + "'>" + key + ' : '+  val + "</li>" ); // show info Attendees
        
                            });
                        });
                    }
                    if(data.project_type !="CO"){///show the volunteering data
                        for (i in data.volunteers){
                            var volunteers_url= data.volunteers[i].url
                            $.getJSON( volunteers_url, function( volunteers_data ) {
                                $.each( volunteers_data, function( key, val ) {
                                    $('#content-right').append( "<li id='" + key + "'>" + key + ' : '+  val + "</li>" ); // show info Volunteers
            
                                });
                            });
                        }
                    }
                    if(data.user_Is_Owner === true){
                        //$('#content-right').append($('<a>').attr({href:data.url,id:"edit_project"}).append($('<span>').text('Edit')));// add a link to edit the project when the user is the one who has created the project
                        $('#content-right').append($('<a>').attr({href:data.url,id:"delete_detail"}).append($('<span>').text('Delete')));// add a link to delete the project when the user is the one who has created the project
                    }
                });
            }); 


        ////////////////////////////////////////////////////////SUBMIT DISCUSSION/////////////////////////////////////////
        $('#container-right').on("submit","#start_discussion",function(e){
            var csrf = $('#right').find('input[name=csrfmiddlewaretoken]').val();
            var url = '/rest_api/projects_discussion/';
            var data = $('#start_discussion').serialize();    
            $.ajax({
                url: url,
                method: "POST",
                data:data,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("X-CSRFToken", csrf);
                },
                success: function(result){
                    alert(result);
                }
            });
            e.preventDefault();

        });

  


    ////////////////////////////////////////////////////////////DEMAND//////////////////////////////////////////////////////////////        
            // Show demand detail in the Content right balise when user click on the link in the list
            $('#demands_table').on('click','.demand_detail', function(e){
                e.preventDefault();
                var url = this.href;
                $('#container-right').empty();
                $('#container-right').append(
                    $('<ul>').attr('id','content-right'));
                $.getJSON( url, function(data ) {
                    $.each( data, function( key, val ) {
                        $('#content-right').append( "<li id='" + key + "'>"+ key + ' : '+  val + "</li>" );
                    });
                    if(data.user_Is_Owner === true){
                        //$('#content-right').append('{% csrf_token %}');
                        $('#content-right').append($('<a>').attr({href:data.url,id:"edit_demand"}).append($('<span>').text('Edit')));
                        $('#content-right').append($('<a>').attr({href:data.url,id:"delete_detail"}).append($('<span>').text('Delete')));
                    }
                    
                });
            }); 

    ////////////////////////////////////////////////////////////OFFER//////////////////////////////////////////////////////////////           
            // Show offer detail in the Content right balise when user click on the link in the list
            $('#offers_table').on('click','.offer_detail', function(e){
                e.preventDefault();
                var url = this.href;
                $('#container-right').empty();
                $('#container-right').append(
                    $('<ul>').attr('id','content-right'));
                $.getJSON( url, function( data ) {
                    $.each( data, function( key, val ) {
                        $('#content-right').append( "<li id='" + key + "'>" + key + ' : '+  val +"</li>" );
                    });
                    if(data.user_Is_Owner === true){
                        $('#content-right').append($('<a>').attr({href:data.url,id:"edit_offer"}).append($('<span>').text('Edit')));
                        $('#content-right').append($('<a>').attr({href:data.url,id:"delete_detail"}).append($('<span>').text('Delete')));
                    }
                });

            }); 


////////////////////////////////////////////////////// LOAD FORM  ///////////////////////////////////////////////////////////////////////////
            // load form in the container right balise for project, demand, offer
            $('.create').on('click', function(e){
                e.preventDefault();
                var url = this.href;
                $('#container-right').empty();
                $('#container-right').load(url + ' #form_creation')

            }); 


///////////////////////////////////////////////////////////////////////////POST////////////////////////////////////////////////////////////////////////////////////////////
            //post demand to back end
            $('#container-right').on("submit","#form_demand",function(e){
                $.post('/rest_api/demands/', $('#form_demand').serialize())
                .done(function(data){
                    var url = data.url;
                    $('#container-right').empty();
                    $('#container-right').append(
                        $('<ul>').attr('id','content-right'));

                    $.getJSON( url, function( data ) {  //show the data just created in the right container
                        $.each( data, function( key, val ) {
                            $('#content-right').append( "<li id='" + key + "'>" + key + ' : '+  val + "</li>" );
                        });
                    });
                    $('#demands_table').append(  // add the link to the list
                        $('<li>').append(
                            $('<a>').attr({href:url, class:"demand_detail"}).append(
                                $('<span>').text(data.title)
                    )));
                    
                });
                e.preventDefault();

            });

            // post offer to back end
            $('#container-right').on("submit","#form_offer",function(e){
                $.post('/rest_api/offers/', $('#form_offer').serialize())
                .done(function(data){

                    var url = data.url;
                    $('#container-right').empty();
                    $('#container-right').append(
                        $('<ul>').attr('id','content-right'));
                    $.getJSON( url, function( data ) {   //show the data just created in the right container
                        $.each( data, function( key, val ) {
                            $('#content-right').append( "<li id='" + key + "'>" + key + ' : '+ val + "</li>" );
                        });
                    });
                    $('#offers_table').append(  // add the link to the list
                        $('<li>').append(
                            $('<a>').attr({href:url, class:"offer_detail"}).append(
                                $('<span>').text(data.title)
                    )));
                    
                });
                e.preventDefault();

            });
    //////////////////////////////////////////////////////////////PROJECT //////////////////////////////////////////////////////////
            $('#container-right').on("change","#selectType", function(){
                if($(this).val()==="CP"){
                    $('#Form_Attendee').css('display','None');
                    $('#Form_Volunteer').css('display','');
                }
                else if($(this).val()==="CO"){
                    $('#Form_Attendee').css('display','');
                    $('#Form_Volunteer').css('display','None'); 
                }
                else{
                    $('#Form_Attendee').css('display','');
                    $('#Form_Volunteer').css('display',''); 
                }
            });
            $('#container-right').on("click","#Role1General", function(){
                
                if($(this).is(':checked')){
                    $('#Form_Role1').css('display','');
                }
                else if (!$(this).is(':checked')){
                    $('#Form_Role1').css('display','None');
                }

            });

            // post project to back end
            $('#container-right').on("submit","#form_project",function(e){
                var data_to_send = $('#form_project').serializeObject();   
                final_data = JSON.stringify(data_to_send);  
                var csrf = $('#right').find('input[name=csrfmiddlewaretoken]').val();   
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
                    var url = result.url;
                    $('#container-right').empty();
                    $('#container-right').append(
                        $('<ul>').attr('id','content-right'));
                    $.getJSON( url, function( result ) {   //show the data just created in the right container
                        $.each( result, function( key, val ) {
                            $('#content-right').append( "<li id='" + key + "'>" + key + ' : '+ val + "</li>" );
                        });
                    });
                    $('#projects_table').append(  // add the link to the list
                        $('<li>').append(
                            $('<a>').attr({href:url, class:"project_detail"}).append(
                                $('<span>').text(result.name)
                    )));
                    
                }});
                e.preventDefault();

            });
//////////////////////////////////////////////////////////////////DELETE/////////////////////////////////////////////////////////////////////////////////////////

            $('#container-right').on("click", "#delete_detail", function(e){
                var url = this.href;
                var csrf = $('#right').find('input[name=csrfmiddlewaretoken]').val();                
                $.ajax({
                    url: url,
                    method: "DELETE",
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("X-CSRFToken", csrf);
                    },
                    success: function(result){
                        $('#container-right').empty();
                        $('#container-right').append($('<p>').text('DELETED WITH SUCCESS'));

                        $("a[href='"+url+"']").closest('li').remove()
                    }
                });
                e.preventDefault();
            });

////////////////////////////////////////////////////////////////UPDATE////////////////////////////////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////////GET///////////////////////////////////////////////////////////////////////////////////

            $('#container-right').on("click", "#edit_demand", function(e){
                url = this.href;
                $('#container-right').empty();
                $('#container-right').load('/update_demand/' + ' #form_update');                
                $.getJSON( url, function(data) {
                    $('#inputTitle').attr('value', data.title);
                    $('#inputNumber').attr('value', data.number);
                    $('#inputStreet').attr('value', data.street);
                    $('#inputCity').attr('value', data.city);
                    $('#inputZip').attr('value', data.postal_code);
                    $('#inputIsCAPS').prop('checked',data.is_CAPS);
                    $('#inputIsBarter').prop('checked',data.is_BARTER);
                    $('#inputIsGive').prop('checked',data.is_GIVE);
                    $('#inputCAPS').attr('value', data.price_CAPS);
                    $('#inputBarter').attr('value', data.price_barter);
                    $('#inputDescription').text(data.description);
                    $('#updateTheForm').attr('action',url);
                });
                e.preventDefault();
            });

            $('#container-right').on("click", "#edit_offer", function(e){
                url = this.href;
                $('#container-right').empty();
                $('#container-right').load('/update_offer/' + ' #form_update');
                $.getJSON( url, function(data) {
                   $('#inputTitle').attr('value', data.title);
                   $('#inputNumber').attr('value', data.number);
                   $('#inputStreet').attr('value', data.street);
                   $('#inputCity').attr('value', data.city);
                   $('#inputZip').attr('value', data.postal_code);
                   $('#inputIsCAPS').prop('checked',data.is_CAPS);
                   $('#inputIsBarter').prop('checked',data.is_BARTER);
                   $('#inputIsGive').prop('checked',data.is_GIVE);
                   $('#inputCAPS').attr('value', data.price_CAPS);
                   $('#inputBarter').attr('value', data.price_barter);
                   $('#inputDescription').text(data.description);
                   $('#updateTheForm').attr('action',url);
                });
                e.preventDefault();
            });

    ///////////////////////////////////////////////////////////PUT///////////////////////////////////////////////////////////////////////////////////
            $('#container-right').on("click", "#Edit_Form", function(e){
                var url = $('#updateTheForm').attr('action');
                var csrf = $('#right').find('input[name=csrfmiddlewaretoken]').val();                
                $.ajax({
                    url: url,
                    data: $("#updateTheForm").serialize() ,
                    method: "PUT",
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader("X-CSRFToken", csrf);
                    },
                    success: function(result){
                        $('#container-right').empty();
                        $('#container-right').append($('<p>').text('UPDATED WITH SUCCESS'));
                    }
                });
                e.preventDefault();
            });



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    };
    
    xhr.open('GET', '/rest_api/hubs/1/', true);
    xhr.send(null);


})
    