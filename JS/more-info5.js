function myFunction5() {
var submit = document.getElementById("moreINFO5");
    var x = document.getElementById("myDIV5");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
