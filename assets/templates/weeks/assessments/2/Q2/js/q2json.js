$(document).ready(function() {
	$.ajax({
		type: "GET",
		url: "json/league_table.json",
		dataType: "json",
		success: function(data) {
			var len = data.standing.length;
			var $newContent = " ";
			var $showDetails = "";
			for (var i=0; i<len; i++){
				$newContent += "<tr><td>" + data.standing[i].Pos + "</td>";
				$newContent += "<td>" + data.standing[i].Team + "</td>"
				$newContent += "<td>" + data.standing[i].P + "</td>"
				$newContent += "<td>" + data.standing[i].Pts + "</td>"
				$newContent += "<td>" + data.standing[i].F + "</td>"
				$newContent += "<td>" + data.standing[i].A + "</td>"
				$newContent += "<td>" + data.standing[i].GD + "</td>"
				$newContent += "<td>" + data.standing[i].W + "</td>"
				$newContent += "<td>" + data.standing[i].D + "</td>"
				$newContent += "<td>" + data.standing[i].L + "</td></tr>"
				//$newContent += "<td>" + data.standing[i].P + "</td></tr>";
				//$newContent += "<td>" + data.standing[i].Pts
				//$newContent += data.standing[i].F
				//$newContent += data.standing[i].A
				//$newContent += data.standing[i].GD
				//$newContent += data.standing[i].W
				//$newContent += data.standing[i].D
				//$newContent += data.standing[i].L
			}
			console.log
			$('#content').after($newContent);
		}
	});
})
