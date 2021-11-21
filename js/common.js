$(window).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
        },
      });

    $(".tabArea img").mouseenter(function(){       
      $(this).attr('src',function(index, attr){
        return attr.replace("_01.webp", "_02.webp");
      });      
    });     
    $(".tabArea img").mouseleave(function(){       
      $(this).attr('src',function(index, attr){
        return attr.replace("_02.webp","_01.webp");
      });      
    });
    
    $(".tabMenu li a").click(function(){
      var activeTab = $(this).attr("data-tab");
      $(".tabMenu li a").removeClass("active");
      $(".tabArea div").removeClass("active");
      $(this).addClass("active");
      $("#"+activeTab).addClass("active")
    })

    $(window).scroll(function(){
      var top =  $(window).scrollTop();
      if(top != 0){
        $('header h1').css("margin","15px 0")
        $('header li').css("margin","15px 0")
      }else{
        $('header h1').css("margin","30px 0")
        $('header li').css("margin","30px 0")
      }
    })
})



 
    


