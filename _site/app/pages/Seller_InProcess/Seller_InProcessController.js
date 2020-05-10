define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Seller_InProcess generated by Appery.io
         * @module Seller_InProcess
         */
        APP.controller('Seller_InProcess', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.list = Apperyio.EntityAPI('List');
            $scope.user = Apperyio.EntityAPI('User');
            $scope.RequestID1 = Apperyio.EntityAPI('DataStorage');
            $scope.username = Apperyio.EntityAPI('String');
            $scope.item = Apperyio.EntityAPI('String');
            $scope.token = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                var item = "";
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var Buyer_username = AllData.username;
                var token = AllData.session;
                //Get User  
                console.log(username);
                var requestData = {};
                requestData = (function mapping4743($scope) {
                    //var requestData = {};
                    // requestData.params = {};
                    // var username_scope = $scope.username;
                    // requestData.params.username = username_scope;
                    var requestData = {};
                    requestData.params = {};
                    var username_scope = $scope.username;
                    requestData.params.username = username;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    console.log("token", token);
                    return requestData;
                    /*|button_mapping|onbeforesend|500F4F94-5976-620A-52FD-12F444E4CFEA||4743|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("Seller_Shipped_See_service")(requestData).then(
                    /*|service_bookmark|bookmark|500F4F94-5976-620A-52FD-12F444E4CFEA||1421|*/
                    function(success) { // success callback
                        (function mapping8005(success, $scope) {
                            var list_scope = $scope.list;
                            list_scope = success.data;
                            $scope.list = list_scope;
                            console.log($scope.list)
                            /*|button_mapping|onsuccess|500F4F94-5976-620A-52FD-12F444E4CFEA||8005|*/
                        })(success, $scope);
                    },
                    function(error) { // callback to handle request error
                        Apperyio.navigateTo("Login", {});
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function showDetail
             * @param _id
             */
            $scope.showDetail = function(_id) {
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.request_id = _id
                console.log(_id);
                console.log($scope.RequestID1.Gl_Vars.request_id);
                Apperyio.navigateTo("Seller_InProcess_Detail");
            };
        }
    });