var app = angular.module("HueMeApp");

app.directive("loginDir", function(regLogService, $state) {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/login.html",
		controller: function() {
			var self = this;
			this.formModel = {};
			this.test = "test";
			this.HideShow = function(){
				if(this.inputType == 'password')
					this.inputType = 'text';
				else
					this.inputType = 'password';
			};
			this.login = function() {
				regLogService.logUserIn(self.formModel, function(isIn) {
					if(isIn) {
						$state.go('myprofile');
					} else {
						console.log('wrong credentials');
					}
				});
			};

		},
		controllerAs: "loginCtrl"
	};
});
