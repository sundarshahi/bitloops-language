# https://docs.google.com/spreadsheets/d/1TJ72x9lr9057NRT4dpw_NHwguUys3934S3huDvpEpmM/edit#gid=0
Feature: Router Definition

        Scenario Template: Valid Router Definitions
        Given A valid Router Definition <blString> string
        When I generate the model
        Then I should get <output>

   # Examples: # @bitloops-auto-generated
       # | blString | output | @bitloops-auto-generated |
       # | const helloWorldRESTRouter = RESTRouter(REST.Fastify) {    Get('/hello1'): [Bounded Context][Module]HelloWorldController();  } | {    "setup":{       "routers":{          "REST.Fastify":{             "helloWorldRESTRouter":{                "methodURLMap":{                   "GET /hello1":{                      "controllerClass":"HelloWorldController",                      "boundedContext":"Bounded Context",                      "module":"Module"                   }                }             }          }       }    },    "controllers":{       "Bounded Context":{          "Module":{             "HelloWorldController":{                "method":"GET",                "instances":[                   {                      "url":"/hello1",                      "controllerInstance":"helloWorldController",                      "dependencies":[                                               ]                   }                ]             }          }       }    } } | @bitloops-auto-generated |
       # | const helloWorldRESTRouter = RESTRouter(REST.Fastify) {    Get('/hello1'): [Bounded Context1][Module]HelloWorldController(myUseCase);  } | {   "setup": {     "routers": {       "REST.Fastify": {         "helloWorldRESTRouter": {           "methodURLMap": {             "GET /hello1": {               "controllerClass": "HelloWorldController",               "boundedContext": "Bounded Context1",               "module": "Module"             }           }         }       }     }   },   "controllers": {     "Bounded Context1": {       "Module": {         "HelloWorldController": {           "method": "GET",           "instances": [             {               "url": "/hello1",               "controllerInstance": "helloWorldController",               "dependencies": [                 "myUseCase"               ]             }           ]         }       }     }   } } | @bitloops-auto-generated |
       # | const helloWorldRESTRouter = RESTRouter(REST.Express) {   Get('/hello1'): [Bounded Context][Module]HelloWorldController();   Post('/hello2'): [Hello World][My Module2]HelloWorld2Controller(); } | {   "setup": {     "routers": {       "REST.Express": {         "helloWorldRESTRouter": {           "methodURLMap": {             "GET /hello1": {               "controllerClass": "HelloWorldController",               "boundedContext": "Bounded Context",               "module": "Module"             },             "POST /hello2": {               "controllerClass": "HelloWorld2Controller",               "boundedContext": "Hello World",               "module": "My Module2"             }           }         }       }     }   },   "controllers": {     "Bounded Context": {       "Module": {         "HelloWorldController": {           "method": "GET",           "instances": [             {               "url": "/hello1",               "controllerInstance": "helloWorldController",               "dependencies": []             }           ]         }       }     },     "Hello World": {       "My Module2": {         "HelloWorld2Controller": {           "method": "POST",           "instances": [             {               "url": "/hello2",               "controllerInstance": "helloWorld2Controller",               "dependencies": []             }           ]         }       }     }   } } | @bitloops-auto-generated |
  
    Examples: # @bitloops-auto-generated
        | blString | output | @bitloops-auto-generated |
        | 99,111,110,115,116,32,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,32,61,32,82,69,83,84,82,111,117,116,101,114,40,82,69,83,84,46,70,97,115,116,105,102,121,41,32,123,32,10,32,32,71,101,116,40,39,47,104,101,108,108,111,49,39,41,58,32,91,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,93,91,77,111,100,117,108,101,93,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,40,41,59,32,10,125 | 123,10,32,32,32,34,115,101,116,117,112,34,58,123,10,32,32,32,32,32,32,34,114,111,117,116,101,114,115,34,58,123,10,32,32,32,32,32,32,32,32,32,34,82,69,83,84,46,70,97,115,116,105,102,121,34,58,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,34,58,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,85,82,76,77,97,112,34,58,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,71,69,84,32,47,104,101,108,108,111,49,34,58,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,67,108,97,115,115,34,58,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,98,111,117,110,100,101,100,67,111,110,116,101,120,116,34,58,34,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,111,100,117,108,101,34,58,34,77,111,100,117,108,101,34,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,125,44,10,32,32,32,34,99,111,110,116,114,111,108,108,101,114,115,34,58,123,10,32,32,32,32,32,32,34,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,34,58,123,10,32,32,32,32,32,32,32,32,32,34,77,111,100,117,108,101,34,58,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,34,58,34,71,69,84,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,105,110,115,116,97,110,99,101,115,34,58,91,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,117,114,108,34,58,34,47,104,101,108,108,111,49,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,73,110,115,116,97,110,99,101,34,58,34,104,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,91,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,93,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,93,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,125,10,125 | @bitloops-auto-generated |
        | 99,111,110,115,116,32,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,32,61,32,82,69,83,84,82,111,117,116,101,114,40,82,69,83,84,46,70,97,115,116,105,102,121,41,32,123,32,10,32,32,71,101,116,40,39,47,104,101,108,108,111,49,39,41,58,32,91,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,49,93,91,77,111,100,117,108,101,93,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,40,109,121,85,115,101,67,97,115,101,41,59,32,10,125 | 123,10,32,32,34,115,101,116,117,112,34,58,32,123,10,32,32,32,32,34,114,111,117,116,101,114,115,34,58,32,123,10,32,32,32,32,32,32,34,82,69,83,84,46,70,97,115,116,105,102,121,34,58,32,123,10,32,32,32,32,32,32,32,32,34,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,85,82,76,77,97,112,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,71,69,84,32,47,104,101,108,108,111,49,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,67,108,97,115,115,34,58,32,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,98,111,117,110,100,101,100,67,111,110,116,101,120,116,34,58,32,34,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,49,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,111,100,117,108,101,34,58,32,34,77,111,100,117,108,101,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,44,10,32,32,34,99,111,110,116,114,111,108,108,101,114,115,34,58,32,123,10,32,32,32,32,34,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,49,34,58,32,123,10,32,32,32,32,32,32,34,77,111,100,117,108,101,34,58,32,123,10,32,32,32,32,32,32,32,32,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,34,58,32,34,71,69,84,34,44,10,32,32,32,32,32,32,32,32,32,32,34,105,110,115,116,97,110,99,101,115,34,58,32,91,10,32,32,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,117,114,108,34,58,32,34,47,104,101,108,108,111,49,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,73,110,115,116,97,110,99,101,34,58,32,34,104,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,32,91,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,121,85,115,101,67,97,115,101,34,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,93,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,93,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,10,125 | @bitloops-auto-generated |
        | 99,111,110,115,116,32,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,32,61,32,82,69,83,84,82,111,117,116,101,114,40,82,69,83,84,46,69,120,112,114,101,115,115,41,32,123,10,32,32,71,101,116,40,39,47,104,101,108,108,111,49,39,41,58,32,91,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,93,91,77,111,100,117,108,101,93,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,40,41,59,10,32,32,80,111,115,116,40,39,47,104,101,108,108,111,50,39,41,58,32,91,72,101,108,108,111,32,87,111,114,108,100,93,91,77,121,32,77,111,100,117,108,101,50,93,72,101,108,108,111,87,111,114,108,100,50,67,111,110,116,114,111,108,108,101,114,40,41,59,10,125 | 123,10,32,32,34,115,101,116,117,112,34,58,32,123,10,32,32,32,32,34,114,111,117,116,101,114,115,34,58,32,123,10,32,32,32,32,32,32,34,82,69,83,84,46,69,120,112,114,101,115,115,34,58,32,123,10,32,32,32,32,32,32,32,32,34,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,85,82,76,77,97,112,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,34,71,69,84,32,47,104,101,108,108,111,49,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,67,108,97,115,115,34,58,32,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,98,111,117,110,100,101,100,67,111,110,116,101,120,116,34,58,32,34,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,111,100,117,108,101,34,58,32,34,77,111,100,117,108,101,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,44,10,32,32,32,32,32,32,32,32,32,32,32,32,34,80,79,83,84,32,47,104,101,108,108,111,50,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,67,108,97,115,115,34,58,32,34,72,101,108,108,111,87,111,114,108,100,50,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,98,111,117,110,100,101,100,67,111,110,116,101,120,116,34,58,32,34,72,101,108,108,111,32,87,111,114,108,100,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,109,111,100,117,108,101,34,58,32,34,77,121,32,77,111,100,117,108,101,50,34,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,44,10,32,32,34,99,111,110,116,114,111,108,108,101,114,115,34,58,32,123,10,32,32,32,32,34,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,34,58,32,123,10,32,32,32,32,32,32,34,77,111,100,117,108,101,34,58,32,123,10,32,32,32,32,32,32,32,32,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,34,58,32,34,71,69,84,34,44,10,32,32,32,32,32,32,32,32,32,32,34,105,110,115,116,97,110,99,101,115,34,58,32,91,10,32,32,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,117,114,108,34,58,32,34,47,104,101,108,108,111,49,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,73,110,115,116,97,110,99,101,34,58,32,34,104,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,32,91,93,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,93,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,44,10,32,32,32,32,34,72,101,108,108,111,32,87,111,114,108,100,34,58,32,123,10,32,32,32,32,32,32,34,77,121,32,77,111,100,117,108,101,50,34,58,32,123,10,32,32,32,32,32,32,32,32,34,72,101,108,108,111,87,111,114,108,100,50,67,111,110,116,114,111,108,108,101,114,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,109,101,116,104,111,100,34,58,32,34,80,79,83,84,34,44,10,32,32,32,32,32,32,32,32,32,32,34,105,110,115,116,97,110,99,101,115,34,58,32,91,10,32,32,32,32,32,32,32,32,32,32,32,32,123,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,117,114,108,34,58,32,34,47,104,101,108,108,111,50,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,99,111,110,116,114,111,108,108,101,114,73,110,115,116,97,110,99,101,34,58,32,34,104,101,108,108,111,87,111,114,108,100,50,67,111,110,116,114,111,108,108,101,114,34,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,32,91,93,10,32,32,32,32,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,32,32,32,32,93,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,10,125 | @bitloops-auto-generated |
  
        Scenario Template: Invalid Router Definitions
        Given An invalid Router Definition <blString> string
        Then I should get an <error> error when I generate the model

   # Examples: # @bitloops-auto-generated
       # | blString | error | @bitloops-auto-generated |
       # | const helloWorldRESTRouter = RESTRouter(REST.Unknown) {    Get('/hello1'): [Bounded Context][Module]HelloWorldController();  } | Unknown server | @bitloops-auto-generated |
  
    Examples: # @bitloops-auto-generated
        | blString | error | @bitloops-auto-generated |
        | 99,111,110,115,116,32,104,101,108,108,111,87,111,114,108,100,82,69,83,84,82,111,117,116,101,114,32,61,32,82,69,83,84,82,111,117,116,101,114,40,82,69,83,84,46,85,110,107,110,111,119,110,41,32,123,32,10,32,32,71,101,116,40,39,47,104,101,108,108,111,49,39,41,58,32,91,66,111,117,110,100,101,100,32,67,111,110,116,101,120,116,93,91,77,111,100,117,108,101,93,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,40,41,59,32,10,125 | 85,110,107,110,111,119,110,32,115,101,114,118,101,114 | @bitloops-auto-generated |
  