var translations = {
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  NAMESPACE: {
    PARAGRAPH: 'And it comes with awesome features!'
  }
};
 
var app = angular.module('myApp', ['pascalprecht.translate']);
 
app.config(['$translateProvider', function ($translateProvider) {
  // add translation table
  $translateProvider
    .translations('en', translations)
    .preferredLanguage('en');
}]);
 
app.controller('Ctrl', ['$scope', '$translate', function ($scope, $translate) {
  // expose translation via `$translate` service
  $translate('HEADLINE').then(function (headline) {
    $scope.headline = headline;
  }, function (translationId) {
    $scope.headline = translationId;
  });
  $translate('PARAGRAPH').then(function (paragraph) {
    $scope.paragraph = paragraph;
  }, function (translationId) {
    $scope.paragraph = translationId;
  });
  $translate('NAMESPACE.PARAGRAPH').then(function (anotherOne) {
    $scope.namespaced_paragraph = anotherOne;
  }, function (translationId) {
    $scope.namespaced_paragraph = translationId;
  });
}]);