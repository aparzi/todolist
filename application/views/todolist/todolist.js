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
    $scope.btnInProgress = false
    $scope.btnDone = false

    $scope.addTodo = function(todoName){
        var todo = { name: todoName }
        $scope.todos.push(todo)
    }

    $scope.removeTodo = function(todo){
        const index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    }

    $scope.filterByDone = function(){
        if ($scope.filter.hasOwnProperty('checked') && $scope.filter.checked)
            delete $scope.filter.checked
        else
            $scope.filter.checked = true
        $scope.btnDone = !$scope.btnDone
        $scope.btnInProgress = false
    }

    $scope.filterByNotDone = function(){
        if ($scope.filter.hasOwnProperty('checked') && !$scope.filter.checked)
            delete $scope.filter.checked
        else
            $scope.filter.checked = false
        $scope.btnInProgress = !$scope.btnInProgress
        $scope.btnDone = false
    }

    logService.info("Todolist accessed");
    
}]);