"use strict";

/*
    L'utilizzo di questa factory permette di richiamare alcune funzionalità di utility generica.
    Nel caso in cui ci fosse necessità di aggiungere qualche funzionalità generica, è possibile
    definirla qui.
*/

backbone.factory('utilitiesFactory', [function() {

    // Definisco un oggetto che conterrà le funzionalità da esportare
    var utilities = {};

    // Ordina i dati di un array
    utilities.sortArray = function(array){

        return array.sort(function(a, b){
            var A = a.toLowerCase();
            var B = b.toLowerCase();
            if (A < B){
                return -1;
            }else if (A > B){
                return  1;
            }else{
                return 0;
            }
        });        
    };
    
    // Rimuove i duplicati in un array
    utilities.removeDuplicatesInArray = function(array){
        
        return array.filter(function(elem, index, self) {
            return index == self.indexOf(elem);
        });
    };
    
    // Concateno tutti gli oggetti contenuti nel primo array "array" accodando quelli contenuti all'interno di "arrayToMerge"
    utilities.concatObjArray = function(array, arrayToMerge){
        
        for(var i = 0; i < arrayToMerge.length; i++){
            array.push(arrayToMerge[i]);
        }
        
        return array;
    };
    
    // Ritorno l'oggetto da esportare
    return utilities;
    
}]);