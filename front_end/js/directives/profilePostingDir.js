var app = angular.module("HueMeApp");
app.directive("profilePostingDir", function(postingService) {
	return {
		restrict: "E",
		scope: true,
		require: '^myProfileDir',
		templateUrl: "templates/profilePosting.html",
		controller: function($scope) {
			this.postingData = {};
			this.hashTag = '';
			this.hashTags = [];
			this.makePost = function(event) {
				//prevent page reloading
				event.preventDefault();
				// put hastags together, add user id
				this.postingData.tags = this.hashTags.join();
				this.postingData.userId = $scope.$parent.profileId;
				//post a message
				console.log(this.postingData);
				postingService.sendPost(this.postingData);
				//clear up the scope
				this.postingData = {};
				this.hashTags = [];				
			};
			this.moodColours = postingService.moodColours;
			this.addHashTag = function(event, hashTag) {
				if(event.which === 32 || event.which === 13) {
					this.hashTags.push(hashTag);
					this.hashTag = '';
				}

			};
			this.removeHashTag = function(index) {
				this.hashTags.splice(index, 1);
			};
		},
		controllerAs: "profilePostingCtrl"
	};
});
