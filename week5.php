<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>
<!-- One -->
<section id="one" class="wrapper special">
	<div class="inner">
		<header class="major">
			<h2>Week Five</h2><br>
			<h3>This week we looked at event delegation and web storage.</h3>
			<h1>Short Introduction and Practical on event delegation and web storage.</h1>
		</header>
		<div class="features">
			<div class="feature" ng-repeat="lab in labsArr.slice(39,46)">
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
