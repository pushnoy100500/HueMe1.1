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

app.directive('myProfileDir', function($localStorage, $location, $state, regLogService, updateProfileService, avatarService, countryService) {
  return {
    restrict: "E",
    scope: true,
    link: function(scope) {
      scope.profileId = $localStorage.user[0].id;
    },
    templateUrl: "templates/myProfile.html",
    controller: function() {

      this.user = $localStorage.user[0];
      if(!this.user.dob) {
        this.user.dob = {month: "", day: "", year: ""};
      } else if (typeof this.user.dob === 'object') {
        //do nothing
      }
      else {
        this.user.dob = {
          year: this.user.dob.substring(0, 4),
          month: this.user.dob.substring(5, 7),
          day: this.user.dob.substring(8, 10)
        };
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
             this.user = this.temp;
             console.log('saved');
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
        this.temp = jQuery.extend({}, this.user);
      };

      this.disableEditor = function(){
        this.editorEnabled = false;
        this.selected = '';
        this.temp = {};
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
    },
    controllerAs: "profileCtrl"
  };
});
