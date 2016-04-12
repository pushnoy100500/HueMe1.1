var app = angular.module("HueMeApp");
app.service('urlService', function() {
	this.recentPostsUrl = "http://localhost:8888/hueme/";
	this.loginUrl = "http://localhost:8888/hueme/login";
	this.registerUrl = "http://localhost:8888/hueme/register";
	this.updateProfUrl = "http://localhost:8888/hueme/updateProfile";
	this.leavePostUrl = "http://localhost:8888/hueme/post";
	this.postsByUserUrl = "http://localhost:8888/hueme/getAllPostsByUser";
	this.sendComment = "http://localhost:8888/hueme/reply";
	this.commentsByPostUrl = "http://localhost:8888/hueme/Posts/getComments";

	// this url needs to be changed once there is a route for all posts
	// using get posts by ten now
	this.allPostsUrl = "http://localhost:8888/hueme/index.php/postsByTen/0";
	this.aboutUrl = "http://localhost:8888/hueme/index.php/about";
});
