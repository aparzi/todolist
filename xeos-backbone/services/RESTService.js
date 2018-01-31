"use strict"

/*
	Questo file è collegato al file di configurazione:
		- RESTServiceProvider.js
	L'utilizzo di questo servizio, permette l'utilizzo delle funzionalità associate ad $http per le chiamate in HTTP
	a dei servizi REST, mediante una configurazione parametrica.
*/

backbone.provider('RESTService', function() {

	/*this.setServerConfiguration = function() {

	};*/

	this.$get = function($http) {

		return {

			post : function(path, data, configObject){
				// Passing a path and a configuration object, the function
				// call an "post" request to server.
				// Return a promise with an object for success and error
				return $http.post(path, data, configObject);
			},

			get : function(path, configObject){
				// Passing a path and a configuration object, the function
				// call an "get" request to server.
				// Return a promise with an object for success and error

				// FOR IE USE: internet explorer may has some problem with get call and does not download information.
				// To avoid this problem, it's possible to configure for the query request a final paramas like a timestamp.
				// So IE see the get request is differente from last, and is forced to call the server service
				return $http.get(path, configObject);
			},

			put : function(path, data, configObject){
				// Passing a path and a configuration object, the function
				// call an "put" request to server. Usually used to upload
				// files on server
				// Return a promise with an object for success and error
				return $http.put(path, data, configObject);
			},

			delete : function(path, configObject){
				// Passing a path and a configuration object, the function
				// call an "delete" request to server. Usually used to delete
				// files on server
				// Return a promise with an object for success and error
				return $http.delete(path, configObject);
			},

			head : function(path, configObject){
				// Passing a path and a configuration object, the function
				// call an "head" request to server.
				// Return a promise with an object for success and error
				return $http.head(path, configObject);
			},

			jsonp : function(path, configObject){
				// Passing a path and a configuration object, the function
				// call an "jsonp" request to server.
				// Return a promise with an object for success and error
				return $http.jsonp(path, configObject);
			},

			patch : function(path, data, configObject){
				// Passing a path, data and a configuration object, the function
				// call an "patch" request to server.
				// Return a promise with an object for success and error
				return $http.patch(path, data, configObject);
			},

			custom : function(configObject){
				/*
					Object describing the request to be made and how it should be processed. The object has following properties:

					method – {string} – HTTP method (e.g. 'GET', 'POST', etc)
					url – {string|TrustedObject} – Absolute or relative URL of the resource that is being requested; or an object created by a call to $sce.trustAsResourceUrl(url).
					params – {Object.<string|Object>} – Map of strings or objects which will be serialized with the paramSerializer and appended as GET parameters.
					data – {string|Object} – Data to be sent as the request message data.
					headers – {Object} – Map of strings or functions which return strings representing HTTP headers to send to the server. If the return value of a function is null, the header will not be sent. Functions accept a config object as an argument.
					eventHandlers - {Object} - Event listeners to be bound to the XMLHttpRequest object. To bind events to the XMLHttpRequest upload object, use uploadEventHandlers. The handler will be called in the context of a $apply block.
					uploadEventHandlers - {Object} - Event listeners to be bound to the XMLHttpRequest upload object. To bind events to the XMLHttpRequest object, use eventHandlers. The handler will be called in the context of a $apply block.
					xsrfHeaderName – {string} – Name of HTTP header to populate with the XSRF token.
					xsrfCookieName – {string} – Name of cookie containing the XSRF token.
					transformRequest – {function(data, headersGetter)|Array.<function(data, headersGetter)>} – transform function or an array of such functions. The transform function takes the http request body and headers and returns its transformed (typically serialized) version. See Overriding the Default Transformations
					transformResponse – {function(data, headersGetter, status)|Array.<function(data, headersGetter, status)>} – transform function or an array of such functions. The transform function takes the http response body, headers and status and returns its transformed (typically deserialized) version. See Overriding the Default Transformations
					paramSerializer - {string|function(Object<string,string>):string} - A function used to prepare the string representation of request parameters (specified as an object). If specified as string, it is interpreted as function registered with the $injector, which means you can create your own serializer by registering it as a service. The default serializer is the $httpParamSerializer; alternatively, you can use the $httpParamSerializerJQLike
					cache – {boolean|Object} – A boolean value or object created with $cacheFactory to enable or disable caching of the HTTP response. See $http Caching for more information.
					timeout – {number|Promise} – timeout in milliseconds, or promise that should abort the request when resolved.
					withCredentials - {boolean} - whether to set the withCredentials flag on the XHR object. See requests with credentials for more information.
					responseType - {string} - see XMLHttpRequest.responseType.

				*/
				return $http(configObject);
			}
		};
	};
});
