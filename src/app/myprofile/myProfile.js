angular.module( 'internetBank.myProfile', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'myProfile', {
    url: '/myProfile',
    views: {
      "main": {
        controller: 'MyProfileController',
        templateUrl: 'myProfile/myProfile.tpl.html'
      }
    },
    data:{ pageTitle: 'My Profile' }
  });
})

.controller( 'MyProfileCtrl', ['$scope', 'currentUser', function ( $scope, currentUser ) {


        $scope.user = {
            name: currentUser.name,
            email: currentUser.email
        };
}])

;
