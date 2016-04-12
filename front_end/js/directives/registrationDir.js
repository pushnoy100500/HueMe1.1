var app = angular.module("HueMeApp");

app.directive("registrationDir", function(regLogService, $state) {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/registration.html",
		controller: function(regLogService, $state){
			this.formModel = {};
			this.inputType = "password";

			this.showPass = function(){
				this.inputType = 'text';
			};

			this.hidePass = function(){
				this.inputType = 'password';
			};

			this.formSubmit = function(){
			regLogService.registerUser(this.formModel, function(isComplete) {
				if(isComplete) {
					$state.go('myprofile');
				} else {
					//console.log('fuuck');
				}
			});


			};
		},
		controllerAs: "ctrl"
	};
});
