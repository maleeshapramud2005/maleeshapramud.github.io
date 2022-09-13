function choice() {
  document.querySelector(".choice").style.display = "block";
}

var d = document.querySelector("#date span");
var greetings;
var hours = new Date().getHours();
var mins = new Date().getMinutes();
if (hours < 12) {
  greetings = "Good Morning"
}
else {
  greetings = "Good Evening"
}
d.innerHTML = greetings;
document.querySelector("#hours").innerHTML = hours;
document.querySelector("#mins").innerHTML = mins;


// document.querySelector(".dark").addEventListener("click", function() {
//   document.querySelector(".choice").style.display = "none";
// });
// document.querySelector(".light").addEventListener("click", function() {
//   document.querySelector(".choice").style.display = "none";
//   document.querySelector("body").style.backgroundColor = "white";
//   document.querySelector(".header-2").style.color = "#01FEFF"
//   document.querySelector(".header-2").style.textShadow = "4px 2px #ff0000b6";
//   document.querySelector(".header-2 .green").style.textShadow = "none";
//   document.querySelector(".header-2 .red").style.textShadow = "none";
//   document.querySelector(".header-2 .red").style.color = "rgba(0, 0, 255, 0.61)"
//   document.querySelector(".p1").style.fontWeight = "600"
//   document.querySelector(".p2").style.fontWeight = "600"
//   document.querySelector(".s-icon").style.color = "#01FEFF"
//   document.querySelector(".down").style.borderColor = "#01FEFF"
//   document.querySelector(".down").style.backgroundColor = "#01FEFF"
//   document.body.style.backgroundImage = "url('bglight.jpg')"
  

//   var x = document.querySelectorAll(".black");
//   var i;
//   for (i=0; i < x.length; i++) {
//     x[i].style.color = "white";
//   }
//   var purple = document.querySelectorAll(".purple");
//   for (i=0; i < purple.length; i++) {
//     purple[i].style.color = "#ECECEC";
//   }
//   var gray = document.querySelectorAll(".gray");
//   for (i=0; i < gray.length; i++) {
//     gray[i].style.color = "#F0ECE2";
//   }
//   var btn_purple = document.querySelectorAll(".btn-purple");
//   for (i=0; i < btn_purple.length; i++) {
//     btn_purple[i].style.backgroundColor = "#F2A365"
//     btn_purple[i].style.boxShadow = "0px 5px 20px #F2A365";
//   }
//   var bg_light = document.querySelectorAll(".bg-white");
//   for (i=0; i < bg_light.length; i++) {
//     bg_light[i].style.backgroundColor = "#222831"
//   }
//   var purple_light = document.querySelectorAll(".purple-light");
//   for (i=0; i < purple_light.length; i++) {
//     purple_light[i].style.color = "#F0ECE2";
//   }
//   var box_shadow = document.querySelectorAll("#box_shadow");
//   for (i=0; i < box_shadow.length; i++) {
//     box_shadow[i].style.boxShadow = "1px 2px 8px 1px white"
//   }
//   var lead = document.querySelectorAll(".lead");
//   for (i=0; i < lead.length; i++) {
//     lead[i].style.color = "#F0ECE2";
//   }
//   var s_icon = document.querySelectorAll(".s-icon");
//   for (i=0; i < s_icon.length; i++) {
//     s_icon[i].style.color = "#01FEFF"
//   }

// });



document.querySelector(".wts").addEventListener("click", function() {
  document.querySelector(".choice").style.display = "none";
});