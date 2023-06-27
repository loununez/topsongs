function darkmode() {
  document.body.style.backgroundColor = "#222222";
  document.body.classList.add("dark-mode");
  document.getElementById("header-title").style.color = "white";
  document.getElementById("titlesongs").style.color = "white";
}

function originalmode() {
  document.body.style.backgroundColor = "#d9e3f1dd";
  document.body.classList.remove("dark-mode");
  document.getElementById("header-title").style.color = "#485785";
  document.getElementById("titlesongs").style.color = "#485785";
}



function copyright() {
  alert("By: Nuñez Lourdes Gmail: lnunez9720@gmail.com");
  }
