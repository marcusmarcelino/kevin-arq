$(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   if (scroll >= 1) {               
         $("#nuvem").addClass("ativo");    
   } else {
         $("#nuvem").removeClass("ativo");
   }
});