var xhr = new XMLHttpRequest();
xhr.open('GET','json/league_table.json',true);
xhr.send(null);

xhr.onload = function () {
  if (xhr.status === 200) {
    var node = document.createElement("td");
    var responseObject = JSON.parse(xhr.responseText);
    var content = "";
    for (var i=0; i<responseObject.standing.length; i++) {
      content += '<tr><td>' + responseObject.standing[i].Pos + '</td>';
      content += '<td>' + responseObject.standing[i].Team + '</td>';
      content += '<td>' + responseObject.standing[i].P + '</td>';
      content += '<td>' + responseObject.standing[i].Pts + '</td>';
      content += '<td>' + responseObject.standing[i].F + '</td>';
      content += '<td>' + responseObject.standing[i].A + '</td>';
      content += '<td>' + responseObject.standing[i].GD + '</td>';
      content += '<td>' + responseObject.standing[i].W + '</td>';
      content += '<td>' + responseObject.standing[i].L + '</td>';
      content += '<td>' + responseObject.standing[i].D + '</td></tr>';
      //content +=
      //content += 'alt="' + responseObject.standing[i].pos + '" />';
      //content += '<p><b>' + responseObject.events[i].location + '</b></br>';
      //content += responseObject.events[i].date + '</p>';
      //content += '</div>';
    }

    document.getElementById('content').appendChild(node);
  }
};
