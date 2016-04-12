var app = angular.module("HueMeApp");
app.service("regLogService", function($http, $localStorage, urlService) {
	var self = this;
	this.registerUser = function(userData, callback){
		$http.post(urlService.registerUrl,{'user': userData })
		.then(function(response) {
			var user = response.data;
			$localStorage.user = user;
			$localStorage.isLoggedIn = true;
			callback(true);
		}, function(error) {
			callback(false);
		});
	};
	this.logUserIn = function(userData, callback) {
		$http.post(urlService.loginUrl, {'user': userData}) 
			.then(function(response) {
					var user = response.data;
					if(user) {
						$localStorage.user = user;
						$localStorage.isLoggedIn = true;
						callback(true);
					} else {
						$localStorage.isLoggedIn = false;
						callback(false);
					}
				},
				function(error) {
					console.log('here');
					callback(false);
				});
	};
	this.logOut = function(callback) {
		console.log('logout');
		$localStorage.isLoggedIn = false;
		$localStorage.user = {};
		callback();
	};
});