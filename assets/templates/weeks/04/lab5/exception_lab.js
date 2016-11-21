console.log('And we\'re off');

try {
  someVar; // variable is not declared. Will cause an exception
}
catch(e) {
//add code here
  var num1 = document.getElementById("error_details");
  num1.innerHTML = "Error";
}
finally {
  var someVar = 0;
  alert("Hello");
}
