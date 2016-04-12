var app = angular.module("HueMeApp");
app.service('postingService', function($http, $localStorage, urlService) {
	this.sendPost = function(postData) {
		postData.userId = $localStorage.user[0].id;
		$http.post(urlService.leavePostUrl, {"post": postData})
			.then(function(success) {
				console.log(success);
			}, function(error) {
				console.log(error);
			});
	};
	this.getPostsByUser = function(userId, callback) {
		$http.get(urlService.postsByUserUrl + "/" + userId)
			.then(function(success) {
				callback(success.data);
			}, function(error) {
				callback(error);
			});
	};
	this.getAllPosts = function() {
		return $http.get(urlService.allPostsUrl);
	};

	this.moodColours = {
		'1': 'Black, I\'m suffering...',
		'2': 'Blue, It\'s been better before but I\'m cool.',
		'3': 'Orange, Life is good!',
		'4': 'Red, What is love, baby don\'t hurt me.',
		'5': 'Pink, OMG! Let me take a selfie.',
		'6': 'Green, Peace!'
	};
});
