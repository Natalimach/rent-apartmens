function myFunction6() {
var submit = document.getElementById("moreINFO6");
    var x = document.getElementById("myDIV6");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
