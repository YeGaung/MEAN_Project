'use strict';
  
/* Party Services */  
  var candidateServices = angular.module('candidateServices', ['ngResource']);

candidateServices.factory('candidateList', ['$resource',
  function($resource){ 
	return $resource(
		'http://api.maepaysoh.org/candidate/list?token=:token&_with=party&per_page=:page&party=:party', {}, {
		getCandidateList: {method: 'GET', params:{token:'170728a2-f678-5331-b4db-722050b19e77', page:200, party:60}}
		}
	);
  }]);