$(document).ready(function(){
    //body
    $("body").css({"text-align":"center","font-family":"'ubuntu', sans-serif","margin":"0","padding":"0","font-size":"19px","line-height":"1.5"})
    //img
    $("img").css({"display":"block","width":"100%","height":"auto"})
    $("h1,h2,h3,p").css({"padding":"1em 0","margin":"0"})
    //showcase
    $('#showcase').css({"min-height":"100%","color":"#fff","text-align":"center"});
    $('#showcase .bg-image').css({"position": "absolute","background": "#111 url('image1.png')",
    "background-repeat": "no-repeat","background-size": "cover","width":"100%","height": "100%","z-index": "-1","opacity": "0.70"})
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
    $("input").css({"height": "45px","width":"80%","margin-bottom": "20px","border-radius":"6px","border":"2px solid brown",
    "font-size":"15px","padding":"12px"})
    $('i').css({"color":"#fff","margin":"20px"})
    $('h4').css({'font-size':'25px'})
    $('.box').first().css('background-color','blueviolet');
    $('.box').last().css('background-color','#999');
    //footer
    $('#main-footer').css({"background-color":"black","padding":"2em","color":"#fff","text-align":"center"})
    $('#main-footer a').css({"color":"blueviolet","text-decoration":"none"})
    var vids = $("video"); 
    $.each(vids, function(){
           this.controls = false; 
           this.autoplay= true;
    }); 
    //Loop though all Video tags and set Controls as false
    $("video").mouseenter(function() {
      if (this.paused) {
        this.play();
      } else {
        this.play();
      }
    }); 
    $("video").css({"width":"100%"})
})
