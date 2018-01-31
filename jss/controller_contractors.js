

var app = angular.module("mySimpleWalletDapp");

var initRecordType = function(callbackListener) {
    //var serviceIconcArray = {1: "icon_service.png", 2: "icon_milage.png", 3: "icon_accident.png"};
    $("#milage_id").change(function() {
        alert( "Handler for .change() called." );
    })
    $('#milage_id').bind("DOMSubtreeModified",function(){
        if ($('#milage_id').text().length === 0) {
            return;
        }
        callbackListener($('#milage_id').text().toLowerCase());
    });
}

var getKeyByValue = function(obj, value) {
    for( var prop in obj ) {
        if( obj.hasOwnProperty( prop ) ) {
             if( obj[ prop ] === value )
                 return prop;
        }
    }
}

var getRecType = function() {
    var nam = $('#milage_id').text().toLowerCase();
    var vall = "icon_" + nam + ".png";
    return getKeyByValue(serviceIconcArray, vall);
}

var initSanpVin = function(checkCallback) {
    $("#snap_vin_searh").show();
    $("#snap_vin_show").hide();
    $("#snap_vin_show_button").click(function() {
        if ($('#form316222').val().length === 0) {
            return;
        }
        checkCallback();
    })
}

app.controller("ContractorsController", function ($scope) {

    Vin.init(function(contract) {

        initRecordType(function(val) {
            //alert(val);
            $("#rec_type_img").attr('src','img/icon_'+val+'.png');
        });

        initSanpVin(function() {
            $("#LoadModal").show();
            var vin = $('#form316222').val();

            contract.getVinDataSize(vin).then(function(result) {
                console.log(result);
                var carTyp = result[0].toNumber();
                if (carTyp != 0) {
                    carsMapping[vin] = carsArray[carTyp];
                    $("#addRecord_carType").val(carTyp);
                }
                if (!(vin in carsMapping)) {
                    var randomNumberBetween1and17 = Math.floor(Math.random() * 16) + 1;
                    carsMapping[vin] = carsArray[randomNumberBetween1and17];
                    $("#addRecord_carType").val(randomNumberBetween1and17);
                }
                $("#snap_vin_name").text(carsMapping[vin]);
                $("#snap_vin_vin").text("VIN: " + vin);

                $("#snap_vin_searh").hide();
                $("#snap_vin_show").show();
                
                $("#addRecord_vin").val(vin);
                $("#LoadModal").hide();

            }).catch(function(error) {
                console.error(error);
                $scope.error = error.message;
                showErrorDialog(error.message);
                $("#LoadModal").hide();
            });
        });

        if (Vin.web3.eth.accounts.length == 0) {
            $("#search-block__btn").attr("disabled", "disabled");
        } else {
            $("#search-block__btn").removeAttr("disabled");  
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

        $scope.addRecord = function(vin, carType, date, milage, comment) {
            console.log(vin);
            var carType = $("#addRecord_carType").val();
            var recType = getRecType()
            console.log(recType);

            $("#LoadModal").show();

            var unixTimeZero = Date.parse(date) / 1000;

            //string vin, uint carType, uint recordType, uint date, uint milage, string comment
            contract.addRecord(vin, carType, recType, unixTimeZero, milage, comment).then(function() {
                
                $("#snap_vin_searh").show();
                $("#snap_vin_show").hide();
                
                $("#form316222").val('')
                $("#milage_id").text('')
                $("#form325162").val('')
                $("#form386162").val('')

                $("#LoadModal").hide();

            }).catch(function(error) {
                console.error(error);
                $scope.error = error.message;
                showErrorDialog(error.message);
                $("#LoadModal").hide();
            });
        }

    });


});