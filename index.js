// Like buttons
var count = 0

for (var i = 0; i <= document.querySelectorAll(".btn").length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function () {

    var icon  = document.querySelectorAll("icon-2").style.color = "red";

    count++;
    document.querySelectorAll(".btn").innerHTML = icon + " " + count;

  });
}

// For dark mode
function darkMode () {

  var element = document.body;
  element.classList.toggle("dark");

}
