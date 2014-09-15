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

        // Removing a TODO
        // The index argument comes from the array used for ng-repeat
        // on the TODO list. The item you clicked on knows what number
        // it is in the grand scheme of things because of angular magic
        $scope.removeTodo = function( index ) {

            // Remove the TODO
            $scope.todos.splice( index, 1 );
        };

    });
