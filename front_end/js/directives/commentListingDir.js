var app = angular.module('HueMeApp');
app.directive('commentListingDir', function(commentingService) {
	return {
		restrict: "E",
		templateUrl: "templates/commentListing.html",
		scope: {
			dataarg: "="
		},
		controller: function($scope, commentingService, timeSinceService) {
			var self = this;
			this.waiting = true;
			this.comments = [];
			this.postIndex = $scope.dataarg.index;
			this.postId = $scope.dataarg.posts[this.postIndex].id;

			commentingService.getComments(this.postId, function(result) {
				self.waiting = false;
				self.comments = result;
				self.comments = self.comments.map(function(comment) {
					comment.create_time = timeSinceService.timeSince(comment.create_time);
					return comment;
				});
			},
			function(error) {
				console.log(error);
			});
		},
		controllerAs: "commentListingCtrl"
	};
});
