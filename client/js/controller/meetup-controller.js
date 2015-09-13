sampleApp.controller('meetupController' ,['$scope','$resource',
	function($scope,$resource){
	var meetRest = $resource('/api/meetup');
	$scope.meetingCount = 10;
	meetRest.query(function(results){
		$scope.meetups = results;
	});
	$scope.meetups = []

	/*$scope.creatMeetUp = function(){
		$scope.meetups.push({"name" : $scope.meetupName});
		$scope.meetupName = ''
	}*/

	$scope.creatMeetUp = function(){
		var meetup = new meetRest();
		meetup.name = $scope.meetupName;
		meetup.$save(function(result){
			$scope.meetups.push(result);
		});
	}
}]);