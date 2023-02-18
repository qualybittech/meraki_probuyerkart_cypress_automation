class AddToCartPage {
    
    getCheckOut() {
        return cy.get('.clearfix > .pull-right > .btn');
    }
    navigateCheckOut(checkoutUrl) {
        cy.visit(checkoutUrl);
        this.getCheckOut().click();
    }
}

export default new AddToCartPage();