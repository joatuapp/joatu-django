$(document).ready(function(){
    function getQueryVariable(){
        var query=window.location.href ;
        var vars = query.split("/");
        var project_id= vars[vars.length-2];
        return project_id;
    }

////////////////////////////////////////////////////////////////////////Function to Load the answers of  DISCUSSION/////////////////////////////////
function load_answers(data, ans_id){

    //$('#'+ans_id).empty();
    $.getJSON(data, function(result){
        for(i in result.answer_discussion_project){
            if($('li#li_answer_'+result.answer_discussion_project[i].id).length===0){
                $('#'+ans_id).append(
                    $('<li>').css('margin-top','5px').attr('id','li_answer_'+result.answer_discussion_project[i].id).append(
                        $('<div>').append(
                            $('<div>').attr('class','row').css({'display':'flex', 'align-items':'center','margin-top':'5px;'}).append(
                                $('<div>').attr('class','col-2 offset-1').append(
                                    $('<img>').attr('src',profile_answer)
                                )
                            ).append(
                                $('<div>').attr('class','col-8').css({'border':'1px solid grey', 'border-radius':'5px', 'background-color':'rgb(215, 223, 223)'}).append(
                                    $('<div>').append(
                                        $('<p>').append(
                                            $('<a>').css({'font-weight':'bold', 'margin-right':'3px'}).attr('id','answer_'+result.answer_discussion_project[i].id).text('user')
                                        ).append(
                                            $('<span>').text(result.answer_discussion_project[i].text)
                                        )
                                    )
                                ).append(
                                    $('<a>').attr({href:'','data-discussion-id':'disc_' +result.id, class:'reply'}).css({'float':'right','margin-top':'-5px'}).text('reply')
                                )
                            )

                        )
                    )
                    
                );

            }
            //$.getJSON(result.answer_discussion_project[i].profile,function(data_profile){
            //    $('#answer_'+result.answer_discussion_project[i].id).text(data_profile.display_name +':');
            //})

        }
    });
}



////////////////////////////////////////////////////////////////////////Function to Load the DISCUSSION/////////////////////////////////
    function load_discussions(data){
        for (i in data.discussion_project){
            $.getJSON(data.discussion_project[i], function(result){
                if($('li#li_discussion_'+result.id).length===0){
                    console.log(result.id);
                    $('#discussion').prepend(
                        $('<li>').css('margin-top','5px').attr('id','li_discussion_'+result.id).append(
                            $('<div>').append(
                                $('<div>').attr('class','row').css({'display':'flex', 'align-items':'center','margin-top':'5px;'}).append(
                                    $('<div>').attr('class','col-2').append(
                                        $('<img>').attr('src',profile_start_discussion)
                                    )
                                ).append(
                                    $('<div>').attr('class','col-9').css({'border':'1px solid grey', 'border-radius':'5px', 'background-color':'rgb(215, 223, 223)'}).append(
                                        $('<div>').append(
                                            $('<h6>').text(result.title)
                                        )
                                    ).append(
                                        $('<div>').append(
                                            $('<p>').append(
                                                $('<a>').css({'font-weight':'bold', 'margin-right':'3px'}).attr('id','discussion_'+result.id).text('user:')
                                            ).append(
                                                $('<span>').text(result.text)
                                            )
                                        )
                                    ).append(
                                        $('<a>').attr({href:'','data-discussion-id':'disc_' + result.id, class:'reply'}).css({'float':'right','margin-top':'-5px'}).text('reply')
                                    )
                                )
                            ).append(
                                $('<ul>').attr({'id':'ans_' + result.id,}).css({'list-style-type': 'none', margin:0, padding:0})                        
                            ).append(
                                $('<div>').attr('class','row').css({'display':'flex', 'align-items':'center','margin-top':'5px;'}).append(
                                    $('<div>').attr('class','col-8 offset-3').append(
                                        $('<form>').attr({'id':'disc_' + result.id }).css('display','none').append(
                                            $('<div>').attr('class','form-group').css({'margin-top':'5px'}).append(
                                                $('<div>').attr('class','row').append(
                                                    $('<div>').attr('class','col-8').append(
                                                        $('<input>').attr({type:'hidden', name:'discussion_ref', value:result.id})
                                                    )
                                                ).append(
                                                    $('<textarea>').attr({name:'text','cols':100, 'rows':2, class:'form-control', class:'reply_discussion', 'data-disc-id':result.id})
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )                          
                    );

                   // $.getJSON(result.profile,function(data_profile){
                   //     $('#discussion_'+result.id).text(data_profile.display_name +':');
                  //  })

                    var ans_id = 'ans_' + result.id;
                    load_answers(result.url,ans_id);
                }
            })
        }
    }



    var link = '../../rest_api/offers/' + getQueryVariable() + '/'
    var user_id = $('#userId').val();
    $.getJSON( link, function( data ){
        if(data.user_Is_Owner === true){ //if user is organizer show the edit and delete button
            $('#is_Seller').append(
                $('<a>').attr({href:'',class:"btn btn-primary"}).css({"margin-right":"5px","margin-left":"15px"}).text('Edit')
            ).append($('<a>').attr({href:data.url,class:"btn btn-danger",id:'delete_offer'}).css("margin-left","5px").text('Delete'));
        }

        $('#list_offer_detail').append(
            $('<li>').text('title: '+ data.title)
        ).append(
            $('<li>').text('description: '+ data.description)
        ).append(
            $('<li>').text('postal_code: '+ data.postal_code)
        ).append(
            $('<li>').text('is_CAPS: '+ data.is_CAPS)
        ).append(
            $('<li>').text('price_CAPS: '+ data.price_CAPS)
        ).append(
            $('<li>').text('is_BARTER: '+ data.is_BARTER)
        ).append(
            $('<li>').text('price_barter: '+ data.price_barter)
        ).append(
            $('<li>').text('is_GIVE: '+ data.is_GIVE)
        ).append(
            $('<li>').text('created: '+ data.created)
        ).append(
            $('<li>').text('updated: '+ data.updated)
        ).append(
            $('<li>').text('seller: '+ data.seller)
        )
        
    });

///////////////////////////////////////////////////////////////////DELETE PROJECT///////////////////////////////////////////////////////////
    
$('#is_Seller').on("click", "#delete_offer", function(e){
        var url = this.href;
        var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();    

        $.ajax({
            url: url,
            method: "DELETE",
            beforeSend: function(xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function(result){
                window.location.href = "/list_offers/";
            }
        });
        e.preventDefault();
    });


})
