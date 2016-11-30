//add a load event listener to the body of nameList.html
var el = document.getElementById('register_form');
el.addEventListener('load', populate_page, true);

function populate_page() {
	//Add code here to complete exercise to create the table and add it to div element on the page
	var divContent="<form>";
  divContent += "<input type="text" name="username" value="Username"><br>"
	divContent += "</form>"
	var divEl =document.getElementById("nameList");
	divEl.innerHTML = divContent;
	//added the following to create a reference to js/clickEvent.js within <head> tag.
	var clickEventRef=document.createElement('script');
	clickEventRef.setAttribute("type","text/javascript");
	clickEventRef.setAttribute("src","js/clickEvent.js");
	document.getElementsByTagName("head")[0].appendChild(clickEventRef);
}
