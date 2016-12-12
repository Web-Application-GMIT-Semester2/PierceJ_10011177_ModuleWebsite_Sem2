<?php # register.php
// This script performs an INSERT query to add a record to the users table.

include ('includes/header.html');

// Check for form submission:
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    //connect to the database - hint: require
		require ('mysqli_connect.php'); // Connect to the db.
	//perform validation ensuring all form fields contain values
	if ((!empty($_POST['first_name'])) && (!empty($_POST['last_name'])) && (!empty($_POST['username'])) && (!empty($_POST['pass1'])) && (!empty($_POST['pass2']))) {
			echo 'Correct';
			if ($_POST['pass1'] === $_POST['pass2']) {
				echo "Passwords Match";
				$fn=$_POST['first_name'];
				$ln=$_POST['last_name'];
				$un=$_POST['username'];
				$pass1=$_POST['pass1'];
				$q = "INSERT INTO users (firstname, lastname, username, password)
							VALUES ('$fn', '$ln', '$un', SHA1('$pass1'))";
				$r = @mysqli_query ($dbc, $q); // Run the query. Note: $dbc is set in the mysqli_connect.php script.
			} else {
				$r=false;
				$q = "Passwords do not match";
			}
		} else {
			$q = "Missing Info";
			$r=false;
		}
	//Note that password should match confirm password.

	//build your insert query and run it to add the details captured on the form to the users table:
	//For example:


	//Note the password is wrapped in a SHA1 function. This encrypts the password value which will be written to the database.
	//check the query ran ok
	//For example:
	if ($r) {
		echo '<h1>Thank you!</h1>
		<p>You are now registered. After the next lab exercise you will actually be able to log in!</p><p><br /></p>';

	} else { // If it did not run OK.
		echo '<h1>System Error</h1>
		<p class="error">You could not be registered due to a system error. We apologize for any inconvenience.</p>';

		// Debugging message:
		echo '<p>' . mysqli_error($dbc) . '<br /><br />Query: ' . $q . '</p>';

	}

	// Close the database connection - mysqli_close().
	mysqli_close($dbc);

	exit();
	// Include the footer and quit the script - exit();



}
?>

<h1>Register</h1>
<form action="register.php" method="post">
	<p>First Name: <input type="text" name="first_name" size="15" maxlength="20" value="<?php if (isset($_POST['first_name'])) echo $_POST['first_name']; ?>" /></p>
	<p>Last Name: <input type="text" name="last_name" size="15" maxlength="40" value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>" /></p>
	<p>Username: <input type="text" name="username" size="20" maxlength="60" value="<?php if (isset($_POST['username'])) echo $_POST['username']; ?>"  /> </p>
	<p>Password: <input type="password" name="pass1" size="10" maxlength="20" value="<?php if (isset($_POST['pass1'])) echo $_POST['pass1']; ?>"  /></p>
	<p>Confirm Password: <input type="password" name="pass2" size="10" maxlength="20" value="<?php if (isset($_POST['pass2'])) echo $_POST['pass2']; ?>"  /></p>
	<p><input type="submit" name="submit" value="Register" /></p>
</form>

<?php
include ('includes/footer.html');//include the footer
?>
