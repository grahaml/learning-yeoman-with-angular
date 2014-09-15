# Learning to use Yeoman and Angular

This repository contains the full gamut of code from the [Yeoman codelab](http://yeoman.io/codelab.html) tutorial, which I have altered to my liking. It's a sandbox for me to play around with Yeoman and Angular.

## Plans for this reposiitory

* Making some subgenerators for
    - forms
    - views
* Making the todo app more useful
* General tomfoolery

## Things I did that stray from the original tutorial

* Made the Add form a separate module (so I could learn about `ng-include`)
* Changed the way the add function works, because using an include meant that the `$scope` of the submit handler was relative to the included form instead of `MainController` - Angular magically knows that when you pass an argument into a function inside an `ng-submit` property, then any `ng-model`s inside the scope of that form can be used as variables. In this example, the argument `newTodo` can be passed into `addTodo()` because there is an `<input>` tag with an `ng-model` of `'newTodo'`.
* Put all the todos in a list
