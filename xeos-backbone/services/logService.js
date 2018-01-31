"use strict";

/*
	Questo file è collegato al file di configurazione:
		- logServiceProvider.js
	L'utilizzo di questo servizio, permette la scrittura di un log mediante il servizio di angular
	$log. Per differenziarlo da un comune log, viene aggiunto un prefisso al log.
*/

backbone.provider('logService', function() {
	
	var minLogSeverity = "error";
	
	var BACKBONE_LOG_SING = "| Xeos Backbone |";
	var LOG_PRIORITY = [ "[DEBUG]", "[INFO]", "[WARNING]", "[ERROR]" ];
	var LOG_PRIORITY_INPUT = [ "debug", "info", "warning", "error" ];
	
	this.minLogSeverity = function(level) {
		if (LOG_PRIORITY_INPUT.indexOf(level) == -1) {
			throw new Error("Value must info or warning or debug or error");
		}
		minLogSeverity = level;
		console.log("Minlog severity: " + minLogSeverity);
		// Permette chiamate concatenate nel configuratore
		return this;
	};

	this.$get = function($log) {
		
		return { 

			/** Prints an error. */
			error : function(message) {
				if (LOG_PRIORITY.indexOf("[ERROR]") >= LOG_PRIORITY_INPUT.indexOf(minLogSeverity)) {
					$log.error(BACKBONE_LOG_SING + " ERROR: " + message);				
				}
			},
			
			/** Prints a warning. */
			warning : function(message) {
				if (LOG_PRIORITY.indexOf("[WARNING]") >= LOG_PRIORITY_INPUT.indexOf(minLogSeverity)) {
					$log.warn(BACKBONE_LOG_SING + " WARNING: " + message);
				}
			},
			
			/** Prints an informational message. */
			info : function(message) {
				if (LOG_PRIORITY.indexOf("[INFO]") >= LOG_PRIORITY_INPUT.indexOf(minLogSeverity)) {
					$log.info(BACKBONE_LOG_SING + " INFO: " + message);
				}
			},
			
			/** Prints a debug message. */
			/** In Chrome development console, "DEBUG" messages are disabled. If you want see that type of messages, you need to enable the console */
			debug : function(message) {
				if (LOG_PRIORITY.indexOf("[DEBUG]") >= LOG_PRIORITY_INPUT.indexOf(minLogSeverity)) {
					$log.debug(BACKBONE_LOG_SING + " DEBUG: " + message);
				}
			}		
		};
	};
});