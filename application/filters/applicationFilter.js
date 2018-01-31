"use strict";

/*
    File di utility per l'applicazione. E' possibile definire dei filtri applicativi da utilizzare
    durante il binding dei dati
*/

// ##### ESEMPIO #####
/*app.filter('cut', function () {
    
    // wordwise (boolean) - if true, cut only by words bounds,
    // max (integer) - max length of the text, cut to this number of chars,
    // tail (string, default: '…') - add this string to the input string if the string was cut.
    
    return function (value, wordwise, max, tail) {
        if (!value) return '';

        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace !== -1) {
               
                if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                    lastspace = lastspace - 1;
                }
                value = value.substr(0, lastspace);
            }
        }

        return value + (tail || '…');
    };
    
});*/