//add a load event listener to the body of nameList.html


//event listener to invoke this function:
function populate_page() {
	//Add code here to complete exercise to create the table and add it to div element on the page


	//added the following to create a reference to js/clickEvent.js within <head> tag.
	var clickEventRef=document.createElement('script');
	clickEventRef.setAttribute("type","text/javascript");
	clickEventRef.setAttribute("src","js/clickEvent.js");
	document.getElementsByTagName("head")[0].appendChild(clickEventRef);
}

