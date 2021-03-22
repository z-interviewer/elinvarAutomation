class description {

getDescription() {
    //return cy.get('.grey-text').invoke("text").should("eq", 'New Asset');;
    //return cy.get('a[href*="#/add"]');
    return cy.contains('Description');
}

}
export default description