var xhr = new XMLHttpRequest();
xhr.open('GET','data/data.xml',true);
xhr.send(null);

xhr.onload = function () {
  var response = xhr.responseXML;
  var events = response.getElementsByTagName('event');

  var di1 = 'map';
  var di2 = 'location';
  var di3 = 'date';

  var content = '';
  for (var i=0; i<events.length; i++) {
    content += '<div class="event">';
    content += '<img src ="' + events[i].getElementsByTagName(di1)[0].firstChild.nodeValue + '" ';
    content += 'alt="' + events[i].getElementsByTagName(di2)[0].firstChild.nodeValue + '" />';
    content += '<p><b>' + events[i].getElementsByTagName(di2)[0].firstChild.nodeValue + '</b></br>';
    content += events[i].getElementsByTagName(di3)[0].firstChild.nodeValue + '</p>';
    content += '</div>';
    }

    document.getElementById('content').innerHTML = content;
};
