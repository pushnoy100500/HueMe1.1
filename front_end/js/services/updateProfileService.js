var app = angular.module("HueMeApp");
app.service("updateProfileService", function($http, $localStorage, urlService) {
	this.updateUser = function(userData, callback){
		$http.post(urlService.updateProfUrl, {'user': userData })
		.then(function(response) {
			console.log(response);
			callback(response.data.result);
		}, function(error) {
			console.log(error);
			callback(false);
		});
	};
});
