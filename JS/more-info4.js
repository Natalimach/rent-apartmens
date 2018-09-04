function myFunction4() {
var submit = document.getElementById("moreINFO4");
    var x = document.getElementById("myDIV4");
    if (x.style.display === "none") {
        x.style.display = "block";
          submit.innerHTML ="скрыть подробности"

    } else {
        x.style.display = "none";
         submit.innerHTML ="подробнее"

    }
}
