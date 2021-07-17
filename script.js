$(document).ready(function(){
    //body
    $("body").css({"text-align":"center","font-family":"'ubuntu', sans-serif","margin":"0","padding":"0","font-size":"19px","line-height":"1.5"})
    //img
    $("img").css({"display":"block","width":"100%","height":"auto"})
    $("h1,h2,h3,p").css({"padding":"1em 0","margin":"0"})
    //showcase
    $('#showcase').css({"min-height":"500px","color":"#fff","text-align":"center"});
    $('#showcase .bg-image').css({"position": "absolute","background": "#111 url('image01.png')",
    "background-repeat": "no-repeat","background-size": "cover","width":"100%","height": "450px","z-index": "-1","opacity": "0.9"})
    $('#showcase h1').css({"padding-top": "100px","padding-bottom": "0"})
    //section-a
    $('#section-a').css({"padding-bottom":"2em","color":"#333"})
    //section-b
    $('#section-b').css({'padding':'2em 1em 1em','background-color':'#333'});
    $('#section-b ul').css({"list-style":"none","margin":"0","padding":"0"});
    $('#section-b li').css({"margin-bottom" :"1em","background-color":"#fff","color":"#333"})
    $('.card-content').css("padding","1.5em")
    
    //sectio-c
    $('#section-c').css({"padding":"2em","color":"#333"});
    //section-d
    $('#section-d .box').css({"color":"white","padding":"2em"})

    $('.box').first().css('background-color','blueviolet');
    $('.box').last().css('background-color','brown');
    //footer
    $('#main-footer').css({"background-color":"black","padding":"2em","color":"#fff","text-align":"center"})
    $('#main-footer a').css({"color":"blueviolet","text-decoration":"none"})
    
});
