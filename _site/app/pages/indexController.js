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
                //init
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
                var turn = AllData.UserType;
                //old
                //  if (turn == "B") {
                //    Apperyio.navigateTo("Buyer_Home", {'reloadPage': true}); 
                //   }else { 
                //      Apperyio.navigateTo("Seller_Home", {'reloadPage': true}); 
                //    }
                if (turn == "B") {
                    // inject the 'dataStorage' service
                    var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    $scope.RequestID1.Gl_Vars = data;
                    $scope.RequestID1.Gl_Vars.whereami = "Buyer_Home";
                    //console.log(_id);
                    Apperyio.navigateTo("PassThru", {});
                } else {
                    // inject the 'dataStorage' service
                    var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    $scope.RequestID1.Gl_Vars = data;
                    $scope.RequestID1.Gl_Vars.whereami = "Seller_Home";
                    //console.log(_id);
                    Apperyio.navigateTo("PassThru", {});
                }
            };
            /**
             * @function gotoBuyerInProcess
             */
            $scope.gotoBuyerInProcess = function() {
                //Apperyio.navigateTo("Buyer_InProcess", {}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Buyer_InProcess";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoBuyerMakeRequest
             */
            $scope.gotoBuyerMakeRequest = function() {
                //try this
                //On load screen logic
                // inject the 'dataStorage' service
                //var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "Buyer_MakeRequest";
                //console.log(_id);
                //alert('You are about to make a request');
                Apperyio.navigateTo("Buyer_MakeRequest", {});
                //Apperyio.navigateTo("Buyer_MakeRequest", {'reloadPage': true}); 
            };
            /**
             * @function gotoBuyerComplete
             */
            $scope.gotoBuyerComplete = function() {
                //Apperyio.navigateTo("Buyer_Complete", {}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Buyer_Complete";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoBuyerHome
             */
            $scope.gotoBuyerHome = function() {
                //Apperyio.navigateTo("Buyer_Home", {'reloadPage': true}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Buyer_Home";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoBuyerRequestSee
             */
            $scope.gotoBuyerRequestSee = function() {
                //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Buyer_Requests_See";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoSellerHome
             */
            $scope.gotoSellerHome = function() {
                //Apperyio.navigateTo("Seller_Home", {}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Seller_Home";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoSellerInProcess
             */
            $scope.gotoSellerInProcess = function() {
                //Apperyio.navigateTo("Seller_InProcess", {});
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Seller_InProcess";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoSellerComplete
             */
            $scope.gotoSellerComplete = function() {
                //Apperyio.navigateTo("Seller_Complete", {});
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Seller_Complete";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoSellerAccepted
             */
            $scope.gotoSellerAccepted = function() {
                //Apperyio.navigateTo("Seller_Accepted", {});
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Seller_Accepted";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
            };
            /**
             * @function gotoSellerOffers
             */
            $scope.gotoSellerOffers = function() {
                //Apperyio.navigateTo("Seller_Offers", {});
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                $scope.RequestID1.Gl_Vars = data;
                $scope.RequestID1.Gl_Vars.whereami = "Seller_Offers";
                //console.log(_id);
                Apperyio.navigateTo("PassThru", {});
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
            /**
             * @function sPendingOffers
             */
            $scope.sPendingOffers = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                if (turn == "B") {
                    alert("Buyers do not have access to this menu");
                } else {
                    //Apperyio.navigateTo("Seller_Offers", {});
                    // inject the 'dataStorage' service
                    // var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    //$scope.RequestID1.Gl_Vars.whereami = "Seller_Offers";
                    //console.log(_id);
                    Apperyio.navigateTo("Seller_Offers", {});
                }
            };
            /**
             * @function inprocess
             */
            $scope.inprocess = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                if (turn == "B") {
                    //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                    // inject the 'dataStorage' service
                    //var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Buyer_InProcess";
                    //console.log(_id);
                    Apperyio.navigateTo("Buyer_InProcess", {});
                } else {
                    //Apperyio.navigateTo("Seller_Offers", {});
                    // inject the 'dataStorage' service
                    // var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    //$scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Seller_InProcess";
                    //console.log(_id);
                    Apperyio.navigateTo("Seller_InProcess", {});
                }
            };
            /**
             * @function completed
             */
            $scope.completed = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                if (turn == "B") {
                    //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                    // inject the 'dataStorage' service
                    //var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Buyer_Complete";
                    //console.log(_id);
                    Apperyio.navigateTo("Buyer_Complete", {});
                } else {
                    //Apperyio.navigateTo("Seller_Offers", {});
                    // inject the 'dataStorage' service
                    // var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Seller_Complete";
                    //console.log(_id);
                    Apperyio.navigateTo("Seller_Complete", {});
                }
            };
            /**
             * @function sMakeRequest
             */
            $scope.sMakeRequest = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                if (turn == "B") {
                    //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                    // inject the 'dataStorage' service
                    // var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Buyer_MakeRequest";
                    //console.log(_id);
                    Apperyio.navigateTo("Buyer_MakeRequest", {});
                } else {
                    alert("Sellers do not have access to this menu");
                }
            };
            /**
             * @function sRequestsSee
             */
            $scope.sRequestsSee = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                if (turn == "B") {
                    //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                    // inject the 'dataStorage' service
                    // var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Buyer_Requests_See";
                    //console.log(_id);
                    Apperyio.navigateTo("Buyer_Requests_See", {});
                } else {
                    alert("Sellers do not have access to this menu");
                }
            };
            /**
             * @function gotoProfile
             */
            $scope.gotoProfile = function() {
                //Apperyio.navigateTo("Seller_Home", {}); 
                // inject the 'dataStorage' service
                //var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "Profile";
                //console.log(_id);
                Apperyio.navigateTo("Profile", {});
            };
            /**
             * @function gotoVerify
             */
            $scope.gotoVerify = function() {
                //Apperyio.navigateTo("Seller_Home", {}); 
                // inject the 'dataStorage' service
                var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "tab_Verify";
                //console.log(_id);
                Apperyio.navigateTo("tab_Verify", {});
            };
            /**
             * @function gotoBank
             */
            $scope.gotoBank = function() {
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var turn = AllData.UserType;
                if (turn == "B") {
                    //Apperyio.navigateTo("Buyer_Requests_See", {}); 
                    // inject the 'dataStorage' service
                    // var data = Apperyio.get("dataStorage");
                    // user1 is a variable in the page1 scope 
                    // set it to reference the 'dataStorage' service
                    // $scope.RequestID1.Gl_Vars = data;
                    // $scope.RequestID1.Gl_Vars.whereami = "Bank";
                    //console.log(_id);
                    Apperyio.navigateTo("Bank", {});
                } else {
                    alert("Sellers do not have access to this menu");
                }
            };
            /**
             * @function gotoInfo
             */
            $scope.gotoInfo = function() {
                //Apperyio.navigateTo("Seller_Home", {}); 
                // inject the 'dataStorage' service
                //var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "Info";
                //console.log(_id);
                Apperyio.navigateTo("Info", {});
            };
            /**
             * @function gotoContact
             */
            $scope.gotoContact = function() {
                //Apperyio.navigateTo("Seller_Home", {}); 
                // inject the 'dataStorage' service
                //var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "Contact_Us";
                //console.log(_id);
                Apperyio.navigateTo("Contact_Us", {});
            };
            /**
             * @function gotoHelp
             */
            $scope.gotoHelp = function() {
                //Apperyio.navigateTo("Seller_Home", {}); 
                // inject the 'dataStorage' service
                //var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "tab_Help";
                //console.log(_id);
                Apperyio.navigateTo("tab_Help", {});
            };
            /**
             * @function stBuyerInProcess
             */
            $scope.stBuyerInProcess = function() {
                Apperyio.navigateTo("Buyer_InProcess", {});
            };
            /**
             * @function stSellerAccepted
             */
            $scope.stSellerAccepted = function() {
                //Apperyio.navigateTo("Seller_Accepted", {});
                // inject the 'dataStorage' service
                //var data = Apperyio.get("dataStorage");
                // user1 is a variable in the page1 scope 
                // set it to reference the 'dataStorage' service
                //$scope.RequestID1.Gl_Vars = data;
                //$scope.RequestID1.Gl_Vars.whereami = "Seller_Accepted";
                //console.log(_id);
                Apperyio.navigateTo("Seller_Accepted", {});
            };
            /**
             * @function logout
             */
            $scope.logout = function() {
                var requestData = {};
                var userData = Apperyio.get("dataStorage");
                var AllData = userData.current;
                var username = AllData.username;
                var Buyer_username = AllData.username;
                var sessionToken = AllData.session;
                //Get User  
                //console.log(sessionToken);
                requestData = (function mapping7038($scope) {
                    var requestData = {};
                    requestData.headers = {};
                    var user_scope = username;
                    requestData.headers['X-Appery-Session-Token'] = sessionToken;
                    return requestData;
                    /*CLICK TO EDIT MAPPING*/
                })($scope);
                // read more about using rest services: https://links.appery.io/ve-snippet-rest
                Apperyio.get("phoneapp_logout_service")(requestData).then(
                    function(success) { // success callback
                        /*CLICK TO EDIT MAPPING*/
                        Apperyio.navigateTo("Login", {});
                    },
                    function(error) { // callback to handle request error
                        Apperyio.navigateTo("Login", {});
                    },
                    function(notify) { // notify callback, can fire few times
                    });
            };
        }
        return ['$scope', 'Apperyio', controller];
    });