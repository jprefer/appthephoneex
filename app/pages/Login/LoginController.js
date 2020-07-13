define(['require', 'app'],
    function(require, APP) {
        /**
         * Controller for Login generated by Appery.io
         * @module Login
         */
        APP.controller('Login', ['$scope', 'Apperyio', controller]);

        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.user = Apperyio.EntityAPI('User');
            $scope.UserType = Apperyio.EntityAPI('String');
            $scope.devID = Apperyio.EntityAPI('String');
            $scope.timeZone = Apperyio.EntityAPI('String');
            $scope.shift = Apperyio.EntityAPI('String');
            $scope.channel = Apperyio.EntityAPI('String');
            $scope.message = Apperyio.EntityAPI('String');
            $scope.device_id = Apperyio.EntityAPI('String');
            $scope.insertID = Apperyio.EntityAPI('String');
            $scope.insertUser = Apperyio.EntityAPI('String');
            $scope.dev_vars = Apperyio.EntityAPI('Dev');
            $scope.username1 = Apperyio.EntityAPI('String');
            $scope.main = Apperyio.EntityAPI('Main');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                //On load screen logic
                $ionicSideMenuDelegate = Apperyio.get("$ionicSideMenuDelegate");
                $ionicSideMenuDelegate.canDragContent(false);
            };
            /**
             * @function login
             */
            $scope.login = function() {
                var requestData = {};
                var main = {};
                requestData = (function mapping4383($scope) {
                    var requestData = {};
                    requestData.params = Apperyio.EntityAPI('LoginUser_service.request.query', undefined, true);
                    var user_scope = $scope.user;
                    requestData.params.username = user_scope.username;
                    requestData.params.password = user_scope.password;
                    return requestData;
                    /*|button_mapping|onbeforesend|04A0AE60-CF15-43FF-A483-C79FCD7361B0||4383|*/
                })($scope);
                // Get Login Service
                Apperyio.get("LoginUser_service")(requestData).then(
                    /*|service_bookmark|bookmark|04A0AE60-CF15-43FF-A483-C79FCD7361B0||1044|*/
                    function(success) { // success callback
                        /*|button_mapping|onsuccess|04A0AE60-CF15-43FF-A483-C79FCD7361B0||2693|*/
                        var userData = Apperyio.get("dataStorage");
                        userData.current = success.data;
                        //console.log(userData);
                        var AllData = userData.current;
                        var turn = AllData.UserType;
                        //Thenext line was added to get user
                        var dev_user = AllData.username;
                        $scope.main.username1 = AllData.username;
                        //The next lines are added to get the deviceid and register push notifications
                        //Thenext line was added to get user
                        $scope.timeZone = "GMT-04:00";
                        //document.addEventListener("push-notification", function(event) {alert(event.detail.message);});
                        //added newto go Home
                        document.addEventListener("push-notification", function(event) {
                            alert(event.detail.message);
                            //Apperyio.navigateTo("Buyer_Ins", {'reloadPage': true}); 
                            Apperyio.navigateTo("Buyer_Ins");
                            alert('Go to your Home screen and click refresh to see your alerts');
                        });
                        var requestData = {};
                        /*|button_mapping|onbeforesend|2433A3E7-057D-1695-F2C7-EA3E86BFACE9||8899|*/
                        // read more about using rest services: https://links.appery.io/ve-snippet-rest
                        Apperyio.get("PushRegisterDevice")(requestData).then(
                            /*|service_bookmark|bookmark|2433A3E7-057D-1695-F2C7-EA3E86BFACE9||7372|*/
                            function(success) { // success callback
                                (function mapping1555(success, $scope) {
                                    var main_scope = $scope.main;
                                    _.set(main_scope, 'devID1', success.deviceID);
                                    _.set(main_scope, 'object_id1', success._id);
                                    $scope.main = main_scope;
                                    alert("Login Success. \n" + "Device ID: " + $scope.main.devID1 + "   ObjectID:" + $scope.main.object_id1 + " User:" + $scope.main.username1);
                                    /*|button_mapping|onsuccess|2433A3E7-057D-1695-F2C7-EA3E86BFACE9||1555|*/
                                    // here is the part where it marries device and user
                                    var requestData = {};
                                    requestData = (function mapping1114($scope) {
                                        var requestData = {};
                                        requestData.params = {};
                                        var main_scope = $scope.main;
                                        requestData.params.Device_id = main_scope.object_id1;
                                        requestData.params.user = main_scope.username1;
                                        return requestData;
                                        /*|button_mapping|onbeforesend|BF5194DC-E973-F9D5-0DD7-3AFABE98DDF7||1114|*/
                                    })($scope);
                                    // read more about using rest services: https://links.appery.io/ve-snippet-rest
                                    Apperyio.get("Insert_User_Device_service")(requestData).then(
                                        /*|service_bookmark|bookmark|BF5194DC-E973-F9D5-0DD7-3AFABE98DDF7||9695|*/
                                        function(success) { // success callback
                                            /*|button_mapping|onsuccess|BF5194DC-E973-F9D5-0DD7-3AFABE98DDF7||4093|*/
                                        },
                                        function(error) { // callback to handle request error
                                        },
                                        function(notify) { // notify callback, can fire few times
                                        });
                                })(success, $scope);
                            },
                            function(error) { // callback to handle request error
                            },
                            function(notify) { // notify callback, can fire few times
                            });
                        //Below this is the path the program takes depending on buyer or seller
                        //console.log("main.username1: ",main.username1);
                        localStorage.clear();
                        if (turn == "S") {
                            var myString2 = "S";
                            localStorage.setItem("localStorageString1", myString2); // set the value
                            console.log("mystringatlogin", myString2);
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu1_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping8022(success, $scope) {
                                        var tempmenu1_scope = $scope.tempmenu1;
                                        tempmenu1_scope = success.data;
                                        $scope.tempmenu1 = tempmenu1_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray1 = JSON.stringify($scope.tempmenu1);
                                    localStorage.setItem("localStorageStringArray1", myStringArray1); // set the value
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu2_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping7075(success, $scope) {
                                        var tempmenu2_scope = $scope.tempmenu2;
                                        tempmenu2_scope = success.data;
                                        $scope.tempmenu2 = tempmenu2_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray2 = JSON.stringify($scope.tempmenu2);
                                    localStorage.setItem("localStorageStringArray2", myStringArray2); // set the value
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu3_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping5631(success, $scope) {
                                        var tempmenu3_scope = $scope.tempmenu3;
                                        tempmenu3_scope = success.data;
                                        $scope.tempmenu3 = tempmenu3_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray3 = JSON.stringify($scope.tempmenu3);
                                    localStorage.setItem("localStorageStringArray3", myStringArray3); // set the value
                                    console.log("I am on the LoginPage");
                                    console.log("myArray3_index", myStringArray3)
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            Apperyio.navigateTo("Seller_Home", {});
                        } else {
                            // REgister menu for buyers - Change Menu - Log everyone out
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            //new
                            //localStorage.clear();
                            //working on this part
                            var myString2 = "B";
                            localStorage.setItem("localStorageString1", myString2); // set the value
                            console.log("mystringatlogin", myString2);
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu1_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping8022(success, $scope) {
                                        var tempmenu1_scope = $scope.tempmenu1;
                                        tempmenu1_scope = success.data;
                                        $scope.tempmenu1 = tempmenu1_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray1 = JSON.stringify($scope.tempmenu1);
                                    localStorage.setItem("localStorageStringArray1", myStringArray1); // set the value
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu2_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping7075(success, $scope) {
                                        var tempmenu2_scope = $scope.tempmenu2;
                                        tempmenu2_scope = success.data;
                                        $scope.tempmenu2 = tempmenu2_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray2 = JSON.stringify($scope.tempmenu2);
                                    localStorage.setItem("localStorageStringArray2", myStringArray2); // set the value
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu3_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping5631(success, $scope) {
                                        var tempmenu3_scope = $scope.tempmenu3;
                                        tempmenu3_scope = success.data;
                                        $scope.tempmenu3 = tempmenu3_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray3 = JSON.stringify($scope.tempmenu3);
                                    localStorage.setItem("localStorageStringArray3", myStringArray3); // set the value
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu4_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping3047(success, $scope) {
                                        var tempmenu4_scope = $scope.tempmenu4;
                                        tempmenu4_scope = success.data;
                                        $scope.tempmenu4 = tempmenu4_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray4 = JSON.stringify($scope.tempmenu4);
                                    localStorage.setItem("localStorageStringArray4", myStringArray4); // set the value
                                    console.log("I am on the LoginPage");
                                    console.log("myArray4_index", myStringArray4)
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //var requestData = {};
                            /*CLICK TO EDIT MAPPING*/
                            // read more about using rest services: https://links.appery.io/ve-snippet-rest
                            Apperyio.get("getMenu5_service")(requestData).then(
                                function(success) { // success callback
                                    (function mapping8710(success, $scope) {
                                        var tempmenu5_scope = $scope.tempmenu5;
                                        tempmenu5_scope = success.data;
                                        $scope.tempmenu5 = tempmenu5_scope;
                                        /*CLICK TO EDIT MAPPING*/
                                    })(success, $scope);
                                    var myStringArray5 = JSON.stringify($scope.tempmenu5);
                                    localStorage.setItem("localStorageStringArray5", myStringArray5); // set the value
                                },
                                function(error) { // callback to handle request error
                                },
                                function(notify) { // notify callback, can fire few times
                                });
                            //old 
                            Apperyio.navigateTo("Buyer_Home", {});
                        }
                    },
                    function(error) { // callback to handle request error
                        alert(' Sorry - Wrong username / password combination - Please try again')
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
            /**
             * @function moveOn
             */
            $scope.moveOn = function() {
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.main.object_id = data;
                alert("Second Alert:" + "ObjectID: " + $scope.main.object_id1 + " / " + $scope.main.username1);
                console.log($scope.main.object_id1);
                var userData = Apperyio.get("dataStorage");
                userData.current = success.data;
                console.log(userData);
                var AllData = userData.current;
                var turn = AllData.UserType;
                //Thenext line was added to get user
                var dev_user = AllData.username;
                //Below this is the path the program takes depending on buyer or seller
                if (turn == "S") {
                    Apperyio.navigateTo("Seller_Home", {});
                } else {
                    Apperyio.navigateTo("Buyer_Home", {});
                }
            };
        }
    });