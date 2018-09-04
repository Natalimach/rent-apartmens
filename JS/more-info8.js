function myFunction8() {
var submit = document.getElementById("moreINFO8");
    var x = document.getElementById("myDIV8");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
