//create functions for add(), clear_storage() and names object
//add function to use localStorage object.
function clear_storage() {
  localStorage.clear();
}
function add() {
  var name_key = "name_"+localStorage.length;
  //var lName_key = "lName_"+localStorage.length;
	localStorage.setItem(name_key, JSON.stringify(new names(document.getElementById("fld1").value, document.getElementById("fld2").value)));
  //localStorage.setItem(lName_key, JSON.stringify(new names()));
	window.location.reload(); // refreshes page so that text field is cleared.

}
function names(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
