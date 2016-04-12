var app = angular.module("HueMeApp");

app.directive("landingDir", function() {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/landing.html",
		controller: function() {

		},
		controllerAs: "landingCtrl"
	};
});
