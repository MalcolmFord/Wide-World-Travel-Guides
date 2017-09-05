"use strict";
var app = angular.module('travelGuide', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/books.html',
        controller: 'bookCtrl'
    }).otherwise('/');
});