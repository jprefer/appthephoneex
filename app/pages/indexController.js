define(['require'],
    function(require) {
        /**
         * Controller for index generated by Appery.io
         * @module index
         */
        function controller($scope, Apperyio) {
            /**
             * user controller variables
             */
            $scope.activeScreen = Apperyio.EntityAPI('ActiveScreen');
            $scope.User = Apperyio.EntityAPI('User');
            $scope.pass = Apperyio.EntityAPI('Pass');
            $scope.RequestID1 = Apperyio.EntityAPI('DataStorage');
            /**
             * User controller functions
             */
            /**
             * @function init
             */
            $scope.init = function() {
                $scope.visionStatus = {};
                $scope.RequestID = {
                    current: 0
                };
                var pass = {};
            };
            /**
             * @function gotoPage
             */
            $scope.gotoPage = function() {
                var userData = Apperyio.get("dataStorage");
                //userData.current = success.data;
                // Apperyio.navigateTo("Welcome", {});
                var AllData = userData.current;
                var turn = AllData.UserType
                if (turn == "B") {
                    Apperyio.navigateTo("Buyer_Home", {
                        'reloadPage': true
                    });
                } else {
                    Apperyio.navigateTo("Seller_Home", {
                        'reloadPage': true
                    });
                }
            };
            /**
             * @function gotoBuyerInProcess
             */
            $scope.gotoBuyerInProcess = function() {
                Apperyio.navigateTo("Buyer_InProcess", {});
            };
            /**
             * @function gotoBuyerMakeRequest
             */
            $scope.gotoBuyerMakeRequest = function() {
                //try this
                //On load screen logic
                var requestData = {};
                /*CLICK TO EDIT MAPPING*/
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
                var requestData = {};
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
                var requestData = {};
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
                var requestData = {};
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
                        console.log("I am on the indexPage");
                        console.log("myArray4_index", myStringArray4)
                    },
                    function(error) { // callback to handle request error
                    },
                    function(notify) { // notify callback, can fire few times
                    });
                var requestData = {};
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
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Buyer_MakeRequest";
                //console.log(_id);
                alert('You are about to make a request');
                Apperyio.navigateTo("PassThru", {});
                //Apperyio.navigateTo("Buyer_MakeRequest", {'reloadPage': true}); 
            };
            /**
             * @function gotoBuyerComplete
             */
            $scope.gotoBuyerComplete = function() {
                Apperyio.navigateTo("Buyer_Complete", {});
            };
            /**
             * @function gotoBuyerHome
             */
            $scope.gotoBuyerHome = function() {
                Apperyio.navigateTo("Buyer_Home", {
                    'reloadPage': true
                });
            };
            /**
             * @function gotoBuyerRequestSee
             */
            $scope.gotoBuyerRequestSee = function() {
                Apperyio.navigateTo("Buyer_Requests_See", {});
            };
            /**
             * @function gotoSellerHome
             */
            $scope.gotoSellerHome = function() {
                Apperyio.navigateTo("Seller_Home", {});
            };
            /**
             * @function gotoSellerInProcess
             */
            $scope.gotoSellerInProcess = function() {
                Apperyio.navigateTo("Seller_InProcess", {});
            };
            /**
             * @function gotoSellerComplete
             */
            $scope.gotoSellerComplete = function() {
                Apperyio.navigateTo("Seller_Complete", {});
            };
            /**
             * @function gotoSellerAccepted
             */
            $scope.gotoSellerAccepted = function() {
                Apperyio.navigateTo("Seller_Accepted", {});
            };
            /**
             * @function gotoSellerOffers
             */
            $scope.gotoSellerOffers = function() {
                Apperyio.navigateTo("Seller_Offers", {});
            };
            /**
             * @function gotoLogin
             */
            $scope.gotoLogin = function() {
                Apperyio.navigateTo("Login", {});
            };
            /**
             * @function Step1
             */
            $scope.Step1 = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType
                if (turn == "B") {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 1";
                                modal.scope.result1 = "The first thing you need to do is to request some equipment that you may need. Step 1 will take you to the Make A Request page.  Make the selections and when you are satisfied with your choices press the Send Request Button";
                                modal.scope.result2 = "When your request is submitted, it will go out to our network of wholesale distributors and if they have the items you requested they will send you an offer. You may get back many offers for your one request.  You will get an alert every time a seller makes an offer. When you get an alert proceed to Step 2";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Buyer_MakeRequest", {
                        'reloadPage': true
                    });
                } else {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 1";
                                modal.scope.result1 = "The first place where you will go is actually your Home Screen. Here you will see many Requests from different Buyers.  If you have inventory and would like to make an offer click on it to get to the detail.  ";
                                modal.scope.result2 = "Once you click on the detail, you need to put the Grade of the devices and the total price for all of the units including shipping.  Remember once you hit the Place Offer button you are committing that inventory in case the buyer accepts your offer. If the buyer accepts your offer, you will get an alert and now its time to go to Step 2 ";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Seller_Home", {
                        'reloadPage': true
                    });
                }
            };
            /**
             * @function Step2
             */
            $scope.Step2 = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType
                if (turn == "B") {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 2";
                                modal.scope.result1 = "After getting the alert, this step takes you to your Home Screen.  This is where you can see all of the offers coming back for all of the products you requested pricing for.  You can click on each Offer and the app will bring you to the detail screen. ";
                                modal.scope.result2 = "While in the detail screen you may accept the offer. You may want to wait a little while to see if anybody else will give you a better deal. You can also Reject an Offer, but once you do you can not get it back. You can wait for more offers by hitting the Do Nothing - Return to Previous Screen. Please be mindful of the Expiration Date and time of the offer.  Once you Accept an Offer, your payment method on file will be charged and the seller will begin the process of shipping you the items.  This brings you to Step 3.";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Buyer_Home", {
                        'reloadPage': true
                    });
                } else {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 2";
                                modal.scope.result1 = "The Buyer has accepted your Offer.  This Step takes you to the Accepted Offers Screen where you will click on the order to ship it.  Once you click, you will find all of the pertinent information for shipping the order.  Once you have packed  and shipped, you will need to enter the Shipped By and the Tracking Number.";
                                modal.scope.result2 = "The Buyer will get an alert saying you shipped. Once they receive the package and accept it you will be alerted. Now it's time for Step 3";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Seller_Accepted", {
                        'reloadPage': true
                    });
                }
            };
            /**
             * @function Step3
             */
            $scope.Step3 = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType
                if (turn == "B") {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 3";
                                modal.scope.result1 = "You will get an alert once the Seller ships the item. This Step brings you to the In-Process screen where you will be able to see items that were purchased that haven't been received yet. You can check to see if the item had shipped and also see the tracking number.";
                                modal.scope.result2 = "Once you receive the package, you need to click on the order to get to the detail.  Here you will be able to accept the shipment and rate the seller. And in the small possibility that the items are not up to your standards you may hit the Return button.  Please be aware that you have 48 hours to Request a Return (After that standard Seller Warranties are in effect).  If you do nothing here, we will automatically accept the shipment for you after 48 hours of receiving. - That's It! Happy Buying";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Buyer_InProcess", {
                        'reloadPage': true
                    });
                } else {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 3";
                                modal.scope.result1 = "At this Step you will be put in the In-Process Screen where you can see all of your shipments before they are accepted by the buyer. You can click on any one of them to see the details.  Once they are accepted you will get an alert that they received it and accepted.";
                                modal.scope.result2 = "Once they have accepted, we will begin the process of moving the proceeds to your account.  That's It! Happy Selling";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Seller_InProcess", {
                        'reloadPage': true
                    });
                }
            };
            /**
             * @function Step4
             */
            $scope.Step4 = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType
                if (turn == "B") {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 4";
                                modal.scope.result1 = "This is jibberissh for buyer";
                                modal.scope.result2 = "And then you wiill get an alert so Finsihed";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Buyer_Complete", {
                        'reloadPage': true
                    });
                } else {
                    var modalOptions = { // About Ionic Modal: https://links.appery.io/ve-snippet-modal-ionic
                        animation: 'slide-in-up', // The animation to show & hide with
                        focusFirstInput: false, // Whether to autofocus the first input of the modal when shown
                        backdropClickToClose: true, // Whether to close the modal on clicking the backdrop
                        hardwareBackButtonClose: true // Whether the modal can be closed using the hardware back button on Android and similar devices
                    };
                    Apperyio.get('Modals').loadModal("StepModal").then(
                        function(modalInstance) {
                            modalInstance.open(modalOptions).then(function(modal) {
                                modal.scope.modal = modal;
                                modal.scope.result = "Step 4";
                                modal.scope.result1 = "This is jibberissh for seller";
                                modal.scope.result2 = "And then you wiill get an alert so finished";
                                modal.show();
                            });
                        },
                        function(error) {
                            console.log(error);
                        });
                    Apperyio.navigateTo("Seller_Complete", {
                        'reloadPage': true
                    });
                }
            };
        }
        return ['$scope', 'Apperyio', controller];
    });