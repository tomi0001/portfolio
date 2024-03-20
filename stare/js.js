window.addEventListener( "load", e =>
  {   document.documentElement.style.height = document.documentElement.clientHeight +"px";
  }
);
$( window ).resize(function() {
    document.documentElement.style.height = document.documentElement.clientHeight +"px";
});
$(document).ready(function() {
    //wywołanie funkcji po załadowaniu całej strony
//    $( "#FirstMain" ).css({left: '7%',top: '25%',opacity: '0'});
//    $( "#secondMain" ).css({left: '9%',top: '31%',opacity: '0'});
//    $( "#thirdMain" ).css({left: '87%',top: '31%',opacity: '0'});
//    $( "#vierMain" ).css({left: '90%',top: '25%',opacity: '0'});
//    $( "#fiveMain" ).css({left: '47%',top: '39%',opacity: '0',width: '0px',height: '0px'});
//    $( "#sixMain" ).css({left: '10%',top: '30%',opacity: '0'});


    function firstMain() {

        $('#FirstMain').addClass("firstMainTwo",5000,"linear").removeClass("firstMainFirst",5000,"linear");
    }
    function secondMain() {

        $('#SecondMain').addClass("secondMainTwo",5000,"linear").removeClass("secondMainFirst",5000,"linear");
    }
    function thirdMain() {

        $('#ThirdMain').addClass("thirdMainTwo",5000,"linear").removeClass("thirdMainFirst",5000,"linear");
    }
    function vierMain() {

        $('#VierMain').addClass("vierMainTwo",5000,"linear").removeClass("vierMainFirst",5000,"linear");
    }
   /*
  $( "#FirstMain" ).animate({
   
 
    opacity: 0.9



  }, 5000).css({ visibility: 'visible'});
  
    $( "#FirstMain" ).animate({
   
    left: "41%"

    



  }, 5000 );
  */
setTimeout(firstMain,5000);
setTimeout(secondMain,5000);
setTimeout(thirdMain,5000);
setTimeout(vierMain,5000);
setTimeout(fiveMain,10000);
setTimeout(loadMenu,15000);
}); // koniec funkcji ready



var valueCss = "";




function loadMenu2() {
    if ($("#menu1").hasClass("menu") != false) {
        return;
    }
   if ($("#menu2").css('opacity') == '0' ) {
       $(".menuDiv").css('display','block');
            $( "#menu2" ).animate({


          opacity: 0.9



        }, 1000).css({ visibility: 'visible', cursor: 'pointer'});


            $( "#menu3" ).animate({


          opacity: 0.9



        }, 1600).css({ visibility: 'visible', cursor: 'pointer'});


            $( "#menu4" ).animate({


          opacity: 0.9



        }, 2400).css({ visibility: 'visible', cursor: 'pointer'});


            $( "#menu5" ).animate({


          opacity: 0.9



        }, 3000).css({ visibility: 'visible', cursor: 'pointer'});


            $( "#menu6" ).animate({


          opacity: 0.9



        }, 3600).css({ visibility: 'visible', cursor: 'pointer'});
   }
   else {
       //alert('dds');
       $(".menuDiv").css('display','none');
       $("#menu2").css('opacity','0');
       $("#menu3").css('opacity','0');
       $("#menu4").css('opacity','0');
       $("#menu5").css('opacity','0');
       $("#menu6").css('opacity','0');

   }
}



function menuOver(id) {
    //alert('df');
    
    $( "#"+id ).removeClass("menuOver");
}
function menuOver2(id) {
    //alert('df');
    
    $( "#"+id ).removeClass("menuOver2");
}

function menuOut(id) {
    $( "#"+id ).addClass("menuOver");
}

function menuOut2(id) {
    $( "#"+id ).addClass("menuOver2");
}

function loadMenu() {
    $('#menu1').addClass("menuTwo",5000,"linear").removeClass("menu",5000,"linear");

}

function closeWindow() {
            $( ".page" ).animate({


          opacity: 0



        }, 2000);
        setTimeout(clearPage,2000);
       
}
function clearPage() {
     $(".page").html("");
}
function loadPage(page) {
    if ($(".page").css('opacity') == '0' ) {
            $( ".page" ).animate({


          opacity: 1



        }, 5000);
        setTimeout(cloneDiv,5000,page);
    }
    else {
        cloneDiv(page);
    }
    
}

function cloneDiv(page) {
    $(".page").html($("#"+page).html());
}


function changeColor(color) {

        var link = $("link[rel=stylesheet]")[5].href;

        var css = link.substring(link.lastIndexOf('/') + 1, link.length)
        $('link[href="' + css + '"]').attr('href',  "styleColor" + color + ".css" );
        return false;

}


function fiveMain() {
  //alert('dd');
   //alert(t.width);
//$('#fiveMain').animate({
   
  $('#FiveMain').addClass("fiveMainTwo",5000,"linear");



  //}, 5000 );
}

