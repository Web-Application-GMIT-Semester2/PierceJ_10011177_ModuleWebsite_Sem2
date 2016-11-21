var xhr = new XMLHttpRequest();
xhr.open('GET','data/data.json',true);
xhr.send(null);

xhr.onload = function () {
  if (xhr.status === 200) {
    var responseObject = JSON.parse(xhr.responseText);

    var content = " ";
    for (var i=0; i<responseObject.events.length; i++) {
      content += '<div class="event">';
      content += '<img src ="' + responseObject.events[i].map + '" ';
      content += 'alt="' + responseObject.events[i].location + '" />';
      content += '<p><b>' + responseObject.events[i].location + '</b></br>';
      content += responseObject.events[i].date + '</p>';
      content += '</div>';
    }

    document.getElementById('content').innerHTML = content;
  }
};
