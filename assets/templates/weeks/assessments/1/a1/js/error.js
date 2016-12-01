//add a comment here giving details of the error this produces
/* Error message: "Uncaught RangeError: toFixed() digits argument must be between 0 and 20
    at Number.toFixed (<anonymous>)
    at this is because the 'toFixed(x) parameter(x) needs to be set between 0 and 20 currently set to 25'"*/
//add code to handle this error - see Javascript Exception Handling Lab for example on how to do this.
try {
  var num = 2.9999;
  document.writeln(num.toFixed(25)); // variable is not declared. Will cause an exception
}
catch(e) {
//add code here
  document.writeln("Error on page due to arguments");
}
finally {
  document.writeln(num.toFixed(20));
  alert("Hello");
}
