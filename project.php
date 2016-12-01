<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>

<div class="inner">
	<header class="major">
		<h2>Pierce Jordan - Web Application Project</h2><br>
		<h3>This is my Project Submission</h3>
		<h1>This page contains links to Project Specs, Install Instructions and my Project Files</h1>
	</header>
	<div class="features">
		<div class="feature" ng-repeat="lab in labsArr.slice(81,84)">
			<a href={{lab.link}}><i class="{{lab.icon}}"></i></a>
			<h3>{{lab.week}}</h3>
			<p>{{lab.desc}}</p>
		</div>
	</div>
</div>
</section>
<?php
include './assets/templates/overallFooter.php';
?>
