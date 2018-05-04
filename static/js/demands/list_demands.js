$(document).ready(function(){
    function format_time(time){
        var start = new Date(time),// convert string to date
        locale = "en-us",//english
        month = start.toLocaleString(locale, { month: "short" });//month name
        var date = month + ' ' + start.getDate();
        return date
    }
   
    var userId = $('#userId').attr('value');
    var link = '/rest_api/profiles/'+userId+'/'
    $.getJSON( link, function( data ){ // load profile data
        $.getJSON(data.profile_hub[0].hub, function(result){ // load projects in the hub (for the moment user can have only one hub)
            var demands= result.demands;
            demands.sort(function(a,b) { 
                return new Date(b.demand.created)- new Date(a.demand.created)
            });
            for (i in demands){
                var $is_CAPS='';
                var $is_Barter='';
                var $is_Free='';
                var $price =$('<div>');
                if(result.demands[i].demand.is_CAPS){
                    $price.append($('<span>').text(demands[i].demand.price_CAPS + ' CAPS')); 
                }
                if(demands[i].demand.is_BARTER && demands[i].demand.is_CAPS){
                    $price.append($('<br>')).append($('<span>').text('Barter'));
                }
                else if(demands[i].demand.is_BARTER && !demands[i].demand.is_CAPS){
                    $price.append($('<span>').text('Barter')); 
                }
                if(demands[i].demand.is_GIVE &&(demands[i].demand.is_CAPS || demands[i].demand.is_BARTER)){
                    $price.append($('<br>')).append($('<span>').text('Give'));
                }
                else if(demands[i].demand.is_GIVE && !demands[i].demand.is_CAPS && !demands[i].demand.is_BARTER){
                    $price.append($('<span>').text('Give'));
                }


                $('#demands_table').append(
                    $('<li>').append(
                        $('<a>').attr('href','/detail_demand/'+demands[i].demand.id +'/').append(
                            $('<div>').attr({'class':'box_list row'}).append(
                                $('<div>').attr({'class':'col-3'}).append(
                                    $('<img>').attr({'src':thumbnail, width:'100%'})
                                )
                            ).append(
                                $('<div>').attr({'class':'col-5'}).append(
                                    $('<div>').attr({'class':'row'}).append(
                                        $('<span>').text(demands[i].demand.title)
                                    )
                                ).append(
                                    $('<div>').attr({'class':'row'}).append(
                                        $('<span>').text('0,2km')
                                    )
                                ).append(
                                    $('<div>').attr({'class':'row'}).append(
                                        $('<span>').text(format_time(demands[i].demand.created))
                                    )
                                )
                            ).append(
                                $('<div>').attr({'class':'col-4'}).css({'height':'100%','margin-top':'auto','margin-bottom':'auto', 'text-align':'center'}).append($price)
                            )

                        )
                        
                    )

                );
            }
        });
    });
})