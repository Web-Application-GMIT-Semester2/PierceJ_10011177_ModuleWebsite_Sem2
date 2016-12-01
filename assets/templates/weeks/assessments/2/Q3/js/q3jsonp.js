$(document).ready(function() {

	$.ajax({
		url: "https://rawgit.com/obrienke1/web_application_development/master/jsonp.js",
		dataType: "jsonp",
		jsonp: false,
		jsonpCallback: "showSeasons",
		success: function showSeasons(data) {
			var $newContent = '';
			$.each( data.seasons, function($i) {
			  $newContent += '<div class="event">';
			  $newContent += '<ul>';
				$newContent += '<li><a href="#">' + data.seasons[$i].season + '</a></li>';
			  $newContent += '</ul>';
			  $newContent += '</div>';
			});
			$('#content').html($newContent);
		},
		error: function() {
			alert("The JSONP data request could not be processed.");
		}
	});

});
