var app = angular.module('HueMeApp');
/*
	this directive requires a filter attribute that will contain an object
	of the following format:
	{
		'criteria': 'search criteria', // this defines what method in posting service we are triggering,
										// ex. userId will trigger getPostsByUser method
		'value': 'search value'     // value we are passing as a parameter to search function
	}
*/

app.directive('postListingDir', function(postingService, $localStorage, $state) {
	return {
		restrict: "E",
		templateUrl: "templates/postListing.html",
		scope: {
			filter: "=",
			poststemp: "="
		},
		controller: function($scope, $timeout, postingService, timeSinceService, $state, $rootScope) {
			var self = this;
			$scope.$on('newPost', function() {
					postingService.getAllPosts()
					.then(function(success) {
						//console.log(success.data);
						this.posts = success.data;
						$state.go($state.current, {}, {reload: true});
						console.log(this.posts);
					}, function(error) {
						console.log(error);
					});
			});
			this.filter = $scope.filter;

			this.waiting = true;
			this.posts = [];
			this.commentingMode = false;
			this.viewCommentMode = false;
			// based on what is a search criteria providedin filter attribute to directive
			// do different post search and rendering logic
			switch (this.filter.criteria) {
				case "id":
					postingService.getPostsByUser(this.filter.value,
					function(result) {
						self.waiting = false;
						self.posts = result;
						self.posts = self.posts.map(function(post) {
								//var post = post;
								post.time = timeSinceService.timeSince(post.time);
								if(post.tags){
									post.tags = post.tags.split(',');
								}
								return post;
						});
					},
					function(error) {
						console.log(error);
					});
					break;
				case "general":
					self.posts = $scope.poststemp;//searchStateCtrl.posts;
					self.posts = self.posts.map(function(post) {
							post.time = timeSinceService.timeSince(post.time);
							if(post.tags){
								post.tags = post.tags.split(',');
							}
							return post;
						});
					self.waiting = false;
					//filtering on users
					if(self.filter.value.users) {
						self.posts = self.posts.filter(function(post) {
							return post.user.indexOf(self.filter.value.users) >= 0;
						});
					}
					//filtering on tags
					if($rootScope.filterTags) {						
							self.posts = self.posts.filter(function(post) {
								if(post.tags) {
									return post.tags.indexOf($rootScope.filterTags) >= 0;
								}
							});						
					}
					
				break;
				default:
					// other search criteria logic
					break;
			}

			this.userId = $localStorage.user[0].id;

		 	this.enableComment = function ($index){
		 		//$rootScope.$broadcast('commentPosted');
		 		this.selectedIndex = $index;
		 		this.commentingMode = !this.commentingMode;
				this.viewCommentMode = !this.viewCommentMode;
		 	};

		 	$scope.$on('commentSubmit', function() {
		 			$timeout(function() {
		 				$scope.$broadcast("commentPosted");
		 			}, 100);
		 	});

		},
		controllerAs: "postListingCtrl"
	};
});
