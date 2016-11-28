function q5callback(json) {
  var output = document.getElementById("results");
  output.innerHTML = "Your output goes here";
}
function go() {
  access("select * from collection", q5callback);
}

var ajax;
var acallback=null;
function access(query, callback)
{
  acallback = callback;
  ajax = new XMLHttpRequest();
  ajax.onreadystatechange = ajaxProcess;
  ajax.open("GET", "http://127.0.0.1:8000/sql?query=" + query);
  ajax.send(null);
}
function ajaxProcess() {
  if((ajax.readyState == 4)&&(ajax.status == 200)){
    ajaxCompleted(ajax.responseText)
  }
}
function ajaxCompleted(text) {
  if(acallback != null) {
    var data = JSON.parse(text);
    acallback(data);
  }
}
onload=go;
