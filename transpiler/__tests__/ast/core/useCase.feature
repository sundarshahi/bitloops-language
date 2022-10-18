# https://docs.google.com/spreadsheets/d/1IkyIsk7HaAHskfYWNcMPSgSvhERgKeW9tEGmUhnu7Mc/edit#gid=0
Feature: UseCase

    Scenario Template: UseCase is valid
    Given Valid bounded context <boundedContext>, module <module>, UseCase <blString> strings
    When I generate the model
    Then I should get <output>

   # Examples: # @bitloops-auto-generated
       # | boundedContext | module | blString | output | @bitloops-auto-generated |
       # | Hello World | core | UseCase HelloWorldUseCase () { execute () : ( OK ( HelloWorldResponseDTO ), Errors( ) ) { return HelloWorldResponseDTO( { message: 'Hello, World!' } ) ; } } | {"Hello World":{"core":{"UseCases":{"HelloWorldUseCase":{"parameterDependencies":[],"returnTypes":{"ok":"HelloWorldResponseDTO","errors":[]},"execute":{"parameterDependencies":[],"statements":[{"returnOK":{"expression":{"evaluation":{"dto":{"fields":[{"name":"message","expression":{"evaluation":{"regularEvaluation":{"type":"string","value":"Hello, World!"}}}}],"name":"HelloWorldResponseDTO"}}}}}]}}}}}} | @bitloops-auto-generated |
       # | Hello World | core | UseCase HelloWorldUseCase ( ) {   execute ( ) : ( OK ( HelloWorldResponseDTO ) , Errors ( ) ) {     return HelloWorldResponseDTO ( { message: 'Hello, World!' } ) ;   } } | {"Hello World":{"core":{"UseCases":{"HelloWorldUseCase":{"parameterDependencies":[],"returnTypes":{"ok":"HelloWorldResponseDTO","errors":[]},"execute":{"parameterDependencies":[],"statements":[{"returnOK":{"expression":{"evaluation":{"dto":{"fields":[{"name":"message","expression":{"evaluation":{"regularEvaluation":{"type":"string","value":"Hello, World!"}}}}],"name":"HelloWorldResponseDTO"}}}}}]}}}}}} | @bitloops-auto-generated |
  
    Examples: # @bitloops-auto-generated
        | boundedContext | module | blString | output | @bitloops-auto-generated |
        | 72,101,108,108,111,32,87,111,114,108,100 | 99,111,114,101 | 85,115,101,67,97,115,101,32,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,32,40,41,32,123,32,101,120,101,99,117,116,101,32,40,41,32,58,32,40,32,79,75,32,40,32,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,32,41,44,32,69,114,114,111,114,115,40,32,41,32,41,32,123,32,114,101,116,117,114,110,32,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,40,32,123,32,109,101,115,115,97,103,101,58,32,39,72,101,108,108,111,44,32,87,111,114,108,100,33,39,32,125,32,41,32,59,32,125,32,125 | 123,34,72,101,108,108,111,32,87,111,114,108,100,34,58,123,34,99,111,114,101,34,58,123,34,85,115,101,67,97,115,101,115,34,58,123,34,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,93,44,34,114,101,116,117,114,110,84,121,112,101,115,34,58,123,34,111,107,34,58,34,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,34,44,34,101,114,114,111,114,115,34,58,91,93,125,44,34,101,120,101,99,117,116,101,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,93,44,34,115,116,97,116,101,109,101,110,116,115,34,58,91,123,34,114,101,116,117,114,110,79,75,34,58,123,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,100,116,111,34,58,123,34,102,105,101,108,100,115,34,58,91,123,34,110,97,109,101,34,58,34,109,101,115,115,97,103,101,34,44,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,115,116,114,105,110,103,34,44,34,118,97,108,117,101,34,58,34,72,101,108,108,111,44,32,87,111,114,108,100,33,34,125,125,125,125,93,44,34,110,97,109,101,34,58,34,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,34,125,125,125,125,125,93,125,125,125,125,125,125 | @bitloops-auto-generated |
        | 72,101,108,108,111,32,87,111,114,108,100 | 99,111,114,101 | 85,115,101,67,97,115,101,32,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,32,40,32,41,32,123,10,32,32,101,120,101,99,117,116,101,32,40,32,41,32,58,32,40,32,79,75,32,40,32,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,32,41,32,44,32,69,114,114,111,114,115,32,40,32,41,32,41,32,123,10,32,32,32,32,114,101,116,117,114,110,32,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,32,40,32,123,32,109,101,115,115,97,103,101,58,32,39,72,101,108,108,111,44,32,87,111,114,108,100,33,39,32,125,32,41,32,59,10,32,32,125,10,125 | 123,34,72,101,108,108,111,32,87,111,114,108,100,34,58,123,34,99,111,114,101,34,58,123,34,85,115,101,67,97,115,101,115,34,58,123,34,72,101,108,108,111,87,111,114,108,100,85,115,101,67,97,115,101,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,93,44,34,114,101,116,117,114,110,84,121,112,101,115,34,58,123,34,111,107,34,58,34,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,34,44,34,101,114,114,111,114,115,34,58,91,93,125,44,34,101,120,101,99,117,116,101,34,58,123,34,112,97,114,97,109,101,116,101,114,68,101,112,101,110,100,101,110,99,105,101,115,34,58,91,93,44,34,115,116,97,116,101,109,101,110,116,115,34,58,91,123,34,114,101,116,117,114,110,79,75,34,58,123,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,100,116,111,34,58,123,34,102,105,101,108,100,115,34,58,91,123,34,110,97,109,101,34,58,34,109,101,115,115,97,103,101,34,44,34,101,120,112,114,101,115,115,105,111,110,34,58,123,34,101,118,97,108,117,97,116,105,111,110,34,58,123,34,114,101,103,117,108,97,114,69,118,97,108,117,97,116,105,111,110,34,58,123,34,116,121,112,101,34,58,34,115,116,114,105,110,103,34,44,34,118,97,108,117,101,34,58,34,72,101,108,108,111,44,32,87,111,114,108,100,33,34,125,125,125,125,93,44,34,110,97,109,101,34,58,34,72,101,108,108,111,87,111,114,108,100,82,101,115,112,111,110,115,101,68,84,79,34,125,125,125,125,125,93,125,125,125,125,125,125 | @bitloops-auto-generated |
  