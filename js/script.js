/*loading*/
window.addEventListener('load', () =>{
    const preload=document.querySelector('.loading');
    preload.classList.add('loading-finish');
  
  });
  
  
  var body = document.getElementsByTagName("body")[0]; 
  /* Open the sidenav */
  function openNav() {
    document.getElementById("mysidenav").style.width = "100%";
    document.getElementsByClassName("navcontent")[0].style.display = "block";
    document.getElementsByClassName("navcontent")[0].style.visibility = "visible";
    body.style.overflow = "hidden";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementsByClassName("navcontent")[0].style.display = "none";
    body.style.overflow = "auto";
  }
  
  
  //Get the button:
  gtp = document.getElementById("gtp");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      gtp.style.display = "block";
    } else {
      gtp.style.display = "none";
    }
  }
  $("#gtp").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });
  /*game*/
var button = document.getElementsByClassName("btn-game")[0];
var gamestart = document.getElementsByClassName("gamestartbg")[0];
var gamebg = document.getElementsByClassName("game_bg")[0];
button.onclick = function() {
  button.style.display = "none";
  gamestart.style.opacity = "0";
  gamestart.style.zIndex="1";
  document.getElementsByClassName("game_content")[0].style.zIndex="2";
  gamebg.style.opacity = "1"; 
}
var coin1 = document.getElementsByClassName("coin1")[0];
var coin2 = document.getElementsByClassName("coin2")[0];
var coin3 = document.getElementsByClassName("coin3")[0];
var coin4 = document.getElementsByClassName("coin4")[0];
var coin5 = document.getElementsByClassName("coin5")[0];
var ans1 = document.getElementsByClassName("ans1")[0];
var ans2 = document.getElementsByClassName("ans2")[0];
var ans3 = document.getElementsByClassName("ans3")[0];
var ans4 = document.getElementsByClassName("ans4")[0];
var ans5 = document.getElementsByClassName("ans5")[0];
coin1.onclick = function() {
  coin1.style.filter = "drop-shadow(0px 0px 10px rgb(255,255,255))";
  ans1.style.filter = "brightness(1)"
}
coin2.onclick = function() {
  coin2.style.filter = "drop-shadow(0px 0px 10px rgb(255,255,255))";
  ans2.style.filter = "brightness(1)"
}
coin3.onclick = function() {
  coin3.style.filter = "drop-shadow(0px 0px 10px rgb(255,255,255))";
  ans3.style.filter = "brightness(1)"
}
coin4.onclick = function() {
  coin4.style.filter = "drop-shadow(0px 0px 10px rgb(255,255,255))";
  ans4.style.filter = "brightness(1)"
}
coin5.onclick = function() {
  coin5.style.filter = "drop-shadow(0px 0px 10px rgb(255,255,255))";
  ans5.style.filter = "brightness(1)"
}

$(function(){
  AOS.init({
     offset: 200,
     easing: 'ease-in-sine'
 });
})

var change = document.getElementById("change");

change.onmouseover = function(e) {
  change.innerHTML = "新竹城隍廟";
}

change.onmouseout = function(e) {
  change.innerHTML = "美食沙漠的綠洲";
}
//ctamodal
var ctamodal = document.getElementById("ctamodal");
var btn = document.getElementById("ctabtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  ctamodal.style.display = "block";
  body.style.overflow = "hidden";
}
span.onclick = function() {
  ctamodal.style.display = "none";
  body.style.overflow = "auto";
}
window.onclick = function(event) {
  if (event.target == ctamodal) {
    ctamodal.style.display = "none";
    body.style.overflow = "auto";
  }
}