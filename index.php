<?php
include './assets/templates/overallHeader.php';
include './assets/templates/banner.php';
?>

				<div style="overflow-x:auto;">
					<table>
						<tr>
							<th class="header">Lectures</th>
							<th class="header">Description</th>
							<th class="header">Link</th>
						</tr>
						<tr ng-repeat="lab in labsArr.slice(0,1)">
							<td class="header">{{lab.week}}</td>
							<td class="header">{{lab.desc}}</td>
							<td class="header"><a href={{lab.link}}><i class={{lab.icon}} aria-hidden="true"></i></a></td>
						</tr>
					</table>
					<table>
						<tr>
							<th class="header">Week</th>
							<th class="header">Description</th>
							<th class="header">Link</th>
						</tr>
						<tr ng-repeat="lab in labsArr.slice(1,9)">
							<td class="data">{{lab.week}}</td>
							<td class="data">{{lab.desc}}</td>
							<td class="data"><a href={{lab.link}}><i class="fa fa-link" aria-hidden="true"></i></a></td>
						</tr>
					</table>
					<table style="overflow-x:auto;">
						<tr>
							<th>Miscellanous</th>
							<th>Brief Description</th>
							<th>Project Link</th>
						</tr>
						<tr ng-repeat="lab in labsArr.slice(9,11)">
							<td class="data">{{lab.week}}</td>
							<td class="data">{{lab.desc}}</td>
							<td class="data"><a href={{lab.link}}><i class="{{lab.icon}}" aria-hidden="true"></i></a></td>
						</tr>
					</table>
				</div>
			</section>
<?php
include './assets/templates/overallFooter.php';
?>
