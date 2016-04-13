var app = angular.module('HueMeApp');

app.directive('navigationDir', function($state, regLogService) {
	return {
		restrict: "E",
		templateUrl: "templates/navigation.html",
		controller: function($scope) {
			$scope.nav = {};
			$scope.nav.postingMode = false;
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

			 $scope.$on('closeAddPost', function(event) {
				 $scope.nav.postingMode = false;
				 $scope.$broadcast('newPost');
			 });
		},
		controllerAs: "navigationCtrl"
	};
});
