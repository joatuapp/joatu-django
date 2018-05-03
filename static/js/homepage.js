$(document).ready(function(){

    var userId = $('#userId').attr('value');
    var link = '/rest_api/profiles/'+userId+'/';
    $.getJSON(link, function(data){ // load profile data
        $.getJSON(data.profile_hub[0].hub, function(result){
            var newsfeed=[];
            var demands= result.demands;
            var projects= result.projects;
            var offers= result.offers;
            for(i in projects){
                newsfeed.push({
                    'type':'project',
                    'title':projects[i].project.name,
                    'link':'/detail_project/'+projects[i].project.id+'/', 
                    'created':projects[i].project.created
                })
            }
            for(i in demands){
                newsfeed.push({
                    'type':'request', 
                    'title':demands[i].demand.title,
                    'link':'/detail_demand/'+demands[i].demand.id+'/', 
                    'created':demands[i].demand.created})
            }
            for(i in offers){
                newsfeed.push({
                    'type':'offer', 
                    'title':offers[i].offer.title,
                    'link':'/detail_offer/'+offers[i].offer.id+'/', 
                    'created':offers[i].offer.created})
            }
            newsfeed.sort(function(a,b) { 
                return new Date(b.created)- new Date(a.created)
            });

            for(i in newsfeed){
                $('#newsfeed').append(
                    $('<li>').css({'margin':'5px'}).append(
                        $('<div>').attr('class','row').append(
                            $('<div>').attr('class','col-6 offset-1').append(
                                $('<span>').text(newsfeed[i].title)
                            )
                        ).append(
                            $('<div>').attr('class','col-3 offset-2').append(
                                $('<span>').text(newsfeed[i].type)
                            )
                        )
                    ).append(
                        $('<div>').attr('class','row').css({'margin-top':'15px'}).append(
                            $('<div>').attr('class','col-9 offset-3').css('text-align','right').append(
                                $('<a>').attr({'href':newsfeed[i].link,'class':'flat_button_preview'}).text('More details...')
                            )
                        )
                    )
                ).append(
                    $('<hr>')
                );
            }
            console.log(newsfeed);

        });
    });

})
    