var app = angular.module("HueMeApp");
app.service('commentingService', function($http, urlService) {
	this.sendComment = function(commentData) {
		console.log(commentData);
		$http.post(urlService.sendComment, {"comment": commentData})
			.then(function(success) {
				console.log(success);
			}, function(error) {
				console.log(error);
			});
	};

	this.getComments = function(postId, callback) {
		 $http.get(urlService.commentsByPostUrl + "/" + postId)
	 		.then(function(success) {
	  			callback(success.data);
	  		}, function(error) {
	  			callback(error);
	  		});
	};
});
