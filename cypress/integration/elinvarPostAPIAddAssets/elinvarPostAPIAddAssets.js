import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import addAssetPage from '../../PageObjects/addAssetPage';
import descriptionPage from '../../PageObjects/descriptionPage';
import existingAssetsPage from '../../PageObjects/existingAssetsPage';
 
//Object Instantiation for PageObject Page Class and assigning them to a constant variable
const addAsset=new addAssetPage();
const description=new descriptionPage();
const existingAssets=new existingAssetsPage();

    
//Step Defintions for Feature File tests
Given('I prepare the base url to add Assets to hit addAsset endpoint', () => {
//url configured in cypress.json file
const apiUrl = Cypress.env('apiurl')+'addAsset/'
cy.visit(Cypress.env('url'));

/*
And('I navigate to Add Asset Page', () => {
  addAsset.getAddAsset().click()
  description.getDescription().click();
  addAsset.getAddAsset().click()

*/

Then('for making POST requests for below Asset Names Response should be 201 and receive corresponding message in response', datatable => {
//Repeat for all the scenarios described in the feature file table  
datatable.hashes().forEach(row => {   
let addAsseturl = apiUrl + row.AssetName;

cy.request({
  method: 'POST',
  url: addAsseturl,
  failOnStatusCode: false,
  //headers: options.headers,
  //body: JSON.stringify(options.body)
})
 // cy.request('POST', addAsseturl, failOnStatusCode: false)
  .should((response) => {
    expect(response.status).to.eq(row.Response)
 //   expect(response.body).to.have.length(500)
  //  expect(response).to.have.property('headers')
  //  expect(response).to.have.property('duration')
  })
  /*
  cy.request('https://jsonplaceholder.cypress.io/comments')
  .should((response) => {
    expect(response.status).to.eq(200)
    expect(response.body).to.have.length(500)
    expect(response).to.have.property('headers')
    expect(response).to.have.property('duration')
  })
*/

 

    })
})
})