define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Seller_Filter_Home generated by Appery.io
         * @module Seller_Filter_Home
         */
        APP.controller('Seller_Filter_Home', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.RequestID2 = Apperyio.EntityAPI('DataStorage');
            $scope.list = Apperyio.EntityAPI('List');
            $scope.item = Apperyio.EntityAPI('String');
            $scope.RequestManu = Apperyio.EntityAPI('String');
            $scope.RequestType = Apperyio.EntityAPI('String');
            $scope.RequestModel = Apperyio.EntityAPI('String');
            $scope.username = Apperyio.EntityAPI('String');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                //On load screen logic
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var token = AllData.session;
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID2.Gl_Vars = data;
                $scope.token = $scope.RequestID2.Gl_Vars.request_id;
                //console.log("token",$scope.token);
                $scope.RequestManu = $scope.RequestID2.Gl_Vars.request_id2;
                //console.log("RequestManu",$scope.RequestManu);
                $scope.RequestType = $scope.RequestID2.Gl_Vars.request_id3;
                //console.log("RequestType",$scope.RequestType);
                $scope.RequestModel = $scope.RequestID2.Gl_Vars.request_id4;
                //console.log("RequestModel",$scope.RequestModel);
                var RequestManu = $scope.RequestManu;
                var RequestType = $scope.RequestType;
                var RequestModel = $scope.RequestModel;
                if ($scope.RequestManu == "noChoice" && $scope.RequestType == "noChoice" && $scope.RequestModel == "noChoice") {
                    //console.log("All 3 Empty");
                    Apperyio.navigateTo("Seller_Home", {});
                } else {
                    if ($scope.RequestManu !== "noChoice" && $scope.RequestType !== "noChoice" && $scope.RequestModel == "noChoice") {
                        //console.log("Last Empty"); 
                        var requestData = {};
                        requestData = (function mapping2448($scope) {
                            var requestData = {};
                            requestData.params = {};
                            var RequestManu_scope = $scope.RequestManu;
                            var RequestType_scope = $scope.RequestType;
                            //var RequestModel_scope = $scope.RequestModel;
                            var username_scope = $scope.username;
                            requestData.params.company = RequestManu;
                            requestData.params.type = RequestType;
                            //requestData.params.product = RequestModel;
                            requestData.params.username = username;
                            requestData.headers = {};
                            var token_scope = $scope.token;
                            requestData.headers['X-Appery-Session-Token'] = token;
                            //console.log("token",token);
                            return requestData;
                            /*CLICK TO EDIT MAPPING*/
                        })($scope);
                        // read more about using rest services: https://links.appery.io/ve-snippet-rest
                        Apperyio.get("Seller_Filtered_Home_Seller_Filtered_Requests_Type_service")(requestData).then(
                            function(success) { // success callback
                                (function mapping4781(success, $scope) {
                                    var list_scope = $scope.list;
                                    list_scope = success.data;
                                    $scope.list = list_scope;
                                    //console.log($scope.list)
                                    /*CLICK TO EDIT MAPPING*/
                                })(success, $scope);
                            },
                            function(error) { // callback to handle request error
                            },
                            function(notify) { // notify callback, can fire few times
                            });
                    } else {
                        if ($scope.RequestManu !== "noChoice" && $scope.RequestType == "noChoice" && $scope.RequestModel == "noChoice") {
                            //console.log("Last 2 Empty");
                            var requestData = {};
                            requestData = (function mapping2448($scope) {
                                var requestData = {};
                                requestData.params = {};
                                var RequestManu_scope = $scope.RequestManu;
                                //var RequestType_scope = $scope.RequestType;
                                //var RequestModel_scope = $scope.RequestModel;
                                var username_scope = $scope.username;
                                requestData.params.company = RequestManu;
                                //requestData.params.type = RequestType;
                                //requestData.params.product = RequestModel;
                                requestData.params.username = username;
                                requestData.headers = {};
                                var token_scope = $scope.token;
                                requestData.headers['X-Appery-Session-Token'] = token;
                                //console.log("token",token);
                                return requestData;
                                /*CLICK TO EDIT MAPPING*/
                            })($scope);
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("Seller_Filtered_Home_Seller_Filtered_Requests_Company_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping4781(success, $scope) {
                                        var list_scope = $scope.list;
                                        list_scope = success.data;
                                        $scope.list = list_scope;
                                        //console.log($scope.list)
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                        } else {
                            //console.log("All Full"); 
                            var requestData = {};
                            requestData = (function mapping2448($scope) {
                                var requestData = {};
                                requestData.params = {};
                                var RequestManu_scope = $scope.RequestManu;
                                var RequestType_scope = $scope.RequestType;
                                var RequestModel_scope = $scope.RequestModel;
                                var username_scope = $scope.username;
                                requestData.params.company = RequestManu;
                                requestData.params.type = RequestType;
                                requestData.params.product = RequestModel;
                                requestData.params.username = username;
                                requestData.headers = {};
                                var token_scope = $scope.token;
                                requestData.headers['X-Appery-Session-Token'] = token;
                                //console.log("token",token);
                                return requestData;
                                /*|button_mapping|onbeforesend|133E214D-BB95-B97E-00C5-C2DFC6B197C4||2448|*/
                            })($scope);
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("Seller_Filtered_Home_Seller_Filtered_Requests_Model_service")(requestData).then(
                                /*|service_bookmark|bookmark|133E214D-BB95-B97E-00C5-C2DFC6B197C4||4038|*/
                                function(success) { // success callback
                                    (function mapping4781(success, $scope) {
                                        var list_scope = $scope.list;
                                        list_scope = success.data;
                                        $scope.list = list_scope;
                                        //console.log($scope.list);
                                        /*|button_mapping|onsuccess|133E214D-BB95-B97E-00C5-C2DFC6B197C4||4781|*/
                                    })(success, $scope);
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                        }
                    }
                }
                //console.log("List",$scope[0].list);
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
                //console.log(_id);
                //console.log($scope.RequestID1.Gl_Vars.request_id);
                Apperyio.navigateTo("Seller_Accept_Request");
            };
        }
    });