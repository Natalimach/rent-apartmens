function myFunction7() {
var submit = document.getElementById("moreINFO7");
    var x = document.getElementById("myDIV7");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
