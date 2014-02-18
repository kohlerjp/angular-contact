'use strict';

/* Controllers */
var myApp = angular.module('myApp', []);

myApp.controller('PeopleController', function($scope) {
	// Initialize people variable with JSON
  $scope.people = [
    {'name': 'Todd Andrews',
     'position' : 'Vice President',
     'phone' : '401–863–6331',
 	 'email' : 'tandrews@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/Todd.jpg' },
    {'name': 'Lynda Lisker',
     'position' : 'Executive Assistant to Todd G. Andrews',
     'phone' : '401–863–1605',
 	 'email' : 'llisker@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/Lynda.jpg' },
 	 {'name': 'Dorcey Baker',
     'position' : 'Director, Communications and Planning',
     'phone' : '401–863–1797',
 	 'email' : 'dbaker@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/Dorcey.jpg' },
 	 {'name': 'Myra Liwanag',
     'position' : 'Director, Regional and Multicultural Programs',
     'phone' : '401–863–9493',
 	 'email' : 'mliwanag@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/Myra.jpg' },
 	 {'name': 'Renee Bolden',
     'position' : 'Administrative Assistant, Alumni Events',
     'phone' : '401–863–3720',
 	 'email' : 'rbolden@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/Renee.jpg' },
 	 {'name': 'Carolyn McGarry',
     'position' : 'Program Associate, Alumni Interviewing Program',
     'phone' : '401–863–2287',
 	 'email' : 'cmcgarry@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/Carolyn.jpg' },
 	 {'name': 'Jill Hereford Caskey',
     'position' : 'Director, Alumni College Advising Program',
     'phone' : '401–863–2249',
 	 'email' : 'jcaskey@brown.edu',
 	 'image' : 'http://alumni.brown.edu/about/staff/image/JillC2.jpg' }
    ];
 	// This array will hold all of the people that are selected
 	$scope.selection = [];

 	// function will add person to list if they are not in it, or remove them if they are in it
 	$scope.toggleSelection = function toggleSelection(person) {
    var idx = $scope.selection.indexOf(person);

    // it's already selected, lets remove it
    if (idx > -1) {
      $scope.selection.splice(idx, 1);
    }

    // add on newly selected person
    else {
      $scope.selection.push(person);
    }
  };


});
