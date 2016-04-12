var app = angular.module("HueMeApp");
app.directive('searchDir', function() {
	return {
		restrict: "E",
		templateUrl: "templates/search.html",
		controller: function() {

		},
		controllerAs: "searchCtrl"
	};
});
