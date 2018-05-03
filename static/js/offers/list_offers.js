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
            var offers = result.offers;
            offers.sort(function(a,b) { 
                return new Date(b.offer.created)- new Date(a.offer.created)
            });
            for (i in offers){
                var $is_CAPS='';
                var $is_Barter='';
                var $is_Free='';
                var $price =$('<div>');
                if(result.offers[i].offer.is_CAPS){
                    $price.append($('<span>').text(offers[i].offer.price_CAPS + ' CAPS')); 
                }
                if(offers[i].offer.is_BARTER && offers[i].offer.is_CAPS){
                    $price.append($('<br>')).append($('<span>').text('Barter'));
                }
                else if(offers[i].offer.is_BARTER && !offers[i].offer.is_CAPS){
                    $price.append($('<span>').text('Barter')); 
                }
                if(offers[i].offer.is_GIVE &&(offers[i].offer.is_CAPS || offers[i].offer.is_BARTER)){
                    $price.append($('<br>')).append($('<span>').text('Give'));
                }
                else if(offers[i].offer.is_GIVE && !offers[i].offer.is_CAPS && !offers[i].offer.is_BARTER){
                    $price.append($('<span>').text('Give'));
                }


                $('#offers_table').append(
                    $('<li>').append(
                        $('<a>').attr('href','/detail_offer/'+offers[i].offer.id +'/').append(
                            $('<div>').attr({'class':'box_list row'}).append(
                                $('<div>').attr({'class':'col-3'}).append(
                                    $('<img>').attr({'src':thumbnail, width:'100%'})
                                )
                            ).append(
                                $('<div>').attr({'class':'col-5'}).append(
                                    $('<div>').attr({'class':'row'}).append(
                                        $('<span>').text(offers[i].offer.title)
                                    )
                                ).append(
                                    $('<div>').attr({'class':'row'}).append(
                                        $('<span>').text('0,2km')
                                    )
                                ).append(
                                    $('<div>').attr({'class':'row'}).append(
                                        $('<span>').text(format_time(offers[i].offer.created))
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