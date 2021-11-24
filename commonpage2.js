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

  var textHeight = document.querySelectorAll(".textHeight");
  var slides = document.querySelector(".slides");
  var slide = document.querySelectorAll(".slides li");
  var currentIdx = 0;
  var slideCount = slide.length;
  var prevBtn = document.querySelector(".prev");
  var nextBtn = document.querySelector(".next");
  var frontBar = document.querySelector(".frontBar");
  var slideImg = document.querySelectorAll(".slideBox ul li")
  var slideDeg = 360/slideImg.length
  var prevDiv = document.querySelector(".prevDiv");
  var nextDiv = document.querySelector(".nextDiv");
  var slideBox = document.querySelector(".slideBox ul");
  var slideIdx = 0;

  slides.style.width = (360 * slideCount) - 40 + 'px';
  frontBar.style.width = 1400/(slideCount-3) + "px";

  function moveSlide(num){
    slides.style.left = -num * 360 + "px";
    currentIdx = num;
  }
  function moveBar(num){
    frontBar.style.left = num * (1400/(slideCount-3)) + "px";
    currentIdx = num;
  }
  
  nextBtn.addEventListener("click", function(){
    if(currentIdx < slideCount - 4){
    moveSlide(currentIdx + 1)
  }else{
    moveSlide(0)
    }
  })
  prevBtn.addEventListener("click", function(){
    if(currentIdx > 0){
    moveSlide(currentIdx - 1)
  }else{
    moveSlide(slideCount - 4)}
  })
  nextBtn.addEventListener("click",function(){
    if(currentIdx < slideCount -1){
      moveBar(currentIdx)
    }else{
      moveBar(0)
    }
  })
  prevBtn.addEventListener("click",function(){
    if(currentIdx > 0){
      moveBar(currentIdx)
    }else{
      moveBar(0)
    }
  })

  for(var i = 0; i < textHeight.length; i++){
    textHeight[i].style.top = 300 + (500*i) +"px" 
  };
  for(var i = 0; i < slideImg.length; i++){
    slideImg[i].style.transform = ("rotateY("+ slideDeg*i + "deg) translateZ("+543+"px)")
  }

  document.getElementsByTagName('body')[0].classList.add('stop-scrolling')
  
  setTimeout(function(){
    document.getElementById("text1").classList.add('ani')},1000
  )

  setTimeout(function(){
    document.getElementsByTagName('body')[0].classList.remove('stop-scrolling')
    },3000
  )

  document.addEventListener("scroll", function(){
    if(3050 < scrollY){
        document.getElementById("text7").classList.add('ani')
      }else if(2500 <scrollY){
        document.getElementById("text6").classList.add('ani')
      }else if(1950 < scrollY){
        document.getElementById("text5").classList.add('ani')
      }else if(1400 < scrollY){
        document.getElementById("text4").classList.add('ani')
      }else if(850< scrollY){
        document.getElementById("text3").classList.add('ani')
      }else if(300 < scrollY){
        document.getElementById("text2").classList.add('ani')
      }
  })


  nextDiv.addEventListener("click",function(){
    slideBox.style.transform = ("rotateY("+ "-" + slideDeg + "deg)");
  })
  prevDiv.addEventListener("click",function(){
    slideBox.style.transform = ("rotateY("+ slideDeg + "deg)");
  })

  function slideRotate(num){
    slideBox.style.transform = -num * 360 + "px";
    slideIdx = num;
  }