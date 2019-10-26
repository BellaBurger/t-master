/*class Booking{
    constructor(course, teacher, comment, day, hour){
        this.course = course
        this.teacher = teacher
        this.comment =

    }
}*/

/*
var s1 = document.getElementById('s1');
var s2 = document.getElementById('s2');
console.log(s1.value)

var course = s1.value
var teacher = s2.value
var booking = {course, teacher}
console.log(booking)*/

/*
console.log(s2)
var option =  s2.options[0]
console.log(option)
var booking = {s1}
console.log(booking)*/

var courseField = document.getElementById("s1")
var teacherField = document.getElementById("s2")
var submitBtn = document.getElementById("submitBtn")
var course
var teacher

submitBtn.onclick = function(){
    course = courseField.options[courseField.selectedIndex].value
    teacher = teacherField.options[teacherField.selectedIndex].value

    console.log(course, teacher)
}




var dt = new Date();
// til at starte med har vi tilføjet en variabel som hedder "dt" vi har derefter brugt ordet "new" for at lave en inheritance
function renderDate() {<!-- The class name "content" does not have any relevance for our js file, and is only used for creating overview of the div section. -->


    dt.setDate(1);
    var day = dt.getDay();
// dette har noget med x at gøre i forhold til tidligere måneder

    console.log(dt.getDay());
// fortæller noget om hvor mange dage fra tidligere måned der skal stå i denne måned.
// sætter måned til februar, og i console fremviser den 28 februar. Kan være en test
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth()+1,0
    ).getDate();

// giver den sidste dag på den aktuelle måned. + mere
    console.log(endDate);

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),0).getDate();

    var today = new Date();
    console.log(today);
// har blot console.log for dagens date som er 15, fordi jeg lavede opgaven d.15 oktober.
// Dette giver den næste måneds dage i feltet
    var months = ["January","February","March","April","May", "June","July","August","September","October","November","December"];


    document.getElementById("date_str").innerHTML = dt.toDateString();

    document.getElementById("month").innerHTML = months[dt.getMonth()];

// getElementById returnere vores element "date_str" som er angivet inde i vores html, og via en javascript metoder outputtes den oprindelige dato.  <p>



    var cells = "";

    for(x = day; x > 0; x--){
        cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
    }
// Dette har noget at gøre med at der sættes x ind på dagene for de gamle måneder. (hvis man sætter x i "x" så er det NAN
// div class = prev date giver den grå farve til x dagene som ikke er med i månederne.

    for (i = 1; i <= endDate; i++){
        if(i == today.getDate() && dt.getMonth()== today.getMonth()){
            cells += "<div class= 'today'>" + i + "</div>";
        } else{
            cells += "<div>" + i + "</div>";
        }
    }

// kommenter det her//
    document.getElementsByClassName("days")[0].innerHTML = cells;
// kommenter det her//

}



function moveDate(para) {
    if (para == 'prev') {
        dt.setMonth(dt.getMonth() - 1);
        renderDate();
    } else {
        (para == 'next')
        dt.setMonth(dt.getMonth() + 1);
    }
    renderDate();
}


//https://www.youtube.com/watch?v=BiOXf9HHGUA
function removeAll(s2) {
    for(var i = s2.options.length - 1; i >= 0; i--){
        s2.remove(i);
    }
}

//Dynamic selector
function insertOptions(s1,s2){
    var s1 = document.getElementById('s1');
    var s2 = document.getElementById('s2');

    if (s1.options[s1.selectedIndex].value == "Org"){
        var opt1 = document.createElement('option');
        var opt2 = document.createElement('option');

        opt1.value = "Ali";
        opt2.value = "Tina";
        opt1.innerHTML = "Ali";
        opt2.innerHTML = "Tina";
        removeAll(s2);
        s2.options.add(opt1);
        s2.options.add(opt2);
        localStorage.setItem('s1', s1.value);
        localStorage.setItem('s2', s2.value);



    }
    else if (s1.options[s1.selectedIndex].value == "Pro"){
        var opt1 = document.createElement('option')
        var opt2 = document.createElement('option')
        opt1.value = "Henrik";
        opt2.value = "Mikkel";
        opt1.innerHTML = "Henrik";
        opt2.innerHTML = "Mikkel";
        removeAll(s2);
        s2.options.add(opt1);
        s2.options.add(opt2);

    }else if (s1.options[s1.selectedIndex].value == "Bis"){
        var opt1 = document.createElement('option')
        var opt2 = document.createElement('option')
        opt1.value = "Rob";
        opt2.value = "Till";
        opt1.innerHTML = "Robb";
        opt2.innerHTML = "Till";
        removeAll(s2);
        s2.options.add(opt1);
        s2.options.add(opt2);
    }else if (s1.options[s1.selectedIndex].value == "Vos"){
        var opt1 = document.createElement('option')
        var opt2 = document.createElement('option')
        opt1.value = "Jan";
        opt2.value = "Jan";
        opt1.innerHTML = "Jan";
        opt2.innerHTML = "Jan";
        removeAll(s2);
        s2.options.add(opt1);
        s2.options.add(opt2);}
    else{
        var opt1 = document.createElement('option')
        opt1.value = "--"
        opt1.innerHTML = "--"
        removeAll(s2);
        s2.options.add(opt1);
    }
}


// js til sidebar

function book() {
    document.getElementById("panel").style.display = "block";}


// js til local storage af alt

// buttons



function validateContactInformation() {
    var course = document.getElementById('s1')

    var checkbox = document.getElementsByClassName('time1');
    var len = checkbox.length;
    var rating = "";


    var i = 0;

    for (i = 0; i < len; i++) {
        if (checkbox[i].checked) {
            rating = checkbox[i].value;
            localStorage.setItem('rating', checkbox[i].value);




        }

    }

}









