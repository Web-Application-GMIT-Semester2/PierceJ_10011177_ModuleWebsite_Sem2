<?php # login.php
// This is a login page

$page_title = 'Login';
include ('includes/header.html');

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

	if(isset($_POST['register'])){

	  header( "Location: register.php" );
	  exit();
	}

	//connect to the database - hint: require
	require ('mysqli_connect.php');
	//perform validation ensuring all form fields contain values
	$user=$_POST['username'];
	$passw=$_POST['pass'];
	if (!empty($user) && !empty($passw)) {
		echo "Missing Info";
	} else {
		echo "Success";
	}

	//Build a select string with a WHERE clause on username/password and run the query on the database
	//for Example:

	$q = "SELECT user_id FROM users WHERE (username='$user' AND password=SHA1('$passw') )";

	//Note the password is wrapped in a SHA1 function. This encrypts the password value which will checked against the encrypted password in the database table.

	//run the query:
	$r = @mysqli_query($dbc, $q); //note: $dbc is set in the mysqli_connect.php script.

	//check if any rows returned:
	$num = @mysqli_num_rows($r);
		if ($num == 1) { // Match was made.
			mysqli_close($dbc);
			header('Location: shop.php');
			exit();
		} else { // Invalid username/password combination.
			echo '<h1>Error!</h1>
			<p class="error">The username and password do not match those on file.</p>';
		}


	// Close the database connection.

} // End of the main Submit conditional.

include ('includes/footer.html');

?>
