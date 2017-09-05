"use strict";


app.controller('bookCtrl', function($scope, $http) {
    $scope.books = [];
    let request = $http.get("./data/guides.js")
        .then(function(resopnse) {
            console.log('data', resopnse.data.guides);

            $scope.books = resopnse.data.guides;
            console.log('books', $scope.books);

        });





});