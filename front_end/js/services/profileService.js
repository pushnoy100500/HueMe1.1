var app = angular.module("HueMeApp");
app.service('profileService', function($http, urlService) {
  	this.getProfile = function(id, callback) {
  		$http.get(urlService.getProfileUrl + id)
  					.then(function(success) {
  						console.log(success)
  						callback(success.data[0]);
  					}, function(error) {
  						console.log(error);
  					})
  	}
});
