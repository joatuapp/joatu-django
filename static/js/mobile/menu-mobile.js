$(document).ready(function(){
    var main = document.getElementById('swipediv');
    var mySidenav = document.getElementById('mySidenav');

/* Remove the default userSelect css property in the Hammer plugin before creating any instance, that sets the property to none.*/
    delete Hammer.defaults.cssProps.userSelect;
    var main_swipe = new Hammer(main);
    var menu_swipe = new Hammer(mySidenav)
    var menuIsOpen =false;
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    $('#open_navbar').click(function(){
        if(menuIsOpen===false){
            $('#mySidenav').css('width','300px');
            menuIsOpen=true;
        }

    });
    main_swipe.on('swiperight',function(){
        if(menuIsOpen===false){
            $('#mySidenav').css('width','300px');
            menuIsOpen=true;
        }
    });
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    $('#close_navbar').click(function(){
        if(menuIsOpen===true){
            $('#mySidenav').css('width','0');
            menuIsOpen=false;  
        }
    });
    menu_swipe.on('swipeleft',function(){
        if(menuIsOpen===true){
            $('#mySidenav').css('width','0');
            menuIsOpen=false;  
        }
    });

});
