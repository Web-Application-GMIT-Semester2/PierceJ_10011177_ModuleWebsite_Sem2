function add(){
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);

	if (num1 > 10) {
		return false;
	} else {
		var sum = num1 + num2;
		alert("sum is: " + sum);
	}
}