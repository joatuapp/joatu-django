$(document).ready(function () {
    function getQueryVariable() {
        var query = window.location.href;
        var vars = query.split("/");
        var project_id = vars[vars.length - 2];
        return project_id;
    }

////////////////////////////////////////////////////////////////////////Function to Load the ROLES/////////////////////////////////
    function load_roles(data) {
        data.volunteers.sort(function (a, b) {
            return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
        })
        $('#roles').empty();
        for (var i in data.volunteers) {
            var button_registration = $('<a>').attr({
                href: '',
                class: 'volunteer_unregistered',
                'data-ref-role': data.volunteers[i].id
            }).append(
                $('<img>').attr({src: not_registered_button})
            );
            for (var j in data.volunteers[i].volunteers_registration) {
                profile_url = data.volunteers[i].volunteers_registration[j].profile;
                var split_url = profile_url.split("/");
                var profile_id = split_url[split_url.length - 2];
                loadVolunteers(profile_url, i)
                var button_registration;
                if (profile_id === user_id) {
                    button_registration = $('<a>').attr({
                        href: data.volunteers[i].volunteers_registration[j].url,
                        class: 'volunteer_registered',
                        'data-ref-role': data.volunteers[i].id
                    }).append(
                        $('<img>').attr({src: registered_button}));
                    break;
                }
            }
            $('#roles').append(
                $('<li>').css('margin-bottom', '5px').append(
                    $('<div>').attr('class', 'row').css({display: 'flex', 'align-items': 'center'}).append(
                        $('<div>').attr('class', 'col-8').css({
                            'border': '1px solid black',
                            'border-radius': '10px'
                        }).append(
                            $('<span>').css('display', 'block').text(data.volunteers[i].role)
                        ).append(
                            $('<span>').css('display', 'block').text(data.volunteers[i].description)
                        ).append(
                            $('<span>').attr('id', 'seats_' + data.volunteers[i].id).css('display', 'block').text('Places Available: ' + data.volunteers[i].registered + '/' + data.volunteers[i].seats)
                        )
                    ).append(
                        $('<div>').attr({
                            'class': 'col-4',
                            'id': 'check_' + data.volunteers[i].id
                        }).append(button_registration)
                    ).append(
                        $('<ul>').attr({'id': 'role-' + i, 'class': 'volunteer-list'})
                    )
                )
            );
        }
    }

    function loadVolunteers(url, roleNumber) {
        $.getJSON(url, function (volunteer) {
            var split_url = url.split("/");
            var profile_id = split_url[split_url.length - 2];
            $(`#role-${roleNumber}`).append(
                `<li class="volunteer" id=role-${roleNumber}-${profile_id}>${volunteer.display_name}</li>`
            )
        })
    }

    function updateVolunteers(roleNumber, volunteerId, method) {
        var volunteerElement = $(`#role-${roleNumber}-${volunteerId}`)
        switch (method) {
            case 'add':
                if (volunteerElement.length) {
                    return
                }
                var url = `/rest_api/profiles/${volunteerId}/`
                $.getJSON(url, function (volunteer) {
                    $(`#role-${roleNumber}`).append(
                        `<li class="volunteer" id=role-${roleNumber}-${volunteerId}>${volunteer.display_name}</li>`
                    )
                })
                break
            case 'remove':
                if (volunteerElement.length) {
                    volunteerElement.remove()
                }
                break
            default:
                return
        }
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////Function to update the ROLES/////////////////////////////////
    function update_roles(data) {
        data.volunteers.sort(function (a, b) {
            return (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0);
        })
        for (var i in data.volunteers) {
            var button_registration = $('<a>').attr({
                href: '',
                class: 'volunteer_unregistered',
                'data-ref-role': data.volunteers[i].id
            }).append(
                $('<img>').attr({src: not_registered_button})
            );
            var volunteerRegistered = false
            for (var j in data.volunteers[i].volunteers_registration) {
                var profile_url = data.volunteers[i].volunteers_registration[j].profile;
                var split_url = profile_url.split("/");
                var profile_id = split_url[split_url.length - 2];
                if (profile_id === user_id) {
                    volunteerRegistered = true
                    button_registration = $('<a>').attr({
                        href: data.volunteers[i].volunteers_registration[j].url,
                        class: 'volunteer_registered',
                        'data-ref-role': data.volunteers[i].id
                    }).append(
                        $('<img>').attr({src: registered_button})
                    );
                    break;
                }
            }
            if (volunteerRegistered === true) {
                updateVolunteers(i, user_id, 'add')
            } else {
                updateVolunteers(i, user_id, 'remove')
            }
            $('#seats_' + data.volunteers[i].id).text('Places Available: ' + data.volunteers[i].registered + '/' + data.volunteers[i].seats);
            $('#check_' + data.volunteers[i].id).empty().append(button_registration);
        }
    }

////////////////////////////////////////////////////////////////////////Function to Load the answers of  DISCUSSION/////////////////////////////////
    function load_answers(data, ans_id) {

        //$('#'+ans_id).empty();
        $.getJSON(data, function (result) {
            for (i in result.answer_discussion_project) {
                if ($('li#li_answer_' + result.answer_discussion_project[i].id).length === 0) {
                    $('#' + ans_id).append(
                        $('<li>').css('margin-top', '5px').attr('id', 'li_answer_' + result.answer_discussion_project[i].id).append(
                            $('<div>').append(
                                $('<div>').attr('class', 'row').css({
                                    'display': 'flex',
                                    'align-items': 'center',
                                    'margin-top': '5px;'
                                }).append(
                                    $('<div>').attr('class', 'col-2 offset-1').append(
                                        $('<img>').attr('src', profile_answer)
                                    )
                                ).append(
                                    $('<div>').attr('class', 'col-8').css({
                                        'border': '1px solid grey',
                                        'border-radius': '5px',
                                        'background-color': 'rgb(215, 223, 223)'
                                    }).append(
                                        $('<div>').append(
                                            $('<p>').append(
                                                $('<a>').css({
                                                    'font-weight': 'bold',
                                                    'margin-right': '3px'
                                                }).attr('id', 'answer_' + result.answer_discussion_project[i].id).text('user')
                                            ).append(
                                                $('<span>').text(result.answer_discussion_project[i].text)
                                            )
                                        )
                                    ).append(
                                        $('<a>').attr({
                                            href: '',
                                            'data-discussion-id': 'disc_' + result.id,
                                            class: 'reply'
                                        }).css({'float': 'right', 'margin-top': '-5px'}).text('reply')
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
    function load_discussions(data) {
        for (i in data.discussion_project) {
            $.getJSON(data.discussion_project[i], function (result) {
                if ($('li#li_discussion_' + result.id).length === 0) {
                    console.log(result.id);
                    $('#discussion').prepend(
                        $('<li>').css('margin-top', '5px').attr('id', 'li_discussion_' + result.id).append(
                            $('<div>').append(
                                $('<div>').attr('class', 'row').css({
                                    'display': 'flex',
                                    'align-items': 'center',
                                    'margin-top': '5px;'
                                }).append(
                                    $('<div>').attr('class', 'col-2').append(
                                        $('<img>').attr('src', profile_start_discussion)
                                    )
                                ).append(
                                    $('<div>').attr('class', 'col-9').css({
                                        'border': '1px solid grey',
                                        'border-radius': '5px',
                                        'background-color': 'rgb(215, 223, 223)'
                                    }).append(
                                        $('<div>').append(
                                            $('<h6>').text(result.title)
                                        )
                                    ).append(
                                        $('<div>').append(
                                            $('<p>').append(
                                                $('<a>').css({
                                                    'font-weight': 'bold',
                                                    'margin-right': '3px'
                                                }).attr('id', 'discussion_' + result.id).text('user:')
                                            ).append(
                                                $('<span>').text(result.text)
                                            )
                                        )
                                    ).append(
                                        $('<a>').attr({
                                            href: '',
                                            'data-discussion-id': 'disc_' + result.id,
                                            class: 'reply'
                                        }).css({'float': 'right', 'margin-top': '-5px'}).text('reply')
                                    )
                                )
                            ).append(
                                $('<ul>').attr({'id': 'ans_' + result.id,}).css({
                                    'list-style-type': 'none',
                                    margin: 0,
                                    padding: 0
                                })
                            ).append(
                                $('<div>').attr('class', 'row').css({
                                    'display': 'flex',
                                    'align-items': 'center',
                                    'margin-top': '5px;'
                                }).append(
                                    $('<div>').attr('class', 'col-8 offset-3').append(
                                        $('<form>').attr({'id': 'disc_' + result.id}).css('display', 'none').append(
                                            $('<div>').attr('class', 'form-group').css({'margin-top': '5px'}).append(
                                                $('<div>').attr('class', 'row').append(
                                                    $('<div>').attr('class', 'col-8').append(
                                                        $('<input>').attr({
                                                            type: 'hidden',
                                                            name: 'discussion_ref',
                                                            value: result.id
                                                        })
                                                    )
                                                ).append(
                                                    $('<textarea>').attr({
                                                        name: 'text',
                                                        'cols': 100,
                                                        'rows': 2,
                                                        class: 'form-control',
                                                        class: 'reply_discussion',
                                                        'data-disc-id': result.id
                                                    })
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
                    load_answers(result.url, ans_id);
                }
            })
        }
    }


//////////////////////////////////////////////////////Function LOAD ATTENDEES INFO/////////////////////////////////////////////////////////////////////////////
    function load_attendees(data) {
        var user_registered = false;
        for (i in data.attendees.attendees_registration) {

            profile_url = data.attendees.attendees_registration[i].profile;
            var split_url = profile_url.split("/");
            var profile_id = split_url[split_url.length - 2];

            var button_registration;
            if (profile_id === user_id) {
                $('#unregistration_attendees').attr({
                    'data-ref-role': data.attendees.id,
                    'href': data.attendees.attendees_registration[i].url
                }).show();
                user_registered = true;
                break;
            }
        }
        $('#number_attendees').text('Registered: ' + data.attendees.registered + '/' + data.attendees.seats);

        if (user_registered === false) {
            if (data.attendees.registered < data.attendees.seats) {
                $('#registration_attendees').attr({'data-ref-role': data.attendees.id,}).show();
            }
        }
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var link = '../../rest_api/projects/' + getQueryVariable() + '/'
    var user_id = $('#userId').val();
    $.getJSON(link, function (data) {
        if (data.user_Is_Owner === true) { //if user is organizer show the edit and delete button
            $('#is_organizer').append(
                $('<a>').attr({href: '', class: "btn btn-primary"}).css({
                    "margin-right": "5px",
                    "margin-left": "15px"
                }).text('Edit')
            ).append($('<a>').attr({
                href: data.url,
                class: "btn btn-danger",
                id: 'delete_project'
            }).css("margin-left", "5px").text('Delete'));
        }
        $('#id_discussion').attr('value', data.id);///give the id of the project for discussion
        $('#project_name').text(data.name); //show project name
        // 2018-04-17T14:00:00-04:00
        var start = new Date(data.start),// convert string to date
            locale = "en-us",//english
            month = start.toLocaleString(locale, {month: "long"});//month name
        var date = month + ' ' + start.getDate();
        $('#date_start').text(date);//show date start

        minutes = start.getMinutes(); // get minutes
        if (minutes === 0) {    //add another 0 if minutes = 0
            minutes = '00';
        }
        var start_time = start.getHours() + 'H' + minutes; //format hours
        $('#time_start').text(start_time);//show hours

        var address = data.number + ' ' + data.street + ', ' + data.postal_code; // format address
        $('#project_address').text(address); //show project address
        $.getJSON(data.organizer, function (data_organizer) { //get info about organizer
            $('#project_organizer').text(data_organizer.display_name); //show name of organizer
        });
        $('#project_description').text(data.description);//show


        if (data.project_type != "CO") { ///show the Roles data
            $('#show_roles').show(); //remove display none to show the div roles
            load_roles(data);
        }
        if (data.project_type != "CP") { ///show the attendees data
            load_attendees(data);
            $('#show_attendees').show(); //remove display none to show the div attendees

        }
        load_discussions(data); /// load the discussions

    });
/////////////////////////////////////////////REGISTER AND UNREGISTER FOR ATTENDEE/////////////////////////////////////////////////

    $('#show_attendees').on("click", "#registration_attendees", function (e) {
        var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
        var url = '/rest_api/projects_attendees_registration/';
        var ref = {'project_attendees_ref': $(this).data("ref-role")};
        $.ajax({
            url: url,
            method: "POST",
            data: ref,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                $('#registration_attendees').hide();
                $.getJSON(link, function (data) {
                    load_attendees(data);
                })
            }
        });
        e.preventDefault();

    });
    $('#show_attendees').on("click", "#unregistration_attendees", function (e) {
        var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
        var url = this.href;
        var ref = {'project_volunteers_ref': $(this).data("ref-role")};
        $.ajax({
            url: url,
            method: "DELETE",
            data: ref,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                $('#unregistration_attendees').hide();
                $.getJSON(link, function (data) {
                    load_attendees(data);
                })
            }
        });
        e.preventDefault();

    });

    /////////////////////////////////////////////REGISTER AND UNREGISTER FOR ROLE/////////////////////////////////////////////////
    $('#roles').on("click", ".volunteer_unregistered", function (e) {
        var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
        var url = '/rest_api/projects_volunteers_registration/';
        var ref = {'project_volunteers_ref': $(this).data("ref-role")};
        console.log(ref)
        $.ajax({
            url: url,
            method: "POST",
            data: ref,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                $.getJSON(link, function (data) {
                    update_roles(data);
                })
            }
        });
        e.preventDefault();
    });

    $('#roles').on("click", ".volunteer_registered", function (e) {
        var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
        var url = this.href;
        var ref = {'project_volunteers_ref': $(this).data("ref-role")};
        $.ajax({
            url: url,
            method: "DELETE",
            data: ref,
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                $.getJSON(link, function (data) {
                    update_roles(data);
                })
            }
        });
        e.preventDefault();
    });
///////////////////////////////////////////////////////////START DISCUSSION//////////////////////////////////////////////////////////////

    $('#text_start_discussion').keypress(function (e) {
        if (e.which == 13) {
            var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
            var url = '/rest_api/projects_discussion/';
            var data = $('#discussion_form').serialize();
            $.ajax({
                url: url,
                method: "POST",
                data: data,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-CSRFToken", csrf);
                },
                success: function (result) {
                    $.getJSON(link, function (data) {
                        load_discussions(data);
                    })
                }
            });
            e.preventDefault();
        }
    });

///////////////////////////////////////////////////////////////////Click REPLY///////////////////////////////////////////////////////////

    $('#discussion').on('click', '.reply', function (e) {
        var form_to_show = $(this).data("discussion-id");
        $('#' + form_to_show).toggle();
        if ($('#' + form_to_show).is(':visible')) {
            $('html, body').animate({
                scrollTop: $('#' + form_to_show).offset().top - 300
            }, 1000)

        }
        e.preventDefault();

    })
///////////////////////////////////////////////////////////////////Answer discussion///////////////////////////////////////////////////////////
    $('#discussion').on('keypress', '.reply_discussion', function (e) {
        if (e.which == 13) {
            var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
            var url = '/rest_api/projects_answer_discussion/';
            var discussion_id = $(this).data('disc-id')
            var data = $('#disc_' + discussion_id).serialize();
            var textarea = $(this);
            $.ajax({
                url: url,
                method: "POST",
                data: data,
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-CSRFToken", csrf);
                },
                success: function (result) {
                    load_answers(result.discussion, 'ans_' + discussion_id);
                    textarea.val('');
                }
            });
            e.preventDefault();
        }
    });
///////////////////////////////////////////////////////////////////DELETE PROJECT///////////////////////////////////////////////////////////

    $('#is_organizer').on("click", "#delete_project", function (e) {
        var url = this.href;
        var csrf = $('.container').find('input[name=csrfmiddlewaretoken]').val();
        $.ajax({
            url: url,
            method: "DELETE",
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-CSRFToken", csrf);
            },
            success: function (result) {
                window.location.href = "/list_projects/";
            }
        });
        e.preventDefault();
    });


})
