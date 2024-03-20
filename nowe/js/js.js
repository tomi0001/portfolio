$(document).ready(function() {
   
    $(".styles-green").click(function(){

        changeThemes("css_color_green");
    });
    $(".styles-purple").click(function(){

        changeThemes("css_color_purple");
    });
    $(".styles-yellow").click(function(){

        changeThemes("css_color_yellow");
    });

    $("#href1").click(function(){
       loadPage1() ;
    });
    $("#href2").click(function(){
        loadPage2() ;
     });
    $("#href3").click(function(){
        loadPage3() ;
     });
    $("#href4").click(function(){
        loadPage4() ;
     });
     $("#href5").click(function(){
        loadPage5() ;
     });

});



function changeThemes(color) {
    
    var link = $("link[rel=stylesheet]")[1].href;
    
    var css = link.substring(link.lastIndexOf('/') + 1, link.length)
    $('link[href="' +  "./css/" + css + '"]').attr('href',  "./css/" +   color + ".css" );
    return false;

}

function loadPage1() {
    
    $("div.page-div").html($("#page1").html());
    
}
function loadPage2() {
    
    $("div.page-div").html($("#page2").html());
    
}
function loadPage3() {
    
    $("div.page-div").html($("#page3").html());
    
}
function loadPage4() {
    
    $("div.page-div").html($("#page4").html());
    
}
function loadPage5() {
    
    $("div.page-div").html($("#page5").html());
    
}