var app = angular.module("HueMeApp");

app.directive("registrationDir", function(regLogService, $state) {
	return {
		restrict: "E",
		// this is a relative path to the template from index.html file
		templateUrl: "templates/registration.html",
		controller: function(regLogService, $state){
			var self = this;
			this.formModel = {};
			this.inputType = "password";
			this.username_exist = false;
			this.email_exist = false;

			this.showPass = function(){
				this.inputType = 'text';
			};

			this.hidePass = function(){
				this.inputType = 'password';
			};

			this.formSubmit = function(){
			regLogService.registerUser(this.formModel, function(user) {
				console.dir(user);	
				if(user.success) {
					self.username_exist = false;
					self.email_exist = false;
					$state.go('myprofile');					
				} else {
					self.username_exist = (user['username_exist'] == 0 ? false : true);
					self.email_exist = (user['email_exist'] == 0 ? false : true);
				}
			});


			};
		},
		controllerAs: "ctrl"
	};
});
