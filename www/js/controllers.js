angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller("adnCtrl",function($scope){
  function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
}

let h, newY;

function draw() {
  //clean canvas
  background('#111');
  translate(-20, height / 2);
  
  
  for(let i = 0; i < width;) {
    strokeWeight(2);
    //set. color depending on i value
    h = floor(map(i * 5, 0, width, 0, 359));
    stroke(color('hsl(' + h + ', 100%, 50%)'));
    
    //newY = sin(i + asin(millis()/1000) / 0.5) * 100;
    newY = sin(i + millis()/200) * 100;
    
    //draw connectors
    beginShape();
      vertex(0, 0);
      translate(15, newY);
      vertex(15, -newY);
    endShape(CLOSE)
    
    //draw dots
    strokeWeight(30);
    point(0, 0);
    i += 3;
  }

}
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
