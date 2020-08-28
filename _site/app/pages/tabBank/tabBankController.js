define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for tabBank generated by Appery.io
         * @module tabBank
         */
        APP.controller('tabBank', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.list = Apperyio.EntityAPI('List');
            $scope.username = Apperyio.EntityAPI('String');
            $scope.token = Apperyio.EntityAPI('String');
            $scope.custID = Apperyio.EntityAPI('String');
            $scope.last4 = Apperyio.EntityAPI('String');
            $scope.cardBrand = Apperyio.EntityAPI('String');
            $scope.expMonth = Apperyio.EntityAPI('String');
            $scope.cardID = Apperyio.EntityAPI('String');
            $scope.expYear = Apperyio.EntityAPI('String');
            $scope.default_last4 = Apperyio.EntityAPI('String');
            $scope.default_cardBrand = Apperyio.EntityAPI('String');
            $scope.default_expMonth = Apperyio.EntityAPI('String');
            $scope.default_expYear = Apperyio.EntityAPI('String');
            $scope.default_cardID = Apperyio.EntityAPI('String');
            $scope.sq_CCOF = Apperyio.EntityAPI('String');
            $scope.sq_CustID = Apperyio.EntityAPI('String');
            $scope.RequestID1 = Apperyio.EntityAPI('DataStorage');
            $scope.paymentType = Apperyio.EntityAPI('String');
            $scope.escrowAmt = Apperyio.EntityAPI('String');
            $scope.profileID = Apperyio.EntityAPI('String');
            $scope.list1 = Apperyio.EntityAPI('List1');
            $scope.item1 = Apperyio.EntityAPI('String');
            $scope.userEmail = Apperyio.EntityAPI('String');
            $scope.database_CCOF = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                var requestData = {};
                //PaymentType Init Stuff
                //var miniID = "";
                //Get User
                //xxxxxxxxxxxxx
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var Buyer_username = AllData.username;
                var custID = AllData.sqCustID;
                var token = AllData.session;
                var sq_CCOF = AllData.sqCCOF;
                var sq_CustID = AllData.sqCustID;
                var paymentType = AllData.defaultPayMethod;
                var profileID = AllData.profile_id;
                //xxxxxxxxxxxx
                //Get User  
                //console.log(username);
                //console.log(AllData);
                //console.log(token);
                //console.log("FromApp",custID);
                //console.log("PaymentType",paymentType);
                //On load screen logic
                //PaymentType Init Stuff
                var requestData = {};
                requestData = (function mapping4987($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var profileID_scope = $scope.profileID;
                    requestData.params.user_profile_id = profileID;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    return requestData;
                    /*|button_mapping|onbeforesend|4BDA5A8A-51E6-A9B6-5AC6-F54E2A94B9EC||4987|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("get_CCOF_fromDataBase_service")(requestData).then(
                    /*|service_bookmark|bookmark|4BDA5A8A-51E6-A9B6-5AC6-F54E2A94B9EC||6948|*/
                    function(success) { // success callback
                        (function mapping9031(success, $scope) {
                            var database_CCOF_scope = $scope.database_CCOF;
                            database_CCOF_scope = success.data.sqCCOF;
                            $scope.database_CCOF = database_CCOF_scope;
                            /*|button_mapping|onsuccess|4BDA5A8A-51E6-A9B6-5AC6-F54E2A94B9EC||9031|*/
                        })(success, $scope);
                        console.log("$scope.database_CCOF", $scope.database_CCOF);
                        userData.current.sqCCOF = $scope.database_CCOF;
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
                var requestData = {};
                requestData = (function mapping7417($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var sq_CCOF_scope = $scope.sq_CCOF;
                    var sq_CustID_scope = $scope.sq_CustID;
                    requestData.params.sqCCOF = sq_CCOF;
                    requestData.params.sqCust = sq_CustID;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    //console.log("token",token);
                    return requestData;
                    /*|button_mapping|onbeforesend|EA379165-8F56-5FD9-DBBC-F7A649357FB0||7417|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("sq_defaultCC_prod_service")(requestData).then(
                    /*|service_bookmark|bookmark|EA379165-8F56-5FD9-DBBC-F7A649357FB0||8952|*/
                    function(success) { // success callback
                        (function mapping1977(success, $scope) {
                            var default_last4_scope = $scope.default_last4;
                            var default_cardBrand_scope = $scope.default_cardBrand;
                            var default_expMonth_scope = $scope.default_expMonth;
                            var default_cardID_scope = $scope.default_cardID;
                            var default_expYear_scope = $scope.default_expYear;
                            default_last4_scope = success.data.last_4;
                            default_cardBrand_scope = success.data.card_brand;
                            default_expMonth_scope = success.data.exp_month;
                            default_cardID_scope = success.data.id;
                            default_expYear_scope = success.data.exp_year;
                            $scope.default_last4 = default_last4_scope;
                            $scope.default_cardBrand = default_cardBrand_scope;
                            $scope.default_expMonth = default_expMonth_scope;
                            $scope.default_cardID = default_cardID_scope;
                            $scope.default_expYear = default_expYear_scope;
                            /*|button_mapping|onsuccess|EA379165-8F56-5FD9-DBBC-F7A649357FB0||1977|*/
                        })(success, $scope);
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });

                function sleep(milliseconds) {
                    var start = new Date().getTime();
                    for (var i = 0; i < 1e7; i++) {
                        if ((new Date().getTime() - start) > milliseconds) {
                            break;
                        }
                    }
                }
                sleep(1000);
                var requestData = {};
                requestData = (function mapping6101($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var custID_scope = $scope.custID;
                    requestData.params.sqCust = custID;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    //console.log("token",token);
                    return requestData;
                    /*|button_mapping|onbeforesend|5D800C55-E9CC-60B3-ABF8-8A94BFC57A28||6101|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("sq_RetrieveCustomer_CCOF_prod_service")(requestData).then(
                    /*|service_bookmark|bookmark|5D800C55-E9CC-60B3-ABF8-8A94BFC57A28||6167|*/
                    function(success) { // success callback
                        (function mapping7423(success, $scope) {
                            var list_scope = $scope.list;
                            for (var i = 0, l = success.data.length; i < l; i++) {
                                _.set(list_scope, '[' + i + ']', success.data[i]);
                            }
                            $scope.list = list_scope;
                            //console.log($scope.list);
                            /*|button_mapping|onsuccess|5D800C55-E9CC-60B3-ABF8-8A94BFC57A28||7423|*/
                        })(success, $scope);
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
                var requestData = {};
                requestData = (function mapping2118($scope) {
                    var requestData = {};
                    requestData.params = {};
                    //var username_scope = $scope.username;
                    requestData.params.username = username;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    // console.log("token",token);
                    // console.log("Whois",username)
                    return requestData;
                    /*|button_mapping|onbeforesend|EA30F1E7-F0B1-2714-2C74-543F9B63DF64||2118|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("BuyerBank_GetAvailable_tBank_service")(requestData).then(
                    /*|service_bookmark|bookmark|EA30F1E7-F0B1-2714-2C74-543F9B63DF64||7453|*/
                    function(success) { // success callback
                        (function mapping7169(success, $scope) {
                            var escrowAmt_scope = $scope.escrowAmt;
                            escrowAmt_scope = success.data[0].EscrowAmt;
                            $scope.escrowAmt = escrowAmt_scope;
                            //console.log("amt:",$scope.escrowAmt);
                            // When there is  escrow Account
                            switch (paymentType) {
                                case "creditcard":
                                    //console.log("They are using Credit Card");
                                    $scope.lblText = "Your Payment method is currently by Credit Card";
                                    $scope.lblText3 = "If you want to use BTC, ACH, Wire, or a Check to fill your Escrow Account, click below to email instructions:";
                                    $scope.btn2Text = "Change to Escrow";
                                    $scope.btn3Text = "Click for instructions";
                                    $scope.btn4Text = "Escrow: $" + $scope.escrowAmt.toFixed(2) + " Scroll down for details";
                                    $scope.btn1Show = false;
                                    $scope.btn2Show = true;
                                    $scope.btn3Show = true;
                                    $scope.btn4Show = true;
                                    $scope.eDetailShow = true;
                                    break;
                                case "escrow":
                                    //console.log("They are using escrow");
                                    $scope.lblText = "Your Payment method is currently by Escrow";
                                    //$scope.lblText1 = "Change to your Credit Card";
                                    //$scope.lblText2 = "Your Payment method is currently by Escrow";
                                    $scope.lblText3 = "If you want to use BTC, ACH, Wire, or a Check to fill your Escrow Account, click below to email instructions:";
                                    $scope.btn1Text = "Change to Credit Card";
                                    $scope.btn2Text = "N/A";
                                    $scope.btn3Text = "Click for instructions";
                                    $scope.btn4Text = "Escrow: $" + $scope.escrowAmt.toFixed(2) + " Scroll down for details";
                                    $scope.btn2Show = false;
                                    $scope.btn1Show = true;
                                    $scope.btn3Show = true;
                                    $scope.btn4Show = true;
                                    $scope.eDetailShow = true;
                                    break;
                                case "test":
                                    //console.log("They are using test");
                                    $scope.lblText = "Your Payment method is in test mode";
                                    //$scope.lblText1 = "Change to your Credit Card";
                                    //$scope.lblText2 = "Your Payment method is currently by Escrow";
                                    $scope.lblText3 = "If you want to use BTC, ACH, Wire, or a Check to fill your Escrow Account, click below to email instructions:";
                                    $scope.btn1Text = "Change to Credit Card";
                                    $scope.btn2Text = "Change to Escrow";
                                    $scope.btn3Text = "Click for instructions";
                                    $scope.btn4Text = "Escrow: $" + $scope.escrowAmt.toFixed(2) + " Scroll down for details";
                                    $scope.btn2Show = false;
                                    $scope.btn1Show = false;
                                    $scope.btn3Show = false;
                                    $scope.btn4Show = false;
                                    $scope.eDetailShow = false;
                                    break;
                                case "suspend":
                                    //console.log("They are using suspended");
                                    $scope.lblText = "Your account has a problem. Please contact customer service";
                                    $scope.btn2Show = false;
                                    $scope.btn1Show = false;
                                    $scope.btn3Show = false;
                                    $scope.btn4Show = false;
                                    $scope.eDetailShow = false;
                                    break;
                            }
                            /*|button_mapping|onsuccess|EA30F1E7-F0B1-2714-2C74-543F9B63DF64||7169|*/
                        })(success, $scope);
                    },
                    function(error) { // callback to handle request error
                        // When there is no escrow Account
                        switch (paymentType) {
                            case "creditcard":
                                // console.log("They are using Credit Card");
                                $scope.lblText = "Your Payment method is currently by Credit Card";
                                $scope.lblText3 = "Want to save on transaction Fees? Open an Escrow Account. You can fill it by using BTC, ACH, Wire, or a Check. Click below to email instructions:";
                                $scope.btn2Text = "Change to Escrow";
                                $scope.btn3Text = "Click for instructions";
                                $scope.btn1Show = false;
                                $scope.btn2Show = false;
                                $scope.btn3Show = true;
                                $scope.btn4Show = false;
                                $scope.eDetailShow = false;
                                break;
                            case "escrow":
                                //console.log("They are using escrow");
                                $scope.lblText = "There is a problem with your escrow account. Please contact customer service";
                                //$scope.lblText1 = "Change to your Credit Card";
                                //$scope.lblText2 = "Your Payment method is currently by Escrow";
                                $scope.lblText3 = "If you want to use BTC, ACH, Wire, or a Check to fill your Escrow Account, click below to email instructions:";
                                $scope.btn1Text = "Change to Credit Card";
                                $scope.btn2Text = "N/A";
                                $scope.btn3Text = "Click for instructions";
                                $scope.btn2Show = false;
                                $scope.btn1Show = true;
                                $scope.btn3Show = true;
                                $scope.btn4Show = false;
                                $scope.eDetailShow = false;
                                break;
                            case "test":
                                //console.log("They are using test");
                                $scope.lblText = "Your Payment method is in test mode";
                                //$scope.lblText1 = "Change to your Credit Card";
                                //$scope.lblText2 = "Your Payment method is currently by Escrow";
                                $scope.lblText3 = "Want to save on transaction Fees? Open an Escrow Account. You can fill it by using BTC, ACH, Wire, or a Check. Click below to email instructions:";
                                $scope.btn1Text = "Change to Credit Card";
                                $scope.btn2Text = "Change to Escrow";
                                $scope.btn3Text = "Click for instructions";
                                $scope.btn2Show = false;
                                $scope.btn1Show = true;
                                $scope.btn3Show = true;
                                $scope.btn4Show = false;
                                $scope.eDetailShow = false;
                                break;
                            case "suspend":
                                //console.log("They are using suspended");
                                $scope.lblText = "Your account has a problem. Please contact customer service";
                                $scope.btn2Show = false;
                                $scope.btn1Show = false;
                                $scope.btn3Show = false;
                                $scope.btn4Show = false;
                                $scope.eDetailShow = false;
                                break;
                        }
                    },
                    function(notify) { // notify callback, can fire few times
                    });
                var requestData = {};
                requestData = (function mapping8870($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var username_scope = $scope.username;
                    requestData.params.username = username;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    //console.log("token",token);
                    return requestData;
                    /*|button_mapping|onbeforesend|A32FB606-F01E-0A4D-9460-7F6C9DA362A1||8870|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("GetEscrowTranactions_user_service")(requestData).then(
                    /*|service_bookmark|bookmark|A32FB606-F01E-0A4D-9460-7F6C9DA362A1||4774|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|A32FB606-F01E-0A4D-9460-7F6C9DA362A1||3858|*/
                        var list_scope = $scope.list1;
                        list1_scope = success.data;
                        $scope.list1 = list1_scope;
                        //console.log("list1",$scope.list1)
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function gotoSquareCCOF
             */
            $scope.gotoSquareCCOF = function() {
                Apperyio.navigateTo("sq_iFrame", {});
            };
            /**
             * @function ChangeCard
             * @param id
             * @param card_brand
             * @param last_4
             * @param exp_month
             * @param exp_year
             */
            $scope.ChangeCard = function(id, card_brand, last_4, exp_month, exp_year) {
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.request_id = id;
                $scope.RequestID1.Gl_Vars.request_id2 = card_brand;
                $scope.RequestID1.Gl_Vars.request_id3 = last_4;
                $scope.RequestID1.Gl_Vars.request_id4 = exp_month;
                $scope.RequestID1.Gl_Vars.request_id5 = exp_year;
                //console.log(id);
                //console.log($scope.RequestID1.Gl_Vars.request_id);
                //console.log($scope.RequestID1.Gl_Vars.request_id2);
                //console.log($scope.RequestID1.Gl_Vars.request_id3);
                //console.log($scope.RequestID1.Gl_Vars.request_id4);
                //console.log($scope.RequestID1.Gl_Vars.request_id5);
                Apperyio.navigateTo("Bank_CC_Detail");
            };
            /**
             * @function changetoCC
             */
            $scope.changetoCC = function() {
                //Get User
                //xxxxxxxxxxxxx
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var token = AllData.session;
                var paymentType = "creditcard";
                var profileID = AllData.profile_id;
                //xxxxxxxxxxxx
                //Get User  
                //console.log(AllData);
                //console.log(token);
                //console.log("PaymentType",paymentType);
                var paymentType1 = paymentType
                var requestData = {};
                requestData = (function mapping6094($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var profileID_scope = $scope.profileID;
                    var paymentType_scope = $scope.paymentType;
                    requestData.params.profile_id = profileID;
                    requestData.params.changeField = paymentType;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    //console.log("token",token);
                    return requestData;
                    /*|button_mapping|onbeforesend|B141CB25-6D96-2EAD-3633-64FE1096F7BB||6094|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("updatePaymentType_service")(requestData).then(
                    /*|service_bookmark|bookmark|B141CB25-6D96-2EAD-3633-64FE1096F7BB||7234|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|B141CB25-6D96-2EAD-3633-64FE1096F7BB||5845|*/
                        alert('Your payment type has been changed to your default credit card');
                        userData.current.defaultPayMethod = "creditcard";
                        userData.current.defaultPayFee = 0.03;
                        //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                        // inject the 'dataStorage' service
                        var data = Apperyio.get("dataStorage");
                        // user1 is a variable in the page1 scope 
                        // set it to reference the 'dataStorage' service
                        $scope.RequestID1.Gl_Vars = data;
                        $scope.RequestID1.Gl_Vars.whereami = "Bank";
                        //console.log(_id);
                        Apperyio.navigateTo("PassThru", {});
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function changetoEscrow
             */
            $scope.changetoEscrow = function() {
                //Get User
                //xxxxxxxxxxxxx
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var token = AllData.session;
                var paymentType = "escrow";
                var profileID = AllData.profile_id
                //xxxxxxxxxxxx
                //Get User  
                //console.log(AllData);
                //console.log(token);
                //console.log("PaymentType",paymentType);
                var paymentType1 = paymentType
                var requestData = {};
                requestData = (function mapping6094($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var profileID_scope = $scope.profileID;
                    var paymentType_scope = $scope.paymentType;
                    requestData.params.profile_id = profileID;
                    requestData.params.changeField = paymentType;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    //console.log("token",token);
                    return requestData;
                    /*CLICK TO EDIT MAPPING*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("updatePaymentType_service")(requestData).then(
                    function(success) { // success callback
                        /*CLICK TO EDIT MAPPING*/
                        alert('Your payment type has been changed to your escrow account.');
                        userData.current.defaultPayMethod = "escrow";
                        userData.current.defaultPayFee = 0;
                        //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                        // inject the 'dataStorage' service
                        var data = Apperyio.get("dataStorage");
                        // user1 is a variable in the page1 scope 
                        // set it to reference the 'dataStorage' service
                        $scope.RequestID1.Gl_Vars = data;
                        $scope.RequestID1.Gl_Vars.whereami = "Bank";
                        //console.log(_id);
                        Apperyio.navigateTo("PassThru", {});
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function gotoEscrowdetail
             */
            $scope.gotoEscrowdetail = function() {
                //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Bank";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function escrowInstruct
             */
            $scope.escrowInstruct = function() {
                //On load screen logic
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var userEmail = AllData.email;
                var token = AllData.session;
                //Get User  
                var requestData = {};
                requestData = (function mapping9037($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var userEmail_scope = $scope.userEmail;
                    requestData.params.user_email = userEmail;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    //console.log("token",token);
                    return requestData;
                    /*|button_mapping|onbeforesend|E000459D-6112-B893-632D-6AD5A827E17F||9037|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("SendEmailforEscrow_service")(requestData).then(
                    /*|service_bookmark|bookmark|E000459D-6112-B893-632D-6AD5A827E17F||8808|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|E000459D-6112-B893-632D-6AD5A827E17F||3801|*/
                        alert('Instructions have been sent to the email address on your account');
                    },
                    function(error) { // callback to handle request error
                        alert('There has been a problem. Please ty again later');
                    },
                    function(notify) { // notify callback, can fire few times
                    });
                //alert('Instructions have been sent to the email address on your account');
            };
        }
    });