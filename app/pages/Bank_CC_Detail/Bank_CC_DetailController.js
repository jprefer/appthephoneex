define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Bank_CC_Detail generated by Appery.io
         * @module Bank_CC_Detail
         */
        APP.controller('Bank_CC_Detail', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.RequestID2 = Apperyio.EntityAPI('DataStorage');
            $scope.token = Apperyio.EntityAPI('String');
            $scope.sqCCof_ID = Apperyio.EntityAPI('String');
            $scope.sqCardBrand = Apperyio.EntityAPI('String');
            $scope.sqLast_4 = Apperyio.EntityAPI('String');
            $scope.sqMonth = Apperyio.EntityAPI('String');
            $scope.sqYear = Apperyio.EntityAPI('String');
            $scope.cc_state = Apperyio.EntityAPI('String');
            $scope.ThisCreditCard = Apperyio.EntityAPI('String');
            $scope.sqCustID = Apperyio.EntityAPI('String');
            $scope.userProfile_id = Apperyio.EntityAPI('String');
            $scope.username = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID2.Gl_Vars = data;
                var sqCCof_ID = $scope.RequestID2.Gl_Vars.request_id;
                console.log("CCof", sqCCof_ID);
                $scope.sqCardBrand = $scope.RequestID2.Gl_Vars.request_id2;
                //console.log("CardBrand",sqCardBrand);
                $scope.sqLast_4 = $scope.RequestID2.Gl_Vars.request_id3;
                //console.log("Last4",sqLast_4);
                $scope.sqMonth = $scope.RequestID2.Gl_Vars.request_id4;
                //console.log("ExpMonth",sqMonth);
                $scope.sqYear = $scope.RequestID2.Gl_Vars.request_id5;
                //console.log("ExpMonth",sqYear);
                //get user data
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var token = AllData.session;
                var sq_CCOF = AllData.sqCCOF;
                var sq_CustID = AllData.sqCustID;
                //get user data
                if (sq_CCOF == sqCCof_ID) {
                    //       This Is the Default Credit Card; 
                    $scope.cc_state = "This is your default Credit card"
                } else {
                    //       This Is an Extra Credit Card;
                    $scope.cc_state = "This is an extra Credit Card on File"
                }
                console.log($scope.cc_state)
            };
            /**
             * @function deleteCard
             */
            $scope.deleteCard = function() {
                var requestData = {};
                //Get Buyer User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var sqCustID = AllData.sqCustID;
                var sqCCOF_Default = AllData.sqCCOF;
                var username = AllData.username;
                var token = AllData.session;
                //Get User  Info
                var ThisCreditCard = $scope.RequestID2.Gl_Vars.request_id;
                console.log("Delete - sq_CCOF", $scope.RequestID2.Gl_Vars.request_id);
                if (ThisCreditCard == sqCCOF_Default) {
                    alert('Can Not DELETE your Default Credit Card, Please select another card to be your default first')
                    Apperyio.navigateTo("Bank", {})
                } else {
                    var requestData = {};
                    requestData = (function mapping5625($scope) {
                        var requestData = {};
                        requestData.params = {};
                        var sqCustID_scope = $scope.sqCustID;
                        var ThisCreditCard_scope = $scope.ThisCreditCard;
                        requestData.params.sqCust = sqCustID;
                        requestData.params.sqCCOF = ThisCreditCard;
                        requestData.params.username = username;
                        requestData.headers = {};
                        var token_scope = $scope.token;
                        requestData.headers['X-Appery-Session-Token'] = token;
                        console.log("token", token);
                        return requestData;
                        /*|button_mapping|onbeforesend|36A34F2E-53A5-F177-A87C-91C302EF351D||5625|*/
                    })($scope);
                    // read more about using rest services: https://links.appery.io/ve-snippet-rest
                    Apperyio.get("sq_DeleteCard_service")(requestData).then(
                        /*|service_bookmark|bookmark|36A34F2E-53A5-F177-A87C-91C302EF351D||1769|*/
                        function(success) { // success callback
                            /*|button_mapping|onsuccess|36A34F2E-53A5-F177-A87C-91C302EF351D||5175|*/
                            alert('Your Card has Been Deleted From the System')
                            Apperyio.navigateTo("Bank", {})
                        },
                        function(error) { // callback to handle request error
                            //Apperyio.navigateTo("Login", {});
                        },
                        function(notify) { // notify callback, can fire few times
                        });
                }
            };
            /**
             * @function goBack
             */
            $scope.goBack = function() {
                Apperyio.navigateTo("Bank", {});
            };
            /**
             * @function makeDefault
             */
            $scope.makeDefault = function() {
                var requestData = {};
                //Get Buyer User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var sqCustID = AllData.sqCustID;
                var sqCCOF_Default = AllData.sqCCOF;
                var userProfile_id = AllData.userProfile_id;
                var token = AllData.session;
                //Get User  Info
                var ThisCreditCard = $scope.RequestID2.Gl_Vars.request_id;
                console.log("Delete - sq_CCOF", $scope.RequestID2.Gl_Vars.request_id);
                if (ThisCreditCard == sqCCOF_Default) {
                    alert(' This is your default Credit Card. Nothing has changed');
                    Apperyio.navigateTo("Bank", {});
                } else {
                    var requestData = {};
                    requestData = (function mapping7683($scope) {
                        var requestData = {};
                        requestData.params = {};
                        var ThisCreditCard_scope = $scope.ThisCreditCard;
                        var userProfile_id_scope = $scope.userProfile_id;
                        requestData.params.NewCCOF = ThisCreditCard;
                        requestData.params.userProfile_id = userProfile_id;
                        requestData.headers = {};
                        var token_scope = $scope.token;
                        requestData.headers['X-Appery-Session-Token'] = token;
                        console.log("token", token);
                        return requestData;
                        /*|button_mapping|onbeforesend|8B83C27C-2417-A2F1-EA34-CBC4CED0104C||7683|*/
                    })($scope);
                    // read more about using rest services: https://links.appery.io/ve-snippet-rest
                    Apperyio.get("sq_Update_Ccof_inUser_service")(requestData).then(
                        /*|service_bookmark|bookmark|8B83C27C-2417-A2F1-EA34-CBC4CED0104C||8686|*/
                        function(success) { // success callback
                            /*|button_mapping|onsuccess|8B83C27C-2417-A2F1-EA34-CBC4CED0104C||3849|*/
                            alert(' You have sucessfully changed your default Credit Card.');
                            userData.current.sqCCOF = ThisCreditCard;
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
                }
            };
        }
    });