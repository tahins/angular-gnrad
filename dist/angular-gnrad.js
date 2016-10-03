(function () {
    'use strict';

    angular.module('angular-gnrad', []).

    service('GnRAd', [function(){
        this.url = 'https://content.green-red.com/lib/display.js';
        this.isAlreadyLoaded = false;
    }]).

    directive('gnrad', function () {
        return {
            restrict: 'E',
            replace: true,
            scope : {
                siteId : '@',
                slotId : '@'
            },
            template: '<script type="text/javascript" id="GNR{{slotId}}"></script>',
            controller: ['$scope', 'GnRAd', '$timeout', function ($scope, GnRAd, $timeout) {
                if (!GnRAd.isAlreadyLoaded) {
                    window['gandrad']=window['gandrad']||function(){(window['gandrad'].q=window['gandrad'].q||[]).push(arguments)};

                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.src = GnRAd.url;
                    s.async = true;
                    document.head.appendChild(s);

                    GnRAd.isAlreadyLoaded = true;
                }
                
                $timeout(function(){
                    gandrad({siteid: $scope.siteId,slot: $scope.slotId}); 
                });
            }]
        };
    });
}());

