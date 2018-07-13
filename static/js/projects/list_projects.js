$(document).ready(function(){
    var text_switch_is_old = true;
    $('#switch_old_actual').click(function (e) {
        e.preventDefault();
        $('#actual_table').toggle();
        $('#past_table').toggle();
        if(text_switch_is_old){
            $('#switch_old_actual').text('See actual activities');
        }
        else{
            $('#switch_old_actual').text('See past activities');
        }
        text_switch_is_old = !text_switch_is_old;
    });
    
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
    var link = '/api/profiles/'+userId+'/'
    $.getJSON( link, function( data ){ // load profile data
        $.getJSON(data.profile_hub[0].hub, function(result){ // load projects in the hub (for the moment user can have only one hub)
            var projects= result.projects;
            projects.sort(function(a,b) { 
                return new Date(a.project.start)- new Date(b.project.start)
            });
            var old_projects =[];
            var actual_projects = [];
            for (j in projects){
                var start_date =  new Date(projects[j].project.start);
                if(start_date<Date.now()){
                    old_projects.push(projects[j]);
                }
                else {
                    actual_projects.push(projects[j]);
                }
            }
            for (i in actual_projects){
                var project_category;
                var selected_cat = actual_projects[i].project.sub_category;

                var category = {
                    'Cul': 'Culture and Recreation',
                    'Edu': 'Education',
                    'Hea': 'Health',
                    'Soc': 'Social Services',
                    'Env': 'Environment',
                    'Oth': 'Other',
                };

                var sub_cat = {
                    'Cul_con': 'Concert/Show/Presentation',
                    'Edu_kno': 'Knowledge',
                    'Edu_ski': 'Skills share',
                    'Hea_phy': 'Physical fitness',
                    'Hea_emo': 'Emotional well-being',
                    'Hea_oth': 'Other activity',
                    'Soc_foo': 'Food security',
                    'Soc_chi': 'Childcare',
                    'Soc_eld': 'Eldercare',
                    'Soc_ani': 'Animalcare',
                    'Env_gar': 'Gardening',
                    'Env_cle': 'Cleanups',
                };

                if (selected_cat.slice(0, 3) === 'Oth') { // user defined other category and other subcategory
                    project_category = actual_projects[i].project.oth_category + ' - ' + actual_projects[i].project.oth_sub_cat;
                }
                else { // pre-defined category
                    if (selected_cat.slice(4, 7) === 'oth') { // other subcategory
                        project_category = category[selected_cat.slice(0, 3)] + ' - '+ actual_projects[i].project.oth_sub_cat;
                    }
                    else { // pre-defined subcategory
                        project_category = category[selected_cat.slice(0, 3)] + ' - ' + sub_cat[selected_cat];
                    }
                }
                
                $('#actual_table').append(
                    $('<li>').append(
                        $('<a>').attr('href','/projects/detail/'+actual_projects[i].project.id +'/').append(
                            $('<div>').attr('class','box_list row').append(
                                $('<div>').attr('class','col-2 logo_list').append(
                                    $('<object>').attr({'data':logo,width:'100%',height:'100%','type':"image/svg+xml"})
                                )
                            ).append(
                                $('<div>').attr('class','col-10').append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-7').append(
                                            $('<h5>').text(actual_projects[i].project.name)
                                        )
                                    ).append(
                                        $('<div>').attr('class','col-5').css({'text-align':'right','font-style':'italic'}).append(
                                            $('<span>').text(format_time(actual_projects[i].project.start))
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-12').append(
                                            $('<span>').text(project_category)
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-12').append(
                                            $('<span>').text(format_community(actual_projects[i].project.project_type))
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-8').append(
                                            $('<span>').text(going(actual_projects[i].project.volunteers, actual_projects[i].project.attendees ))
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

            for (l in old_projects){
                var project_category;
                var selected_cat = old_projects[l].project.sub_category;

                var category = {
                    'Cul': 'Culture and Recreation',
                    'Edu': 'Education',
                    'Hea': 'Health',
                    'Soc': 'Social Services',
                    'Env': 'Environment',
                    'Oth': 'Other',
                };

                var sub_cat = {
                    'Cul_con': 'Concert/Show/Presentation',
                    'Edu_kno': 'Knowledge',
                    'Edu_ski': 'Skills share',
                    'Hea_phy': 'Physical fitness',
                    'Hea_emo': 'Emotional well-being',
                    'Hea_oth': 'Other activity',
                    'Soc_foo': 'Food security',
                    'Soc_chi': 'Childcare',
                    'Soc_eld': 'Eldercare',
                    'Soc_ani': 'Animalcare',
                    'Env_gar': 'Gardening',
                    'Env_cle': 'Cleanups',
                };

                if (selected_cat.slice(0, 3) === 'Oth') { // user defined other category and other subcategory
                    project_category = old_projects[i].project.oth_category + ' - ' + old_projects[i].project.oth_sub_cat;
                }
                else { // pre-defined category
                    if (selected_cat.slice(4, 7) === 'oth') { // other subcategory
                        project_category = category[selected_cat.slice(0, 3)] + ' - '+ old_projects[i].project.oth_sub_cat;
                    }
                    else { // pre-defined subcategory
                        project_category = category[selected_cat.slice(0, 3)] + ' - ' + sub_cat[selected_cat];
                    }
                }
                
                $('#past_table:hidden').append(
                    $('<li>').append(
                        $('<a>').attr('href','/projects/detail/'+old_projects[l].project.id +'/').append(
                            $('<div>').attr('class','box_list row').append(
                                $('<div>').attr('class','col-2 logo_list').append(
                                    $('<object>').attr({'data':logo,width:'100%',height:'100%','type':"image/svg+xml"})
                                )
                            ).append(
                                $('<div>').attr('class','col-10').append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-7').append(
                                            $('<h5>').text(old_projects[l].project.name)
                                        )
                                    ).append(
                                        $('<div>').attr('class','col-5').css({'text-align':'right','font-style':'italic'}).append(
                                            $('<span>').text(format_time(old_projects[l].project.start))
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-12').append(
                                            $('<span>').text(project_category)
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-12').append(
                                            $('<span>').text(format_community(old_projects[l].project.project_type))
                                        )
                                    )
                                ).append(
                                    $('<div>').attr('class','row').append(
                                        $('<div>').attr('class','col-8').append(
                                            $('<span>').text(going(old_projects[l].project.volunteers, old_projects[l].project.attendees ))
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