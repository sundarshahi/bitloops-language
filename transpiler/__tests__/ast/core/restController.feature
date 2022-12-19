# https://docs.google.com/spreadsheets/d/1NrWTeTczja9cQNPgzhsWkMrIaWolb--Wr1GMsnbJCUM/edit#gid=0
Feature: Rest Controller

    Scenario Template: Rest Controller is valid
    Given Valid bounded context <boundedContext>, module <module>, useCases <useCases>, Rest Controller <blString> strings
    When I generate the model
    Then I should get <output>

   # Examples: # @bitloops-auto-generated
       # | boundedContext | module | useCases | blString | output | @bitloops-auto-generated |
       # | Hello World | core | [] | RESTController HelloWorldController ( ) { method: REST.Methods.GET; execute ( request , response ) { this.ok ( response , 'Hello World!' ) ; } } | {"Hello World":{"core":{"Controllers":{"HelloWorldController":{"parameterDependencies":[],"method":"GET","execute":{"dependencies":["request","response"],"statements":[{"expression":{"evaluation":{"regularEvaluation":{"type":"method","value":"this.ok","argumentDependencies":[{"value":"response","type":"variable"},{"value":"Hello World!","type":"string"}]}}}}]}}}}}} | @bitloops-auto-generated |
       # | Hello World | core | [] | RESTController HelloWorldController (helloWorldUseCase: HelloWorldUseCase) {   method: REST.Methods.GET;   execute(request, response) {     const result = helloWorldUseCase.execute();     this.ok(response, result);   } } | {"Hello World":{"core":{"Controllers":{"HelloWorldController":{"parameterDependencies":[{"value":"helloWorldUseCase","type":"HelloWorldUseCase"}],"method":"GET","execute":{"dependencies":["request","response"],"statements":[{"constDeclaration":{"name":"result","expression":{"evaluation":{"regularEvaluation":{"type":"method","value":"helloWorldUseCase.execute"}}}}},{"expression":{"evaluation":{"regularEvaluation":{"type":"method","value":"this.ok","argumentDependencies":[{"value":"response","type":"variable"},{"value":"result","type":"variable"}]}}}}]}}}}}} | @bitloops-auto-generated |
       # | Hello World | core | [] | RESTController HelloWorldController (helloWorldUseCase: HelloWorldUseCase) {   method: REST.Methods.GET;   execute(request, response) {     const result = helloWorldUseCase.execute( );     this.ok(response, result);   } } | {"Hello World":{"core":{"Controllers":{"HelloWorldController":{"parameterDependencies":[{"value":"helloWorldUseCase","type":"HelloWorldUseCase"}],"method":"GET","execute":{"dependencies":["request","response"],"statements":[{"constDeclaration":{"name":"result","expression":{"evaluation":{"regularEvaluation":{"type":"method","value":"helloWorldUseCase.execute"}}}}},{"expression":{"evaluation":{"regularEvaluation":{"type":"method","value":"this.ok","argumentDependencies":[{"value":"response","type":"variable"},{"value":"result","type":"variable"}]}}}}]}}}}}} | @bitloops-auto-generated |
       # | Hello World | core | [] | RESTController HelloWorldController (helloWorldUseCase: HelloWorldUseCase) {   method: REST.Methods.GET;   execute(request, response) {     this.ok(response, result);   } } | {"Hello World":{"core":{"Controllers":{"HelloWorldController":{"parameterDependencies":[{"value":"helloWorldUseCase","type":"HelloWorldUseCase"}],"method":"GET","execute":{"dependencies":["request","response"],"statements":[{"expression":{"evaluation":{"regularEvaluation":{"type":"method","value":"this.ok","argumentDependencies":[{"value":"response","type":"variable"},{"value":"result","type":"variable"}]}}}}]}}}}}} | @bitloops-auto-generated |
  
    Examples: # @bitloops-auto-generated
        | boundedContext | module | useCases | blString | output | @bitloops-auto-generated |
        | 72,101,108,108,111,32,87,111,114,108,100 | 99,111,114,101 | 91,93 | 82,69,83,84,67,111,110,116,114,111,108,108,101,114,32,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,32,40,32,41,32,123,32,109,101,116,104,111,100,58,32,82,69,83,84,46,77,101,116,104,111,100,115,46,71,69,84,59,32,101,120,101,99,117,116,101,32,40,32,114,101,113,117,101,115,116,32,44,32,114,101,115,112,111,110,115,101,32,41,32,123,32,116,104,105,115,46,111,107,32,40,32,114,101,115,112,111,110,115,101,32,44,32,39,72,101,108,108,111,32,87,111,114,108,100,33,39,32,41,32,59,32,125,32,125 | 123,34,72,101,108,108,111,32,87,111,114,108,100,34,58,123,34,99,111,114,101,34,58,123,34,67,111,110,116,114,111,108,108,101,114,115,34,58,123,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,93,44,34,109,101,116,104,111,100,34,58,34,71,69,84,34,44,34,101,120,101,99,117,116,101,34,58,123,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,91,34,114,101,113,117,101,115,116,34,44,34,114,101,115,112,111,110,115,101,34,93,44,34,115,116,97,116,101,109,101,110,116,115,34,58,91,123,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,109,101,116,104,111,100,34,44,34,118,97,108,117,101,34,58,34,116,104,105,115,46,111,107,34,44,34,97,114,103,117,109,101,110,116,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,114,101,115,112,111,110,115,101,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,44,123,34,118,97,108,117,101,34,58,34,72,101,108,108,111,32,87,111,114,108,100,33,34,44,34,116,121,112,101,34,58,34,115,116,114,105,110,103,34,125,93,125,125,125,125,93,125,125,125,125,125,125 | @bitloops-auto-generated |
        | 72,101,108,108,111,32,87,111,114,108,100 | 99,111,114,101 | 91,93 | 82,69,83,84,67,111,110,116,114,111,108,108,101,114,32,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,32,40,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,58,32,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,41,32,123,10,32,32,109,101,116,104,111,100,58,32,82,69,83,84,46,77,101,116,104,111,100,115,46,71,69,84,59,10,32,32,101,120,101,99,117,116,101,40,114,101,113,117,101,115,116,44,32,114,101,115,112,111,110,115,101,41,32,123,10,32,32,32,32,99,111,110,115,116,32,114,101,115,117,108,116,32,61,32,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,46,101,120,101,99,117,116,101,40,41,59,10,32,32,32,32,116,104,105,115,46,111,107,40,114,101,115,112,111,110,115,101,44,32,114,101,115,117,108,116,41,59,10,32,32,125,10,125 | 123,34,72,101,108,108,111,32,87,111,114,108,100,34,58,123,34,99,111,114,101,34,58,123,34,67,111,110,116,114,111,108,108,101,114,115,34,58,123,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,44,34,116,121,112,101,34,58,34,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,125,93,44,34,109,101,116,104,111,100,34,58,34,71,69,84,34,44,34,101,120,101,99,117,116,101,34,58,123,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,91,34,114,101,113,117,101,115,116,34,44,34,114,101,115,112,111,110,115,101,34,93,44,34,115,116,97,116,101,109,101,110,116,115,34,58,91,123,34,99,111,110,115,116,68,101,99,108,97,114,97,116,105,111,110,34,58,123,34,110,97,109,101,34,58,34,114,101,115,117,108,116,34,44,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,109,101,116,104,111,100,34,44,34,118,97,108,117,101,34,58,34,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,46,101,120,101,99,117,116,101,34,125,125,125,125,125,44,123,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,109,101,116,104,111,100,34,44,34,118,97,108,117,101,34,58,34,116,104,105,115,46,111,107,34,44,34,97,114,103,117,109,101,110,116,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,114,101,115,112,111,110,115,101,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,44,123,34,118,97,108,117,101,34,58,34,114,101,115,117,108,116,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,93,125,125,125,125,93,125,125,125,125,125,125 | @bitloops-auto-generated |
        | 72,101,108,108,111,32,87,111,114,108,100 | 99,111,114,101 | 91,93 | 82,69,83,84,67,111,110,116,114,111,108,108,101,114,32,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,32,40,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,58,32,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,41,32,123,10,32,32,109,101,116,104,111,100,58,32,82,69,83,84,46,77,101,116,104,111,100,115,46,71,69,84,59,10,32,32,101,120,101,99,117,116,101,40,114,101,113,117,101,115,116,44,32,114,101,115,112,111,110,115,101,41,32,123,10,32,32,32,32,99,111,110,115,116,32,114,101,115,117,108,116,32,61,32,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,46,101,120,101,99,117,116,101,40,32,41,59,10,32,32,32,32,116,104,105,115,46,111,107,40,114,101,115,112,111,110,115,101,44,32,114,101,115,117,108,116,41,59,10,32,32,125,10,125 | 123,34,72,101,108,108,111,32,87,111,114,108,100,34,58,123,34,99,111,114,101,34,58,123,34,67,111,110,116,114,111,108,108,101,114,115,34,58,123,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,44,34,116,121,112,101,34,58,34,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,125,93,44,34,109,101,116,104,111,100,34,58,34,71,69,84,34,44,34,101,120,101,99,117,116,101,34,58,123,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,91,34,114,101,113,117,101,115,116,34,44,34,114,101,115,112,111,110,115,101,34,93,44,34,115,116,97,116,101,109,101,110,116,115,34,58,91,123,34,99,111,110,115,116,68,101,99,108,97,114,97,116,105,111,110,34,58,123,34,110,97,109,101,34,58,34,114,101,115,117,108,116,34,44,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,109,101,116,104,111,100,34,44,34,118,97,108,117,101,34,58,34,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,46,101,120,101,99,117,116,101,34,125,125,125,125,125,44,123,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,109,101,116,104,111,100,34,44,34,118,97,108,117,101,34,58,34,116,104,105,115,46,111,107,34,44,34,97,114,103,117,109,101,110,116,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,114,101,115,112,111,110,115,101,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,44,123,34,118,97,108,117,101,34,58,34,114,101,115,117,108,116,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,93,125,125,125,125,93,125,125,125,125,125,125 | @bitloops-auto-generated |
        | 72,101,108,108,111,32,87,111,114,108,100 | 99,111,114,101 | 91,93 | 82,69,83,84,67,111,110,116,114,111,108,108,101,114,32,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,32,40,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,58,32,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,41,32,123,10,32,32,109,101,116,104,111,100,58,32,82,69,83,84,46,77,101,116,104,111,100,115,46,71,69,84,59,10,32,32,101,120,101,99,117,116,101,40,114,101,113,117,101,115,116,44,32,114,101,115,112,111,110,115,101,41,32,123,10,32,32,32,32,116,104,105,115,46,111,107,40,114,101,115,112,111,110,115,101,44,32,114,101,115,117,108,116,41,59,10,32,32,125,10,125 | 123,34,72,101,108,108,111,32,87,111,114,108,100,34,58,123,34,99,111,114,101,34,58,123,34,67,111,110,116,114,111,108,108,101,114,115,34,58,123,34,72,101,108,108,111,87,111,114,108,100,67,111,110,116,114,111,108,108,101,114,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,104,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,44,34,116,121,112,101,34,58,34,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,125,93,44,34,109,101,116,104,111,100,34,58,34,71,69,84,34,44,34,101,120,101,99,117,116,101,34,58,123,34,100,101,112,101,110,100,101,110,99,105,101,115,34,58,91,34,114,101,113,117,101,115,116,34,44,34,114,101,115,112,111,110,115,101,34,93,44,34,115,116,97,116,101,109,101,110,116,115,34,58,91,123,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,109,101,116,104,111,100,34,44,34,118,97,108,117,101,34,58,34,116,104,105,115,46,111,107,34,44,34,97,114,103,117,109,101,110,116,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,123,34,118,97,108,117,101,34,58,34,114,101,115,112,111,110,115,101,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,44,123,34,118,97,108,117,101,34,58,34,114,101,115,117,108,116,34,44,34,116,121,112,101,34,58,34,118,97,114,105,97,98,108,101,34,125,93,125,125,125,125,93,125,125,125,125,125,125 | @bitloops-auto-generated |
  