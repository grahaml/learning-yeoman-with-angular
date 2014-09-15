'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', function ($scope) {

        // Initial list of TODOs
        $scope.todos = [ 'Item 1', 'Item 2', 'Item 3', 'Item 4' ];

        // Adding a new TODO
        // The `newTodo` argument is the content of the input field
        // bound to the ng-model 'newTodo', which is inside the form
        // whose action calls this function. Angular magically gives
        // you access to it because of the `ng-model` attribute.
        $scope.addTodo = function( newTodo ) {

            // Add the new TODO to the master list
            $scope.todos.push( newTodo );

            // `this` refers to the form that was submitted
            // And this line resets the input tag to the Placeholder
            this.newTodo = '';
        };

    });
