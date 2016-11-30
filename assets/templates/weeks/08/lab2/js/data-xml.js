// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 11 and 35 to make it work locally
// Have commented out for the lab as student may opt to run locally
// and won't affect solution if run on a server.

$(document).ready(function() {
	var $newContent="";
	$.ajax({
		type: "GET",
		url: "data/data.xml",
		dataType: "xml",
		success: function(xml) {

			$(xml).find('event').each(function(){
				$newContent += '<div class="event">';
				$newContent += '<img src="' + $(this).find('map').text() + '" ';
				$newContent += 'alt="' + $(this).find('location').text() + '" />';
				$newContent += '<p><b>' + $(this).find('location').text() + '</b><br>';
				$newContent += $(this).find('date').text() + '</p>';
				$newContent += '</div>';
			})
			$("#content").html($newContent);
		},
		error: function() {
			alert("XML file could not be accessed");
		}
	});
});
