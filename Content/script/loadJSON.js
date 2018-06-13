var data = null;
window.onload = function () {
    loadJSON("content/script/profile.json", function (response) {
        data = JSON.parse(response);
        localStorage.setItem('localdata', data);
    });
}
//function load json-file
function loadJSON(file, callback) {
    var xhtr = new XMLHttpRequest();
    xhtr.overrideMimeType("application/json");
    xhtr.open('GET', file, true);
    xhtr.onreadystatechange = function () {
        if (xhtr.readyState == 4 && xhtr.status == "200") {
            callback(xhtr.responseText);
        }
    };
    xhtr.send(null);
}