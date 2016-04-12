var app = angular.module('HueMeApp');

app.directive('aboutDir', function() {
	return {
		restrict: "E",
		templateUrl: "templates/about.html",
		controller: function() {
			this.postingMode = false;
		},
		controllerAs: "aboutCtrl"
	};
});
