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
  var lecture = new labsObj("Lecture ZIP File", "Zip file with all lectures from Web Application Development Semester 2", "./assets/docs/WebAppDevLectures.zip", "fa fa-file-archive-o")

  var one = new labsObj("One", "This week we looked at the module content.", "week1.php");
  var two = new labsObj("Two", "This week we looked at the some basic JavaScript.", "week2.php");
  var three = new labsObj("Three","This week we looked at software testing (bugs/defects) and different JavaScript Object types.", "week3.php");
  var four = new labsObj("Four", "This week we looked at Error Handling and Event Listeners.", "week4.php");
  var five = new labsObj("Five", "This week we looked at Event Listeners and Web Storage.", "week5.php");
  var six = new labsObj("Six","This week we looked at Event Listeners and AJAX.", "week6.php");
  var seven = new labsObj("Seven", "This week we looked at AJAX and jQuery.", "week7.php");
  var eight = new labsObj("Eight", "This week we look at AJAX and jQuery combined with lectures on the Software Development Lifecycle and Agile", "week8.php");
  var nine = new labsObj("Nine", "This week we look at PHP and how to connect to MySQL DB Lab", "week9.php");
  var ten = new labsObj("Ten", "This week I used to catch up on missed lectures and labs", "week10.php");

  var misc1 = new labsObj("Project", "This is some detail including a link to my Project.", "project.php","fa fa-folder-open");
  var misc2 = new labsObj("Assessment 1", "This is a zip file to my first assessment with my answer and the correct solution.", "assessment1.php", "fa fa-link");
  var misc3 = new labsObj("Assessment 2", "This is a zip file to my first assessment with my answer.", "assessment2.php", "fa fa-link");

  var wk1Lect1 = new labsObj("Module Introduction", "An Introduction to the Module Topics and Assessments (PDF)", "./assets/templates/weeks/01/WAD_ModuleIntro.pdf", "fa fa-file-pdf-o");
  var wk1Lect2 = new labsObj("Javascript Basics Lecture", "Revision Lecture 1 (PDF)", "./assets/templates/weeks/01/JavascriptBasics_Lecture.pdf", "fa fa-file-pdf-o");
  var wk1Lect3 = new labsObj("Functions Lecture", "Revision Lecture 2 (PDF)", "./assets/templates/weeks/01/Functions_Lecture.pdf", "fa fa-file-pdf-o");
  var wk1Lect4 = new labsObj("Decisions and Loops Lecture", "Revision Lecture 3 (PDF)", "./assets/templates/weeks/01/DecisionsAndLoops_Lecture.pdf", "fa fa-file-pdf-o");
  var wk1Lect5 = new labsObj("Lab One Notes", "Lab One Notes (PDF)", "./assets/templates/weeks/01/HTML_CSS_Javascript_Lab.pdf", "fa fa-file-pdf-o");
  var wk1Lab1 = new labsObj("Lab One", "A lab was posted on moodle along with the solution and we were advised to complete the lab in our own time.", "./assets/templates/weeks/01/lab1/check_order.html", "fa fa-html5");
  var wk1Lect6 = new labsObj("Lab Two Notes", "Lab Two Notes (PDF)", "./assets/templates/weeks/01/Javascript_Arrays_Lab.pdf", "fa fa-file-pdf-o");
  var wk1Lab2 = new labsObj("Lab Two", "A lab was posted on moodle along with the solution and we were advised to complete the lab in our own time.", "./assets/templates/weeks/01/lab2/array-literal.html", "fa fa-html5");

  var wk2Lect1 = new labsObj("JavaScript Functions Lab Notes","A simple functions lab Add 2 numbers. (PDF)","./assets/templates/weeks/02/Javascript_Functions_Lab.pdf", "fa fa-file-pdf-o");
  var wk2Lect3 = new labsObj("Test Cases","A sample test case based on the simple functions lab (PDF)","./assets/templates/weeks/02/TestCases.pdf", "fa fa-file-pdf-o");
  var wk2lab0 = new labsObj("JavaScript Functions Lab","The completed JavaScript Functions Lab","./assets/templates/weeks/02/lab4/basic.html", "fa fa-html5");
  var wk2Lect2 = new labsObj("JavaScript Objects Literal Notes","Hotel Object lab using Object Literal Notation (PDF)","./assets/templates/weeks/02/JavaScript Objects Exercise 1.pdf", "fa fa-file-pdf-o");
  var wk2lab1 = new labsObj("JavaScript Objects","A lab covering JavaScript Objects. Literal Notation.","./assets/templates/weeks/02/lab3/object-literal.html", "fa fa-html5");

  var wk3Lect1 = new labsObj("Software 'Bugs' Lectures","An Introduction to Software Testing. (PDF)","./assets/templates/weeks/03/Lecture_Bugs.pdf", "fa fa-file-pdf-o");
  var wk3Lect2 = new labsObj("Expensive 'Bugs'","Infamous and Expensive 'Bugs'. (PDF)","./assets/templates/weeks/03/Infamous and Expensive Bugs.pdf", "fa fa-file-pdf-o");
  var wk3lab2 = new labsObj("Software Testing Sample","Software Testing sample html.","./assets/templates/weeks/03/lab0/BugSample.html", "fa fa-html5");
  var wk3Lect3 = new labsObj("Objects Constructor Lab Notes","Hotel Lab (2) (PPTX)","./assets/templates/weeks/03/exercise2.pptx", "fa fa-file-powerpoint-o");
  var wk3lab0 = new labsObj("Constructor Objects","A lab covering constructor JavaScript Objects.","./assets/templates/weeks/03/lab1/object-constructor.html", "fa fa-html5");
  var wk3Lect4 = new labsObj("Multiple Objects Lab Notes","Hotel Lab (3) (PPT)","./assets/templates/weeks/03/Lecture_Objects_Exercise.ppt", "fa fa-file-powerpoint-o");
  var wk3lab1 = new labsObj("Multiple Objects","A lab covering Multiple JavaScript Objects.","./assets/templates/weeks/03/lab2/multiple-objects.html", "fa fa-html5");

  var wk4lect = new labsObj("Error Handling Lectures","Lecture Notes on Error Handling. (PDF)","./assets/templates/weeks/04/Javascript Exception Handling Lab.pdf", "fa fa-file-pdf-o");
  var wk4lab5 = new labsObj("Error Handling Lab","A lab on Error Handling.","./assets/templates/weeks/04/lab5/exception_lab.html", "fa fa-html5");
  var wk4pdf0 = new labsObj("Event Types Lab","Lab Notes on Event Types. (PDF)","./assets/templates/weeks/04/JavaScript Events Lab 1.pdf", "fa fa-file-pdf-o");
  var wk4lab0 = new labsObj("Event Attributes","A lab covering event attributes.","./assets/templates/weeks/04/lab0/event-attributes.html", "fa fa-html5");
  var wk4lab1 = new labsObj("Event Handler","A lab covering Event handler.","./assets/templates/weeks/04/lab1/event-handler.html", "fa fa-html5");
  var wk4lab2 = new labsObj("Event listener","A lab covering Event listeners.","./assets/templates/weeks/04/lab2/event-listener.html", "fa fa-html5");
  var wk4pdf1 = new labsObj("Event Flow Lab","Lab Notes on Event Flows. (PDF)","./assets/templates/weeks/04/JavaScript Events Lab 2.pdf", "fa fa-file-pdf-o");
  var wk4lab3 = new labsObj("Event Flow Bubble","A lab covering Event Flow Bubble..","./assets/templates/weeks/04/lab3/event-flow-bubble.html", "fa fa-html5");
  var wk4lab4 = new labsObj("Event Flow Capture","A lab covering Event Flow Capture..","./assets/templates/weeks/04/lab4/event-flow-capture.html", "fa fa-html5");

  var wk5lect1 = new labsObj("Lecture Web Storage","Lecture Notes on Web Storage. (PDF)","./assets/templates/weeks/05/Lecture_WebStorage.pdf", "fa fa-file-pdf-o");
  var wk5lect2 = new labsObj("Web Storage Lab","A lab covering web storage. (PDF)","./assets/templates/weeks/05/JavaScript Web Storage Exercise.pdf", "fa fa-file-pdf-o");
  var wk5lab2 = new labsObj("Web Storage","A lab covering web storage.","./assets/templates/weeks/05/lab2/local_storage.html", "fa fa-html5");
  var wk5lect3 = new labsObj("Event Object","A lab covering event objects. (TXT)","./assets/templates/weeks/05/EventObject.txt", "fa fa-file");
  var wk5lab3 = new labsObj("Event Object Lab","A lab covering event objects.","./assets/templates/weeks/05/lab3/event-listener-with-event-object.html", "fa fa-html5");
  var wk5lect2 = new labsObj("Events Delegation Lab","Lab notes on Event Delegation. (PDF)","./assets/templates/weeks/05/JavaScript Events Lab 4.pdf", "fa fa-file-pdf-o");
  var wk5lab0 = new labsObj("Event Delegation","A lab covering event delegation.","./assets/templates/weeks/05/lab0/event-delegation.html", "fa fa-html5");

  var wk6lect1 = new labsObj("Lab notes on AJAX(HTML)","Ajax(HTML) Exercise.","./assets/templates/weeks/06/First_AJAX_Lab.pdf", "fa fa-file-pdf-o");
  var wk6lab0 = new labsObj("AJAX HTML","A lab covering AJAX reading from HTML.","./assets/templates/weeks/06/lab0/data-html.html", "fa fa-html5");
  var wk6lect2 = new labsObj("Lab notes on AJAX(JSON)","Ajax(JSON) Exercise.","./assets/templates/weeks/06/Second_AJAX_Lab.pdf", "fa fa-file-pdf-o");
  var wk6lab1 = new labsObj("AJAX JSON","A lab covering AJAX reading from JSON.","./assets/templates/weeks/06/lab1/data-json.html", "fa fa-html5");
  var wk6lect3 = new labsObj("Lab notes on AJAX(XML)","Lab Exercise on Web Storage.","./assets/templates/weeks/06/Third_AJAX_Lab.pdf", "fa fa-file-pdf-o");
  var wk6lab2 = new labsObj("AJAX XML","A lab covering AJAX reading from XML.","./assets/templates/weeks/06/lab2/data-xml.html", "fa fa-html5");
  var wk6lect4 = new labsObj("Event listener Example","Event listener Example Notes. (PDF)","./assets/templates/weeks/06/Javascript_Event_Listener_Lab.pdf", "fa fa-file-pdf-o");
  var wk6lab3 = new labsObj("Event listener Example.","Event listener Example Lab", "./assets/templates/weeks/06/lab3/register_build.html", "fa fa-html5");

  var wk7lect1 = new labsObj("Notes on JSONP","Ajax(JSONP) Notes(PDF).","./assets/templates/weeks/07/JSONP_Explanation.pdf", "fa fa-file-pdf-o");
  var wk7lect2 = new labsObj("Lab notes on AJAX(JSONP)","Ajax(JSONP) Exercise.","./assets/templates/weeks/07/First_JSONP_Lab.pdf", "fa fa-file-pdf-o");
  var wk7lab0 = new labsObj("AJAX JSONP","A lab covering AJAX reading from JSONP.","./assets/templates/weeks/07/lab0/data-jsonp.html", "fa fa-html5");
  var wk7lect3 = new labsObj("1st jQuery Lab notes(PDF)","A lab covering jQuery.","./assets/templates/weeks/07/First_jQuery_Exercise.pdf", "fa fa-file-pdf-o");
  var wk7lab1 = new labsObj("1st jQuery Lab","1st Lab Exercise on jQuery.","./assets/templates/weeks/07/lab1/basic-example.html", "fa fa-html5");
  var wk7lect4 = new labsObj("2nd jQuery Lab notes(PDF)","A 2nd lab covering jQuery.","./assets/templates/weeks/07/Second_jQuery_Exercise.pdf", "fa fa-file-pdf-o");
  var wk7lab2 = new labsObj("2nd jQuery Lab","2nd Lab Exercise on jQuery.","./assets/templates/weeks/07/lab2/looping.html", "fa fa-html5");
  var wk7lect5 = new labsObj("3rd jQuery Lab notes(PDF)","A 3rd lab covering jQuery.","./assets/templates/weeks/07/Third_jQuery_Exercise.pdf", "fa fa-file-pdf-o");
  var wk7lab3 = new labsObj("3rd jQuery Lab","3rd Lab Exercise on jQuery.","./assets/templates/weeks/07/lab3/ready.html", "fa fa-html5");

  var wk8lect1 = new labsObj("Lecture on SDL and Agile","SDL and Agile Lecture. (PDF).","./assets/templates/weeks/08/Lecture2_Software_Development_Life_Cycle.pdf", "fa fa-file-pdf-o");
  var wk8lect2 = new labsObj("Credit Card Plugin Notes","Credit Card Plugin. (PDF).","./assets/templates/weeks/08/Fourth_jQuery_Exercise.pdf", "fa fa-file-pdf-o");
  var wk8lab0 = new labsObj("Credit Card Plugin Example","A lab covering Credit Card Plugin.","./assets/templates/weeks/08/lab0/cc_validator.html", "fa fa-html5");
  var wk8lect3 = new labsObj("5th jQuery Lab notes","A 5th lab covering jQuery. (PDF)","./assets/templates/weeks/08/Fifth_jQuery_Exercise.pdf", "fa fa-file-pdf-o");
  var wk8lab1 = new labsObj("5th jQuery Lab","5th Lab Exercise on jQuery.","./assets/templates/weeks/08/lab1/data-jsonp.html", "fa fa-html5");
  var wk8lect4 = new labsObj("6th jQuery Lab notes","A 6th lab covering jQuery. (PDF)","./assets/templates/weeks/08/Sixth_jQuery_Exercise.pdf", "fa fa-file-pdf-o");
  var wk8lab2 = new labsObj("6th jQuery Lab","6th Lab Exercise on jQuery.","./assets/templates/weeks/08/lab2/data-xml.html", "fa fa-html5");

  var wk9lect1 = new labsObj("Lecture on PHP","PHP Lecture. (PDF).","./assets/templates/weeks/09/Lecture_PHP.pdf", "fa fa-file-pdf-o");
  var wk9labPDF1 = new labsObj("Lab Notes on PHP","PHP Lab. (PDF).","./assets/templates/weeks/09/First_PHP_Lab.pdf", "fa fa-file-pdf-o");
  var wk9lab1 = new labsObj("Lab on PHP","PHP Lab, Connect to MySQL DB. Not Working as file needs to be copied and DB created.","./assets/templates/weeks/09/lab0/phpinfo.php", "fa fa-html5");
  var wk9sql1 = new labsObj("SQL File for Lab 1","Download SQL and import to web_apps DB on MySQL","./assets/templates/weeks/09/web_apps.sql", "fa fa-database");
  var wk9labPDF2 = new labsObj("Lab 2 Exercise 1,2 & 3 on PHP","PHP Lab 2 Exercise 1,2 & 3. (PDF).","./assets/templates/weeks/09/Second_PHP_Lab.pdf", "fa fa-file-pdf-o");
  var wk9lab2Ex1 = new labsObj("2nd Lab Exercise 1 on PHP","Lab 2 Exercise 1 PHP Lab.","./assets/templates/weeks/09/lab1/ex1.php", "fa fa-code");
  var wk9lab2Ex2 = new labsObj("2nd Lab Exercise 2 & 3 on PHP","2nd & 3rd PHP Exercise Lab 2.","./assets/templates/weeks/09/lab1/index.html", "fa fa-code");

  var projinst = new labsObj("Install Instructions","Install Instructions for website. (PDF)","./assets/templates/weeks/project/Installation Guide.pdf", "fa fa-file-pdf-o");
  var projspecs = new labsObj("User Guide","User Guide for 'RazorBurn'. (PDF)","./assets/templates/weeks/project/UserGuide.pdf", "fa fa-file-pdf-o");
  var projfiles = new labsObj("Project github link","Link to the github repository for my project","https://github.com/Web-Application-GMIT-Semester2/PierceJ_10011177_Project", "fa fa-github");

  var assess1pdf = new labsObj("Assessment 1","2 Questions 1 Error Handling and 1 Events","./assets/templates/weeks/assessments/1/javascript_assessment.pdf","fa fa-file-pdf-o");
  var assess1Q1 = new labsObj("Question 1","Unanswered Question 1","./assets/templates/weeks/assessments/1/q1/error.html","fa fa-times-circle-o");
  var assess1Q2 = new labsObj("Question 2","Unanswered Question 2","./assets/templates/weeks/assessments/1/q2/addNames.html","fa fa-times-circle-o");
  var assess1A1 = new labsObj("Attempt 1","My Attempt Question 1","./assets/templates/weeks/assessments/1/a1/error.html","fa fa-question-circle");
  var assess1A2 = new labsObj("Attempt 2","My Attempt Question 2","./assets/templates/weeks/assessments/1/a2/addNames.html","fa fa-question-circle");
  var assess1S1 = new labsObj("Solution 1","Question 1 - Solution","./assets/templates/weeks/assessments/1/s1/error.html","fa fa-check-circle");
  var assess1S2 = new labsObj("Solution 2","Question 2 - Solution","./assets/templates/weeks/assessments/1/s2/addNames.html","fa fa-check-circle-o");

  var assess2pdf = new labsObj("Assessment 2","3 Questions AJAX and jQuery","./assets/templates/weeks/assessments/2/WebApplicationDevelopment_assessment2.pdf","fa fa-file-pdf-o");
  var assess2q1 = new labsObj("Assessment 2 Q1","AJAX(JSON) and DOM","./assets/templates/weeks/assessments/2/Q1/index.html","fa fa-html5");
  var assess2q2 = new labsObj("Assessment 2 Q2","AJAX(JSON) and jQuery","./assets/templates/weeks/assessments/2/Q2/index.html","fa fa-html5");
  var assess2q3 = new labsObj("Assessment 2 Q3","AJAX(JSONP)","./assets/templates/weeks/assessments/2/Q3/index.html","fa fa-html5");
  var assessjson = new labsObj("Assessment 2 JSON File","JSON file for Q1 & Q2","./assets/templates/weeks/assessments/2/league_table.json","fa fa-file");

  var missedWeek1 = new labsObj("Create Page Lab Notes","Create Page Lab Notes. (TXT).","./assets/templates/weeks/10/README.txt", "fa fa-file");
  var missedWeek2 = new labsObj("Create Page Lab","Create Page Example.","./assets/templates/weeks/10/lab0/create_page.html", "fa fa-html5");
  var phppdf1 = new labsObj("Create User PHP Lab Notes","Lab Notes on Creating User PHP (PDF).","./assets/templates/weeks/10/lab1/Third_PHP_Lab.pdf", "fa fa-file-pdf-o");
  var php3 = new labsObj("Create User PHP","Register a user on a DB using PHP.","./assets/templates/weeks/10/lab1/register.php", "fa fa-code");
  var phppdf2 = new labsObj("Logging in PHP Lab Notes","Lab Notes on Logging in User PHP (PDF).","./assets/templates/weeks/10/lab2/Fourth_PHP_Lab.pdf", "fa fa-file-pdf-o");
  var php4 = new labsObj("Login User","Login to DB using PHP.","./assets/templates/weeks/10/lab2/login.php", "fa fa-code");
  var phppdf3 = new labsObj("Cookies and Session","Lab Notes on Cookies and Session (PDF).","./assets/templates/weeks/10/lab3/Fifth_PHP_Lab.pdf", "fa fa-file-pdf-o");
  var php5a = new labsObj("Cookies Lab","Saving info using Cookies.","./assets/templates/weeks/10/lab3/cookies/welcome.php", "fa fa-code");
  var php5b = new labsObj("Sessions Lab","Saving info using Sessions.","./assets/templates/weeks/10/lab3/sessions/storage.php", "fa fa-code");
});
