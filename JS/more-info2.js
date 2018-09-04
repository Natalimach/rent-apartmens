function myFunction2() {
var submit = document.getElementById("moreINFO1");
    var x = document.getElementById("myDIV1");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
