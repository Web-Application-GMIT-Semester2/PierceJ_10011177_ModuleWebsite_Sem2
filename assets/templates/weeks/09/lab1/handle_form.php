<?php
//page title for header file
$page_title = 'PHP Form Handler';
include('header.html');
$name = $_GET['name'];
$email = $_GET['email'];
$area = $_GET['area'];
if ((!empty($_GET['name'])) && (!empty($_GET['email'])) && (!empty($_GET['area']))) {
  echo 'Thank You, <b>' .$name ."</b>";
  echo nl2br(", for the following comments:\n <i>" .$area ."</i>\n\n");
  echo nl2br("We will reply to you at " .$email .".\n\n");
  echo "Your interests are: <br>";
  foreach ($_GET['interests'] as $val) {
    echo $val ."<br>";
  }

} else {
  echo "Please fill out form again";
  echo '<button onclick="history.go(-1);">Back</button>';
}
include('footer.html');
?>
