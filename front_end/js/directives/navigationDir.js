var app = angular.module('HueMeApp');

app.directive('navigationDir', function($state, regLogService) {
	return {
		restrict: "E",
		templateUrl: "templates/navigation.html",
		controller: function() {
			this.postingMode = false;
			this.startSearch = function(tags, users) {
				$state.go('search',
					{
						data: {
							tags: tags,
							users: users
						}
					});

			};
			this.logOut = function() {
		        regLogService.logOut(function() {
		          $state.go('landing');
		        });
	     	};
		},
		controllerAs: "navigationCtrl"
	};
});
