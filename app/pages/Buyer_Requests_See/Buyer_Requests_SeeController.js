define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Buyer_Requests_See generated by Appery.io
         * @module Buyer_Requests_See
         */
        APP.controller('Buyer_Requests_See', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.list = Apperyio.EntityAPI('List');
            $scope.Buyer_username = Apperyio.EntityAPI('String');
            $scope.user = Apperyio.EntityAPI('User');
            $scope.username = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                var requestData = {};
                //var miniID = "";
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var Buyer_username = AllData.username;
                //Get User  
                console.log(username);
                var requestData = {};
                requestData = (function mapping2090($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var username_scope = $scope.username;
                    requestData.params.username = username;
                    return requestData;
                    /*|button_mapping|onbeforesend|FA977C92-879A-9940-C8AC-2B60851F32D0||2090|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("ReturnRequests_service")(requestData).then(
                    /*|service_bookmark|bookmark|FA977C92-879A-9940-C8AC-2B60851F32D0||8398|*/
                    function(success) { // success callback
                        (function mapping9396(success, $scope) {
                            var list_scope = $scope.list;
                            list_scope = success.data;
                            $scope.list = list_scope;
                            /*|button_mapping|onsuccess|FA977C92-879A-9940-C8AC-2B60851F32D0||8196|*/
                        })(success, $scope);
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
        }
    });