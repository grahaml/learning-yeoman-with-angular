'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('mytodoApp'));

    var MainCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(scope.awesomeThings.length).toBe(3);
    // });

    it( 'should have no todos on startup', function() {
        expect( scope.todos.length ).toBe( 0 );
    });

});
