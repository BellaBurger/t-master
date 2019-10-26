//https://www.youtube.com/watch?v=BiOXf9HHGUA
function removeAll(s2) {
    for(var i = s2.options.length - 1; i >= 0; i--){
        s2.remove(i);
}
}


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














