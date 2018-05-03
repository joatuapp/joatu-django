$(document).ready(function(){
    
    function format_time(time){
        var start = new Date(time),// convert string to date
        locale = "en-us",//english
        month = start.toLocaleString(locale, { month: "short" });//month name
        var date = month + ' ' + start.getDate();

        minutes = start.getMinutes(); // get minutes
        if(minutes===0){    //add another 0 if minutes = 0
            minutes='00';
        }
        var start_time = start.getHours() + 'H' + minutes; //format hours
        return date +' '+start_time
    }
    
    function format_community(abb){
        if(abb==='CP'){
            return 'Community Project'
        }
        else if(abb==='CO'){
            return 'Community Offer'
        }
        else{
            return 'Community Project / Community Offer'
        }
    }
    
    function going(volunteers, attendees){
        var going =0 ;
        var needs = 0;
        var res;
        var result_going= '';
        var result_needs='';
        if (volunteers!== null){
            for (i in volunteers){
                going += volunteers[i].registered;
                needs += volunteers[i].minimum_registration;
            }
            if(going<needs){
                res = needs-going;
                result_needs = '/ Needs '+ res + 'More';
            }
        }
        if(attendees!=null){
            going += attendees.registered;
            
        }
       
        /*if (going===0){
            result_going = 'Be the first to register ';
        }
        else {
            result_going = going + ' Going ';
        }*/
        result_going = going + ' Going ';
        return result_going + result_needs;
    }
   
    var userId = $('#userId').attr('value');
    var link = '/rest_api/profiles/'+userId+'/'
    $.getJSON( link, function( data ){ // load profile data
        $.getJSON(data.profile_hub[0].hub, function(result){ // load projects in the hub (for the moment user can have only one hub)
            var projects= result.projects;
            projects.sort(function(a,b) { 
                return new Date(a.project.start)- new Date(b.project.start)
            });
            for (i in projects){
                
                $('#projects_table').append(
                    $('<li>').append(
                        $('<a>').attr('href','/detail_project/'+projects[i].project.id +'/').append(
                            $('<div>').attr('class','box_list row').append(
                                $('<div>').attr('class','col-2 logo_list').append(
                                    $('<object>').attr({'data':logo,width:'100%',height:'100%','type':"image/svg+xml"})
                                )
                            ).append(
                                $('<div>').attr('class','col-10').append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-7').append(
                                            $('<h5>').text(projects[i].project.name)
                                        )
                                    ).append(
                                        $('<div>').attr('class','col-5').css({'text-align':'right','font-style':'italic'}).append(
                                            $('<span>').text(format_time(projects[i].project.start))
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-12').append(
                                            $('<span>').text(format_community(projects[i].project.project_type))
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-8').append(
                                            $('<span>').text(going(projects[i].project.volunteers, projects[i].project.attendees ))
                                        )
                                    ).append(
                                        $('<div>').attr('class','col-4').css({'text-align':'right'}).append(
                                            $('<span>').text('0.2Km')
                                        )
                                    )
                                )
                            )
                        )
                        
                    )

                );
            }
        });
    });
})