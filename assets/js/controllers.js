angular.module('moduleWebsite.controllers', [])
.controller('MainController', function($scope) {
  $scope.labsArr = [];
	var labsObj= function(week, description, link, icon) {
    $scope.labsArr.push(this);
    this.week = week;
    this.desc = description;
    this.link = link;
    this.icon = icon;
  }
  var lecture = new labsObj("Lecture ZIP File", "Zip file with all lectures from Web Applicaiton Development Semester 2", "./assets/docs/lectures.zip", "fa fa-file-archive-o")

  var one = new labsObj("One", "This week we looked at the module content.", "week1.php");
  var two = new labsObj("Two", "This week we looked at the some basic JavaScript.", "week2.php");
  var three = new labsObj("Three","This week we looked at software testing (bugs/defects) and different JavaScript Object types.", "week3.php");
  var four = new labsObj("Four", "This week we looked at Error Handling and Event Listeners.", "week4.php");
  var five = new labsObj("Five", "This week we looked at Event Listeners and Web Storage.", "week5.php");
  var six = new labsObj("Six","This week we looked at Event Listeners and AJAX.", "week6.php");
  var seven = new labsObj("Seven", "This week we looked at AJAX and jQuery.", "week7.php");
  var eight = new labsObj("Eight", "This week we look at AJAX and jQuery combined with lectures on the Software Development Lifecycle and Agile", "week8.php");

  var misc1 = new labsObj("Project", "This is some detail including a link to my Project.", "project.php","fa fa-folder-open");
  var misc2 = new labsObj("Assessment 1", "This is a zip file to my first assessment with my answer and the correct solution.", "./assets/templates/weeks/assessments/Assessment1.zip","fa fa-file-archive-o");
  var misc3 = new labsObj("Assessment 2", "This is a zip file to my first assessment with my answer.", "./assets/templates/weeks/assessments/Assessment2.zip","fa fa-file-archive-o");

  var wk1Lect1 = new labsObj("Module Introduction", "An Introduction to the Module Topics and Assessments.", "./assets/templates/weeks/01/WAD_ModuleIntro.pdf", "fa fa-file");
  var wk1Lab0 = new labsObj("Revision Lab & Notes", "Revision Lab and Lectures (Zip Archive)", "./assets/templates/weeks/01/lab0/revision.zip", "fa fa-file-archive-o");
  var wk1Lab1 = new labsObj("Lab One", "A lab was posted on moodle along with the solution and we were advised to complete the lab in our own time.", "./assets/templates/weeks/01/lab1/check_order.html", "fa fa-html5");
  var wk1Lab2 = new labsObj("Lab Two", "A lab was posted on moodle along with the solution and we were advised to complete the lab in our own time.", "./assets/templates/weeks/01/lab2/array-literal.html", "fa fa-html5");

  var wk2Lect = new labsObj("JavaScript Lectures","Lectures and Exercises on Javascript basics and objects","./assets/templates/weeks/02/Week2Lectures.zip", "fa fa-file-archive-o")
  var wk2lab0 = new labsObj("JavaScript Basics","A lab covering JavaScript functions, loops and basic Javascript functionality","./assets/templates/weeks/02/lab4/basic.html", "fa fa-html5");
  var wk2lab1 = new labsObj("JavaScript Objects","A lab covering JavaScript Objects. Literal Notation.","./assets/templates/weeks/02/lab3/object-literal.html", "fa fa-html5");

  var wk3Lect = new labsObj("Software Testing Lectures","An Introduction to Software Testing.","./assets/templates/weeks/03/SoftwareTesting.zip", "fa fa-file-archive-o")
  var wk3lab2 = new labsObj("Software Testing Sample","Software Testing sample html.","./assets/templates/weeks/03/lab0/BugSample.html", "fa fa-html5")
  var wk3lab0 = new labsObj("Constructor Objects","A lab covering constructor JavaScript Objects.","./assets/templates/weeks/03/lab1/object-constructor.html", "fa fa-html5");
  var wk3lab1 = new labsObj("Multiple Objects","A lab covering Multiple JavaScript Objects.","./assets/templates/weeks/03/lab2/multiple-objects.html", "fa fa-html5");

  var wk4lect = new labsObj("Error Handling Lectures","Lecture Notes on Error Handling.","./assets/templates/weeks/04/Javascript Exception Handling Lab.pdf", "fa fa-file-o");
  var wk4lab5 = new labsObj("Error Handling Lab","A lab on Error Handling.","./assets/templates/weeks/04/lab5/exception_lab.html", "fa fa-html5");
  var wk4pdf0 = new labsObj("Event Types Lab","Lab Notes on Event Types.","./assets/templates/weeks/04/JavaScript Events Lab 1.pdf", "fa fa-file");
  var wk4pdf1 = new labsObj("Event Flow Lab","Lab Notes on Event Flows.","./assets/templates/weeks/04/JavaScript Events Lab 1.pdf", "fa fa-file-o");
  var wk4lab0 = new labsObj("Event Attributes","A lab covering event attributes.","./assets/templates/weeks/04/lab0/event-attributes.html", "fa fa-html5");
  var wk4lab1 = new labsObj("Event Handler","A lab covering Event handler.","./assets/templates/weeks/04/lab1/event-handler.html", "fa fa-html5");
  var wk4lab2 = new labsObj("Event listener","A lab covering Event listeners.","./assets/templates/weeks/04/lab2/event-listener.html", "fa fa-html5");
  var wk4lab3 = new labsObj("Event Flow Bubble","A lab covering Event Flow Bubble..","./assets/templates/weeks/04/lab3/event-flow-bubble.html", "fa fa-html5");
  var wk4lab4 = new labsObj("Event Flow Capture","A lab covering Event Flow Capture..","./assets/templates/weeks/04/lab4/event-flow-capture.html", "fa fa-html5");

  var wk5lect1 = new labsObj("Lecture Web Storage","Lecture Notes on Web Storage.","./assets/templates/weeks/05/Lecture_WebStorage.pdf", "fa fa-file-o");
  var wk5lect2 = new labsObj("Web Storage Exercise","Lab Exercise on Web Storage.","./assets/templates/weeks/05/JavaScript Web Storage Exercise.pdf", "fa fa-file-o");
  var wk5lab0 = new labsObj("Event Delegation","A lab covering event delegation.","./assets/templates/weeks/05/lab0/event-delegation.html", "fa fa-html5");
  var wk5lab1 = new labsObj("Event Delegation 2","A second lab covering event delegation.","./assets/templates/weeks/05/lab1/event-delegation.html", "fa fa-html5");
  var wk5lab2 = new labsObj("Web Storage","A lab covering web storage.","./assets/templates/weeks/05/lab2/local_storage.html", "fa fa-html5");

  var wk6lect1 = new labsObj("Lab notes on AJAX(HTML)","Ajax(HTML) Exercise.","./assets/templates/weeks/06/First_AJAX_Lab.pdf", "fa fa-file-o");
  var wk6lab0 = new labsObj("AJAX HTML","A lab covering AJAX reading from HTML.","./assets/templates/weeks/06/lab0/data-html.html", "fa fa-html5");
  var wk6lect2 = new labsObj("Lab notes on AJAX(JSON)","Ajax(JSON) Exercise.","./assets/templates/weeks/06/Second_AJAX_Lab.pdf", "fa fa-file-o");
  var wk6lab1 = new labsObj("AJAX JSON","A lab covering AJAX reading from JSON.","./assets/templates/weeks/06/lab1/data-json.html", "fa fa-html5");
  var wk6lect3 = new labsObj("Lab notes on AJAX(XML)","Lab Exercise on Web Storage.","./assets/templates/weeks/06/Third_AJAX_Lab.pdf", "fa fa-file-o");
  var wk6lab2 = new labsObj("AJAX XML","A lab covering AJAX reading from XML.","./assets/templates/weeks/06/lab2/data-xml.html", "fa fa-html5");

  var wk7lect1 = new labsObj("Notes on JSONP","Ajax(JSONP) Notes(PDF).","./assets/templates/weeks/07/JSONP_Explanation.pdf", "fa fa-file-o");
  var wk7lect2 = new labsObj("Lab notes on AJAX(JSONP)","Ajax(JSONP) Exercise.","./assets/templates/weeks/07/First_JSONP_Lab.pdf", "fa fa-file-o");
  var wk7lab0 = new labsObj("AJAX JSONP","A lab covering AJAX reading from JSONP.","./assets/templates/weeks/07/lab0/data-jsonp.html", "fa fa-html5");
  var wk7lect3 = new labsObj("1st jQuery Lab notes(pdf)","A lab covering jQuery.","./assets/templates/weeks/07/First_jQuery_Exercise.pdf", "fa fa-file-o");
  var wk7lab1 = new labsObj("1st jQuery Lab","1st Lab Exercise on jQuery.","./assets/templates/weeks/07/lab1/basic-example.html", "fa fa-html5");
  var wk7lect4 = new labsObj("2nd jQuery Lab notes(pdf)","A 2nd lab covering jQuery.","./assets/templates/weeks/07/Second_jQuery_Exercise.pdf", "fa fa-file-o");
  var wk7lab2 = new labsObj("2nd jQuery Lab","2nd Lab Exercise on jQuery.","./assets/templates/weeks/07/lab2/looping.html", "fa fa-html5");
  var wk7lect5 = new labsObj("3rd jQuery Lab notes(pdf)","A 3rd lab covering jQuery.","./assets/templates/weeks/07/Third_jQuery_Exercise.pdf", "fa fa-file-o");
  var wk7lab3 = new labsObj("3rd jQuery Lab","3rd Lab Exercise on jQuery.","./assets/templates/weeks/07/lab3/ready.html", "fa fa-html5");

  var wk8lect1 = new labsObj("Lecture on SDL and Agile","SDL and Agile Lecture(PDF).","./assets/templates/weeks/08/Lecture2_Software_Development_Life_Cycle.pdf", "fa fa-file-o");
  var wk8lect2 = new labsObj("Credit Card Plugin Notes","Credit Card Plugin(PDF).","./assets/templates/weeks/08/Fourth_jQuery_Exercise.pdf", "fa fa-file-o");
  var wk8lab0 = new labsObj("Credit Card Plugin Example","A lab covering Credit Card Plugin.","./assets/templates/weeks/08/lab0/creditcardjQuery.html", "fa fa-html5");
  var wk8lect3 = new labsObj("5th jQuery Lab notes(pdf)","A 5th lab covering jQuery.","./assets/templates/weeks/08/Fifth_jQuery_Exercise.pdf", "fa fa-file-o");
  var wk8lab1 = new labsObj("5th jQuery Lab","5th Lab Exercise on jQuery.","./assets/templates/weeks/08/lab1/data-jsonp.html", "fa fa-html5");
  var wk8lect4 = new labsObj("6th jQuery Lab notes(pdf)","A 6th lab covering jQuery.","./assets/templates/weeks/08/Sixth_jQuery_Exercise.pdf", "fa fa-file-o");
  var wk8lab2 = new labsObj("6th jQuery Lab","6th Lab Exercise on jQuery.","./assets/templates/weeks/08/lab2/data-xml.html", "fa fa-html5");
});
