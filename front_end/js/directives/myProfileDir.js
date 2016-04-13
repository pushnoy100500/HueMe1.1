var app = angular.module("HueMeApp");

app.filter('range', function() {
  return function(input, min, max) {
    max = parseInt(max);
    min = parseInt(min);

    for(var i=min; i <= max; i++) {
      input.push(i.toString());
    }
    return input;
  };
});

app.directive('myProfileDir', function($localStorage, $rootScope, $location, $state, regLogService, updateProfileService, profileService, avatarService, countryService) {
  return {
    restrict: "E",
    scope: true,
    link: function(scope) {
      scope.profileId = $localStorage.user[0].id;
    },
    templateUrl: "templates/myProfile.html",
    controller: function($scope) {
      $scope.user = {
      };
      this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.days = {'January': 31,
                  'February': 28,
                  'March': 31,
                  'April': 30,
                  'May': 31,
                  'June': 30,
                  'July': 31,
                  'August': 31,
                  'September': 30,
                  'October': 31,
                  'November': 30,
                  'December': 31 };
      if($rootScope.isMyProfile) {
         $scope.user = $localStorage.user[0];
      } else {
        alert($rootScope.visitingProfile)
        profileService.getProfile($rootScope.visitingProfile, function(usr) {
           $scope.user = usr;
        })
        
      }
     
      this.user = $localStorage.user[0];
      if(!$scope.user.dob) {
        $scope.user.dob = {month: "", day: "", year: ""};
      } else if (typeof $scope.user.dob === 'object') {
        //do nothing
      }
      else {
        $scope.user.dob = {
          year: $scope.user.dob.substring(0, 4),
          month: $scope.user.dob.substring(5, 7),
          day: $scope.user.dob.substring(8, 10)
        };
      }

      switch($scope.user.dob.month) {
        case "01":
          $scope.user.dob.month = "January";
          break;
        case "02":
          $scope.user.dob.month = "February";
          break;
        case "03":
          $scope.user.dob.month = "March";
          break;
        case "04":
          $scope.user.dob.month = "April";
          break;
        case "05":
          $scope.user.dob.month = "May";
          break;
        case "06":
          $scope.user.dob.month = "June";
          break;
        case "07":
          $scope.user.dob.month = "July";
          break;
        case "08":
          $scope.user.dob.month = "August";
          break;
        case "09":
          $scope.user.dob.month = "September";
          break;
        case "10":
          $scope.user.dob.month = "October";
          break;
        case "11":
          $scope.user.dob.month = "November";
          break;
        case "12":
          $scope.user.dob.month = "December";
          break;
        default:
          $scope.user.dob.month = "Febtober";
      }

      $localStorage.userTemp = $localStorage.user[0];

      this.save = function(){
         //create a user object to save
         var updatedUser = {};
         Object.assign(updatedUser, this.temp);
         //formatting dob
         var dob = updatedUser.dob;
         updatedUser.dob = dob.year + "-" + ((this.months.indexOf(dob.month) + 1) < 10 ? '0' + (this.months.indexOf(dob.month) + 1) :  this.months.indexOf(dob.month) + 1) + "-" + (dob.day < 10 ? ('0' + dob.day) :  dob.day);
         //saving
         $localStorage.user[0] = this.temp;
         updateProfileService.updateUser(updatedUser, function(ok) {
           if(ok) {
             $scope.user = $localStorage.user[0];
             $location.path('/myprofile');
           }
         });
         //quit editing mode
         this.editorEnabled = false;
         console.dir(updatedUser);
       };
       this.avatars = avatarService.avatars;

      this.countries = countryService.countries;
      this.regions = countryService.regions;
      this.temp = {};

      this.avatSel = function(index){
        this.temp.photo_url = this.avatars[index].url;
        this.selected = index + 1;
      };

      this.genders = ['Female', 'Male', 'Other'];
      this.editorEnabled = false;

      this.enableEditor = function(){
        this.editorEnabled = true;
        this.temp = jQuery.extend({}, $scope.user);
      };

      this.disableEditor = function(){
        this.editorEnabled = false;
        this.selected = '';
        this.temp = {};
      };
    },
    controllerAs: "profileCtrl"
  };
});
