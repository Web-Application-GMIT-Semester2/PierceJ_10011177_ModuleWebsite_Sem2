<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>
<!-- One -->
<section id="one" class="wrapper special">
	<div class="inner">
		<header class="major">
			<h2>Week Ten</h2><br>
			<h3>This week is the week I used to catch up on any missed labs.</h3>
			<h1>Missed labs and lectures</h1>
		</header>
		<div class="features">
			<div class="feature" ng-repeat="lab in labsArr.slice(96,105)">
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
