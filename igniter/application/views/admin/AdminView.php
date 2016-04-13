<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//$this->load->library('table');
/*echo '<pre>';
var_dump($users);
echo '</pre>';
*/
//echo $this->table->generate($users);
//
//
/*
$user = (isset($_POST['username']) ? $_POST['username'] : '');
$pass = (isset($_POST['password']) ? $_POST['pass'] : '');
*/
$user = $_POST['username'];
$pass = $_POST['pass'];
/*function loginUser($user, $pass) {
        //$json_user = $user; //json_decode($user);
        $query = "SELECT id FROM users WHERE username = '" . $user . "' AND password = '" . MD5($pass) . "' AND access_level = 5";
        $rs = $this->db->query($query);
        $id = $rs->row();
        if ($id) {
            return true;
        }else{
            return false;
        }
    } 
*/
if($_SERVER['REQUEST_METHOD'] === 'POST'){
	echo "In post";
	echo $user;
	echo $pass;
			if($user === 'admin' && $pass === '123456'){
				$_SESSION['admin_logged_in'] = true;
			}
		
	}
if(isset($_SESSION['admin_logged_in']) && $_SESSION['admin_logged_in'] === 'true'){

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
<?php 
}else{
?>
<!DOCTYPE html>
<html>
<head><title>Admin Login</title></head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js"></script>
<script src="assets/js/main.js"></script>
<link rel="stylesheet" href="assets/css/main.css" />

<body>

	<div class="container">

		<div class="panel-body">
		<h2>Admin Login</h2>
                <form class="form-horizontal" role="form" method="post">
                    <div class="form-group">
                        <label for="username" class="col-sm-3 control-label">Username</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="username" name="
                            username" placeholder="Username" required="">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputPassword3" class="col-sm-3 control-label">Password</label>
                        <div class="col-sm-9">
                            <input type="password" class="form-control" name="pass" id="inputPassword3" placeholder="Password" required="">
                        </div>
                    </div>
                    <div class="form-group last">
                        <div class="col-sm-offset-3 col-sm-9">
                            <button type="submit" class="btn btn-success btn-sm">Sign in</button>
                        </div>
                    </div>
                    </form>
	</div>
</body>
</html>

<?php
}


 ?>