'use strict';
(function(window) {
    require.config({
        baseUrl: "app",
        paths: {
            'jasmine_f': '../libs/jasmine/lib/jasmine-core',
            'specs': '../test/specs',
            'angular-mocks': '../libs/angular-mocks/angular-mocks',
            'mocks': '../test/mocks',
            '$Libs': '../libs',
            '$App': '../libs/apperyio',
            '$Screens': 'pages',
            '$Modals': 'modals',
            '$Services': 'services',
            "navigateTo": "services/navigateTo",
            "backButton": "services/backButton",
            "activeScreenManager": "services/activeScreenManager",
            "LoginUser_service": "services/LoginUser_service",
            "RegisterNewUser_service": "services/RegisterNewUser_service",
            "dataStorage": "services/dataStorage",
            "phoneapp_logout_service": "services/phoneapp_logout_service",
            "phoneapp_Memory_list_service": "services/phoneapp_Memory_list_service",
            "phoneapp_Color_list_service": "services/phoneapp_Color_list_service",
            "phoneapp_Merchandise_list_service": "services/phoneapp_Merchandise_list_service",
            "InsertRequest_service": "services/InsertRequest_service",
            "ReturnRequests_service": "services/ReturnRequests_service",
            "phoneapp_BuyerRequests_list_service": "services/phoneapp_BuyerRequests_list_service",
            "Requests_Seller_service": "services/Requests_Seller_service",
            "Request_To_Seller_Detail_service": "services/Request_To_Seller_Detail_service",
            "test_service": "services/test_service",
            "InsertOffers_service": "services/InsertOffers_service",
            "ReturnOffersToBuyer_service": "services/ReturnOffersToBuyer_service",
            "Request_ToBuyer_offer_Detail_service": "services/Request_ToBuyer_offer_Detail_service",
            "phoneapp_ShippingMethod_list_service": "services/phoneapp_ShippingMethod_list_service",
            "BuyerRejectOffer_service": "services/BuyerRejectOffer_service",
            "InsertOrders_service": "services/InsertOrders_service",
            "Seller_Orders_NotShipped_service": "services/Seller_Orders_NotShipped_service",
            "Seller_NotShipped_Detal_service": "services/Seller_NotShipped_Detal_service",
            "Seller_MakeTrackingAlive_service": "services/Seller_MakeTrackingAlive_service",
            "Seller_Shipped_See_service": "services/Seller_Shipped_See_service",
            "Seller_Shipped_Detail_service": "services/Seller_Shipped_Detail_service",
            "ReturnOffersToSeller_service": "services/ReturnOffersToSeller_service",
            "Buyer_Shipped_See_service": "services/Buyer_Shipped_See_service",
            "Buyer_InProcess_Detail_service": "services/Buyer_InProcess_Detail_service",
            "Buyer_Complete_Order_service": "services/Buyer_Complete_Order_service",
            "Seller_Complete_service": "services/Seller_Complete_service",
            "Seller_Complete_Detail_service": "services/Seller_Complete_Detail_service",
            "Buyer_Complete_service": "services/Buyer_Complete_service",
            "Buyer_Complete_Detail_service": "services/Buyer_Complete_Detail_service",
            "text": "../libs/text",
            "require": "../libs/requirejs/require",
            "angular": "../libs/angular/angular.min",
            "angular-touch": "../libs/angular-touch/angular-touch.min",
            "angular-route": "../libs/angular-route/angular-route.min",
            "ionic": "../libs/ionic/ionic.bundle",
            "appery-ui": "../libs/appery-ui/appery-ui",
            "lodash": "../libs/lodash/dist/lodash.min",
            "gmaps": "../libs/angular-google-maps/angular-google-maps.min",
            "angular-translate": "../libs/angular-translate/angular-translate.min",
            "Apperyio": "../libs/apperyio/Apperyio",
            "q": "../libs/ms_sdk_bundle/q/q",
            "ms-client-sdk": "../libs/ms_sdk_bundle/client-sdk",
            "cordova": "../cordova",
            "x2js": "../libs/x2js/xml2json",
            "$App/crouterconfig": "../libs/apperyio/crouterconfig",
            "PushRegisterDeviceImpl": "services/PushRegisterDeviceImpl",
            "PushUnregisterDevice": "services/PushUnregisterDevice",
            "PushUpdateDeviceImpl": "services/PushUpdateDeviceImpl",
            "PushSendImpl": "services/PushSendImpl",
            "Insert_User_Device_service": "services/Insert_User_Device_service",
            "GenericService_Impl": "services/GenericService_Impl",
            "phoneapp_BuyerRequests_update_service": "services/phoneapp_BuyerRequests_update_service",
            "test_Security_service": "services/test_Security_service",
            "ReturnOffersToSeller_Detail_service": "services/ReturnOffersToSeller_Detail_service",
            "menu_Main_Company_service": "services/menu_Main_Company_service",
            "menu_Main_Type_service": "services/menu_Main_Type_service",
            "menu_Main_Model_service": "services/menu_Main_Model_service",
            "menu_Main_Finish_service": "services/menu_Main_Finish_service",
            "menu_Main_Storage_service": "services/menu_Main_Storage_service",
            "Test_AllCountries_service": "services/Test_AllCountries_service",
            "Buyer_Complete_Return_service": "services/Buyer_Complete_Return_service",
            "menu_companies_service": "services/menu_companies_service",
            "twilio_Request_sms_Verify_service": "services/twilio_Request_sms_Verify_service",
            "twilio_verifyToken_sms_Verify_service": "services/twilio_verifyToken_sms_Verify_service",
            "twilio_Request_email_Verify_service": "services/twilio_Request_email_Verify_service",
            "twilio_verifyToken_email_Verify_service": "services/twilio_verifyToken_email_Verify_service",
            "Update_TextVer_True_service": "services/Update_TextVer_True_service",
            "Update_EmailVer_True_service": "services/Update_EmailVer_True_service",
            "Update_UserPassword_service": "services/Update_UserPassword_service",
            "UpdatePasswordGetCode_service": "services/UpdatePasswordGetCode_service",
            "sq_RetrieveCustomer_CCOF_service": "services/sq_RetrieveCustomer_CCOF_service",
            "Square_payments_Pay_using_ccof_post": "services/Square_payments_Pay_using_ccof_post",
            "sq_InsertPayment_service": "services/sq_InsertPayment_service",
            "sq_defaultCC_service": "services/sq_defaultCC_service",
            "sq_Update_Ccof_inUser_service": "services/sq_Update_Ccof_inUser_service",
            "sq_defaultCC_prod_service": "services/sq_defaultCC_prod_service",
            "sq_DeleteCard_service": "services/sq_DeleteCard_service",
            "sq_DeleteCard_prod_service": "services/sq_DeleteCard_prod_service",
            "getMenu1_service": "services/getMenu1_service",
            "getMenu2_service": "services/getMenu2_service",
            "getMenu3_service": "services/getMenu3_service",
            "getMenu4_service": "services/getMenu4_service",
            "getMenu5_service": "services/getMenu5_service",
            "update_Profile_Email_service": "services/update_Profile_Email_service",
            "update_Profile_Mobile_service": "services/update_Profile_Mobile_service",
            "update_Profile_Password_service": "services/update_Profile_Password_service",
            "update_Profile_Company_service": "services/update_Profile_Company_service",
            "update_Profile_BusinessPhone_service": "services/update_Profile_BusinessPhone_service",
            "update_Profile_ShippingAddress1_service": "services/update_Profile_ShippingAddress1_service",
            "update_Profile_ShippingAddress2_service": "services/update_Profile_ShippingAddress2_service",
            "update_Profile_FirstName_service": "services/update_Profile_FirstName_service",
            "update_Profile_LastName_service": "services/update_Profile_LastName_service",
            "update_Profile_City_service": "services/update_Profile_City_service",
            "update_Profile_Resale_service": "services/update_Profile_Resale_service",
            "update_Profile_State_service": "services/update_Profile_State_service",
            "update_Profile_Zip_service": "services/update_Profile_Zip_service",
            "Square_payments_Pay_using_ccof_prod_post": "services/Square_payments_Pay_using_ccof_prod_post",
            "RegisterNewUser_prod_service": "services/RegisterNewUser_prod_service",
            "sq_RetrieveCustomer_CCOF_prod_service": "services/sq_RetrieveCustomer_CCOF_prod_service",
            "Seller_Accepted_Seller_Orders_NotShipped_Count_service": "services/Seller_Accepted_Seller_Orders_NotShipped_Count_service",
            "BuyerBank_GetAvailable_service": "services/BuyerBank_GetAvailable_service",
            "BuyerBank_UpdateAvailable_service": "services/BuyerBank_UpdateAvailable_service",
            "BuyerBank_GetAvailable_tBank_service": "services/BuyerBank_GetAvailable_tBank_service",
            "updatePaymentType_service": "services/updatePaymentType_service",
            "GetEscrowTranactions_user_service": "services/GetEscrowTranactions_user_service",
            "SendEmailforEscrow_service": "services/SendEmailforEscrow_service",
            "Seller_Filtered_Home_Seller_Filtered_Requests_Company_service": "services/Seller_Filtered_Home_Seller_Filtered_Requests_Company_service",
            "Seller_Filtered_Home_Seller_Filtered_Requests_Model_service": "services/Seller_Filtered_Home_Seller_Filtered_Requests_Model_service",
            "Seller_Filtered_Home_Seller_Filtered_Requests_Type_service": "services/Seller_Filtered_Home_Seller_Filtered_Requests_Type_service",
            "Buyer_Home_Shipped_service": "services/Buyer_Home_Shipped_service",
            '$Buyer_InProcess_Detail': 'pages/Buyer_InProcess_Detail',
            '$old_Buyer_Home': 'pages/old_Buyer_Home',
            '$Seller_InProcess': 'pages/Seller_InProcess',
            '$Seller_Home': 'pages/Seller_Home',
            '$Seller_Filter_Home': 'pages/Seller_Filter_Home',
            '$Seller_Ship': 'pages/Seller_Ship',
            '$Seller_Complete': 'pages/Seller_Complete',
            '$tabProfile': 'pages/tabProfile',
            '$Buyer_MakeRequest': 'pages/Buyer_MakeRequest',
            '$Bank_CC_Detail': 'pages/Bank_CC_Detail',
            '$Buyer_Complete': 'pages/Buyer_Complete',
            '$sq_iFrame': 'pages/sq_iFrame',
            '$Buyer_Complete_Detail': 'pages/Buyer_Complete_Detail',
            '$Welcome': 'pages/Welcome',
            '$Buyer_Home': 'pages/Buyer_Home',
            '$Seller_Ins': 'pages/Seller_Ins',
            '$Buyer_Ins': 'pages/Buyer_Ins',
            '$Seller_Filter': 'pages/Seller_Filter',
            '$Seller_InProcess_Detail': 'pages/Seller_InProcess_Detail',
            '$Seller_Accept_Request': 'pages/Seller_Accept_Request',
            '$PassThru': 'pages/PassThru',
            '$Seller_Offers': 'pages/Seller_Offers',
            '$Register': 'pages/Register',
            '$ForgotPassword': 'pages/ForgotPassword',
            '$Buyer_Accept_Offer': 'pages/Buyer_Accept_Offer',
            '$Seller_Complete_Detail': 'pages/Seller_Complete_Detail',
            '$Seller_Accepted': 'pages/Seller_Accepted',
            '$Buyer_InProcess': 'pages/Buyer_InProcess',
            '$tab_Help': 'pages/tab_Help',
            '$tab_Verify': 'pages/tab_Verify',
            '$tabInfo': 'pages/tabInfo',
            '$Seller_Offers_Detail': 'pages/Seller_Offers_Detail',
            '$tabBank': 'pages/tabBank',
            '$Buyer_Requests_See': 'pages/Buyer_Requests_See',
            '$Login': 'pages/Login'
        },
        waitSeconds: 100,
        shim: {
            "angular": {
                exports: "angular"
            },
            "angular-touch": {
                deps: [
                    "angular"
                ]
            },
            "angular-route": {
                deps: [
                    "angular"
                ]
            },
            "ionic": {
                deps: [
                    "angular",
                    "cordova"
                ]
            },
            "appery-ui": {
                deps: [
                    "angular"
                ]
            },
            "lodash": {
                exports: "_"
            },
            "gmaps": {
                deps: [
                    "angular"
                ]
            },
            "angular-translate": {
                deps: [
                    "angular"
                ]
            },
            "x2js": {
                exports: "X2JS"
            },
            'jasmine_f/boot': {
                deps: ['jasmine_f/jasmine-html']
            },
            'jasmine_f/jasmine-html': {
                deps: ['jasmine_f/jasmine']
            },
            'angular-mocks': {
                deps: ['angular', 'jasmine_f/boot']
            }
        }
    });
    define('angular', [], function() {
        return window.angular;
    });
    window.__APPLICATION_NAME = "AppModule_phoneApp";
    if (window.location.href.indexOf('tests.html') > -1) {
        require(["require", "angular", "app", '../test/tests_asset'], function() {});
    } else {
        require([
            "require",
            "angular",
            "app",
            "ionic",
            "appery-ui"
        ], function(require, angular) {
            // Run APP
            angular.bootstrap(document.documentElement, [window.__APPLICATION_NAME]);
        });
    }
})(this);