define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for tab_Verify generated by Appery.io
         * @module tab_Verify
         */
        APP.controller('tab_Verify', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.user = Apperyio.EntityAPI('User');
            $scope.username = Apperyio.EntityAPI('String');
            $scope.mobile = Apperyio.EntityAPI('String');
            $scope.TextCode = Apperyio.EntityAPI('String');
            $scope.TextStatus = Apperyio.EntityAPI('String');
            $scope.Email = Apperyio.EntityAPI('String');
            $scope.MailCode = Apperyio.EntityAPI('String');
            $scope.MailStatus = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var mobile = AllData.MobilePhone;
                var email = AllData.email;
                var mobileV = AllData.TextVer;
                var emailV = AllData.EmailVer;
                var token = AllData.session;
                //Get User  
                console.log("emailV", emailV);
                var textstatus = "";
                $scope.mobile = mobile;
                $scope.mobileV = mobileV;
                $scope.email = email;
                $scope.emailV = emailV;
            };
            /**
             * @function RequestCodeMobile
             */
            $scope.RequestCodeMobile = function() {
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var mobile = AllData.MobilePhone;
                var token = AllData.session;
                //Get User  
                var requestData = {};
                requestData = (function mapping4763($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var mobile_scope = $scope.mobile;
                    requestData.params.mobile = mobile_scope;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    console.log("token", token);
                    console.log("mobile", mobile);
                    return requestData;
                    /*|button_mapping|onbeforesend|12C245A4-2132-0FD7-A535-E0158B7049F5||4763|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("twilio_Request_sms_Verify_service")(requestData).then(
                    /*|service_bookmark|bookmark|12C245A4-2132-0FD7-A535-E0158B7049F5||4237|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|12C245A4-2132-0FD7-A535-E0158B7049F5||4339|*/
                        alert("Message will be sent to " + mobile);
                    },
                    function(error) { // callback to handle request error
                        alert("Please try again later. Message can not be sent to " + mobile);
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function RequestCodeEmail
             */
            $scope.RequestCodeEmail = function() {
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var Email = AllData.email;
                var token = AllData.session;
                //Get User  
                var requestData = {};
                requestData = (function mapping9506($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var Email_scope = $scope.Email;
                    requestData.params.email = Email;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    console.log("token", token);
                    console.log("email", Email);
                    console.log("emailscope", Email_scope);
                    return requestData;
                    /*|button_mapping|onbeforesend|8A258E15-84FB-CA7F-6CF9-E94DE9244A68||9506|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("twilio_Request_email_Verify_service")(requestData).then(
                    /*|service_bookmark|bookmark|8A258E15-84FB-CA7F-6CF9-E94DE9244A68||6714|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|8A258E15-84FB-CA7F-6CF9-E94DE9244A68||1660|*/
                        alert("Message will be sent to " + Email);
                    },
                    function(error) { // callback to handle request error
                        alert("Please try again later. Message can not be sent to " + Email);
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function VerifyCodeText
             */
            $scope.VerifyCodeText = function() {
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var mobile = AllData.MobilePhone;
                var token = AllData.session;
                //Get User  
                var requestData = {};
                requestData = (function mapping7688($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var TextCode_scope = $scope.TextCode;
                    var mobile_scope = $scope.mobile;
                    requestData.params.code = TextCode_scope;
                    requestData.params.to = mobile_scope;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    console.log("token", token);
                    console.log("mobile_scope", mobile);
                    return requestData;
                    /*|button_mapping|onbeforesend|68F6FF9F-109A-C1F5-113B-0617B6365F75||7688|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("twilio_verifyToken_sms_Verify_service")(requestData).then(
                    /*|service_bookmark|bookmark|68F6FF9F-109A-C1F5-113B-0617B6365F75||8698|*/
                    function(success) { // success callback
                        (function mapping7489(success, $scope) {
                            var TextStatus_scope = $scope.TextStatus;
                            TextStatus_scope = success.data.status;
                            $scope.TextStatus = TextStatus_scope;
                            /*|button_mapping|onsuccess|68F6FF9F-109A-C1F5-113B-0617B6365F75||7489|*/
                        })(success, $scope);
                        console.log("TextStatus", $scope.TextStatus);
                        if ($scope.TextStatus == "approved") {
                            alert(mobile + " has been Verified - Thank you");
                            userData.current.TextVer = true;
                            $scope.mobileV = true;
                            var requestData = {};
                            requestData = (function mapping3626($scope) {
                                var requestData = {};
                                requestData.params = {};
                                var mobile_scope = $scope.mobile;
                                requestData.params.MobilePhone = mobile_scope;
                                requestData.headers = {};
                                var token_scope = $scope.token;
                                requestData.headers['X-Appery-Session-Token'] = token;
                                console.log("token", token);
                                console.log("mobile_scope", mobile);
                                return requestData;
                                /*|button_mapping|onbeforesend|C4A2AE28-D93D-03FF-6D57-CA975B7D6994||3626|*/
                            })($scope);
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("Update_TextVer_True_service")(requestData).then(
                                /*|service_bookmark|bookmark|C4A2AE28-D93D-03FF-6D57-CA975B7D6994||9596|*/
                                function(success) { // success callback
                                    /*|button_mapping|onsuccess|C4A2AE28-D93D-03FF-6D57-CA975B7D6994||2817|*/
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                        } else {
                            alert(mobile + " has been not been Verified - Please Try Again");
                        }
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function VerifyCodeEmail
             */
            $scope.VerifyCodeEmail = function() {
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var Email = AllData.email;
                var token = AllData.session;
                //Get User 
                var requestData = {};
                requestData = (function mapping6750($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var MailCode_scope = $scope.MailCode;
                    var Email_scope = Email;
                    requestData.params.code = MailCode_scope;
                    requestData.params.email = Email_scope;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    console.log("token", token);
                    console.log("Email_scope", Email_scope);
                    return requestData;
                    /*|button_mapping|onbeforesend|AF76A573-677A-7BC9-354D-377CD74C973B||6750|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("twilio_verifyToken_email_Verify_service")(requestData).then(
                    /*|service_bookmark|bookmark|AF76A573-677A-7BC9-354D-377CD74C973B||1341|*/
                    function(success) { // success callback
                        (function mapping4186(success, $scope) {
                            var MailStatus_scope = $scope.MailStatus;
                            MailStatus_scope = success.data.status;
                            $scope.MailStatus = MailStatus_scope;
                            /*|button_mapping|onsuccess|AF76A573-677A-7BC9-354D-377CD74C973B||4186|*/
                        })(success, $scope);
                        console.log("MailStatus", $scope.MailStatus);
                        if ($scope.MailStatus == "approved") {
                            alert(Email + " has been Verified - Thank you");
                            $scope.emailV = true;
                            userData.current.EmailVer = true;
                            var requestData = {};
                            requestData = (function mapping5466($scope) {
                                var requestData = {};
                                requestData.params = {};
                                var Email_scope = Email;
                                requestData.params.Email = Email_scope;
                                requestData.headers = {};
                                var token_scope = $scope.token;
                                requestData.headers['X-Appery-Session-Token'] = token;
                                console.log("token", token);
                                return requestData;
                                /*|button_mapping|onbeforesend|8E0D9081-4685-B279-4118-D8245840F917||5466|*/
                            })($scope);
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("Update_EmailVer_True_service")(requestData).then(
                                /*|service_bookmark|bookmark|8E0D9081-4685-B279-4118-D8245840F917||1254|*/
                                function(success) { // success callback
                                    /*|button_mapping|onsuccess|8E0D9081-4685-B279-4118-D8245840F917||5342|*/
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                        } else {
                            alert(Email + " has been not been Verified - Please Try Again");
                        }
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
        }
    });