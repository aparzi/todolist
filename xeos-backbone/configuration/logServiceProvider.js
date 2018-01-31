"use strict";

app.config([ 'logServiceProvider', function(logServiceProvider) {
	
	logServiceProvider 
	.minLogSeverity("warning"); // In ordine di visualizzazione crescente: error, warning, info, debug;
	
} ]);
