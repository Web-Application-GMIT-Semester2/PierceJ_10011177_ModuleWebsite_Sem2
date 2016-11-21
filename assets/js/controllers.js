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
  var misc2 = new labsObj("Assessment 1", "This is a zip file to my first assessment with my answer and the correct solution.", "./assets/templates/weeks/assessments/assessment1.zip","fa fa-file-archive-o");

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

});
