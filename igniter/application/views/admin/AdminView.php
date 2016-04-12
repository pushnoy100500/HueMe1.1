<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//$this->load->library('table');
/*echo '<pre>';
var_dump($users);
echo '</pre>';
*/
//echo $this->table->generate($users);
//


?>
<!DOCTYPE html>
<html>
<head><title>Admin Area</title></head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js"></script>
<script src="assets/js/main.js"></script>
<link rel="stylesheet" href="assets/css/main.css" />

<body>

	<div class="container">

		<h1>Admin Area</h1>
		<ul class="nav nav-tabs nav-justified">
			<li class="active"><a data-toggle="tab" href="#main">Main</a></li>
			<li><a data-toggle="tab" href="#user">Users</a></li>
			<li><a data-toggle="tab" href="#post">Posts</a></li>  
		</ul>
		<hr/>
		<div class="tab-content">
			<div id="main" class="tab-pane">
				<h2>Main Summury</h2>
				<span class="label label-default">Number Of Users</span><?php echo $main['user_count']; ?><br>
				<span class="label label-default">Number Of Posts</span><?php echo $main['post_count']; ?>

			</div>

			<div id="user" class="tab-pane">
				<table class="table table-striped" id="users">

				</table>

			</div>

			<div id="post" class="tab-pane">
				<h2>Posts</h2>

			</div>
		</div>
	</div>
	<script>
		var json = '<?php echo json_encode($users);?>'; 
		createTable(json);
	</script>
</body>
</html>