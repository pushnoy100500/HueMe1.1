var app = angular.module("HueMeApp");
app.service('recentPosts', function($http){
	this.getRecentPosts = function(){
		return $http({
					  method: 'GET',
					  url: 'http://24.57.53.41/git/master/HueMe/index.php/Home'
					});
	};
});
