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
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                var requestData = {};
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
                //xxxxxxxxxxxx
                //Get User  
                console.log(username);
                console.log(AllData);
                console.log(token);
                console.log("FromApp", custID)
                //On load screen logic
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
                    console.log("token", token);
                    return requestData;
                    /*|button_mapping|onbeforesend|EA379165-8F56-5FD9-DBBC-F7A649357FB0||7417|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("sq_defaultCC_service")(requestData).then(
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
                    console.log("token", token);
                    return requestData;
                    /*|button_mapping|onbeforesend|5D800C55-E9CC-60B3-ABF8-8A94BFC57A28||6101|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("sq_RetrieveCustomer_CCOF_service")(requestData).then(
                    /*|service_bookmark|bookmark|5D800C55-E9CC-60B3-ABF8-8A94BFC57A28||6167|*/
                    function(success) { // success callback
                        (function mapping7423(success, $scope) {
                            var list_scope = $scope.list;
                            for (var i = 0, l = success.data.length; i < l; i++) {
                                _.set(list_scope, '[' + i + ']', success.data[i]);
                            }
                            $scope.list = list_scope;
                            console.log($scope.list);
                            /*|button_mapping|onsuccess|5D800C55-E9CC-60B3-ABF8-8A94BFC57A28||7423|*/
                        })(success, $scope);
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
                console.log(id);
                console.log($scope.RequestID1.Gl_Vars.request_id);
                console.log($scope.RequestID1.Gl_Vars.request_id2);
                console.log($scope.RequestID1.Gl_Vars.request_id3);
                console.log($scope.RequestID1.Gl_Vars.request_id4);
                console.log($scope.RequestID1.Gl_Vars.request_id5);
                Apperyio.navigateTo("Bank_CC_Detail");
            };
        }
    });