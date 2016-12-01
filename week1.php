<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>

<div class="inner">
	<header class="major">
		<h2>Week One</h2><br>
		<h3>This week we looked at the module content with some revision</h3>
		<h1>Just went through briefly what topics would be covered this semester.</h1>
	</header>
	<div class="features">
		<div class="feature" ng-repeat="lab in labsArr.slice(12,18)">
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
