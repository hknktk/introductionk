document.addEventListener('DOMContentLoaded',function(){
  const $menuButton = document.getElementById("menuButton");
  const $nav        = document.getElementById("slideNav");
  const $list       = document.getElementById("list");
  const $mask       = document.getElementById("mask");
  const $body       = document.querySelector("body");
  const $html       = document.querySelector("html");
  const $bar        = document.getElementById("nav");

  

  
  $menuButton.addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $nav.classList.toggle("active");
    $mask.classList.toggle("active");
    $body.classList.toggle("none");
    $html.classList.toggle("none");
    $bar.classList.toggle("none");
  })
  
  $mask.addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $nav.classList.toggle("active");
    $mask.classList.toggle("active");
    $body.classList.toggle("none")
    $html.classList.toggle("none")
  })

  $list.addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $nav.classList.toggle("active");
    $mask.classList.toggle("active");
    $body.classList.toggle("none");
    $html.classList.toggle("none");
  })

  const targetElement = document.querySelectorAll(".box");
  document.addEventListener("scroll", function(){
  for (let i = 0; i<targetElement.length; i++){
    const getElementDistance =targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .6
    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  }
})

  const targetElement2 = document.querySelectorAll(".photo");
  document.addEventListener("scroll", function(){
  for (let i = 0; i<targetElement2.length; i++){
    const getElementDistance =targetElement2[i].
    getBoundingClientRect().top + targetElement2[i].clientHeight * .1
    if(window.innerHeight > getElementDistance){
      targetElement2[i].classList.add("show");
    }
  }
})



 



  
})

