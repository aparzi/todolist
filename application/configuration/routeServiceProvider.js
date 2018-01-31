"use strict";

/*
    Questa gestione del routing di pagina è in carico alla libreria ui-router.
    E' consigliato l'utilizzo di questa libreria perché implementa le logiche del routerProvider di angular
    aggiungendo alcune funzionalità di gestione migliorate.
    IMPORTANTE:
        - L'applicazione angular potrebbe avere la necessità di un cambio dei path che puntano ai file!
*/

app.config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Evento custom utilizzato per propagare all'interno dell'applicazione
    // il fatto che una determinata view è stata correttamente caricata.
    /*var propagateState = function($rootScope, stato){
        $rootScope.$broadcast('onStateChange', {
            state : stato
        });
    };*/

	$stateProvider.state('home', {
		url : "/home",
		templateUrl : "./views/home/home.html",
		controller : "homeCtrl",
        params: {
            // E' possibile definire un set di parametri. All'interno della view desiderata, si dovrà utilizzare la funzionalità $stateParams
        },
        onEnter: function($rootScope){
            
        },
        onExit: function($rootScope){
            
        }
	});

    $stateProvider.state('todolist', {
        url : "/todolist",
        templateUrl : "./views/todolist/todolist.html",
        controller : "todolistCtrl",
        params: {
            // E' possibile definire un set di parametri. All'interno della view desiderata, si dovrà utilizzare la funzionalità $stateParams
        },
        onEnter: function($rootScope){

        },
        onExit: function($rootScope){

        }
    });

	$urlRouterProvider.otherwise(function($injector) {
        // Fix impiegata per prevenire una "infdigest" creata dall'utilizzo di
        // event.preventDefault() all'interno delle funzioni di "stateChangeStart" e "stateChangeSuccess"		
        var $state = $injector.get("$state");
        // Lo stato di default è definito all'interno del file index.js
        $state.go(DEFAULT_STATE);
	});

} ]);