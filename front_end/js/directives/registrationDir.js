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
			this.checked = {
				age: false,
				tos: false
			};
			this.tosErr = false;
			this.ageErr = false;

			this.showPass = function(){
				this.inputType = 'text';
			};

			this.hidePass = function(){
				this.inputType = 'password';
			};

			this.formSubmit = function(){
				if(this.checked.age && this.checked.tos) {
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
				} else {
					this.tosErr = !this.checked.tos;
					this.ageErr = !this.checked.age;
				}
			};
		},
		controllerAs: "ctrl"
	};
});
