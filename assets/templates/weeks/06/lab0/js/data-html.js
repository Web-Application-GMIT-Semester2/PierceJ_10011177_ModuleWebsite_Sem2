var xhr = new XMLHttpRequest();
xhr.open('GET','data/data.html',true);
xhr.send(null);
xhr.onload = function () {
  var el = document.getElementById("content");
  el.innerHTML = xhr.responseText;
}
