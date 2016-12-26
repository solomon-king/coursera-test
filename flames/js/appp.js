(function() {
    'use strict';

    angular.module('CheckNames', [])
           .controller('NCController', ['$scope', NCController]);

    function NCController($scope) {

        $scope.result = "";
        var ul = ""; //unique characters;

        $scope.checkNames = function() {
            //$scope.result = $scope.name1 +":"+$scope.name2;
            ul = uniqueLetters($scope.name1,$scope.name2);
            //ul = removeSpaces($scope.name1,$scope.name2);
var flames = ["Friend","Love","Affection","Marriage","Enemy","Sister"];
//var flameb = ["Friend","Love","Affection","Marriage","Enemy","Brother"];
            //ul = flames();

            $scope.result = flames[ul];
        };
        function removeSpaces(n1,n2){
            n1 = n1.trim().toLowerCase().replace(/\s/g, '');
            n2 = n2.trim().toLowerCase().replace(/\s/g, '');
            return n1+":"+n2;
        }
        function flames(num){
            var n = num;
            var f = ['f','l','a','m','e','s'];
            var ff = "flames";
            var r = [];
            var res = 0;
            //alert(f.length +":"+n);
            for(var x=0;f.length != 1;x++)
            {   var f1 = f;
                res = n % f.length;
                if(res == 0){res = f.length;}
                f.splice(res-1,1);
                //alert("f:"+f);
                var f2 = f.slice(res-1);
                //alert("f1:"+f1);
                //alert("f2:"+f2);
                for (var i = 0;i<f2.length;i++){f.pop();}
                    f = f2.concat(f);

                //f=
            }

            //return f.length +":"+n+":"+f;
            //alert(f[0]);
            //alert(ff.indexOf(f[0])+1);
            //return ff.indexOf(f[0])+1;
            return ff.indexOf(f[0]);
        }


        function uniqueLetters(n1,n2){
            n1 = n1.trim().toLowerCase().replace(/\s/g, '');
            n2 = n2.trim().toLowerCase().replace(/\s/g, '');
            var pos;
            var b=0;
            var pos_arr = [];
            var i=0;
            var j=0;
            var n1chars=0,n2chars=n2.length;
            var n = 0;
            //alert(n1+" length:"+n1.length+", "+n2+" length:"+n2.length);
            for(i=0;i<n1.length;i++)
            {
                n1chars++;
                pos = n2.indexOf(n1.charAt(i));
                //alert(n1.charAt(i)+":"+pos);
                //alert((pos != '-1'));
                if(pos != '-1')
                   { //alert("inside");
                     n2chars--;
                     n1chars--;
                      if(pos == 0)
                          {n2=n2.substr(1,n2.length-1);}//alert(n2);}
                      else if(pos == n2.length-1)
                          {n2 = n2.substr(0,n2.length-1);}//alert(n2);}
                      else
                          {n2 = n2.substr(0,pos-1)+n2.substr(pos+1,n2.length-1);}//alert(n2);}
                    }
              }
          //return n1chars + n2chars;
          n = n1chars + n2chars;
          return flames(n);
        }
    };
})();

// function checkUnique(n1,n2){
//     //var j = n1.charAt(0);
//     //var i = n2.indexOf(j);
//     //n1 = n1.split('');
//     //n2 = n2.split('');
//     var pos;
//     var b=0;
//     var pos_arr = [];
//     for(var a=0;a<n1.length;a++)
//     {
//         pos = n2.indexOf(n1.charAt(a));
//         alert(pos);
//         //alert((pos != '-1'));
//         if(pos != '-1')
//            { alert("inside");
//              // pos_arr[b] = pos;
//              // alert(pos_arr[b]);
//              // b++;
//
//
//
//         if(pos == 0)
//             {n2=n2.substr(1,n2.length-1);alert(n2);}
//         else if(pos == n2.length-1)
//             {n2 = n2.substr(0,n2.length-1);alert(n2);}
//         else
//             {n2 = n2.substr(0,pos-1)+n2.substr(pos+1,n2.length-1);alert(n2);}
//         //alert(n2);
//     }
//     //else{continue;}
//
//     }
//
//     //alert(pos_arr.join(''));
//     //return n1+":"+n2+":"+i+":"+j;
//     //return pos_arr+":"+pos_arr.length;
//     return n1.length + n2.length;// - pos_arr.length;
// }
