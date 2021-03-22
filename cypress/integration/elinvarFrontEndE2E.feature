Feature: Automation for Frontend test-developer technical assignment
Scenario: Adding different combintations of Assets, validating formats and validation Messages
 
Given I open the Home Page for Elinvar QA
And I navigate to Add Asset Page
Then on adding below new Assets response is verified for different Asset formats and validation Messages
| AssetName        | AssetFormat       | validationMessage                  | 
| ISIN0000000048   | Correct format    |                                    |
| ISIN0000000101   | Correct format    |                                    |
| ABCD0000000048   | Correct format    |                                    |
| ABCD0000000101   | Correct format    |                                    |
|                  | Incorrect format  | Please fill in this field.         |
| isin0000000048   | Incorrect format  | Please match the format requested. |
| isin0000000101   | Incorrect format  | Please match the format requested. |
| ISIN000000000048 | Incorrect format  | Please match the format requested. |
| ISIN000000000101 | Incorrect format  | Please match the format requested. |
| ISiN0000000048   | Incorrect format  | Please match the format requested. |
| ISiN0000000101   | Incorrect format  | Please match the format requested. |
| 0000000048ISIN   | Incorrect format  | Please match the format requested. |
| 0000000101ISIN   | Incorrect format  | Please match the format requested. |
| ISIN0000000048   | Correct format    | Duplicate record not allowed       |

