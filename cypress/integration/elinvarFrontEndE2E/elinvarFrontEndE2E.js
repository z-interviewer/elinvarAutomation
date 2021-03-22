import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import addAssetPage from '../../PageObjects/addAssetPage';
import descriptionPage from '../../PageObjects/descriptionPage';
import existingAssetsPage from '../../PageObjects/existingAssetsPage';
 
//Object Instantiation for PageObject Page Class and assigning them to a constant variable
const addAsset=new addAssetPage();
const description=new descriptionPage();
const existingAssets=new existingAssetsPage();

    
//Step Defintions for Feature File tests
Given('I open the Home Page for Elinvar QA', () => {
//url configured in cypress.json file
cy.visit(Cypress.env('url'));

And('I navigate to Add Asset Page', () => {
  addAsset.getAddAsset().click()
  description.getDescription().click();
  addAsset.getAddAsset().click()


Then('on adding below new Assets response is verified for different Asset formats and validation Messages', datatable => {
//Repeat for all the scenarios described in the feature file table  
datatable.hashes().forEach(row => {   

   

    //asserting that Send button is not disabled
    addAsset.getAssetName().should('not.be.disabled');

    //asserting that label has text New Asset
    addAsset.getAssetButtonLabel().invoke("text").should("eq", 'New Asset');
  
//Entering Asset Names whenever Asset Name passed is not empty
if (row.AssetName !== "") {
addAsset.getAssetName().click().type(row.AssetName);
}

//Click the Send button
addAsset.getSendAsset().click();
console.log('Asset Name is',row.AssetName);


//covering all valid & invalid scenarios as well as validation messages such as "Please match the format requested.","Please fill in this field.",
//"Duplicate record not allowed", "Incorrect format", "Correct format"
if (row.AssetFormat === "Incorrect format" && row.AssetName !== ""){
addAsset.getInvalidAsset().invoke("text").should("eq", row.AssetFormat);
addAsset.getAssetName().invoke('prop', 'validationMessage')
  .should('equal', row.validationMessage)
} else if (row.AssetFormat === "Incorrect format" && row.AssetName == "") {
    addAsset.getInvalidAsset().invoke("text").should("eq", row.AssetFormat);
    addAsset.getAssetName().invoke('prop', 'validationMessage')
      .should('equal', row.validationMessage)
} else if (row.AssetFormat === "Correct format" && row.validationMessage === ""){
    addAsset.getValidAsset().invoke("text").should("eq", row.AssetFormat);
    //validating the colour of message "Correct format"
    //rgb(40, 167, 69) corresponds to green colour for Correct format text
    addAsset.getValidAsset().should('have.css', 'color', 'rgb(40, 167, 69)')
} else {
    addAsset.getAssetName().invoke('prop', 'validationMessage')
      .should('equal', row.validationMessage)
}

        addAsset.getAssetName().clear();

        existingAssets.getExistingAssets().click();
        existingAssets.getExistingAssets().invoke("text").should("eq", 'Existing Assets');
        addAsset.getAddAsset().click()


    })
})
})
})