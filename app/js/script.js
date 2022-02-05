$(function(){
    let headerBtn = $('.menu-btn'),
         xBtn = $('.x-btn'),
         menu = $('.main-menu');


    headerBtn.on('click', function(){
        menu.addClass('main-menu_active')
    })
    
    xBtn.on('click', function(){
        menu.removeClass('main-menu_active')
    })
})