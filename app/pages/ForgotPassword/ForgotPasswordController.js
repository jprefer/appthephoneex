define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for ForgotPassword generated by Appery.io
         * @module ForgotPassword
         */
        APP.controller('ForgotPassword', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.userName = Apperyio.EntityAPI('String');
            $scope.Code = Apperyio.EntityAPI('String');
            $scope.newPassword = Apperyio.EntityAPI('String');
            $scope.requestMessage = Apperyio.EntityAPI('String');
            $scope.reponseMessage = Apperyio.EntityAPI('String');
            $scope.usernameSend = Apperyio.EntityAPI('String');
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
             * @function requestCode
             */
            $scope.requestCode = function() {
                var requestMessage = "";
                var requestData = {};
                requestData = (function mapping4738($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var userName_scope = $scope.userName;
                    requestData.params.username = userName_scope;
                    return requestData;
                    /*|button_mapping|onbeforesend|D7EBDC93-1C71-FAAC-17CC-D9208DA0FD91||4738|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("UpdatePasswordGetCode_service")(requestData).then(
                    /*|service_bookmark|bookmark|D7EBDC93-1C71-FAAC-17CC-D9208DA0FD91||4428|*/
                    function(success) { // success callback
                        (function mapping4921(success, $scope) {
                            var requestMessage_scope = $scope.requestMessage;
                            requestMessage_scope = success.data.message;
                            $scope.requestMessage = requestMessage_scope;
                            /*|button_mapping|onsuccess|D7EBDC93-1C71-FAAC-17CC-D9208DA0FD91||4921|*/
                        })(success, $scope);
                        alert($scope.requestMessage);
                        // console.log("requestMessage",$scope.requestMessage);
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function resetPassword
             */
            $scope.resetPassword = function() {
                var requestData = {};
                requestData = (function mapping1682($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var newPassword_scope = $scope.newPassword;
                    var Code_scope = $scope.Code;
                    var usernameSend_scope = $scope.usernameSend;
                    requestData.params.newPassword = newPassword_scope;
                    requestData.params.secretCode = Code_scope;
                    requestData.params.username = usernameSend_scope;
                    return requestData;
                    /*|button_mapping|onbeforesend|39798178-81FD-617A-D820-31223F0753FE||1682|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("Update_UserPassword_service")(requestData).then(
                    /*|service_bookmark|bookmark|39798178-81FD-617A-D820-31223F0753FE||5114|*/
                    function(success) { // success callback
                        (function mapping5560(success, $scope) {
                            var reponseMessage_scope = $scope.reponseMessage;
                            reponseMessage_scope = success.data.message;
                            $scope.reponseMessage = reponseMessage_scope;
                            /*|button_mapping|onsuccess|39798178-81FD-617A-D820-31223F0753FE||5560|*/
                        })(success, $scope);
                        alert($scope.reponseMessage);
                        //console.log("requestMessage",$scope.reponseMessage);
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
                Apperyio.navigateTo("Login", {});
            };
            /**
             * @function gotologin
             */
            $scope.gotologin = function() {
                Apperyio.navigateTo("Login", {});
            };
        }
    });