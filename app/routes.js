define(['require'], function(require) {
    /**
     * Routing configuration generated by Appery.io
     */
    /**
     * Default route
     * @type {{redirectTo: string}}
     */
    var default_route = {
        redirectTo: '/Login.html'
    };
    /**
     * Routing configuration object
     * @property {object} default                               - Default routing configuration
     * @property {string} default.redirectTo                    - Default routing URL
     * @property {object} when                                  - Routing configuration for different URLs
     * @property {object} when./                                - Routing configuration for "/" URL
     * @property {string} when./.redirectTo                     - Redirect to default routing URL
     * @property {object} when["/tabProfile.html"]    - Routing configuration for /tabProfile.html URL
     * @property {string} when["/tabProfile.html"].c  - Controller for /tabProfile.html URL
     * @property {string} when["/tabProfile.html"].t  - Template for /tabProfile.html URL
     * @property {string[]} when["/tabProfile.html"].d  - Dependencies for /tabProfile.html URL
     * @property {object} when["/tabInfo.html"]    - Routing configuration for /tabInfo.html URL
     * @property {string} when["/tabInfo.html"].c  - Controller for /tabInfo.html URL
     * @property {string} when["/tabInfo.html"].t  - Template for /tabInfo.html URL
     * @property {string[]} when["/tabInfo.html"].d  - Dependencies for /tabInfo.html URL
     * @property {object} when["/Login.html"]    - Routing configuration for /Login.html URL
     * @property {string} when["/Login.html"].c  - Controller for /Login.html URL
     * @property {string} when["/Login.html"].t  - Template for /Login.html URL
     * @property {string[]} when["/Login.html"].d  - Dependencies for /Login.html URL
     * @property {object} when["/Register.html"]    - Routing configuration for /Register.html URL
     * @property {string} when["/Register.html"].c  - Controller for /Register.html URL
     * @property {string} when["/Register.html"].t  - Template for /Register.html URL
     * @property {string[]} when["/Register.html"].d  - Dependencies for /Register.html URL
     * @property {object} when["/tabBank.html"]    - Routing configuration for /tabBank.html URL
     * @property {string} when["/tabBank.html"].c  - Controller for /tabBank.html URL
     * @property {string} when["/tabBank.html"].t  - Template for /tabBank.html URL
     * @property {string[]} when["/tabBank.html"].d  - Dependencies for /tabBank.html URL
     * @property {object} when["/old_Buyer_Home.html"]    - Routing configuration for /old_Buyer_Home.html URL
     * @property {string} when["/old_Buyer_Home.html"].c  - Controller for /old_Buyer_Home.html URL
     * @property {string} when["/old_Buyer_Home.html"].t  - Template for /old_Buyer_Home.html URL
     * @property {string[]} when["/old_Buyer_Home.html"].d  - Dependencies for /old_Buyer_Home.html URL
     * @property {object} when["/Seller_Home.html"]    - Routing configuration for /Seller_Home.html URL
     * @property {string} when["/Seller_Home.html"].c  - Controller for /Seller_Home.html URL
     * @property {string} when["/Seller_Home.html"].t  - Template for /Seller_Home.html URL
     * @property {string[]} when["/Seller_Home.html"].d  - Dependencies for /Seller_Home.html URL
     * @property {object} when["/tabContact_Us.html"]    - Routing configuration for /tabContact_Us.html URL
     * @property {string} when["/tabContact_Us.html"].c  - Controller for /tabContact_Us.html URL
     * @property {string} when["/tabContact_Us.html"].t  - Template for /tabContact_Us.html URL
     * @property {string[]} when["/tabContact_Us.html"].d  - Dependencies for /tabContact_Us.html URL
     * @property {object} when["/Buyer_MakeRequest.html"]    - Routing configuration for /Buyer_MakeRequest.html URL
     * @property {string} when["/Buyer_MakeRequest.html"].c  - Controller for /Buyer_MakeRequest.html URL
     * @property {string} when["/Buyer_MakeRequest.html"].t  - Template for /Buyer_MakeRequest.html URL
     * @property {string[]} when["/Buyer_MakeRequest.html"].d  - Dependencies for /Buyer_MakeRequest.html URL
     * @property {object} when["/Buyer_Home.html"]    - Routing configuration for /Buyer_Home.html URL
     * @property {string} when["/Buyer_Home.html"].c  - Controller for /Buyer_Home.html URL
     * @property {string} when["/Buyer_Home.html"].t  - Template for /Buyer_Home.html URL
     * @property {string[]} when["/Buyer_Home.html"].d  - Dependencies for /Buyer_Home.html URL
     * @property {object} when["/Seller_Accept_Request.html"]    - Routing configuration for /Seller_Accept_Request.html URL
     * @property {string} when["/Seller_Accept_Request.html"].c  - Controller for /Seller_Accept_Request.html URL
     * @property {string} when["/Seller_Accept_Request.html"].t  - Template for /Seller_Accept_Request.html URL
     * @property {string[]} when["/Seller_Accept_Request.html"].d  - Dependencies for /Seller_Accept_Request.html URL
     * @property {object} when["/Buyer_Requests_See.html"]    - Routing configuration for /Buyer_Requests_See.html URL
     * @property {string} when["/Buyer_Requests_See.html"].c  - Controller for /Buyer_Requests_See.html URL
     * @property {string} when["/Buyer_Requests_See.html"].t  - Template for /Buyer_Requests_See.html URL
     * @property {string[]} when["/Buyer_Requests_See.html"].d  - Dependencies for /Buyer_Requests_See.html URL
     * @property {object} when["/Buyer_InProcess.html"]    - Routing configuration for /Buyer_InProcess.html URL
     * @property {string} when["/Buyer_InProcess.html"].c  - Controller for /Buyer_InProcess.html URL
     * @property {string} when["/Buyer_InProcess.html"].t  - Template for /Buyer_InProcess.html URL
     * @property {string[]} when["/Buyer_InProcess.html"].d  - Dependencies for /Buyer_InProcess.html URL
     * @property {object} when["/Buyer_Complete.html"]    - Routing configuration for /Buyer_Complete.html URL
     * @property {string} when["/Buyer_Complete.html"].c  - Controller for /Buyer_Complete.html URL
     * @property {string} when["/Buyer_Complete.html"].t  - Template for /Buyer_Complete.html URL
     * @property {string[]} when["/Buyer_Complete.html"].d  - Dependencies for /Buyer_Complete.html URL
     * @property {object} when["/Seller_Accepted.html"]    - Routing configuration for /Seller_Accepted.html URL
     * @property {string} when["/Seller_Accepted.html"].c  - Controller for /Seller_Accepted.html URL
     * @property {string} when["/Seller_Accepted.html"].t  - Template for /Seller_Accepted.html URL
     * @property {string[]} when["/Seller_Accepted.html"].d  - Dependencies for /Seller_Accepted.html URL
     * @property {object} when["/Seller_Complete.html"]    - Routing configuration for /Seller_Complete.html URL
     * @property {string} when["/Seller_Complete.html"].c  - Controller for /Seller_Complete.html URL
     * @property {string} when["/Seller_Complete.html"].t  - Template for /Seller_Complete.html URL
     * @property {string[]} when["/Seller_Complete.html"].d  - Dependencies for /Seller_Complete.html URL
     * @property {object} when["/Buyer_Accept_Offer.html"]    - Routing configuration for /Buyer_Accept_Offer.html URL
     * @property {string} when["/Buyer_Accept_Offer.html"].c  - Controller for /Buyer_Accept_Offer.html URL
     * @property {string} when["/Buyer_Accept_Offer.html"].t  - Template for /Buyer_Accept_Offer.html URL
     * @property {string[]} when["/Buyer_Accept_Offer.html"].d  - Dependencies for /Buyer_Accept_Offer.html URL
     * @property {object} when["/Seller_Offers.html"]    - Routing configuration for /Seller_Offers.html URL
     * @property {string} when["/Seller_Offers.html"].c  - Controller for /Seller_Offers.html URL
     * @property {string} when["/Seller_Offers.html"].t  - Template for /Seller_Offers.html URL
     * @property {string[]} when["/Seller_Offers.html"].d  - Dependencies for /Seller_Offers.html URL
     * @property {object} when["/Seller_Ship.html"]    - Routing configuration for /Seller_Ship.html URL
     * @property {string} when["/Seller_Ship.html"].c  - Controller for /Seller_Ship.html URL
     * @property {string} when["/Seller_Ship.html"].t  - Template for /Seller_Ship.html URL
     * @property {string[]} when["/Seller_Ship.html"].d  - Dependencies for /Seller_Ship.html URL
     * @property {object} when["/Seller_InProcess.html"]    - Routing configuration for /Seller_InProcess.html URL
     * @property {string} when["/Seller_InProcess.html"].c  - Controller for /Seller_InProcess.html URL
     * @property {string} when["/Seller_InProcess.html"].t  - Template for /Seller_InProcess.html URL
     * @property {string[]} when["/Seller_InProcess.html"].d  - Dependencies for /Seller_InProcess.html URL
     * @property {object} when["/Seller_InProcess_Detail.html"]    - Routing configuration for /Seller_InProcess_Detail.html URL
     * @property {string} when["/Seller_InProcess_Detail.html"].c  - Controller for /Seller_InProcess_Detail.html URL
     * @property {string} when["/Seller_InProcess_Detail.html"].t  - Template for /Seller_InProcess_Detail.html URL
     * @property {string[]} when["/Seller_InProcess_Detail.html"].d  - Dependencies for /Seller_InProcess_Detail.html URL
     * @property {object} when["/Buyer_InProcess_Detail.html"]    - Routing configuration for /Buyer_InProcess_Detail.html URL
     * @property {string} when["/Buyer_InProcess_Detail.html"].c  - Controller for /Buyer_InProcess_Detail.html URL
     * @property {string} when["/Buyer_InProcess_Detail.html"].t  - Template for /Buyer_InProcess_Detail.html URL
     * @property {string[]} when["/Buyer_InProcess_Detail.html"].d  - Dependencies for /Buyer_InProcess_Detail.html URL
     * @property {object} when["/Seller_Complete_Detail.html"]    - Routing configuration for /Seller_Complete_Detail.html URL
     * @property {string} when["/Seller_Complete_Detail.html"].c  - Controller for /Seller_Complete_Detail.html URL
     * @property {string} when["/Seller_Complete_Detail.html"].t  - Template for /Seller_Complete_Detail.html URL
     * @property {string[]} when["/Seller_Complete_Detail.html"].d  - Dependencies for /Seller_Complete_Detail.html URL
     * @property {object} when["/Buyer_Complete_Detail.html"]    - Routing configuration for /Buyer_Complete_Detail.html URL
     * @property {string} when["/Buyer_Complete_Detail.html"].c  - Controller for /Buyer_Complete_Detail.html URL
     * @property {string} when["/Buyer_Complete_Detail.html"].t  - Template for /Buyer_Complete_Detail.html URL
     * @property {string[]} when["/Buyer_Complete_Detail.html"].d  - Dependencies for /Buyer_Complete_Detail.html URL
     * @property {object} when["/Screen1.html"]    - Routing configuration for /Screen1.html URL
     * @property {string} when["/Screen1.html"].c  - Controller for /Screen1.html URL
     * @property {string} when["/Screen1.html"].t  - Template for /Screen1.html URL
     * @property {string[]} when["/Screen1.html"].d  - Dependencies for /Screen1.html URL
     
     * @property {object} otherwise                             - Routing configuration for another URL
     * @property {object} otherwise.redirectTo                  - Redirect to default routing URL
     * @property {object} route_names                           - Route aliases
     * @property {string} route_names.["Profile"]  - "Profile" is an alias for "/tabProfile.html" routing
     * @property {string} route_names.["Info"]  - "Info" is an alias for "/tabInfo.html" routing
     * @property {string} route_names.["Login"]  - "Login" is an alias for "/Login.html" routing
     * @property {string} route_names.["Register"]  - "Register" is an alias for "/Register.html" routing
     * @property {string} route_names.["Bank"]  - "Bank" is an alias for "/tabBank.html" routing
     * @property {string} route_names.["Buyer_Home_old"]  - "Buyer_Home_old" is an alias for "/old_Buyer_Home.html" routing
     * @property {string} route_names.["Seller_Home"]  - "Seller_Home" is an alias for "/Seller_Home.html" routing
     * @property {string} route_names.["Contact_Us"]  - "Contact_Us" is an alias for "/tabContact_Us.html" routing
     * @property {string} route_names.["Buyer_MakeRequest"]  - "Buyer_MakeRequest" is an alias for "/Buyer_MakeRequest.html" routing
     * @property {string} route_names.["Buyer_Home"]  - "Buyer_Home" is an alias for "/Buyer_Home.html" routing
     * @property {string} route_names.["Seller_Accept_Request"]  - "Seller_Accept_Request" is an alias for "/Seller_Accept_Request.html" routing
     * @property {string} route_names.["Buyer_Requests_See"]  - "Buyer_Requests_See" is an alias for "/Buyer_Requests_See.html" routing
     * @property {string} route_names.["Buyer_InProcess"]  - "Buyer_InProcess" is an alias for "/Buyer_InProcess.html" routing
     * @property {string} route_names.["Buyer_Complete"]  - "Buyer_Complete" is an alias for "/Buyer_Complete.html" routing
     * @property {string} route_names.["Seller_Accepted"]  - "Seller_Accepted" is an alias for "/Seller_Accepted.html" routing
     * @property {string} route_names.["Seller_Complete"]  - "Seller_Complete" is an alias for "/Seller_Complete.html" routing
     * @property {string} route_names.["Buyer_Accept_Offer"]  - "Buyer_Accept_Offer" is an alias for "/Buyer_Accept_Offer.html" routing
     * @property {string} route_names.["Seller_Offers"]  - "Seller_Offers" is an alias for "/Seller_Offers.html" routing
     * @property {string} route_names.["Seller_Ship"]  - "Seller_Ship" is an alias for "/Seller_Ship.html" routing
     * @property {string} route_names.["Seller_InProcess"]  - "Seller_InProcess" is an alias for "/Seller_InProcess.html" routing
     * @property {string} route_names.["Seller_InProcess_Detail"]  - "Seller_InProcess_Detail" is an alias for "/Seller_InProcess_Detail.html" routing
     * @property {string} route_names.["Buyer_InProcess_Detail"]  - "Buyer_InProcess_Detail" is an alias for "/Buyer_InProcess_Detail.html" routing
     * @property {string} route_names.["Seller_Complete_Detail"]  - "Seller_Complete_Detail" is an alias for "/Seller_Complete_Detail.html" routing
     * @property {string} route_names.["Buyer_Complete_Detail"]  - "Buyer_Complete_Detail" is an alias for "/Buyer_Complete_Detail.html" routing
     * @property {string} route_names.["Screen1"]  - "Screen1" is an alias for "/Screen1.html" routing
     
     */
    return {
        default: default_route,
        when: {
            '/': default_route,
            '/tabProfile.html': {
                c: '$tabProfile/tabProfileController',
                t: '$tabProfile/tabProfileTemplate.html',
                d: []
            },
            '/tabInfo.html': {
                c: '$tabInfo/tabInfoController',
                t: '$tabInfo/tabInfoTemplate.html',
                d: []
            },
            '/Login.html': {
                c: '$Login/LoginController',
                t: '$Login/LoginTemplate.html',
                d: []
            },
            '/Register.html': {
                c: '$Register/RegisterController',
                t: '$Register/RegisterTemplate.html',
                d: []
            },
            '/tabBank.html': {
                c: '$tabBank/tabBankController',
                t: '$tabBank/tabBankTemplate.html',
                d: []
            },
            '/old_Buyer_Home.html': {
                c: '$old_Buyer_Home/old_Buyer_HomeController',
                t: '$old_Buyer_Home/old_Buyer_HomeTemplate.html',
                d: []
            },
            '/Seller_Home.html': {
                c: '$Seller_Home/Seller_HomeController',
                t: '$Seller_Home/Seller_HomeTemplate.html',
                d: []
            },
            '/tabContact_Us.html': {
                c: '$tabContact_Us/tabContact_UsController',
                t: '$tabContact_Us/tabContact_UsTemplate.html',
                d: []
            },
            '/Buyer_MakeRequest.html': {
                c: '$Buyer_MakeRequest/Buyer_MakeRequestController',
                t: '$Buyer_MakeRequest/Buyer_MakeRequestTemplate.html',
                d: []
            },
            '/Buyer_Home.html': {
                c: '$Buyer_Home/Buyer_HomeController',
                t: '$Buyer_Home/Buyer_HomeTemplate.html',
                d: []
            },
            '/Seller_Accept_Request.html': {
                c: '$Seller_Accept_Request/Seller_Accept_RequestController',
                t: '$Seller_Accept_Request/Seller_Accept_RequestTemplate.html',
                d: []
            },
            '/Buyer_Requests_See.html': {
                c: '$Buyer_Requests_See/Buyer_Requests_SeeController',
                t: '$Buyer_Requests_See/Buyer_Requests_SeeTemplate.html',
                d: []
            },
            '/Buyer_InProcess.html': {
                c: '$Buyer_InProcess/Buyer_InProcessController',
                t: '$Buyer_InProcess/Buyer_InProcessTemplate.html',
                d: []
            },
            '/Buyer_Complete.html': {
                c: '$Buyer_Complete/Buyer_CompleteController',
                t: '$Buyer_Complete/Buyer_CompleteTemplate.html',
                d: []
            },
            '/Seller_Accepted.html': {
                c: '$Seller_Accepted/Seller_AcceptedController',
                t: '$Seller_Accepted/Seller_AcceptedTemplate.html',
                d: []
            },
            '/Seller_Complete.html': {
                c: '$Seller_Complete/Seller_CompleteController',
                t: '$Seller_Complete/Seller_CompleteTemplate.html',
                d: []
            },
            '/Buyer_Accept_Offer.html': {
                c: '$Buyer_Accept_Offer/Buyer_Accept_OfferController',
                t: '$Buyer_Accept_Offer/Buyer_Accept_OfferTemplate.html',
                d: []
            },
            '/Seller_Offers.html': {
                c: '$Seller_Offers/Seller_OffersController',
                t: '$Seller_Offers/Seller_OffersTemplate.html',
                d: []
            },
            '/Seller_Ship.html': {
                c: '$Seller_Ship/Seller_ShipController',
                t: '$Seller_Ship/Seller_ShipTemplate.html',
                d: []
            },
            '/Seller_InProcess.html': {
                c: '$Seller_InProcess/Seller_InProcessController',
                t: '$Seller_InProcess/Seller_InProcessTemplate.html',
                d: []
            },
            '/Seller_InProcess_Detail.html': {
                c: '$Seller_InProcess_Detail/Seller_InProcess_DetailController',
                t: '$Seller_InProcess_Detail/Seller_InProcess_DetailTemplate.html',
                d: []
            },
            '/Buyer_InProcess_Detail.html': {
                c: '$Buyer_InProcess_Detail/Buyer_InProcess_DetailController',
                t: '$Buyer_InProcess_Detail/Buyer_InProcess_DetailTemplate.html',
                d: []
            },
            '/Seller_Complete_Detail.html': {
                c: '$Seller_Complete_Detail/Seller_Complete_DetailController',
                t: '$Seller_Complete_Detail/Seller_Complete_DetailTemplate.html',
                d: []
            },
            '/Buyer_Complete_Detail.html': {
                c: '$Buyer_Complete_Detail/Buyer_Complete_DetailController',
                t: '$Buyer_Complete_Detail/Buyer_Complete_DetailTemplate.html',
                d: []
            },
            '/Screen1.html': {
                c: '$Screen1/Screen1Controller',
                t: '$Screen1/Screen1Template.html',
                d: []
            }
        },
        otherwise: default_route,
        route_names: {
            'Profile': '/tabProfile.html',
            'Info': '/tabInfo.html',
            'Login': '/Login.html',
            'Register': '/Register.html',
            'Bank': '/tabBank.html',
            'Buyer_Home_old': '/old_Buyer_Home.html',
            'Seller_Home': '/Seller_Home.html',
            'Contact_Us': '/tabContact_Us.html',
            'Buyer_MakeRequest': '/Buyer_MakeRequest.html',
            'Buyer_Home': '/Buyer_Home.html',
            'Seller_Accept_Request': '/Seller_Accept_Request.html',
            'Buyer_Requests_See': '/Buyer_Requests_See.html',
            'Buyer_InProcess': '/Buyer_InProcess.html',
            'Buyer_Complete': '/Buyer_Complete.html',
            'Seller_Accepted': '/Seller_Accepted.html',
            'Seller_Complete': '/Seller_Complete.html',
            'Buyer_Accept_Offer': '/Buyer_Accept_Offer.html',
            'Seller_Offers': '/Seller_Offers.html',
            'Seller_Ship': '/Seller_Ship.html',
            'Seller_InProcess': '/Seller_InProcess.html',
            'Seller_InProcess_Detail': '/Seller_InProcess_Detail.html',
            'Buyer_InProcess_Detail': '/Buyer_InProcess_Detail.html',
            'Seller_Complete_Detail': '/Seller_Complete_Detail.html',
            'Buyer_Complete_Detail': '/Buyer_Complete_Detail.html',
            'Screen1': '/Screen1.html'
        }
    };
});