define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for tabInfo generated by Appery.io
         * @module tabInfo
         */
        APP.controller('tabInfo', ['$scope', 'Apperyio', controller]);

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
             * @function privacyPolicy
             */
            $scope.privacyPolicy = function() {
                window.open('https://thephoneex.com/privacy-policy.html', '_blank', 'location=yes');
            };
            /**
             * @function ourWebsite
             */
            $scope.ourWebsite = function() {
                window.open('https://thephoneex.com', '_blank', 'location=yes');
            };
            /**
             * @function contactUs
             */
            $scope.contactUs = function() {
                window.open('https://thephoneex.com/index.html#contact', '_blank', 'location=yes');
            };
            /**
             * @function termsCondtions
             */
            $scope.termsCondtions = function() {
                window.open('https://thephoneex.com/terms-conditions.html', '_blank', 'location=yes');
            };
        }
    });