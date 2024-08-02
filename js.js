var modal = document.getElementById("myModal");
var modal1 = document.getElementById("m1");
var signup = document.getElementById("signup");
var payment1 = document.getElementById("payment1");
var btn = document.getElementById("loginBtn");
var close = document.getElementsByClassName("close")[0];
var close1 = document.getElementById("close1");
var title = document.getElementsByClassName("mem")[0];

function changeTitle(){
  title.innerHTML = "Gold Member";
  member = "Gold Member";
  title.style.color = "gold";
}




btn.onclick = function() {
  modal.style.display = "block";
};
close.onclick = function() {
  modal.style.display = "none";
};

if(payment1 != null){
  payment1.onclick = function() {
    modal1.style.display = "block";
  };
}

if(close1 != null){
  close1.onclick = function() {
    modal1.style.display = "none";
  };
}

var getGraph = document.getElementById("getGraph");
var opt1 = document.getElementById("stock1");
var opt2 = document.getElementById("stock2");
var opt3 = document.getElementById("stock3");
getGraph.onclick = function() {
  if(opt1.checked == true && opt2.checked == false && opt3.checked == false) {
    document.getElementById("stat").src = "img/data (2).png";
  }else if(opt1.checked == false && opt2.checked == true && opt3.checked == false) {
    document.getElementById("stat").src = "img/data (4).png";
  }else if(opt1.checked == false && opt2.checked == false && opt3.checked == true) {
    document.getElementById("stat").src = "img/data (6).png";
  }else if(opt1.checked == true && opt2.checked == true && opt3.checked == false) {
    document.getElementById("stat").src = "img/data (3).png";
  }else if(opt1.checked == true && opt2.checked == false && opt3.checked == true) {
    document.getElementById("stat").src = "img/data (5).png";
  }else if(opt1.checked == false && opt2.checked == true && opt3.checked == true) {
    document.getElementById("stat").src = "img/data (7).png";
  }else if(opt1.checked == true && opt2.checked == true && opt3.checked == true) {
    document.getElementById("stat").src = "img/data (1).png";
  }else {
    document.getElementById("stat").src = "stat1.png";
  }
  
};








