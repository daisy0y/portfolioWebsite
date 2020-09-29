//  header toggle
function headerToggle() {
  let header = document.getElementById("headerNav");
    if (header.className === "header_Nav") {
    
      header.className += " responsive";
    } else {
      header.className = "header_Nav";
      

    }
  }

  // header nav state from scroll
const home = document.querySelector("#home").offsetTop;
const about_me = document.querySelector("#about_me").offsetTop;
const skills = document.querySelector("#skills").offsetTop;
const project = document.querySelector("#project").offsetTop;
const contact = document.querySelector("#contact").offsetTop;
const homeToggle = document.querySelector(".homeToggle");
const aboutToggle = document.querySelector(".aboutToggle");
const skillsToggle = document.querySelector(".skillsToggle");
const projectToggle = document.querySelector(".projectToggle");
const contactToggle = document.querySelector(".contactToggle");

function navState(){
    let location = document.documentElement.scrollTop;
    if(location < 650){
      resetToggle();
      homeToggle.style.display="block";
    }else if(location <= about_me){
      resetToggle()
      homeToggle.style.display="";
      aboutToggle.style.display="block";
    }else if(location <= skills){
      resetToggle()
      skillsToggle.style.display="block";
    }else if(location <= project){
      resetToggle()
      projectToggle.style.display="block";
    }else if(location <= contact){
      resetToggle()
      contactToggle.style.display="block";
    }
}

function resetToggle(){
  homeToggle.style.display="";
  aboutToggle.style.display="";
  skillsToggle.style.display="";
  projectToggle.style.display="";
  contactToggle.style.display="";
}
function init(){
  if(outerWidth <= 768){
    window.addEventListener('scroll',navState)
  }
}
init();