var app = angular.module("HueMeApp");
app.service("timeSinceService", function() {
	this.timeSince = function(date){
		var dateFix = date.split(/[- :]/);
		var newDate = new Date(dateFix[0], dateFix[1]-1, dateFix[2], dateFix[3], dateFix[4], dateFix[5]);
	  var seconds = Math.floor((new Date() - newDate) / 1000);
    var interval = Math.floor(seconds / 31536000);
		
    if (interval >= 1) {
      return (interval == 1) ? interval + " year" : interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return (interval == 1) ? interval + " month" : interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return (interval == 1) ? interval + " day" : interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
			return (interval == 1) ? interval + " hour" : interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return (interval == 1) ? interval + " minute" : interval + " minutes";
    }
    return (Math.floor(seconds) <= 1) ? Math.floor(seconds) + " second" : Math.floor(seconds) + " seconds";
	};
});
