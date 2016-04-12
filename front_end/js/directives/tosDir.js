var app = angular.module("HueMeApp");

app.directive("tosDir", function() {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/tos.html",
		controller: function() {
			this.name = "JOsh";
		},
		controllerAs: "tosCtrl"
	};
});
