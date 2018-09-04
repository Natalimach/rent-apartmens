function myFunction1() {
var submit = document.getElementById("moreINFO");
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
