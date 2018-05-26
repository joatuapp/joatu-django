$(document).ready(function () {

    function feedNews(data) {
        for (var i = 0; i < data.length; i++) {
            $('#newsfeed').append(
                $('<li>').css({'margin': '5px'}).append(
                    $('<div>').attr('class', 'row').append(
                        $('<div>').attr('class', 'col-6 offset-1').append(
                            $('<span>').text(data[i].title)
                        )
                    ).append(
                        $('<div>').attr('class', 'col-3 offset-2').append(
                            $('<span>').text(data[i].type)
                        )
                    )
                ).append(
                    $('<div>').attr('class', 'row').css({'margin-top': '15px'}).append(
                        $('<div>').attr('class', 'col-9 offset-3').css('text-align', 'right').append(
                            $('<a>').attr({
                                'href': data[i].link,
                                'class': 'flat_button_preview'
                            }).text('More details...')
                        )
                    )
                )
            ).append(
                $('<hr>')
            );
        }
    }

    function dataFetch(urls, index, retData, type, callback) {
        if (index == urls.length) {
            retData.sort(function (a, b) {
                return new Date(b.created) - new Date(a.created)
            })
            callback(retData)
            return
        } else {
            $.getJSON(urls[index], function (data) {
                retData.push(({
                    'type': type,
                    'title': data.name,
                    'link': `/${type}s/detail/${data.id}/`,
                    'created': data.created
                }))
                dataFetch(urls, index + 1, retData, type, callback)
            })
        }
    }

  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://joatu.auth0.com/oauth/token",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "data": "{\"client_id\":\"ezqEUwj6hRuB7VVVcgXUpohb1irPocHe\",\"client_secret\":\"MypLrMLOyMGUtB7dQLr1ek4j3G51Tac3MO88guofPJDM9bUBLzYGjgGwX6IKSi_W\",\"audience\":\"https://joatu.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

    var userId = $('#userId').attr('value');
    var link = '/api/profiles/' + userId + '/';
    if(userId){
        $.getJSON(link, function (data) { // load profile data
        var projectLinks = data.profile_projects
        var projectsData = []
        dataFetch(projectLinks, 0, projectsData, 'project', feedNews)


        var demandLinks = data.profile_demands
        var demandsData = []
        dataFetch(demandLinks, 0, demandsData, 'demand', feedNews)

        var offerLinks = data.profile_offers
        var offersData = []
        dataFetch(offerLinks, 0, offersData, 'offer', feedNews)
    });
    }
    
})
    
