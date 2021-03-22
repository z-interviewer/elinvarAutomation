class existingAssets {

getExistingAssets() {
    return cy.get('a[href*="#/assets"]');
}

}
export default existingAssets