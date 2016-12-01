<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>

<div class="inner">
	<header class="major">
		<h2>Assessment 1</h2><br>
		<h3>Pierce Jordan First Web Applications Assessment</h3>
		<h1>My Attempt and provided solution</h1>
	</header>
	<div class="features">
		<div class="feature" ng-repeat="lab in labsArr.slice(84,91)">
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
