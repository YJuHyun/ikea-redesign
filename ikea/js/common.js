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


let totalArea = document.querySelector('.totalArea');
var funi = document.querySelector("#funiture")
var funiColor = document.querySelectorAll(".fColor");
var slides = document.querySelector(".slides");
var slide = document.querySelectorAll(".slides li");
var currentIdx = 0;
var slideCount = slide.length;
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var frontBar = document.querySelector(".frontBar");

slides.style.width = (360 * slideCount) - 40 + 'px';
frontBar.style.width = 1400/(slideCount-3) + "px";

for(var i = 0; i < funiColor.length; i++){
  funiColor[i].addEventListener("click", funiChange);
}

$('.downBtn').click(function() {
  $('#totalArea').toggleClass()(".heightCg");
});

function areaHeight(){
  totalArea.classList.toggle('heightCg');
}

function funiChange(){
  var funiColorAttr = this.getAttribute("src");
  var funiColorChange = funiColorAttr.replace(".png", ".webp");
  funi.setAttribute("src", funiColorChange);
}

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
