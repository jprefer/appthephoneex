define(['require'], function(require) {
    return {
        /**
         * Application constants. This values generated from all service settings.
         * Also there are Push Notification settings there if Push Notifications enabled for this project.
         */
        /**
         * Settings
         */
        Settings: {},
        /**
         * phoneapp_settings
         * @property database_id       - 
         */
        phoneapp_settings: {
            "database_id": "5e32d1af2e22d7259ebf3de6"
        },
        /**
         * Square_settings
         * @property API_EXPRESS_API_KEY       - 
         */
        Square_settings: {
            "API_EXPRESS_API_KEY": "c1e2c002-8c85-4d72-96da-78ceb41f3978"
        },
        /**
         * PushSettings
         * @property PushApiKey       - 
         */
        PushSettings: {
            "PushApiKey": "0ef48c65-a115-45c9-8896-c8eb567a8bd1"
        },
        /**
         * Push Notification settings.
         * @property {boolean} badge       - If badge enabled for push
         * @property {boolean} alert       - If alert enabled for push
         * @property {boolean} sound       - If sound enabled for push
         * @property {string} senderID     - Sender Id for android devices
         * @property {string} url          - URL of Apperyio push rest service
         * @property {string} guid         - Project GUID
         */
        PushNotification: {
            ios: {
                badge: true,
                alert: true,
                sound: true,
                clearBadge: true
            },
            android: {
                senderID: null
            },
            url: "https://api.appery.io/rest/push/reg",
            guid: "817c3145-53ed-4561-9ecd-1c08e9bffc84"
        }
    };
});