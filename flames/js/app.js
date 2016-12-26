(function() {
    'use strict';

    angular.module('LunchCheck', ['ngSanitize'])
        .controller('LCController', LCController);

    function LCController($scope, $sce, $injector) {

        $scope.result = "";
        var msg1 = "<span style='color:red'>Please enter data first.</span>";
        var msg2 = "<span style='color:forestgreen'>Enjoy!</span>";
        var msg3 = "<span style='color:#000cff'>Too much!</span>";

        $scope.checkLunch = function() {
            var items = $scope.lunchmenu;
            //alert(items == undefined);
            if (items == undefined || items.length < 1 || items == "" || items == null) {
                $scope.result = $sce.trustAsHtml(msg1);
				$scope.activeClass = " clr1";
                $scope.lunchmenu = null;
            }
            var itemsarray = items.split(',');
            var count = 0;
			//for(var y in itemsarray){alert(y+"::"+itemsarray[y]);}
            for (var x = 0; x < itemsarray.length; x++) {
                var l = itemsarray[x].trim();
                //alert(itemsarray[x].toString() + ":" + l.length);
                if (l.length != 0) { count++; }
                if (l.startsWith('"') && l.endsWith('"')) {
                    var ll = l.substr(1, l.length - 1);
                    //alert(ll + ":" + ll.length);
                    if (ll.trim().length > 1) { continue; } else { count--; }
                }
            }
            if (count == 0) {
                $scope.result = $sce.trustAsHtml(msg1);
                $scope.lunchmenu = null;
				$scope.activeClass = " clr1";

            } else if (count <= 3) {
                $scope.result = $sce.trustAsHtml(msg2);
				$scope.activeClass = " clr2";
            } else {
                $scope.result = $sce.trustAsHtml(msg3);
				$scope.activeClass = " clr3";
            }
        };

        // function(items) {
        //     var itemsarray = items.split(',');
        //     var count = 0;
        //     for (x in itemsarray) {
        //         count += 1;
        //     }
        // $scope.result = itemsarray;

        //}


        console.log($injector.annotate(LCController));

    };

    console.log(LCController.toString());

})();