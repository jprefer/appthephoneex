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
                        "request_id3": {
                            "type": "string"
                        },
                        "request_id2": {
                            "type": "string"
                        },
                        "request_id": {
                            "type": "string"
                        },
                        "request_id5": {
                            "type": "string"
                        },
                        "order_id": {
                            "type": "string"
                        },
                        "request_id6": {
                            "type": "string"
                        },
                        "whereami": {
                            "type": "string"
                        },
                        "request_id4": {
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
        "sq_defaultCC_prod_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/8db4bdbc-cb2e-440a-9f07-5bdee3ea6d8e/exec"
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
                                "sqCCOF": {
                                    "type": "string",
                                    "default": "ccof:yNYzbEZ9ggBh9HoR4GB"
                                },
                                "sqCust": {
                                    "type": "string",
                                    "default": "Y5HG3G31XCRHN8DQPFK90MZV40"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "a97a46d3-7b9b-4456-8b41-4056d4be4ad0"
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
        "sq_defaultCC_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/0fff38e6-c55a-4d7e-9053-e66dca61927c/exec"
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
                                "sqCust": {
                                    "type": "string",
                                    "default": "9VQAMJQH7CWAD72YPHPBQGP9BR"
                                },
                                "sqCCOF": {
                                    "type": "string",
                                    "default": "ccof:e7IjAnmqGQWL0nZ73GB"
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
                                        "id": {
                                            "type": "string",
                                            "default": "ccof:e7IjAnmqGQWL0nZ73GB"
                                        },
                                        "last_4": {
                                            "type": "string",
                                            "default": "1111"
                                        },
                                        "exp_month": {
                                            "type": "number",
                                            "default": 11
                                        },
                                        "exp_year": {
                                            "type": "number",
                                            "default": 2022
                                        },
                                        "card_brand": {
                                            "type": "string",
                                            "default": "VISA"
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
        "sq_DeleteCard_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/614a2f6a-2b7b-412d-9f9f-89c0d6485959/exec"
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
                                "sqCCOF": {
                                    "type": "string",
                                    "default": "ccof:yLLNTuW7M9Jv5EaK3GB"
                                },
                                "sqCust": {
                                    "type": "string",
                                    "default": "9VQAMJQH7CWAD72YPHPBQGP9BR"
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
                                    "default": "61b89378-668c-4137-88f4-4474caed616f"
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
        "Seller_Accepted_Seller_Orders_NotShipped_Count_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/6192a1f2-68b5-415b-890c-2a141b6cd7a5/exec"
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
                                    "default": "66f58c49-e299-43f8-88f2-4f6a0c03e56f"
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
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "count": {
                                                "type": "number",
                                                "default": 2
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
        "sq_DeleteCard_prod_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/4c7d6a4c-db4a-483a-9823-6072617cc654/exec"
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
                                "sqCCOF": {
                                    "type": "string",
                                    "default": "ccof:yLLNTuW7M9Jv5EaK3GB"
                                },
                                "sqCust": {
                                    "type": "string",
                                    "default": "9VQAMJQH7CWAD72YPHPBQGP9BR"
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
        "SendEmailforEscrow_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/b718ee58-002b-4573-8f0a-6be4bc36a055/exec"
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
                                "user_email": {
                                    "type": "string",
                                    "default": "jprefer@gmail.com"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "a26f5635-edf2-461a-a317-5a9dfcba45f7"
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
        "get_CCOF_fromDataBase_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/f62b4757-504f-4e2f-925e-04b8f2a295fe/exec"
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
                                    "default": "sqCCOF"
                                }
                            }
                        },
                        "query": {
                            "type": "object",
                            "properties": {
                                "user_profile_id": {
                                    "type": "string",
                                    "default": "5f286a19ceb78b0db16cc6d3"
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
                                    "default": "38bf7075-c17a-420d-90eb-dd52a778862b"
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
                                        "ShippingAddress1": {
                                            "type": "string",
                                            "default": "123 Main Street"
                                        },
                                        "country": {
                                            "type": "string",
                                            "default": "US"
                                        },
                                        "_updatedAt": {
                                            "type": "object",
                                            "properties": {
                                                "$date": {
                                                    "type": "string",
                                                    "default": "2020-08-03T19:59:45.615Z"
                                                }
                                            }
                                        },
                                        "email": {
                                            "type": "string",
                                            "default": "jprefer@gmail.com"
                                        },
                                        "defaultPayMethod": {
                                            "type": "string",
                                            "default": "creditcard"
                                        },
                                        "username": {
                                            "type": "string",
                                            "default": "johnprefer6"
                                        },
                                        "_id": {
                                            "type": "string",
                                            "default": "5f286a19ceb78b0db16cc6d3"
                                        },
                                        "acl": {
                                            "type": "object",
                                            "properties": {
                                                "5f286a19ceb78b0db16cc6d0": {
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
                                        "EmailVer": {
                                            "type": "boolean",
                                            "default": false
                                        },
                                        "MobilePhone": {
                                            "type": "string",
                                            "default": "+15616998998"
                                        },
                                        "TextOn": {
                                            "type": "boolean",
                                            "default": true
                                        },
                                        "LastName": {
                                            "type": "string",
                                            "default": "IIIII"
                                        },
                                        "_createdAt": {
                                            "type": "object",
                                            "properties": {
                                                "$date": {
                                                    "type": "string",
                                                    "default": "2020-08-03T19:48:41.261Z"
                                                }
                                            }
                                        },
                                        "defaultPayFee": {
                                            "type": "number",
                                            "default": 0.03
                                        },
                                        "sqCustID": {
                                            "type": "string",
                                            "default": "1TD9BEKBEWYWV9CZ72S4Z506D4"
                                        },
                                        "TextVer": {
                                            "type": "boolean",
                                            "default": false
                                        },
                                        "City": {
                                            "type": "string",
                                            "default": "Miami Beach"
                                        },
                                        "ResaleNumber": {
                                            "type": "string",
                                            "default": "FL12312321"
                                        },
                                        "UserType": {
                                            "type": "string",
                                            "default": "B"
                                        },
                                        "Zip": {
                                            "type": "string",
                                            "default": "11420"
                                        },
                                        "Active": {
                                            "type": "boolean",
                                            "default": true
                                        },
                                        "BusinessPhone": {
                                            "type": "string",
                                            "default": " "
                                        },
                                        "Company": {
                                            "type": "string",
                                            "default": "Sct"
                                        },
                                        "State": {
                                            "type": "string",
                                            "default": "NY"
                                        },
                                        "ShippingAddress2": {
                                            "type": "string",
                                            "default": "450"
                                        },
                                        "sqCCOF": {
                                            "type": "string",
                                            "default": "ccof:o6zEPeA2q81QrdKC4GB"
                                        },
                                        "FirstName": {
                                            "type": "string",
                                            "default": "HHHH"
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
        "BuyerBank_UpdateAvailable_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/b3e4d9e2-b33e-42a1-8567-75a519e52334/exec"
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
                                },
                                "tranAmt": {
                                    "type": "string",
                                    "default": "450"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "003cede9-845f-4ec1-8fd9-89182a571972"
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
        "GetEscrowTranactions_user_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/dcc1a14d-630c-4164-80c3-bd2b2a03be88/exec"
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
                                    "default": "a26f5635-edf2-461a-a317-5a9dfcba45f7"
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
        "getMenu1_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/2d47ea5e-a8b2-44be-94bf-f4c55a36f235/exec"
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
        "UpdatePasswordGetCode_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/5a8d1687-9b6a-4727-8ea6-e0d7a3e58bf6/exec"
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
                                        "message": {
                                            "type": "string",
                                            "default": "An email with the recovery code has been sent to you. Please follow the instructions to reset your password"
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
        "getMenu2_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/9f568528-9a5b-4918-81e8-f3f1227cad23/exec"
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
        "SquarePayment_usingAPIExpress_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/4fa9e35e-dcb4-48df-9cfd-3cd08677ad64/exec"
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
                                "autoComplete": {
                                    "type": "string",
                                    "default": "true"
                                },
                                "referenceID": {
                                    "type": "string",
                                    "default": "requestID"
                                },
                                "currency": {
                                    "type": "string",
                                    "default": "USD"
                                },
                                "statementIdent": {
                                    "type": "string",
                                    "default": "PhoneEx-Req:005"
                                },
                                "amount": {
                                    "type": "string",
                                    "default": "42"
                                },
                                "acceptPartial": {
                                    "type": "string",
                                    "default": "false"
                                },
                                "sourceID": {
                                    "type": "string",
                                    "default": "ccof:customer-card-id-ok"
                                },
                                "idempotKey": {
                                    "type": "string",
                                    "default": "121212121f"
                                },
                                "customerID": {
                                    "type": "string",
                                    "default": "81V7MDGV3CZ0377J23TB9RTCXG"
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
        "Buyer_Home_Shipped_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/d678a912-5b9e-4510-ae72-5d335f5b1ade/exec"
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
                                    "default": "3ee6df93-e570-4c1f-85a6-f46fa816fc2e"
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
                                    "default": "3f47d997-2e8d-412f-8fcd-3bc198de571e"
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
        "sq_Update_Ccof_inUser_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/d4227921-0c38-462c-a611-a1e39c773cff/exec"
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
                                "NewCCOF": {
                                    "type": "string",
                                    "default": "dcof:4CPCXSgs1lPqLCqB4GB"
                                },
                                "userProfile_id": {
                                    "type": "string",
                                    "default": "5f2087966b513f0f3844c432"
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
                                    "default": "6d1a2e48-6f6d-4212-9859-b04e601bebd4"
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
        "sq_InsertPayment_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/38ec0f5b-132f-42d0-a933-4b27df996504/exec"
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
                                "sqErrorcategory": {
                                    "type": "string"
                                },
                                "sqExpmonth": {
                                    "type": "string"
                                },
                                "sqDelayuntil": {
                                    "type": "string"
                                },
                                "sqUrl": {
                                    "type": "string"
                                },
                                "sqBin": {
                                    "type": "string"
                                },
                                "sqCurr": {
                                    "type": "string"
                                },
                                "sqReponseCode": {
                                    "type": "string"
                                },
                                "sqStateDesc": {
                                    "type": "string"
                                },
                                "sqLast4": {
                                    "type": "string"
                                },
                                "sqCardbrand": {
                                    "type": "string"
                                },
                                "sqCreatedat": {
                                    "type": "string"
                                },
                                "sqFingerprint": {
                                    "type": "string"
                                },
                                "sqPaymentid": {
                                    "type": "string"
                                },
                                "sqExpyear": {
                                    "type": "string"
                                },
                                "sqErrordetail": {
                                    "type": "string"
                                },
                                "sqRefid": {
                                    "type": "string"
                                },
                                "sqAvsstatus": {
                                    "type": "string"
                                },
                                "sqErrorccode": {
                                    "type": "string"
                                },
                                "sqReceiptnum": {
                                    "type": "string"
                                },
                                "sqStatedescid": {
                                    "type": "string"
                                },
                                "sqPrepaidtype": {
                                    "type": "string"
                                },
                                "sqDelayAction": {
                                    "type": "string"
                                },
                                "sqTotalmoneycurr": {
                                    "type": "string"
                                },
                                "sqUpdatedat": {
                                    "type": "string"
                                },
                                "sqTotalmoneyamt": {
                                    "type": "string"
                                },
                                "sqStatus": {
                                    "type": "string"
                                },
                                "sqEntrymethod": {
                                    "type": "string"
                                },
                                "sqCvvstatus": {
                                    "type": "string"
                                },
                                "sqCardtype": {
                                    "type": "string"
                                },
                                "BuyerUserName": {
                                    "type": "string"
                                },
                                "sqLocalid": {
                                    "type": "string"
                                },
                                "sqOrderid": {
                                    "type": "string"
                                },
                                "sqCustid": {
                                    "type": "string"
                                },
                                "sqAmount": {
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
        "update_Profile_BusinessPhone_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/b051b4ef-5fd2-48ca-b8cf-27ab7ddb1331/exec"
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
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "4094e449-7f53-4a2e-a884-5b224f3779d2"
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
        "updatePaymentType_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/28cfbd6d-6747-4bb3-b890-8eae4e27aa8c/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "creditcard"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
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
        "Update_UserPassword_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/3c1442f5-be1d-4610-806b-d7627859a913/exec"
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
                                "newPassword": {
                                    "type": "string",
                                    "default": "john1"
                                },
                                "secretCode": {
                                    "type": "string",
                                    "default": "1112"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "johnpr"
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
                                        "message": {
                                            "type": "string",
                                            "default": "Your pasword was successfully changed. A confirmation email has been sent to you"
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
        "update_Profile_Resale_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/153373cd-d972-4d2a-aa39-5a64537990cc/exec"
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
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
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
                                    "default": "675744d7-ab70-4f55-a246-c0a5f43d64ec"
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
        "update_Profile_City_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/6e706ef5-2ab4-4778-b293-71fd2ddb8a92/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "3540d71c-e6df-4760-91e0-b990776d3155"
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
        "update_Profile_Zip_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/71be4bfa-068c-4c02-aabe-6245d60652fc/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "675744d7-ab70-4f55-a246-c0a5f43d64ec"
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
        "update_Profile_State_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/bb39c1a7-dce1-4f15-a075-e4c4a0406bd1/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "675744d7-ab70-4f55-a246-c0a5f43d64ec"
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
        "RegisterNewUser_prod_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/0668aed3-f620-4ac4-bda6-ed9d36238ee9/exec"
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
                                "Zip": {
                                    "type": "string",
                                    "default": "33139"
                                },
                                "ExtraField1": {
                                    "type": "string"
                                },
                                "ExtraField3": {
                                    "type": "string"
                                },
                                "email": {
                                    "type": "string",
                                    "default": "jprefer@gmail.com"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "pencil12345"
                                },
                                "ExtraField4": {
                                    "type": "string"
                                },
                                "ExtraField5": {
                                    "type": "string"
                                },
                                "password": {
                                    "type": "string",
                                    "default": "Duece"
                                },
                                "InActive": {
                                    "type": "string"
                                },
                                "ActCode": {
                                    "type": "string",
                                    "default": "S3864"
                                },
                                "City": {
                                    "type": "string",
                                    "default": "Miami Beach"
                                },
                                "State": {
                                    "type": "string",
                                    "default": "FL"
                                },
                                "UserType": {
                                    "type": "string"
                                },
                                "BusinessPhone": {
                                    "type": "string",
                                    "default": "5613954905"
                                },
                                "ShippingAddress1": {
                                    "type": "string",
                                    "default": "1228 West Ave"
                                },
                                "ExtraField2": {
                                    "type": "string"
                                },
                                "ResaleNumber": {
                                    "type": "string",
                                    "default": "1231231234"
                                },
                                "LastName": {
                                    "type": "string",
                                    "default": "Prefer"
                                },
                                "Company": {
                                    "type": "string",
                                    "default": "SCT"
                                },
                                "ShippingAddress2": {
                                    "type": "string",
                                    "default": "1010"
                                },
                                "FirstName": {
                                    "type": "string",
                                    "default": "John"
                                },
                                "MobilePhone": {
                                    "type": "string",
                                    "default": "5616998998"
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
        "Square_payments_Pay_using_ccof_prod_post": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/payments/Pay_using_ccof_prod"
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
                                "source_id": {
                                    "type": "string",
                                    "default": "ccof:customer-card-id-ok"
                                },
                                "customer_id": {
                                    "type": "string",
                                    "default": "E9P8KRH7J0Z2N98EVE3KXV4K9G"
                                },
                                "accept_partial_authorization": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "autocomplete": {
                                    "type": "boolean",
                                    "default": true
                                },
                                "reference_id": {
                                    "type": "string",
                                    "default": "orderId goes here"
                                },
                                "statement_description_identifier": {
                                    "type": "string",
                                    "default": "order:ABCD"
                                },
                                "idempotency_key": {
                                    "type": "string",
                                    "default": "956ae8c-839a-474b-8975-ff245663f40a"
                                },
                                "location_id": {
                                    "type": "string",
                                    "default": "MEWPDBNFQF79S"
                                },
                                "amount_money": {
                                    "type": "object",
                                    "properties": {
                                        "currency": {
                                            "type": "string",
                                            "default": "USD"
                                        },
                                        "amount": {
                                            "type": "number",
                                            "default": 1500
                                        }
                                    }
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
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{Square_settings.API_EXPRESS_API_KEY}"
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
                                "HTTP_RESPONSE_HEADERS": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "BODY": {
                                    "type": "object",
                                    "properties": {}
                                },
                                "HTTP_RESPONSE_CODE": {
                                    "type": "number",
                                    "default": 200
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "sq_RetrieveCustomer_CCOF_prod_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/e8ddb071-023f-4985-9972-443891fef389/exec"
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
                                "sqCust": {
                                    "type": "string",
                                    "default": "Y5HG3G31XCRHN8DQPFK90MZV40"
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
                                    "default": "61b89378-668c-4137-88f4-4474caed616f"
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
        "update_Profile_FirstName_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/fa4b6ea7-802e-4e80-8b67-f2d32fb706f3/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "3540d71c-e6df-4760-91e0-b990776d3155"
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
        "BuyerBank_GetAvailable_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/48f78e51-0b12-401a-8d85-f6b36ee49059/exec"
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
                                    "default": "tony"
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
                                    "default": "003cede9-845f-4ec1-8fd9-89182a571972"
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
        "update_Profile_LastName_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/cc5d70b6-e962-4fce-8af9-91e1c37b0bb0/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "3540d71c-e6df-4760-91e0-b990776d3155"
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
        "sq_RetrieveCustomer_CCOF_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/2e43863c-9652-4bd7-b792-d11c136d953f/exec"
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
                                "sqCust": {
                                    "type": "string",
                                    "default": "68DGPJ22M96YZE2HFBZV20JZDW"
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
        "update_Profile_ShippingAddress1_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/3864e47a-8c32-4dbd-b5a7-29aabef79895/exec"
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
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "b54e7359-5684-4454-9751-7d57463d2ad5"
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
        "Get_user_id_profileId_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/d63c9ecf-cc8d-41c1-ad25-73bf1ddc8e13/exec"
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
                                        "body": {
                                            "type": "array",
                                            "items": [{
                                                "type": "object",
                                                "properties": {
                                                    "_updatedAt": {
                                                        "type": "string",
                                                        "default": "2020-07-02 18:05:15.288"
                                                    },
                                                    "_id": {
                                                        "type": "string",
                                                        "default": "5e337991b56b5d0a94db6aa3"
                                                    },
                                                    "toProfile": {
                                                        "type": "object",
                                                        "properties": {
                                                            "collName": {
                                                                "type": "string",
                                                                "default": "UserProfile"
                                                            },
                                                            "_id": {
                                                                "type": "string",
                                                                "default": "5e337992b56b5d0a94db6aa5"
                                                            }
                                                        }
                                                    },
                                                    "_createdAt": {
                                                        "type": "string",
                                                        "default": "2020-01-31 00:49:21.888"
                                                    },
                                                    "mobile": {
                                                        "type": "string",
                                                        "default": "+15616998998"
                                                    },
                                                    "acl": {
                                                        "type": "object",
                                                        "properties": {
                                                            "5e337991b56b5d0a94db6aa3": {
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
                                                    "username": {
                                                        "type": "string",
                                                        "default": "john"
                                                    },
                                                    "secret_code": {
                                                        "type": "string",
                                                        "default": "153228"
                                                    },
                                                    "emailU": {
                                                        "type": "string",
                                                        "default": "jprefer@gmail.com"
                                                    }
                                                }
                                            }]
                                        },
                                        "headers": {
                                            "type": "object",
                                            "properties": {
                                                "Date": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "string",
                                                        "default": "Mon, 20 Jul 2020 15:36:51 GMT"
                                                    }]
                                                },
                                                "Server": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "string",
                                                        "default": "nginx"
                                                    }]
                                                },
                                                "Connection": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "string",
                                                        "default": "keep-alive"
                                                    }]
                                                },
                                                "Content-Type": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "string",
                                                        "default": "application/json"
                                                    }]
                                                },
                                                "Transfer-Encoding": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "string",
                                                        "default": "chunked"
                                                    }]
                                                },
                                                "Strict-Transport-Security": {
                                                    "type": "array",
                                                    "items": [{
                                                        "type": "string",
                                                        "default": "max-age=15768000"
                                                    }]
                                                }
                                            }
                                        },
                                        "status": {
                                            "type": "number",
                                            "default": 200
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
        "update_Profile_ShippingAddress2_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/eba32a2b-be23-4f95-938c-1873efd1d1ad/exec"
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
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
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
                                    "default": "b54e7359-5684-4454-9751-7d57463d2ad5"
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
        "Seller_Filtered_Home_Seller_Filtered_Requests_Model_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/617a9478-0ebd-426c-b110-a7b28205b152/exec"
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
                                "company": {
                                    "type": "string",
                                    "default": "Samsung"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "johnp"
                                },
                                "product": {
                                    "type": "string",
                                    "default": "Galaxy Tab S 10.5"
                                },
                                "type": {
                                    "type": "string",
                                    "default": "Tablet"
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
                                    "default": "385e8acd-fed6-4f82-82ce-bb0f55a7c823"
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
        "Seller_Filtered_Home_Seller_Filtered_Requests_Company_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/f72d7dd0-7021-4349-9f93-3a8048cb34d8/exec"
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
                                },
                                "company": {
                                    "type": "string",
                                    "default": "Samsung"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "385e8acd-fed6-4f82-82ce-bb0f55a7c823"
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
        "BuyerBank_GetAvailable_tBank_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/cd2e9e2e-cc2b-40ba-a6b6-728b95c0c593/exec"
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
                                    "default": "tony"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "a5957d6e-b101-46e5-9939-22adb6b0d6c9"
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
                                    "type": "array",
                                    "items": [{
                                        "type": "object",
                                        "properties": {
                                            "EscrowAmt": {
                                                "type": "number",
                                                "default": 5000
                                            },
                                            "username": {
                                                "type": "string",
                                                "default": "tony"
                                            },
                                            "_id": {
                                                "type": "string",
                                                "default": "5efb69302e22d7088c99b848"
                                            },
                                            "_updatedAt": {
                                                "type": "object",
                                                "properties": {
                                                    "$date": {
                                                        "type": "string",
                                                        "default": "2020-06-30T16:32:51.755Z"
                                                    }
                                                }
                                            },
                                            "_createdAt": {
                                                "type": "object",
                                                "properties": {
                                                    "$date": {
                                                        "type": "string",
                                                        "default": "2020-06-30T16:32:48.868Z"
                                                    }
                                                }
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
        "Square_payments_Pay_using_ccof_post": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/apiexpress/api/payments/Pay_using_ccof"
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
                                "source_id": {
                                    "type": "string",
                                    "default": "ccof:customer-card-id-bad"
                                },
                                "autocomplete": {
                                    "type": "boolean",
                                    "default": true
                                },
                                "idempotency_key": {
                                    "type": "string",
                                    "default": "956ae8c-839a-474b-8975-ff245663f40a"
                                },
                                "customer_id": {
                                    "type": "string",
                                    "default": "E9P8KRH7J0Z2N98EVE3KXV4K9G"
                                },
                                "amount_money": {
                                    "type": "object",
                                    "properties": {
                                        "amount": {
                                            "type": "number",
                                            "default": 1500
                                        },
                                        "currency": {
                                            "type": "string",
                                            "default": "USD"
                                        }
                                    }
                                },
                                "accept_partial_authorization": {
                                    "type": "boolean",
                                    "default": false
                                },
                                "reference_id": {
                                    "type": "string",
                                    "default": "orderId goes here"
                                },
                                "statement_description_identifier": {
                                    "type": "string",
                                    "default": "order:ABCD"
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
                                "X-Appery-Api-Express-Api-Key": {
                                    "type": "string",
                                    "default": "{Square_settings.API_EXPRESS_API_KEY}"
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
                                "BODY": {
                                    "type": "object",
                                    "properties": {
                                        "payment": {
                                            "type": "object",
                                            "properties": {
                                                "reference_id": {
                                                    "type": "string",
                                                    "default": "orderId goes here"
                                                },
                                                "id": {
                                                    "type": "string",
                                                    "default": "vhh6YtnxRfqRNJb1bthW5kkx5x8YY"
                                                },
                                                "delay_action": {
                                                    "type": "string",
                                                    "default": "CANCEL"
                                                },
                                                "order_id": {
                                                    "type": "string",
                                                    "default": "s88UCp88bT1k16lZ35qZEF0gtl9YY"
                                                },
                                                "card_details": {
                                                    "type": "object",
                                                    "properties": {
                                                        "cvv_status": {
                                                            "type": "string",
                                                            "default": "CVV_ACCEPTED"
                                                        },
                                                        "status": {
                                                            "type": "string",
                                                            "default": "CAPTURED"
                                                        },
                                                        "statement_description": {
                                                            "type": "string",
                                                            "default": "SQ *DEFAULT TEST ACCOUNT"
                                                        },
                                                        "entry_method": {
                                                            "type": "string",
                                                            "default": "ON_FILE"
                                                        },
                                                        "card": {
                                                            "type": "object",
                                                            "properties": {
                                                                "exp_year": {
                                                                    "type": "number",
                                                                    "default": 2022
                                                                },
                                                                "bin": {
                                                                    "type": "string",
                                                                    "default": "371263"
                                                                },
                                                                "prepaid_type": {
                                                                    "type": "string",
                                                                    "default": "NOT_PREPAID"
                                                                },
                                                                "fingerprint": {
                                                                    "type": "string",
                                                                    "default": "sq-1-ppm8xzkrh0t006nkam2ZlTDurzAn-J09xpPd0a7mgVTAjTVWiwiygniYH7Y95Mtmhw"
                                                                },
                                                                "card_brand": {
                                                                    "type": "string",
                                                                    "default": "AMERICAN_EXPRESS"
                                                                },
                                                                "last_4": {
                                                                    "type": "string",
                                                                    "default": "6550"
                                                                },
                                                                "exp_month": {
                                                                    "type": "number",
                                                                    "default": 1
                                                                },
                                                                "card_type": {
                                                                    "type": "string",
                                                                    "default": "CREDIT"
                                                                }
                                                            }
                                                        },
                                                        "avs_status": {
                                                            "type": "string",
                                                            "default": "AVS_ACCEPTED"
                                                        }
                                                    }
                                                },
                                                "statement_description_identifier": {
                                                    "type": "string",
                                                    "default": "order:ABCD"
                                                },
                                                "location_id": {
                                                    "type": "string",
                                                    "default": "95E4G0AEMS0ZG"
                                                },
                                                "delay_duration": {
                                                    "type": "string",
                                                    "default": "PT168H"
                                                },
                                                "customer_id": {
                                                    "type": "string",
                                                    "default": "E9P8KRH7J0Z2N98EVE3KXV4K9G"
                                                },
                                                "receipt_number": {
                                                    "type": "string",
                                                    "default": "vhh6"
                                                },
                                                "receipt_url": {
                                                    "type": "string",
                                                    "default": "https://squareupsandbox.com/receipt/preview/vhh6YtnxRfqRNJb1bthW5kkx5x8YY"
                                                },
                                                "status": {
                                                    "type": "string",
                                                    "default": "COMPLETED"
                                                },
                                                "source_type": {
                                                    "type": "string",
                                                    "default": "CARD"
                                                },
                                                "amount_money": {
                                                    "type": "object",
                                                    "properties": {
                                                        "amount": {
                                                            "type": "number",
                                                            "default": 1500
                                                        },
                                                        "currency": {
                                                            "type": "string",
                                                            "default": "USD"
                                                        }
                                                    }
                                                },
                                                "total_money": {
                                                    "type": "object",
                                                    "properties": {
                                                        "amount": {
                                                            "type": "number",
                                                            "default": 1500
                                                        },
                                                        "currency": {
                                                            "type": "string",
                                                            "default": "USD"
                                                        }
                                                    }
                                                },
                                                "delayed_until": {
                                                    "type": "string",
                                                    "default": "2020-05-21T21:50:28.642Z"
                                                },
                                                "updated_at": {
                                                    "type": "string",
                                                    "default": "2020-05-14T21:50:28.796Z"
                                                },
                                                "created_at": {
                                                    "type": "string",
                                                    "default": "2020-05-14T21:50:28.642Z"
                                                }
                                            }
                                        }
                                    }
                                },
                                "HTTP_RESPONSE_HEADERS": {
                                    "type": "object",
                                    "properties": {
                                        "X-Frame-Options": {
                                            "type": "string",
                                            "default": "DENY"
                                        },
                                        "Vary": {
                                            "type": "string",
                                            "default": "Accept-Encoding, User-Agent"
                                        },
                                        "X-Xss-Protection": {
                                            "type": "string",
                                            "default": "1; mode=block"
                                        },
                                        "Content-Type": {
                                            "type": "string",
                                            "default": "application/json"
                                        },
                                        "Squareup--Connect--V2--Common--Versionmetadata-Bin": {
                                            "type": "string",
                                            "default": "CgoyMDIwLTA0LTIy"
                                        },
                                        "Date": {
                                            "type": "string",
                                            "default": "Thu, 14 May 2020 21:52:33 GMT"
                                        },
                                        "Frame-Options": {
                                            "type": "string",
                                            "default": "DENY"
                                        },
                                        "Strict-Transport-Security": {
                                            "type": "string",
                                            "default": "max-age=631152000; includeSubDomains; preload"
                                        },
                                        "X-Content-Type-Options": {
                                            "type": "string",
                                            "default": "nosniff"
                                        },
                                        "Square-Version": {
                                            "type": "string",
                                            "default": "2020-04-22"
                                        },
                                        "Transfer-Encoding": {
                                            "type": "string",
                                            "default": "chunked"
                                        }
                                    }
                                },
                                "HTTP_RESPONSE_CODE": {
                                    "type": "number",
                                    "default": 200
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "Content-Type": {
                                    "type": "string"
                                }
                            }
                        }
                    }
                }
            }
        },
        "Seller_Filtered_Home_Seller_Filtered_Requests_Type_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/2e982f36-d59a-4ff7-9510-7de4ec639254/exec"
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
                                "company": {
                                    "type": "string",
                                    "default": "Samsung"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "johnp"
                                },
                                "type": {
                                    "type": "string",
                                    "default": "Tablet"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "385e8acd-fed6-4f82-82ce-bb0f55a7c823"
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
        "update_Profile_Password_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/20879620-bb9f-4ce0-b4dd-504bad49b273/exec"
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
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
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
        "update_Profile_Company_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/ce592ade-eedf-4f00-986e-0e9b6ae1fa18/exec"
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
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "123"
                                }
                            }
                        },
                        "headers": {
                            "type": "object",
                            "properties": {
                                "X-Appery-Session-Token": {
                                    "type": "string",
                                    "default": "e0324021-5c9a-4cf4-867a-4a22a4175c5c"
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
        "getMenu3_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/54e0f8e8-1573-430e-9daf-3ee89e68110f/exec"
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
        "getMenu4_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/336fd32b-c515-4324-a732-74d05208dfc3/exec"
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
        "getMenu5_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/a8afecb4-0774-413f-b827-e73d0fc2e889/exec"
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
        "enterComment_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/16f35b90-e18e-4f91-995d-37431293b5dd/exec"
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
                                "comment": {
                                    "type": "string",
                                    "default": "Testing the comment section"
                                },
                                "email": {
                                    "type": "string",
                                    "default": "jprefer@gmail.com"
                                },
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
                                    "default": "2b777136-7ce0-42fe-b115-a3ac34b00bd7"
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
        "update_Profile_Mobile_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/f45c74ed-0dec-4471-a980-32b37df7f2de/exec"
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
                                "textOn": {
                                    "type": "string",
                                    "default": "true"
                                },
                                "changeField": {
                                    "type": "string",
                                    "default": "9999999999"
                                },
                                "username": {
                                    "type": "string",
                                    "default": "john"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
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
                                    "default": "2b777136-7ce0-42fe-b115-a3ac34b00bd7"
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
        "update_Profile_Email_service": {
            "type": "object",
            "properties": {
                "url": {
                    "type": "string",
                    "default": "https://api.appery.io/rest/1/code/e5058480-222f-43d6-858f-482961619460/exec"
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
                                "changeField": {
                                    "type": "string",
                                    "default": "jprefer@gmail.com"
                                },
                                "profile_id": {
                                    "type": "string",
                                    "default": "5e337992b56b5d0a94db6aa5"
                                },
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