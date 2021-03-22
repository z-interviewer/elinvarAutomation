Feature: Automation for API tests of Frontend test-developer technical assignment
Scenario: Sending POST request for Adding different combintations of Assets, validating responses
 
Given I prepare the base url to add Assets to hit addAsset endpoint
Then for making POST requests for below Asset Names Response should be 201 and receive corresponding message in response
| AssetName        | AssetFormat       | Response  | 
| ISIN0000000048   | Correct format    | 201       |
| ISIN0000000101   | Correct format    | 201       |
| ABCD0000000048   | Correct format    | 201       |
| ABCD0000000101   | Correct format    | 201       |
| isin0000000048   | Incorrect format  | 201       |
| isin0000000101   | Incorrect format  | 201       |
| ISIN000000000048 | Incorrect format  | 201       |
| ISIN000000000101 | Incorrect format  | 201       |
| ISiN0000000048   | Incorrect format  | 201       |
| ISiN0000000101   | Incorrect format  | 201       |
| 0000000048ISIN   | Incorrect format  | 201       |
| 0000000101ISIN   | Incorrect format  | 201       |
| ISIN0000000048   | Correct format    | 201       |

