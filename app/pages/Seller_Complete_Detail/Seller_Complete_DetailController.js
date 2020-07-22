define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Seller_Complete_Detail generated by Appery.io
         * @module Seller_Complete_Detail
         */
        APP.controller('Seller_Complete_Detail', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.RequestID3 = Apperyio.EntityAPI('String');
            $scope.RequestID2 = Apperyio.EntityAPI('DataStorage');
            $scope._id1 = Apperyio.EntityAPI('String');
            $scope.Offer_id1 = Apperyio.EntityAPI('String');
            $scope.Request_id1 = Apperyio.EntityAPI('String');
            $scope.Manu1 = Apperyio.EntityAPI('String');
            $scope.Prod1 = Apperyio.EntityAPI('String');
            $scope.Mem1 = Apperyio.EntityAPI('String');
            $scope.Colour1 = Apperyio.EntityAPI('String');
            $scope.Cond1 = Apperyio.EntityAPI('String');
            $scope.Quan1 = Apperyio.EntityAPI('String');
            $scope.BuyerNote1 = Apperyio.EntityAPI('String');
            $scope.SellerNote1 = Apperyio.EntityAPI('String');
            $scope.BuyerNote2a = Apperyio.EntityAPI('String');
            $scope.Price1 = Apperyio.EntityAPI('Number');
            $scope.SellingPrice1 = Apperyio.EntityAPI('Number');
            $scope.Shipping1 = Apperyio.EntityAPI('String');
            $scope.CompanyName1 = Apperyio.EntityAPI('String');
            $scope.ShipFirstName1 = Apperyio.EntityAPI('String');
            $scope.ShipLastName1 = Apperyio.EntityAPI('String');
            $scope.ShipAddress1a = Apperyio.EntityAPI('String');
            $scope.ShipAddress2a = Apperyio.EntityAPI('String');
            $scope.ShipCity1 = Apperyio.EntityAPI('String');
            $scope.ShipState1 = Apperyio.EntityAPI('String');
            $scope.ShipZip1 = Apperyio.EntityAPI('String');
            $scope.ChoiceCarrier1 = Apperyio.EntityAPI('String');
            $scope.Kit1 = Apperyio.EntityAPI('String');
            $scope.RequestID4 = Apperyio.EntityAPI('String');
            $scope.ShippedBy1 = Apperyio.EntityAPI('String');
            $scope.Tracking1 = Apperyio.EntityAPI('String');
            $scope.ShipDate1 = Apperyio.EntityAPI('String');
            $scope.token = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                var RequestID3 = ""
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID2.Gl_Vars = data;
                console.log($scope.RequestID2.Gl_Vars.request_id);
                RequestID3 = $scope.RequestID2.Gl_Vars.request_id;
                console.log("RequestID3= ", RequestID3);
                var miniID = "";
                //Get User
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var Buyer_username = AllData.username;
                var token = AllData.session;
                //Get User  
                // Get Data from Request
                var requestData = {};
                requestData = (function mapping5190($scope) {
                    var requestData = {};
                    requestData.params = {};
                    var RequestID3_scope = $scope.RequestID3;
                    requestData.params.CurrentRequestID = RequestID3;
                    requestData.headers = {};
                    var token_scope = $scope.token;
                    requestData.headers['X-Appery-Session-Token'] = token;
                    console.log("token", token);
                    return requestData;
                    /*|button_mapping|onbeforesend|F952B444-3CF8-14F2-4B7E-90AEB380A4EA||5190|*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("Seller_Complete_Detail_service")(requestData).then(
                    /*|service_bookmark|bookmark|F952B444-3CF8-14F2-4B7E-90AEB380A4EA||1365|*/
                    function(success) { // success callback
                        (function mapping1982(success, $scope) {
                            var BuyerNote1_scope = $scope.BuyerNote1;
                            var Colour1_scope = $scope.Colour1;
                            var Prod1_scope = $scope.Prod1;
                            var CompanyName1_scope = $scope.CompanyName1;
                            var ShipLastName1_scope = $scope.ShipLastName1;
                            var Quan1_scope = $scope.Quan1;
                            var Shipping1_scope = $scope.Shipping1;
                            var Manu1_scope = $scope.Manu1;
                            var Cond1_scope = $scope.Cond1;
                            var Request_id1_scope = $scope.Request_id1;
                            var ShipCity1_scope = $scope.ShipCity1;
                            var ShipState1_scope = $scope.ShipState1;
                            var ShipFirstName1_scope = $scope.ShipFirstName1;
                            var SellingPrice1_scope = $scope.SellingPrice1;
                            var Mem1_scope = $scope.Mem1;
                            var Price1_scope = $scope.Price1;
                            var Offer_id1_scope = $scope.Offer_id1;
                            var Kit1_scope = $scope.Kit1;
                            var ChoiceCarrier1_scope = $scope.ChoiceCarrier1;
                            var _id1_scope = $scope._id1;
                            var ShipZip1_scope = $scope.ShipZip1;
                            var ShipAddress1a_scope = $scope.ShipAddress1a;
                            var ShipAddress2a_scope = $scope.ShipAddress2a;
                            var ShippedBy1_scope = $scope.ShippedBy1;
                            var Tracking1_scope = $scope.Tracking1;
                            var ShipDate1_scope = $scope.ShipDate1;
                            var RxDate1_scope = $scope.RxDate1;
                            var CloseDate1_scope = $scope.CloseDate1;
                            var SellerPaid1_scope = $scope.SellerPaid1;
                            BuyerNote1_scope = success.data[0].BuyerNote;
                            Colour1_scope = success.data[0].Colour;
                            Prod1_scope = success.data[0].Prod;
                            CompanyName1_scope = success.data[0].CompanyName;
                            ShipLastName1_scope = success.data[0].ShipLastName;
                            Quan1_scope = success.data[0].Quan;
                            Shipping1_scope = success.data[0].Shipping;
                            Manu1_scope = success.data[0].Manu;
                            Cond1_scope = success.data[0].Cond;
                            Request_id1_scope = success.data[0].Request_id;
                            ShipCity1_scope = success.data[0].ShipCity;
                            ShipState1_scope = success.data[0].ShipState;
                            ShipFirstName1_scope = success.data[0].ShipFirstName;
                            SellingPrice1_scope = success.data[0].SellingPrice;
                            Mem1_scope = success.data[0].Mem;
                            Price1_scope = success.data[0].Price;
                            Offer_id1_scope = success.data[0].Offer_id;
                            Kit1_scope = success.data[0].Kit;
                            ChoiceCarrier1_scope = success.data[0].ChoiceCarrier;
                            _id1_scope = success.data[0]._id;
                            ShipZip1_scope = success.data[0].ShipZip;
                            ShipAddress1a_scope = success.data[0].ShipAddress1;
                            ShipAddress2a_scope = success.data[0].ShipAddress2;
                            ShippedBy1_scope = success.data[0].ShippedBy;
                            Tracking1_scope = success.data[0].Tracking;
                            ShipDate1_scope = success.data[0].ShipDate.$date;
                            RxDate1_scope = success.data[0].RxDate.$date;
                            CloseDate1_scope = success.data[0].AcceptDate.$date;
                            SellerPaid1_scope = success.data[0].SellerPaid;
                            $scope.BuyerNote1 = BuyerNote1_scope;
                            $scope.Colour1 = Colour1_scope;
                            $scope.Prod1 = Prod1_scope;
                            $scope.CompanyName1 = CompanyName1_scope;
                            $scope.ShipLastName1 = ShipLastName1_scope;
                            $scope.Quan1 = Quan1_scope;
                            $scope.Shipping1 = Shipping1_scope;
                            $scope.Manu1 = Manu1_scope;
                            $scope.Cond1 = Cond1_scope;
                            $scope.Request_id1 = Request_id1_scope;
                            $scope.ShipCity1 = ShipCity1_scope;
                            $scope.ShipState1 = ShipState1_scope;
                            $scope.ShipFirstName1 = ShipFirstName1_scope;
                            $scope.SellingPrice1 = SellingPrice1_scope;
                            $scope.Mem1 = Mem1_scope;
                            $scope.Price1 = Price1_scope;
                            $scope.Offer_id1 = Offer_id1_scope;
                            $scope.Kit1 = Kit1_scope;
                            $scope.ChoiceCarrier1 = ChoiceCarrier1_scope;
                            $scope._id1 = _id1_scope;
                            $scope.ShipZip1 = ShipZip1_scope;
                            $scope.ShipAddress1a = ShipAddress1a_scope;
                            $scope.ShipAddress2a = ShipAddress2a_scope;
                            $scope.ShippedBy = ShippedBy1_scope;
                            $scope.Tracking = Tracking1_scope;
                            $scope.ShipDate1 = new Date(ShipDate1_scope);
                            var ChangetoString3 = String($scope.ShipDate1);
                            $scope.ShipDate1 = ChangetoString3
                            $scope.RxDate1 = new Date(RxDate1_scope);
                            var ChangetoString2 = String($scope.RxDate1);
                            $scope.RxDate1 = ChangetoString2
                            $scope.CloseDate1 = new Date(CloseDate1_scope);
                            var ChangetoString1 = String($scope.CloseDate1);
                            $scope.CloseDate1 = ChangetoString1
                            $scope.SellerPaid1 = SellerPaid1_scope;
                            if ($scope.SellerPaid1 == false) {
                                $scope.txtPaid = "You have not been paid for this transaction yet."
                            } else {
                                $scope.txtPaid = "You have been paid for this transaction."
                            }
                            //$scope.txtPaid = 
                            /*|button_mapping|onsuccess|F952B444-3CF8-14F2-4B7E-90AEB380A4EA||1982|*/
                        })(success, $scope);
                    },
                    function(error) { // callback to handle request error
                        //Apperyio.navigateTo("Login", {});
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function GoBack
             */
            $scope.GoBack = function() {
                Apperyio.navigateTo("Seller_Complete", {});
            };
        }
    });