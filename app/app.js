define(
    [
        /**
         * System global resources
         */
        "require", "angular", "angular-touch", "angular-route", "Apperyio", "cordova", "constants", "routes", "bootstrap", "$App/crouterconfig",
        '$Screens/indexController',
        /**
         * Angular modules
         */
        "ionic", "gmaps", "angular-translate",
        /**
         * Custom global resources
         */
        "navigateTo", "backButton", "activeScreenManager", "LoginUser_service", "RegisterNewUser_service", "dataStorage", "phoneapp_logout_service", "phoneapp_Memory_list_service", "phoneapp_Color_list_service", "phoneapp_Merchandise_list_service", "InsertRequest_service", "ReturnRequests_service", "phoneapp_BuyerRequests_list_service", "Requests_Seller_service", "Request_To_Seller_Detail_service", "test_service", "InsertOffers_service", "ReturnOffersToBuyer_service", "Request_ToBuyer_offer_Detail_service", "phoneapp_ShippingMethod_list_service", "BuyerRejectOffer_service", "InsertOrders_service", "Seller_Orders_NotShipped_service", "Seller_NotShipped_Detal_service", "Seller_MakeTrackingAlive_service", "Seller_Shipped_See_service", "Seller_Shipped_Detail_service", "ReturnOffersToSeller_service", "Buyer_Shipped_See_service", "Buyer_InProcess_Detail_service", "Buyer_Complete_Order_service", "Seller_Complete_service", "Seller_Complete_Detail_service", "Buyer_Complete_service", "Buyer_Complete_Detail_service", "PushRegisterDeviceImpl", "PushUnregisterDevice", "PushUpdateDeviceImpl", "PushSendImpl", "Insert_User_Device_service", "GenericService_Impl", "phoneapp_BuyerRequests_update_service", "test_Security_service", "ReturnOffersToSeller_Detail_service", "menu_Main_Company_service", "menu_Main_Type_service", "menu_Main_Model_service", "menu_Main_Finish_service", "menu_Main_Storage_service", "Test_AllCountries_service", "Buyer_Complete_Return_service", "menu_companies_service", "twilio_Request_sms_Verify_service", "twilio_verifyToken_sms_Verify_service", "twilio_Request_email_Verify_service", "twilio_verifyToken_email_Verify_service", "Update_TextVer_True_service", "Update_EmailVer_True_service", "Update_UserPassword_service", "UpdatePasswordGetCode_service", "sq_RetrieveCustomer_CCOF_service", "Square_payments_Pay_using_ccof_post", "sq_InsertPayment_service", "sq_defaultCC_service", "sq_Update_Ccof_inUser_service", "sq_defaultCC_prod_service", "sq_DeleteCard_service", "sq_DeleteCard_prod_service", "getMenu1_service", "getMenu2_service", "getMenu3_service", "getMenu4_service", "getMenu5_service", "update_Profile_Email_service", "update_Profile_Mobile_service", "update_Profile_Password_service", "update_Profile_Company_service", "update_Profile_BusinessPhone_service", "update_Profile_ShippingAddress1_service", "update_Profile_ShippingAddress2_service", "update_Profile_FirstName_service", "update_Profile_LastName_service", "update_Profile_City_service", "update_Profile_Resale_service", "update_Profile_State_service", "update_Profile_Zip_service", "Square_payments_Pay_using_ccof_prod_post", "RegisterNewUser_prod_service", "sq_RetrieveCustomer_CCOF_prod_service", "Seller_Accepted_Seller_Orders_NotShipped_Count_service", "BuyerBank_GetAvailable_service", "BuyerBank_UpdateAvailable_service", "BuyerBank_GetAvailable_tBank_service", "updatePaymentType_service", "GetEscrowTranactions_user_service", "SendEmailforEscrow_service", "Seller_Filtered_Home_Seller_Filtered_Requests_Company_service", "Seller_Filtered_Home_Seller_Filtered_Requests_Model_service", "Seller_Filtered_Home_Seller_Filtered_Requests_Type_service"
    ],
    function() {
        var angular = require("angular"),
            _Appery = require("Apperyio"),
            routerConfig = require("$App/crouterconfig");
        var DEPENDENCIES_INDEX = 14;
        var DEPENDENCIES = Array.prototype.slice.call(arguments, DEPENDENCIES_INDEX);
        /**
         * Adding angular modules to the application
         */
        var APP = angular.module(window.__APPLICATION_NAME, ['ApperyioModule', "ionic", "uiGmapgoogle-maps", "pascalprecht.translate"])
            .config([
                "$routeProvider",
                '$controllerProvider',
                '$provide',
                '$locationProvider',
                '$compileProvider',
                '$filterProvider',
                'uiGmapGoogleMapApiProvider',
                Configuration
            ]).run(["Apperyio", "User", "$location", "$ionicPlatform", RUN]);

        function Configuration($routeProvider,
            $controllerProvider,
            $provide,
            $locationProvider,
            $compileProvider,
            $filterProvider, $uiGmapGoogleMapApiProvider) {
            APP.controller = $controllerProvider.register;
            APP.directive = $compileProvider.directive;
            APP.filter = $filterProvider.register;
            APP.factory = $provide.factory;
            APP.service = $provide.service;
            APP.provider = $provide.provider;
            APP.value = $provide.value;
            APP.constant = $provide.constant;
            APP.decorator = $provide.decorator;
            /**
             * Place for list of pages and routes
             */
            var routes = require('routes');
            APP.defaultRoute = routes['default']['redirectTo'];
            $locationProvider.html5Mode({
                enabled: false,
                requireBase: false
            });
            angular.forEach(routes.when, function(route, path) {
                $routeProvider.when(path, routerConfig(route, APP));
            });
            $routeProvider.otherwise(routes.otherwise || routes.default);
            /**
             * Global dependencies resolver
             */
            if (DEPENDENCIES.length >= 0) {
                var deps = null;
                for (var i = 0, l = DEPENDENCIES.length; i < l; i++) {
                    deps = DEPENDENCIES[i];
                    if (angular.isArray(deps) && deps.length > 0 && angular.isArray(deps[0].deps)) {
                        try {
                            for (var j = 0, l2 = deps.length; j < l2; j++) {
                                APP[deps[j].type].call(APP, deps[j].name, deps[j].deps);
                            }
                        } catch (e) {
                            // angular or service level error
                            e.message = 'Error in ' + deps[j].name + "\nMessage: " + e.message;
                            throw new Error(e);
                        }
                    }
                }
            }
            APP.controller('indexController', require('$Screens/indexController'));
        }

        function RUN(Apperyio, User, $location, $ionicPlatform) {
            Apperyio.User = User;
            Apperyio.Config.init(require('constants'));
            $ionicPlatform.registerBackButtonAction(function(event) {
                if (APP.defaultRoute === $location.path()) {
                    navigator.app.exitApp();
                } else {
                    navigator.app.backHistory();
                }
            }, 100);
        }
        return APP;
    }
);