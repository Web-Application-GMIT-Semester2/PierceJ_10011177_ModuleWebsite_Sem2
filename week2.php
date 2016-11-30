<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>
<!-- One -->
<section ng-controller="MainController" id="one" class="wrapper special">
	<div class="inner">
		<header class="major">
			<h2>Week Two</h2><br>
			<h3>This week we looked at basic JavaScript, Functions and Objects.</h3>
			<h1>Just went over basic JavaScript functionality.</h1>
		</header>
		<div class="features">
			<div ng-repeat="lab in labsArr.slice(16,19)" class="feature">
				<a href={{lab.link}}><i class={{lab.icon}}></i></a>
				<h3>{{lab.week}}</h3>
				<p>{{lab.desc}}</p>
			</div>
		</div>
	</div>
</section>
<?php
include './assets/templates/overallFooter.php';
?>
