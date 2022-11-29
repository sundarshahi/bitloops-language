#https://docs.google.com/spreadsheets/d/1GHeESL4EW3MwIvgGR76gniHJYsJVO9Vm-uQcbshRbZA/edit#gid=0

Feature: Get Class

    Scenario Template: Get Class is valid
    Given A valid getClass <blString> string
    When I generate the model
    Then I should get <output>

   # Examples: # @bitloops-auto-generated
       # | blString | output | @bitloops-auto-generated |
       # | JestTestExpression { result.getClass() } | {   "expression": {     "getClass": { "expression": { "identifier": "result" } }   } } | @bitloops-auto-generated |
       # | JestTestExpression { result.props.getClass() } | {   "expression": {     "getClass": {       "expression": {         "memberDotExpression": {           "expression": { "identifier": "result" },           "identifier": "props"         }       }     }   } } | @bitloops-auto-generated |
       # | JestTestExpression { this.props.getClass() } | {   "expression": {     "getClass": {       "expression": {         "memberDotExpression": {           "expression": { "thisExpression": "this" },           "identifier": "props"         }       }     }   } } | @bitloops-auto-generated |
  
    Examples: # @bitloops-auto-generated
        | blString | output | @bitloops-auto-generated |
        | 74,101,115,116,84,101,115,116,69,120,112,114,101,115,115,105,111,110,32,123,32,114,101,115,117,108,116,46,103,101,116,67,108,97,115,115,40,41,32,125 | 123,10,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,34,103,101,116,67,108,97,115,115,34,58,32,123,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,32,34,105,100,101,110,116,105,102,105,101,114,34,58,32,34,114,101,115,117,108,116,34,32,125,32,125,10,32,32,125,10,125 | @bitloops-auto-generated |
        | 74,101,115,116,84,101,115,116,69,120,112,114,101,115,115,105,111,110,32,123,32,114,101,115,117,108,116,46,112,114,111,112,115,46,103,101,116,67,108,97,115,115,40,41,32,125 | 123,10,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,34,103,101,116,67,108,97,115,115,34,58,32,123,10,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,34,109,101,109,98,101,114,68,111,116,69,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,32,34,105,100,101,110,116,105,102,105,101,114,34,58,32,34,114,101,115,117,108,116,34,32,125,44,10,32,32,32,32,32,32,32,32,32,32,34,105,100,101,110,116,105,102,105,101,114,34,58,32,34,112,114,111,112,115,34,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,10,125 | @bitloops-auto-generated |
        | 74,101,115,116,84,101,115,116,69,120,112,114,101,115,115,105,111,110,32,123,32,116,104,105,115,46,112,114,111,112,115,46,103,101,116,67,108,97,115,115,40,41,32,125 | 123,10,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,34,103,101,116,67,108,97,115,115,34,58,32,123,10,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,34,109,101,109,98,101,114,68,111,116,69,120,112,114,101,115,115,105,111,110,34,58,32,123,10,32,32,32,32,32,32,32,32,32,32,34,101,120,112,114,101,115,115,105,111,110,34,58,32,123,32,34,116,104,105,115,69,120,112,114,101,115,115,105,111,110,34,58,32,34,116,104,105,115,34,32,125,44,10,32,32,32,32,32,32,32,32,32,32,34,105,100,101,110,116,105,102,105,101,114,34,58,32,34,112,114,111,112,115,34,10,32,32,32,32,32,32,32,32,125,10,32,32,32,32,32,32,125,10,32,32,32,32,125,10,32,32,125,10,125 | @bitloops-auto-generated |
  