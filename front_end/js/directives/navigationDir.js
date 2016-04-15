var app = angular.module('HueMeApp');

app.directive('navigationDir', function($state, regLogService) {
	return {
		restrict: "E",
		templateUrl: "templates/navigation.html",
		controller: function($scope, $timeout, $rootScope) {
			$scope.nav = {};
			$scope.nav.postingMode = false;
			this.startSearch = function(tags, users) {
				$rootScope.filterTags = tags;
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
				 if($state.current.name != "search") {
					 $state.go('search');
				 } else {
					 $timeout(function() {
						 $scope.$broadcast('newPost');

					 }, 50);
				 }
			 });	
		},
		controllerAs: "navigationCtrl"
	};
});
