function myFunction3() {
var submit = document.getElementById("moreINFO3");
    var x = document.getElementById("myDIV3");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
