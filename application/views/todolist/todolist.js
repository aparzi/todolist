'use strict';

app.controller('todolistCtrl', ['$rootScope', '$scope', 'logService', 'RESTService', '$state', '$stateParams', function($rootScope, $scope, logService, RESTService, $state, $stateParams) {

    $scope.todos=[
        {
            name: "Passare fisica",
            checked: false
        },
        {
            name: "Passare calcolo",
            checked: true
        }
    ]

    $scope.filter = { name: '' }

    $scope.addTodo = function(todoName){
        var todo = { name: todoName }
        $scope.todos.push(todo)
    }

    $scope.removeTodo = function(todo){
        const index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    }

    $scope.filterByDone = function(){
        $scope.filter.checked = true
    }

    $scope.filterByNotDone = function(){
        $scope.filter.checked = false
    }

    logService.info("Todolist accessed");
    
}]);