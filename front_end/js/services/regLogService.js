var app = angular.module("HueMeApp");
app.service("regLogService", function($http, $localStorage, urlService) {
	var self = this;
	this.registerUser = function(userData, callback){

		$http.post(urlService.registerUrl,{'user': userData })
		.then(function(response) {
			var user = response.data;
			console.log(user);
			if(user.username_exist == 1 || user.email_exist == 1) {
				callback({
					'success': false,
					'username_exist': user.username_exist,
					'email_exist': user.email_exist
				});
			} else {
				$localStorage.user = user;
				$localStorage.isLoggedIn = true;
				user.success = true;
				callback(user);
			}
			
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