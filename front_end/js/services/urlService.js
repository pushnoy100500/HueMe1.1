var app = angular.module("HueMeApp");
app.service('urlService', function() {
	this.recentPostsUrl = "http://localhost:8888/CIHueMe/index.php/getRecent/6";
	this.loginUrl = "http://localhost:8888/CIHueMe/index.php/login";
	this.registerUrl = "http://localhost:8888/CIHueMe/index.php/register";
	this.updateProfUrl = "http://localhost:8888/CIHueMe/index.php/updateProfile";
	this.leavePostUrl = "http://localhost:8888/CIHueMe/index.php/post";
	this.postsByUserUrl = "http://localhost:8888/CIHueMe/index.php/postsByUser/";
	this.sendComment = "http://localhost:8888/CIHueMe/index.php/reply";
	this.commentsByPostUrl = "http://localhost:8888/CIHueMe/index.php/Posts/getComments";

	// this url needs to be changed once there is a route for all posts
	// using get posts by ten now
	this.allPostsUrl = "http://localhost:8888/CIHueMe/index.php/postsByTen/0";
	this.aboutUrl = "http://localhost:8888/CIHueMe/index.php/about";
});
