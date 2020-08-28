define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Register generated by Appery.io
         * @module Register
         */
        APP.controller('Register', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.user = Apperyio.EntityAPI('User');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                $scope.user.country = "US";
            };
            /**
             * @function register
             */
            $scope.register = function() {
                var requestData = {};
                requestData = (function mapping3486($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var user_scope = $scope.user;
                    requestData.params.username = user_scope.username;
                    requestData.params.password = user_scope.password;
                    requestData.params.email = user_scope.email;
                    requestData.params.country = user_scope.country;
                    requestData.params.FirstName = user_scope.FirstName;
                    requestData.params.LastName = user_scope.LastName;
                    requestData.params.Company = user_scope.Company;
                    requestData.params.MobilePhone = user_scope.MobilePhone;
                    requestData.params.BusinessPhone = user_scope.BusinessPhone;
                    requestData.params.ShippingAddress1 = user_scope.ShippingAddress1;
                    requestData.params.ShippingAddress2 = user_scope.ShippingAddress2;
                    requestData.params.City = user_scope.City;
                    requestData.params.State = user_scope.State;
                    requestData.params.Zip = user_scope.Zip;
                    requestData.params.InActive = user_scope.InActive;
                    requestData.params.ResaleNumber = user_scope.ResaleNumber;
                    requestData.params.UserType = user_scope.UserType;
                    requestData.params.ExtraField1 = user_scope.ExtraField1;
                    requestData.params.ExtraField2 = user_scope.ExtraField2;
                    requestData.params.ExtraField3 = user_scope.ExtraField3;
                    requestData.params.ExtraField4 = user_scope.ExtraField4;
                    requestData.params.ExtraField5 = user_scope.ExtraField5;
                    requestData.params.ActCode = user_scope.ActCode;
                    return requestData;
                    /*|button_mapping|onbeforesend|148D87C6-4EEC-41F1-82E5-CD732525AC59||3486|*/
                })($scope);
                // read more about using rest services: https://devcenter.appery.io/documentation/angularjs/rest-service/ 
                Apperyio.get("RegisterNewUser_prod_service")(requestData).then(
                    /*|service_bookmark|bookmark|148D87C6-4EEC-41F1-82E5-CD732525AC59||8699|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|148D87C6-4EEC-41F1-82E5-CD732525AC59||3373|*/
                        var userData = Apperyio.get("dataStorage");
                        userData.current = success.data;
                        var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                            animation: 'slide-in-up', // The animation to show & hide with
                            focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                            backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                            hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                        };
                        Apperyio.get('Modals').loadModal("RegistrationComplete").then(
                            function(modalInstance) {
                                modalInstance.open(modalOptions).then(function(modal) {
                                    modal.scope.modal = modal;
                                    modal.show();
                                });
                            },
                            function(error) {
                                console.log(error);
                            });
                        // Move on
                        Apperyio.navigateTo("Welcome", {});
                    },
                    function(error) { // callback to handle request error
                        var userData = Apperyio.get("dataStorage");
                        userData.message = error.data.message;
                        console.log(error.data.message)
                        var modalOptions = { // About Ionic Modal: https://devcenter.appery.io/documentation/angularjs/screens/#Modal_screen
                            animation: 'slide-in-up', // The animation to show & hide with
                            focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                            backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                            hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                        };
                        Apperyio.get('Modals').loadModal("MessagePopup").then(
                            function(modalInstance) {
                                modalInstance.open(modalOptions).then(function(modal) {
                                    modal.scope.modal = modal;
                                    modal.show();
                                });
                            },
                            function(error) {
                                console.log(error);
                            });
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function gotologin
             */
            $scope.gotologin = function() {
                Apperyio.navigateTo("Login", {});
            };
            /**
             * @function externalPP
             */
            $scope.externalPP = function() {
                var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                    animation: 'slide-in-up', // The animation to show & hide with
                    focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                    backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                    hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                };
                Apperyio.get('Modals').loadModal("Privacy_Terms").then(
                    function(modalInstance) {
                        modalInstance.open(modalOptions).then(function(modal) {
                            modal.scope.modal = modal;
                            modal.show();
                        });
                    },
                    function(error) {
                        console.log(error);
                    });
            };
        }
    });