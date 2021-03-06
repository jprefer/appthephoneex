define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Seller_Ins generated by Appery.io
         * @module Seller_Ins
         */
        APP.controller('Seller_Ins', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
            };
            /**
             * @function gotoVerify
             */
            $scope.gotoVerify = function() {
                Apperyio.navigateTo("Seller_Home", {
                    'reloadPage': true
                });
            };
        }
    });