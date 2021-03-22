class addAsset {

getAssetName() {
    return cy.get('#defaultFormAddAsset');
}

getSendAsset() {
    return cy.contains('Send');
}

getValidAsset(){
    return cy.get('.valid-feedback');
}

getAssetButtonLabel(){
    return cy.get('.grey-text');
}

getAddAsset(){
    return cy.get('a[href*="#/add"]');
}

getInvalidAsset(){
    return cy.get('.invalid-feedback');
}

}
export default addAsset