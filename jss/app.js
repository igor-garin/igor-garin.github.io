"use strict";

var Vin = {
  web3Provider: null,
  web3: null,
  contracts: {},

  init: function(callback) {

    // Is there is an injected web3 instance?
    if (typeof web3 !== 'undefined') {
      Vin.web3Provider = web3.currentProvider;
    } else {
      // If no injected web3 instance is detected, fallback to the TestRPC
      Vin.web3Provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/qoN9sOKrIGdN6eiwg3Bl");//('http://localhost:8101');
    }
    Vin.web3 = new Web3(Vin.web3Provider);

    $.getJSON('VinCarContract.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with truffle-contract
      var VinConrtactArtifact = data;
      Vin.contracts.VinConrtact = TruffleContract(VinConrtactArtifact);

      // Set the provider for our contract
      Vin.contracts.VinConrtact.setProvider(Vin.web3Provider);

      Vin.contracts.VinConrtact.at("0xf912106838462f869495c29b89a0f326b33f91d2").then(callback);
    });
  }
};

var app = angular.module("mySimpleWalletDapp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  }).when('/contractors', {
    templateUrl: 'views/contractors.html',
    controller: 'ContractorsController'
  }).when('/management', {
    templateUrl: 'views/contractors.html',
    controller: 'ContractorsController'
    // templateUrl: 'views/management.html',
    // controller: 'ManagementController'
  }).otherwise({redirectTo: '/'});
});

var showErrorDialog = function(info) {

  $("#ErroModal").show();
  $("#error_info").text(info);
  $("#close_error").click(function() {
      $("#ErroModal").hide();
  })
  $("#submit_error").click(function() {
      $("#ErroModal").hide();
  })

}

var serviceIconcArray = {1: "icon_service.png", 2: "icon_milage.png", 3: "icon_accident.png"};

var carsArray = {
  1: "Audi A6 2011", 
  2: "Mercedes GLA 250 2015", 
  3: "Toyota Corolla 2014", 
  4: "BMW M1 2016", 
  5: "Subaru Impreza 2014", 
  6: "Lexus RX 2018", 
  7: "Subary XV 2015", 
  8: "Mazda CX-5 2017", 
  9: "Honda CR-V 2015", 
  10: "Audi A6 2017", 
  11: "Honda Accord 2011", 
  12: "Toyota Rav4 2015", 
  13: "Ford Explorer 2013", 
  14: "Huyndai Elantra 2014", 
  15: "Ford Focus 2016", 
  16: "Kia Soul",
  17: "Mazda CX-3 2017",
  18: "Mazda CX-3 2017"
}

var carsMapping = {};
