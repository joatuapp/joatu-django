$(document).ready(function(){
    $('#submit_offer').click(function(e){
        $.post('/api/offers/', $('#form_offer').serialize())
        .done(function(data){
            window.location.href = "/list_offers/";
        });
        e.preventDefault();

    });
})
