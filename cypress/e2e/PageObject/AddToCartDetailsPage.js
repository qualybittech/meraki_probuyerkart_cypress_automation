class AddToCartPage {

    getCheckOut() {
        return cy.get('.clearfix > .pull-right > .btn');
    }

    getShoppingCartBtn(){
        return cy.get('#cart > a > i')
    }

    /*navigateCheckOut(checkoutUrl) {
        cy.visit(checkoutUrl);
        this.getCheckOut().click();
    }*/

    navigateCheckOutCart(checkoutUrl) {
        cy.get('a.btn-checkout.btn').click()
    }
}

export default new AddToCartPage();