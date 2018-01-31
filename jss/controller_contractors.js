

var app = angular.module("mySimpleWalletDapp");

app.controller("ContractorsController", function ($scope) {
    Vin.init(function(contract) {
        $scope.loading = false;
        $scope.success = false;
        $scope.error = false;

        $scope.addRecord = function(vin, record) {
            console.log(vin);
            console.log(record);
            $scope.loading = true;
            $scope.success = false;
            $scope.error = false;
            contract.addRecord(vin, record, {from: Vin.web3.eth.accounts[0]}).then(function() {
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
    });


});