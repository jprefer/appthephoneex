define(['require'], function(require) {
    /**
     * Models generated from "Model and Storage" and models extracted from services.
     * To generate entity use syntax:
     * Apperyio.EntityAPI("<model_name>[.<model_field>]");
     */
    var models = {
        "Pass": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Bid": {
            "type": "object",
            "properties": {
                "BidColor": {
                    "type": "string"
                },
                "BidCondition": {
                    "type": "string"
                },
                "BidModel": {
                    "type": "string"
                },
                "BidExpiration": {
                    "type": "string"
                },
                "BidMem": {
                    "type": "string"
                },
                "BidQuan": {
                    "type": "string"
                }
            }
        },
        "Object3": {
            "type": "object",
            "properties": {}
        },
        "Array3": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "String": {
            "type": "string"
        },
        "List": {
            "type": "array",
            "items": [{
                "type": "object",
                "properties": {}
            }]
        },
        "Array": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Boolean": {
            "type": "boolean"
        },
        "Array1": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "List2": {
            "type": "array",
            "items": [{
                "type": "object",
                "properties": {}
            }]
        },
        "ActiveScreen": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                }
            }
        },
        "Object2": {
            "type": "object",
            "properties": {}
        },
        "Number": {
            "type": "number"
        },
        "User": {
            "type": "object",
            "properties": {
                "ResaleNumber": {
                    "type": "string"
                },
                "ExtraField5": {
                    "type": "string"
                },
                "email": {
                    "type": "string"
                },
                "ShippingAddress2": {
                    "type": "string"
                },
                "ShippingAddress1": {
                    "type": "string"
                },
                "ValidText": {
                    "type": "string"
                },
                "LastName": {
                    "type": "string"
                },
                "InActive": {
                    "type": "string"
                },
                "UserType": {
                    "type": "string"
                },
                "sessionToken": {
                    "type": "string"
                },
                "Company": {
                    "type": "string"
                },
                "MobilePhone": {
                    "type": "string"
                },
                "EmailVer": {
                    "type": "boolean"
                },
                "password": {
                    "type": "string"
                },
                "State": {
                    "type": "string"
                },
                "TextVer": {
                    "type": "boolean"
                },
                "FirstName": {
                    "type": "string"
                },
                "Zip": {
                    "type": "string"
                },
                "ExtraField4": {
                    "type": "string"
                },
                "ExtraField2": {
                    "type": "string"
                },
                "City": {
                    "type": "string"
                },
                "country": {
                    "type": "string"
                },
                "username": {
                    "type": "string"
                },
                "ExtraField3": {
                    "type": "string"
                },
                "BusinessPhone": {
                    "type": "string"
                },
                "ExtraField1": {
                    "type": "string"
                },
                "ActCode": {
                    "type": "string"
                }
            }
        },
        "Dev": {
            "type": "object",
            "properties": {
                "dev_user": {
                    "type": "string"
                },
                "dev_id": {
                    "type": "string"
                }
            }
        },
        "List3": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Wrapper2": {
            "type": "object",
            "properties": {
                "item2": {
                    "type": "object",
                    "properties": {}
                }
            }
        },
        "Wrapper": {
            "type": "object",
            "properties": {
                "item": {
                    "type": "object",
                    "properties": {}
                }
            }
        },
        "DataStorage": {
            "type": "object",
            "properties": {
                "Gl_Vars": {
                    "type": "object",
                    "properties": {
                        "request_id2": {
                            "type": "string"
                        },
                        "request_id": {
                            "type": "string"
                        },
                        "order_id": {
                            "type": "string"
                        },
                        "whereami": {
                            "type": "string"
                        }
                    }
                }
            }
        },
        "Main": {
            "type": "object",
            "properties": {
                "username1": {
                    "type": "string"
                },
                "devID1": {
                    "type": "string"
                },
                "object_id1": {
                    "type": "string"
                }
            }
        },
        "List1": {
            "type": "array",
            "items": [{
                "type": "object",
                "properties": {}
            }]
        },
        "Wrapper1": {
            "type": "object",
            "properties": {
                "item1": {
                    "type": "object",
                    "properties": {}
                }
            }
        },
        "Object1": {
            "type": "object",
            "properties": {}
        },
        "Requests": {
            "type": "object",
            "properties": {
                "RequestModel": {
                    "type": "string"
                },
                "RequestColor": {
                    "type": "string"
                },
                "RequestMem": {
                    "type": "string"
                },
                "RequestCondition": {
                    "type": "string"
                },
                "RequestQuan": {
                    "type": "string"
                },
                "RequestManu": {
                    "type": "string"
                },
                "RequestID": {
                    "type": "string"
                },
                "RequestExpiration": {
                    "type": "string"
                }
            }
        },
        "Wrapper3": {
            "type": "object",
            "properties": {
                "item3": {
                    "type": "object",
                    "properties": {}
                }
            }
        },
        "Object": {
            "type": "object",
            "properties": {}
        },
        "Array2": {
            "type": "array",
            "items": [{
                "type": "string"
            }]
        },
        "Seller_MakeTrackingAlive_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/d89c87e9-7281-4e31-be95-fe943b6994ca/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Tracking": {
                                    "type": "string",
                                    "default": "123123123"
                                },
                                "Order_id": {
                                    "type": "string",
                                    "default": "5e67cd334042cd1059848839"
                                },
                                "ShippedBy": {
                                    "type": "string",
                                    "default": "FlyingDesk"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "menu_companies_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/5ff21764-8a1b-4b03-885b-b366a4fe9b23/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Buyer_InProcess_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/4b9c7057-e42a-44ed-a45e-166c91d04743/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e67cd334042cd1059848839"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "twilio_verifyToken_sms_Verify_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/30a58a1e-95eb-447a-ae4f-a6970c7e9a71/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "to": {
                                    "type": "string",
                                    "default": "+15616998998"
                                },
                                "code": {
                                    "type": "string",
                                    "default": "353108"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "valid": {
                                            "type": "boolean",
                                            "default": true
                                        },
                                        "status": {
                                            "type": "string",
                                            "default": "approved"
                                        },
                                        "sid": {
                                            "type": "string",
                                            "default": "VE8a136bcf3c1d21a70f3b720b705ee2cc"
                                        },
                                        "amount": {
                                            "type": "null"
                                        },
                                        "channel": {
                                            "type": "string",
                                            "default": "sms"
                                        },
                                        "account_sid": {
                                            "type": "string",
                                            "default": "AC903b9fd0e07413368b0ee7fd077a4172"
                                        },
                                        "service_sid": {
                                            "type": "string",
                                            "default": "VA41a4a78a8041d71942e603e68b226f01"
                                        },
                                        "to": {
                                            "type": "string",
                                            "default": "+15616998998"
                                        },
                                        "date_updated": {
                                            "type": "string",
                                            "default": "2020-04-29T18:17:26Z"
                                        },
                                        "date_created": {
                                            "type": "string",
                                            "default": "2020-04-29T18:16:50Z"
                                        },
                                        "payee": {
                                            "type": "null"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_logout_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/logout"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "twilio_Request_sms_Verify_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/b68949f0-cded-4b6c-87e7-a44148b160c3/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "mobile": {
                                    "type": "string",
                                    "default": "+15616998998"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Requests_Seller_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/59327c8a-7b75-46b6-8ded-3143a423457f/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "jhn"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "c4fccd4a-5020-4a3c-8694-700fd51ad411"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "test_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/9d21cd14-7b11-49aa-ba21-cbe6b386f78f/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "5b0a0b0a-645d-45c7-a9f5-8a4dfc456f52"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "col1In": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "ReturnOffersToBuyer_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/a064b3ad-fd41-4f70-bacd-2ce3260dd20a/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "john"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "d6a6e3ee-4356-43e4-85f8-f8a30585065a"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Seller_Complete_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/911d471c-630f-48ca-874b-ddb1955a850d/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "johnp"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "c4fccd4a-5020-4a3c-8694-700fd51ad411"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Update_EmailVer_True_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/7b724054-5ed9-4903-a399-85d5a8d6a83e/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Email": {
                                    "type": "string",
                                    "default": "seprefer@gmail.com"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Seller_NotShipped_Detal_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/3dc7ab0c-bab7-4dc0-b6a2-7a14b6ab9626/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e5adb7f3147710a1f63e6c0"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_BuyerRequests_update_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/BuyerRequests/{_id}"
                },
                "method": {
                    "type": "string",
                    "default": "put"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "Dead": {
                                    "type": "boolean",
                                    "default": null
                                },
                                "manufacturer": {
                                    "type": "string"
                                },
                                "Shipping": {
                                    "type": "string"
                                },
                                "B_Requests3": {
                                    "type": "string"
                                },
                                "RNotes": {
                                    "type": "string"
                                },
                                "Buyer_username": {
                                    "type": "string"
                                },
                                "B_Requests5": {
                                    "type": "string"
                                },
                                "Product": {
                                    "type": "string"
                                },
                                "Color": {
                                    "type": "string"
                                },
                                "Alive": {
                                    "type": "boolean",
                                    "default": null
                                },
                                "Quantity": {
                                    "type": "number",
                                    "default": null
                                },
                                "B_Requests2": {
                                    "type": "string"
                                },
                                "B_Requests4": {
                                    "type": "string"
                                },
                                "Expiration": {
                                    "type": "number",
                                    "default": null
                                },
                                "Kitted": {
                                    "type": "string"
                                },
                                "offers": {
                                    "type": "array",
                                    "items": [{
                                        "type": "null"
                                    }]
                                },
                                "acl": {
                                    "type": "object",
                                    "properties": {
                                        "*": {
                                            "type": "object",
                                            "properties": {
                                                "read": {
                                                    "type": "boolean",
                                                    "default": true
                                                },
                                                "write": {
                                                    "type": "boolean",
                                                    "default": true
                                                }
                                            }
                                        }
                                    }
                                },
                                "ExpirationDate": {
                                    "type": "string"
                                },
                                "B_Requests1": {
                                    "type": "string"
                                },
                                "Carrier": {
                                    "type": "string"
                                },
                                "Condition": {
                                    "type": "string"
                                },
                                "Memory": {
                                    "type": "string"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "_id": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "application/json"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "_updatedAt": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Buyer_Complete_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/882fb49f-fb03-403e-a766-1b9876df23fb/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "john"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "d6a6e3ee-4356-43e4-85f8-f8a30585065a"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Request_To_Seller_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/bfda7559-20c8-4ca0-989d-512bac0c759d/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e55ca7280c1b20a2aa88c80"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Request_ToBuyer_offer_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/b1891604-14cb-4003-95d8-302b7c62d88e/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e4d5a893147710a1f6332a1"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Seller_Shipped_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/ed9a3868-c9c4-46eb-8c41-16949cd3a724/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e598f0b80c1b20a2aa8ee0a"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "ReturnOffersToSeller_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/0650ba31-7acf-46f8-af53-b4b95b2fa089/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e8c9bf87b1efc1056e93428"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Buyer_Shipped_See_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/c57bb60a-13de-4b7e-a5d3-432b726bfb12/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "john"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "d6a6e3ee-4356-43e4-85f8-f8a30585065a"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Seller_Complete_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/842c92b3-33e3-4ff6-8393-e3842abdebc7/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e67cd334042cd1059848839"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_ShippingMethod_list_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/ShippingMethod"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "ShippingType": {
                                                "type": "string"
                                            },
                                            "_updatedAt": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "ReturnRequests_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/ca617f6e-8830-403e-8f61-333aa3a97812/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "john"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "d6a6e3ee-4356-43e4-85f8-f8a30585065a"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Seller_Orders_NotShipped_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/5146bafc-160e-4411-bb43-e62fb1f36456/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "johnp"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "c4fccd4a-5020-4a3c-8694-700fd51ad411"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Test_AllCountries_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/7637402e-9a37-4ff8-9b51-a84fd01d60b5/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data",
                                    "default": "_id"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {}
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "InsertOffers_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/d7ef26f7-8ec3-4f79-83df-16aba9f7c55c/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Condition": {
                                    "type": "string"
                                },
                                "Product": {
                                    "type": "string"
                                },
                                "B_Requests3": {
                                    "type": "string"
                                },
                                "B_Requests4": {
                                    "type": "string"
                                },
                                "B_Requests5": {
                                    "type": "string"
                                },
                                "Quantity": {
                                    "type": "string"
                                },
                                "B_Requests1": {
                                    "type": "string"
                                },
                                "S_Offers5": {
                                    "type": "string"
                                },
                                "B_Requests2": {
                                    "type": "string"
                                },
                                "S_Offers1": {
                                    "type": "string"
                                },
                                "Seller_username": {
                                    "type": "string"
                                },
                                "OfferNotes": {
                                    "type": "string"
                                },
                                "S_Offers3": {
                                    "type": "string"
                                },
                                "Shipping": {
                                    "type": "string"
                                },
                                "Memory": {
                                    "type": "string"
                                },
                                "OfferPrice": {
                                    "type": "string"
                                },
                                "RNotes": {
                                    "type": "string"
                                },
                                "Color": {
                                    "type": "string"
                                },
                                "manufacturer": {
                                    "type": "string"
                                },
                                "Buyer_username": {
                                    "type": "string"
                                },
                                "S_Offers2": {
                                    "type": "string"
                                },
                                "RequestID4": {
                                    "type": "string"
                                },
                                "S_Offers4": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Update_TextVer_True_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/561803c1-4a5c-4597-af47-eae736795d9b/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "MobilePhone": {
                                    "type": "string",
                                    "default": "9544788852"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Seller_Shipped_See_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/6b84bb49-06b0-4425-96b8-fcea514dbe29/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "johnp"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Buyer_Complete_Detail_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/8100199f-eefb-445e-8842-e624dcfce667/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e598eac3147710a1f63dff8"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "BuyerRejectOffer_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/c7212199-cf4e-4d8c-9eca-e3306e104d41/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "CurrentRequestID": {
                                    "type": "string",
                                    "default": "5e4dc39a3147710a1f633810"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "ReturnOffersToSeller_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/57b89f0f-b5f4-4e36-9e02-3bf92fc5200e/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string",
                                    "default": "johnp"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "c4fccd4a-5020-4a3c-8694-700fd51ad411"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "menu_Main_Storage_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/5a6ee864-73f4-4d77-8262-dd9462eff0ff/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Type": {
                                    "type": "string",
                                    "default": "iPhone"
                                },
                                "Company": {
                                    "type": "string",
                                    "default": "Apple"
                                },
                                "Model": {
                                    "type": "string",
                                    "default": "iphone 6"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Buyer_Complete_Order_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/9e19cac5-22b3-4d11-8679-8ff5bddd0320/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Order_id": {
                                    "type": "string",
                                    "default": "5e67cd334042cd1059848839"
                                },
                                "Rating": {
                                    "type": "string",
                                    "default": "*"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "menu_Main_Finish_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/c55d42c3-6fa0-4ba6-8396-df281e07400c/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Type": {
                                    "type": "string",
                                    "default": "iPhone"
                                },
                                "Company": {
                                    "type": "string",
                                    "default": "Apple"
                                },
                                "Storage": {
                                    "type": "string",
                                    "default": "16 GB"
                                },
                                "Model": {
                                    "type": "string",
                                    "default": "iphone 6"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "menu_Main_Company_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/65ab4986-3746-4078-afef-5ce4bca58e42/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "string",
                                        "default": "Apple"
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "menu_Main_Model_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/59b028cf-1059-4b2b-98a1-bb44fdb90bc0/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Type": {
                                    "type": "string",
                                    "default": "Phone"
                                },
                                "Company": {
                                    "type": "string",
                                    "default": "Samsung"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Insert_User_Device_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/6bcd2584-15b6-49e6-b6fb-eccbfa8edae9/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Device_id": {
                                    "type": "string",
                                    "default": "5e7e50ac032685544fe41207"
                                },
                                "user": {
                                    "type": "string",
                                    "default": "Bob"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "menu_Main_Type_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/80a55545-85ea-4010-a631-f6bccf6fe04c/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Company": {
                                    "type": "string",
                                    "default": "Samsung"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "string",
                                        "default": "Phone"
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_Merchandise_list_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/Merchandise"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "_updatedAt": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "Manu": {
                                                "type": "string"
                                            },
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "name": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "test_Security_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/00ff30a6-ae0a-4d8d-ad8a-6986a312477d/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "twilio_verifyToken_email_Verify_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/8b56898f-c8c3-40a9-befb-c545b2074f86/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "default": "jprefer@gmail.com"
                                },
                                "code": {
                                    "type": "string",
                                    "default": "856936"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "date_updated": {
                                            "type": "string",
                                            "default": "2020-04-29T23:00:07Z"
                                        },
                                        "amount": {
                                            "type": "null"
                                        },
                                        "to": {
                                            "type": "string",
                                            "default": "jprefer@gmail.com"
                                        },
                                        "status": {
                                            "type": "string",
                                            "default": "approved"
                                        },
                                        "sid": {
                                            "type": "string",
                                            "default": "VEa043a67631fcaf377efae17c62863efb"
                                        },
                                        "date_created": {
                                            "type": "string",
                                            "default": "2020-04-29T22:59:09Z"
                                        },
                                        "channel": {
                                            "type": "string",
                                            "default": "email"
                                        },
                                        "payee": {
                                            "type": "null"
                                        },
                                        "valid": {
                                            "type": "boolean",
                                            "default": true
                                        },
                                        "service_sid": {
                                            "type": "string",
                                            "default": "VA41a4a78a8041d71942e603e68b226f01"
                                        },
                                        "account_sid": {
                                            "type": "string",
                                            "default": "AC903b9fd0e07413368b0ee7fd077a4172"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "InsertRequest_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/3464dbc7-29d3-446d-a786-a11176f6a4de/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Expiration": {
                                    "type": "string"
                                },
                                "Buyer_username": {
                                    "type": "string"
                                },
                                "Color": {
                                    "type": "string"
                                },
                                "Shipping": {
                                    "type": "string"
                                },
                                "manufacturer": {
                                    "type": "string"
                                },
                                "RNotes": {
                                    "type": "string"
                                },
                                "Memory": {
                                    "type": "string"
                                },
                                "Product": {
                                    "type": "string"
                                },
                                "Condition": {
                                    "type": "string"
                                },
                                "Quantity": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "twilio_Request_email_Verify_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/ed8c3615-22d7-4421-be15-726d844ddeee/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "email": {
                                    "type": "string",
                                    "default": "jprefer@gmail.com"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestParams": {
                                            "type": "string"
                                        },
                                        "requestBody": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "Buyer_Complete_Return_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/54ef87c8-0ce7-44ba-b33a-1d4842978747/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "Order_id": {
                                    "type": "string",
                                    "default": "5e9e08787b1efc0cd6ca6017"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "96831a3e-eb5a-4d49-991e-b96a71e7c853"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_Memory_list_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/Memory"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "Size": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "_updatedAt": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_Color_list_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/Color"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "Color": {
                                                "type": "string"
                                            },
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "_updatedAt": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "InsertOrders_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/bffa6619-4d43-4a87-b810-9ae46be4258f/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "B_Req2": {
                                    "type": "string"
                                },
                                "S_Off4": {
                                    "type": "string"
                                },
                                "Buyer": {
                                    "type": "string"
                                },
                                "S_Off5": {
                                    "type": "string"
                                },
                                "Prod": {
                                    "type": "string"
                                },
                                "Price": {
                                    "type": "string"
                                },
                                "Request_id": {
                                    "type": "string"
                                },
                                "ShipCity": {
                                    "type": "string"
                                },
                                "Offer_id": {
                                    "type": "string"
                                },
                                "ShipLastName": {
                                    "type": "string"
                                },
                                "Mem": {
                                    "type": "string"
                                },
                                "CompanyName": {
                                    "type": "string"
                                },
                                "ResaleNumber": {
                                    "type": "string"
                                },
                                "ShipState": {
                                    "type": "string"
                                },
                                "ShipAddress1": {
                                    "type": "string"
                                },
                                "ShipPhone": {
                                    "type": "string"
                                },
                                "CC_Trans_id": {
                                    "type": "string"
                                },
                                "Cond": {
                                    "type": "string"
                                },
                                "B_Req4": {
                                    "type": "string"
                                },
                                "S_Off1": {
                                    "type": "string"
                                },
                                "ShipAddress2": {
                                    "type": "string"
                                },
                                "B_Req3": {
                                    "type": "string"
                                },
                                "B_Req5": {
                                    "type": "string"
                                },
                                "BuyerNote": {
                                    "type": "string"
                                },
                                "Seller": {
                                    "type": "string"
                                },
                                "SellerNote": {
                                    "type": "string"
                                },
                                "B_Req1": {
                                    "type": "string"
                                },
                                "TotalBuyerPrice": {
                                    "type": "string"
                                },
                                "Colour": {
                                    "type": "string"
                                },
                                "Manu": {
                                    "type": "string"
                                },
                                "BuyingPrice": {
                                    "type": "string"
                                },
                                "TransFee": {
                                    "type": "string"
                                },
                                "BuyerNote2": {
                                    "type": "string"
                                },
                                "SellingPrice": {
                                    "type": "string"
                                },
                                "S_Off2": {
                                    "type": "string"
                                },
                                "Shipping": {
                                    "type": "string"
                                },
                                "S_Off3": {
                                    "type": "string"
                                },
                                "Quan": {
                                    "type": "string"
                                },
                                "ShipZip": {
                                    "type": "string"
                                },
                                "ShipFirstName": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                },
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "requestBody": {
                                            "type": "string"
                                        },
                                        "requestParams": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "LoginUser_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/37f49104-a5a2-46bf-86cc-57d52ab6b3da/exec"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "password": {
                                    "type": "string"
                                },
                                "username": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "ExtraField5": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": "string",
                                            "default": "joe"
                                        },
                                        "City": {
                                            "type": "string"
                                        },
                                        "InActive": {
                                            "type": "string"
                                        },
                                        "UserType": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string",
                                            "default": "joe@appery.io"
                                        },
                                        "country": {
                                            "type": "string",
                                            "default": "USA"
                                        },
                                        "ExtraField3": {
                                            "type": "string"
                                        },
                                        "BusinessPhone": {
                                            "type": "string"
                                        },
                                        "Zip": {
                                            "type": "string"
                                        },
                                        "FirstName": {
                                            "type": "string"
                                        },
                                        "Company": {
                                            "type": "string"
                                        },
                                        "ShippingAddress2": {
                                            "type": "string"
                                        },
                                        "ExtraField2": {
                                            "type": "string"
                                        },
                                        "MobilePhone": {
                                            "type": "string"
                                        },
                                        "LastName": {
                                            "type": "string"
                                        },
                                        "ResaleNumber": {
                                            "type": "string"
                                        },
                                        "ShippingAddress1": {
                                            "type": "string"
                                        },
                                        "State": {
                                            "type": "string"
                                        },
                                        "session": {
                                            "type": "string",
                                            "default": "2f981112-b457-43e3-96d0-f883dcddf250"
                                        },
                                        "ExtraField1": {
                                            "type": "string"
                                        },
                                        "ExtraField4": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "phoneapp_BuyerRequests_list_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/db/collections/BuyerRequests"
                },
                "method": {
                    "type": "string",
                    "default": "get"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {}
                        },
                        "query": {
                            "type": "object",
                            "properties": {}
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Database-Id": {
                                    "type": "string",
                                    "default": "{phoneapp_settings.database_id}"
                                },
                                "X-Appery-Session-Token": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "Buyer_username": {
                                                "type": "string"
                                            },
                                            "manufacturer": {
                                                "type": "string"
                                            },
                                            "B_Requests1": {
                                                "type": "string"
                                            },
                                            "B_Requests3": {
                                                "type": "string"
                                            },
                                            "Color": {
                                                "type": "string"
                                            },
                                            "B_Requests2": {
                                                "type": "string"
                                            },
                                            "_updatedAt": {
                                                "type": "string"
                                            },
                                            "Alive": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "Quantity": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "_createdAt": {
                                                "type": "string"
                                            },
                                            "Product": {
                                                "type": "string"
                                            },
                                            "Dead": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "B_Requests4": {
                                                "type": "string"
                                            },
                                            "RNotes": {
                                                "type": "string"
                                            },
                                            "_id": {
                                                "type": "string"
                                            },
                                            "B_Requests5": {
                                                "type": "string"
                                            },
                                            "Condition": {
                                                "type": "string"
                                            },
                                            "Memory": {
                                                "type": "string"
                                            },
                                            "Expiration": {
                                                "type": "string"
                                            },
                                            "acl": {
                                                "type": "object",
                                                "properties": {
                                                    "*": {
                                                        "type": "object",
                                                        "properties": {
                                                            "write": {
                                                                "type": "boolean",
                                                                "default": true
                                                            },
                                                            "read": {
                                                                "type": "boolean",
                                                                "default": true
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            "ExpirationDate": {
                                                "type": "string"
                                            }
                                        }
                                    }]
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "RegisterNewUser_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/81fffd25-0907-4729-be39-80e1ad7d3a26/exec"
                },
                "method": {
                    "type": "string",
                    "default": "post"
                },
                "request": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "data"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "username": {
                                    "type": "string"
                                },
                                "ShippingAddress1": {
                                    "type": "string"
                                },
                                "InActive": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string"
                                },
                                "Zip": {
                                    "type": "string"
                                },
                                "ExtraField2": {
                                    "type": "string"
                                },
                                "ResaleNumber": {
                                    "type": "string"
                                },
                                "BusinessPhone": {
                                    "type": "string"
                                },
                                "LastName": {
                                    "type": "string"
                                },
                                "country": {
                                    "type": "string"
                                },
                                "ExtraField3": {
                                    "type": "string"
                                },
                                "ExtraField5": {
                                    "type": "string"
                                },
                                "UserType": {
                                    "type": "string"
                                },
                                "MobilePhone": {
                                    "type": "string"
                                },
                                "Company": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string"
                                },
                                "City": {
                                    "type": "string"
                                },
                                "ExtraField1": {
                                    "type": "string"
                                },
                                "FirstName": {
                                    "type": "string"
                                },
                                "ShippingAddress2": {
                                    "type": "string"
                                },
                                "State": {
                                    "type": "string"
                                },
                                "ExtraField4": {
                                    "type": "string"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string",
                                    "default": "text/plain"
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "body": {
                            "type": "object",
                            "properties": {
                                "$": {
                                    "type": "object",
                                    "properties": {
                                        "UserType": {
                                            "type": "string"
                                        },
                                        "session": {
                                            "type": "string",
                                            "default": "2c807b66-2474-4570-bc6d-b10266923c42"
                                        },
                                        "BusinessPhone": {
                                            "type": "string"
                                        },
                                        "City": {
                                            "type": "string"
                                        },
                                        "Zip": {
                                            "type": "string"
                                        },
                                        "ExtraField1": {
                                            "type": "string"
                                        },
                                        "ExtraField4": {
                                            "type": "string"
                                        },
                                        "ExtraField3": {
                                            "type": "string"
                                        },
                                        "ResaleNumber": {
                                            "type": "string"
                                        },
                                        "ExtraField5": {
                                            "type": "string"
                                        },
                                        "ShippingAddress1": {
                                            "type": "string"
                                        },
                                        "username": {
                                            "type": "string",
                                            "default": "joe1"
                                        },
                                        "ShippingAddress2": {
                                            "type": "string"
                                        },
                                        "MobilePhone": {
                                            "type": "string"
                                        },
                                        "email": {
                                            "type": "string",
                                            "default": "joe@appery.io"
                                        },
                                        "InActive": {
                                            "type": "string"
                                        },
                                        "ExtraField2": {
                                            "type": "string"
                                        },
                                        "LastName": {
                                            "type": "string"
                                        },
                                        "Company": {
                                            "type": "string"
                                        },
                                        "State": {
                                            "type": "string"
                                        },
                                        "country": {
                                            "type": "string",
                                            "default": "USA"
                                        },
                                        "FirstName": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                }
            }
        },
        "PushUpdateDevice": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "_updatedAt": {
                                    "type": "string"
                                },
                                "type": {
                                    "type": "string"
                                },
                                "token": {
                                    "type": "string"
                                },
                                "deviceID": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "_createdAt": {
                                    "type": "string"
                                },
                                "timeZone": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "PushSchedule": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "options": {
                                    "type": "object",
                                    "properties": {
                                        "dryRun": {
                                            "type": "boolean",
                                            "default": null
                                        },
                                        "priority": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "restrictedPackageName": {
                                            "type": "string"
                                        },
                                        "collapseKey": {
                                            "type": "string"
                                        },
                                        "delayWhileIdle": {
                                            "type": "boolean",
                                            "default": null
                                        }
                                    }
                                },
                                "expirationTime": {
                                    "type": "string"
                                },
                                "schedule": {
                                    "type": "object",
                                    "properties": {
                                        "scheduledTime": {
                                            "type": "string"
                                        },
                                        "timeZone": {
                                            "type": "string"
                                        }
                                    }
                                },
                                "filter": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "payload": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        },
                                        "contentAvailable": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "badge": {
                                            "type": "string"
                                        },
                                        "icon": {
                                            "type": "string"
                                        },
                                        "actionButtons": {
                                            "type": "array",
                                            "items": [{
                                                "type": "object",
                                                "properties": {
                                                    "icon": {
                                                        "type": "string"
                                                    },
                                                    "callback": {
                                                        "type": "string"
                                                    },
                                                    "title": {
                                                        "type": "string"
                                                    }
                                                }
                                            }]
                                        },
                                        "color": {
                                            "type": "string"
                                        },
                                        "launchImage": {
                                            "type": "string"
                                        },
                                        "customData": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "title": {
                                            "type": "string"
                                        },
                                        "image": {
                                            "type": "string"
                                        },
                                        "sound": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "payload": {
                                        "type": "object",
                                        "properties": {
                                            "badge": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "launchImage": {
                                                "type": "string"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "sound": {
                                                "type": "string"
                                            },
                                            "contentAvailable": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "title": {
                                                "type": "string"
                                            },
                                            "customData": {
                                                "type": "object",
                                                "properties": {}
                                            },
                                            "icon": {
                                                "type": "string"
                                            },
                                            "color": {
                                                "type": "string"
                                            },
                                            "actionButtons": {
                                                "type": "array",
                                                "items": [{
                                                    "type": "object",
                                                    "properties": {
                                                        "callback": {
                                                            "type": "string"
                                                        },
                                                        "icon": {
                                                            "type": "string"
                                                        },
                                                        "title": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }]
                                            },
                                            "image": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "schedule": {
                                        "type": "object",
                                        "properties": {
                                            "timeZone": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "empty": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "scheduledTimeInTZ": {
                                                "type": "string"
                                            },
                                            "scheduledTime": {
                                                "type": "string"
                                            },
                                            "useDeviceTimeZone": {
                                                "type": "boolean",
                                                "default": null
                                            }
                                        }
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "status": {
                                        "type": "string"
                                    },
                                    "dbId": {
                                        "type": "string"
                                    },
                                    "options": {
                                        "type": "object",
                                        "properties": {
                                            "collapseKey": {
                                                "type": "string"
                                            },
                                            "priority": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "dryRun": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "delayWhileIdle": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "restrictedPackageName": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "errorMessages": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "expirationTime": {
                                        "type": "string"
                                    },
                                    "count": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "filter": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "PushSend": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "options": {
                                    "type": "object",
                                    "properties": {
                                        "dryRun": {
                                            "type": "boolean",
                                            "default": null
                                        },
                                        "priority": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "restrictedPackageName": {
                                            "type": "string"
                                        },
                                        "collapseKey": {
                                            "type": "string"
                                        },
                                        "delayWhileIdle": {
                                            "type": "boolean",
                                            "default": null
                                        }
                                    }
                                },
                                "status": {
                                    "type": "string",
                                    "default": "sent"
                                },
                                "expirationTime": {
                                    "type": "string"
                                },
                                "filter": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "payload": {
                                    "type": "object",
                                    "properties": {
                                        "message": {
                                            "type": "string"
                                        },
                                        "contentAvailable": {
                                            "type": "number",
                                            "default": null
                                        },
                                        "badge": {
                                            "type": "string"
                                        },
                                        "icon": {
                                            "type": "string"
                                        },
                                        "actionButtons": {
                                            "type": "array",
                                            "items": [{
                                                "type": "object",
                                                "properties": {
                                                    "icon": {
                                                        "type": "string"
                                                    },
                                                    "callback": {
                                                        "type": "string"
                                                    },
                                                    "title": {
                                                        "type": "string"
                                                    }
                                                }
                                            }]
                                        },
                                        "color": {
                                            "type": "string"
                                        },
                                        "launchImage": {
                                            "type": "string"
                                        },
                                        "customData": {
                                            "type": "object",
                                            "properties": {}
                                        },
                                        "title": {
                                            "type": "string"
                                        },
                                        "image": {
                                            "type": "string"
                                        },
                                        "sound": {
                                            "type": "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "array",
                            "items": [{
                                "type": "object",
                                "properties": {
                                    "payload": {
                                        "type": "object",
                                        "properties": {
                                            "badge": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "launchImage": {
                                                "type": "string"
                                            },
                                            "message": {
                                                "type": "string"
                                            },
                                            "sound": {
                                                "type": "string"
                                            },
                                            "contentAvailable": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "title": {
                                                "type": "string"
                                            },
                                            "customData": {
                                                "type": "object",
                                                "properties": {}
                                            },
                                            "icon": {
                                                "type": "string"
                                            },
                                            "color": {
                                                "type": "string"
                                            },
                                            "actionButtons": {
                                                "type": "array",
                                                "items": [{
                                                    "type": "object",
                                                    "properties": {
                                                        "callback": {
                                                            "type": "string"
                                                        },
                                                        "icon": {
                                                            "type": "string"
                                                        },
                                                        "title": {
                                                            "type": "string"
                                                        }
                                                    }
                                                }]
                                            },
                                            "image": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "schedule": {
                                        "type": "object",
                                        "properties": {
                                            "timeZone": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "empty": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "scheduledTimeInTZ": {
                                                "type": "string"
                                            },
                                            "scheduledTime": {
                                                "type": "string"
                                            },
                                            "useDeviceTimeZone": {
                                                "type": "boolean",
                                                "default": null
                                            }
                                        }
                                    },
                                    "_id": {
                                        "type": "string"
                                    },
                                    "status": {
                                        "type": "string"
                                    },
                                    "dbId": {
                                        "type": "string"
                                    },
                                    "options": {
                                        "type": "object",
                                        "properties": {
                                            "collapseKey": {
                                                "type": "string"
                                            },
                                            "priority": {
                                                "type": "number",
                                                "default": null
                                            },
                                            "dryRun": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "delayWhileIdle": {
                                                "type": "boolean",
                                                "default": null
                                            },
                                            "restrictedPackageName": {
                                                "type": "string"
                                            }
                                        }
                                    },
                                    "errorMessages": {
                                        "type": "object",
                                        "properties": {}
                                    },
                                    "expirationTime": {
                                        "type": "string"
                                    },
                                    "count": {
                                        "type": "number",
                                        "default": null
                                    },
                                    "filter": {
                                        "type": "string"
                                    }
                                }
                            }]
                        }
                    }
                }
            }
        },
        "PushRegisterDevice": {
            "type": "object",
            "properties": {
                "request": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {}
                        }
                    }
                },
                "response": {
                    "type": "object",
                    "properties": {
                        "data": {
                            "type": "object",
                            "properties": {
                                "type": {
                                    "type": "string"
                                },
                                "_updatedAt": {
                                    "type": "string"
                                },
                                "_createdAt": {
                                    "type": "string"
                                },
                                "timeZone": {
                                    "type": "string"
                                },
                                "_id": {
                                    "type": "string"
                                },
                                "token": {
                                    "type": "string"
                                },
                                "deviceID": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    return models;
});