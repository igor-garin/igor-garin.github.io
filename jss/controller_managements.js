

var app = angular.module("mySimpleWalletDapp");

app.controller("ManagementController", function ($scope) {

    $scope.allowDisallows = [];
    $scope.allowDisallows.push("allow");
    $scope.allowDisallows.push("disallow");

    Vin.init(function(contract) {
        $scope.loading = false;
        $scope.success = false;
        $scope.error = false;

        $("#a_user").show();
        
        contract.isAllowedAddressToContract(Vin.web3.eth.accounts[0]).then(function(allow) {
            if (allow) {
                $("#a_contract").show();
            } else {
                $("#a_contract").hide();
            }
        }).catch(function(error) {
            console.error(error);
        });

        contract.getOwner().then(function(address) {
            if (address == Vin.web3.eth.accounts[0]) {
                $("#a_managment").show();
            } else {
                $("#a_managment").hide();
            }
        }).catch(function(error) {
            console.error(error);
        });

        $scope.changePermission = function(address, allowDisallow) {
            console.log(address);
            $scope.loading = true;
            $scope.success = false;
            $scope.error = false;
            if(allowDisallow == 'allow') {
                contract.allowAddressToContract(address, {from: Vin.web3.eth.accounts[0]}).then(function() {
                    $scope.loading = false;
                    $scope.success = true;
                    $scope.$apply();

                    function stop() {
                        $scope.loading = false;
                        $scope.success = false;
                        $scope.error = false;
                        $scope.$apply();
                    }                   
                    setTimeout(stop, 3000);

                }).catch(function(error) {
                    console.error(error);
                    $scope.loading = false;
                    $scope.error = error.message;
                    $scope.$apply();

                    function stop() {
                        $scope.loading = false;
                        $scope.success = false;
                        $scope.error = false;
                        $scope.$apply();
                    }                   
                    setTimeout(stop, 3000);
                });
            } else {
                contract.disallowAddressToContract(address, {from: Vin.web3.eth.accounts[0]}).then(function() {
                    $scope.loading = false;
                    $scope.success = true;
                    $scope.$apply();

                    function stop() {
                        $scope.loading = false;
                        $scope.success = false;
                        $scope.error = false;
                        $scope.$apply();
                    }                   
                    setTimeout(stop, 3000);
                }).catch(function(error) {
                    console.error(error);
                    $scope.loading = false;
                    $scope.error = error.message;
                    $scope.$apply();

                    function stop() {
                        $scope.loading = false;
                        $scope.success = false;
                        $scope.error = false;
                        $scope.$apply();
                    }                   
                    setTimeout(stop, 3000);
                });
            }
        }

        $scope.addVin = function(vin, info) {
            console.log(vin);
            console.log(info);
            $scope.loading = true;
            $scope.success = false;
            $scope.error = false;
            contract.addVin(vin, info, {from: Vin.web3.eth.accounts[0]}).then(function() {
                $scope.loading = false;
                $scope.success = true;
                $scope.$apply();

                function stop() {
                    $scope.loading = false;
                    $scope.success = false;
                    $scope.error = false;
                    $scope.$apply();
                }                   
                setTimeout(stop, 3000);
            }).catch(function(error) {
                console.error(error);
                $scope.loading = false;
                $scope.error = error.message;
                $scope.$apply();

                function stop() {
                    $scope.loading = false;
                    $scope.success = false;
                    $scope.error = false;
                    $scope.$apply();
                }                   
                setTimeout(stop, 3000);
            });

            contract.isAllowedAddressToContract(Vin.web3.eth.accounts[0]).then(function(allow) {
                if (allow) {
                    $("#a_contract").show();
                } else {
                    $("#a_contract").hide();
                }
            }).catch(function(error) {
                console.error(error);
            });

            contract.getOwner().then(function(address) {
                if (address == Vin.web3.eth.accounts[0]) {
                    $("#a_managment").show();
                } else {
                    $("#a_managment").hide();
                }
            }).catch(function(error) {
                console.error(error);
            });
        }

        $scope.withdrawFunds = function(address, amount) {
            $scope.loading = true;
            $scope.success = false;
            $scope.error = false;

            contract.sendFunds(Vin.web3.toWei(amount, "ether"), address, {from: Vin.web3.eth.accounts[0], gas: 200000}).then(function () {
                $scope.loading = false;
                $scope.success = true;
                $scope.$apply();

                function stop() {
                    $scope.loading = false;
                    $scope.success = false;
                    $scope.error = false;
                    $scope.$apply();
                }                   
                setTimeout(stop, 3000);
            }).catch(function (error) {
                console.error(error);
                $scope.loading = false;
                $scope.error = error.message;
                $scope.$apply();

                function stop() {
                    $scope.loading = false;
                    $scope.success = false;
                    $scope.error = false;
                    $scope.$apply();
                }                   
                setTimeout(stop, 3000);
            });
        }
    });


});