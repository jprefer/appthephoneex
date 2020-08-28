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
            $scope.username = Apperyio.EntityAPI('String');
            $scope.email = Apperyio.EntityAPI('String');
            $scope.comments = Apperyio.EntityAPI('String');
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
            /**
             * @function test
             */
            $scope.test = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                alert('this is a test');
                if (turn == "B") {
                    // inject the 'dataStorage' service
                    var data = Apperyio.get("dataStorage");
                    $scope.RequestID1.Gl_Vars = data;
                    $scope.RequestID1.Gl_Vars.whereami = "Buyer_Home";
                    //console.log(_id);
                    Apperyio.navigateTo("PassThru", {});
                } else {
                    // inject the 'dataStorage' service
                    var data = Apperyio.get("dataStorage");
                    $scope.RequestID1.Gl_Vars = data;
                    $scope.RequestID1.Gl_Vars.whereami = "Seller_Home";
                    //console.log(_id);
                    Apperyio.navigateTo("PassThru", {});
                }
            };
            /**
             * @function sendComment
             */
            $scope.sendComment = function() {
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var email = AllData.email;
                var token = AllData.session;
                //Get User  
                var comments = $scope.comments;
                console.log(comments);
                var requestData = {};
                requestData = (function mapping1237($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var comments_scope = $scope.comments;
                    var email_scope = $scope.email;
                    var username_scope = $scope.username;
                    requestData.params.comment = comments;
                    requestData.params.email = email;
                    requestData.params.username = username;
                    requestData.headers = {};
                    var user_scope = $scope.user;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    return requestData;
                    /*|button_mapping|onbeforesend|B994A15C-A574-DB3B-9495-01E89BE1396A||1237|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("enterComment_service")(requestData).then(
                    /*|service_bookmark|bookmark|B994A15C-A574-DB3B-9495-01E89BE1396A||6991|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|B994A15C-A574-DB3B-9495-01E89BE1396A||7587|*/
                        alert('Your message was successfully sent.  You will get a response from us shortly.');
                        $scope.comments = "";
                    },
                    function(error) { // callback to handle request error
                        alert('Your message was not sent. Please try again');
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
        }
    });