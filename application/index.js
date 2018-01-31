"use strict";
/* This file is used to set javascript variables as setting for the module. 
 * This file must be loaded before any other script for application modules
 */

/**************************************************************************
        LA VERSIONE DI ANGULAR UTILIZZATA PER QUESTA APPLICAZIONE
                            E' LA VERSIONE 1.6.2
***************************************************************************/

// La dichiarazione di questa variabile, utilizzata poi nel codice sotto, permetterà
// di agganciare il codice javascript di angular, all'interno dell'html
var APP_MODULE_NAME = "APP";
/* 
	Costante per la configurazione dell'applicazione.
 */
var APP_MODULES_DEPENDENCY = [
    BACKBONE_MODULE_NAME,   // Modulo con delle componenti common - log, chiamata ai rest
    'ui.router',        	// Modulo per la gestione del route applicativo
    'ui.bootstrap',         // Modulo per la gestione del layot grafico
];

// Definizione della route di default. La dichiarazione in questo punto del codice, permette di avere la visibilità di tale
// Variabile in tutti i file js caricati seguentemente a questo.
var DEFAULT_STATE = "home";

var app = angular.module(APP_MODULE_NAME, APP_MODULES_DEPENDENCY).run(["$rootScope", "$state", "logService", function($rootScope, $state, logService){
    
    // Definizione variabili
    var onRouteChangeStart = {};
    var onRouteChangeSuccess = {};

    /* Funzione che mi gestisce il cambio di pagina. Inserisco qui le logiche da applicare prima che la nuova pagina venga caricata. 
       Questa funzione verrà agganciata e sganciata dall'ascoltatore. Questo perché, se non lo si facesse, si entrerebbe in un loop
       di caricamento.
    */
    var navigationRules = function(event, targetState, targetParams, currentState, currentParams){
        // Blocco subito l'evento per effettuare le verifiche		
		event.preventDefault();
        // Resetto l'handler. In questa maniera non ci sarà più l'ascoltatore di cambio pagina e potrò quindi riattivare il routing senza
        // rischiare di finire in loop
        onRouteChangeStart();
        
        /*
            A questo punto è possibile inserire delle logiche per eventuali controlli sui dati, o controlli sullo stato dell'applicazione
            per esempio il routing di una determinata pagina, dove è richiesta una verifica sulla possibilità di navigare effettivamente
            la pagina, oppure bloccare la navigazione perché l'utente loggato non dispone di ruoli adeguati per l'accesso.
        */
        /*
                # Esempio di controllo
                if(isPrimoAccesso){
                    settaVariabili();
                }else{
                    logService.debug("Routing to: " + targetState.name);
                    faiAltro();
                };
        */

        // Gestione manuale del routing al termine delle logiche di controllo
        if(currentState.name == targetState.name){
            // Probabilmente mi è stata richiesta una reload
            var reload = { reload: true };
            $state.go(targetState.name, targetParams, reload);
        }else{
            $state.go(targetState.name, targetParams);
        }
    }
    
    // Aggancio all'evento di cambio di view, la funzione per la gestione della navigazione 
    onRouteChangeStart = $rootScope.$on("$stateChangeStart", navigationRules);
		
    /* Definisco l'handler per quando viene cambiato correttamente uno stato. Una volta che viene correttamente
       cambiato, riaggancio l'ascoltatore per il cambio pagina così da poter riagganciare le logiche per la verifica
       del cambio di stato.
    */
    onRouteChangeSuccess = $rootScope.$on("$stateChangeSuccess", function(event, targetState, targetStateParameters, currentState, currentStateParameters) {
        // Riaggancio l'ascoltatore per il cambio di pagina
        onRouteChangeStart = $rootScope.$on("$stateChangeStart", navigationRules);
    });
    
}]);