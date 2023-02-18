class Home {
    openUrl(url){
        return cy.visit(url);
    }

    getProduct() {
        return cy.get('div.buttons-wrapper');
    }
    getIframeBody() {
        // get the document
        return cy
            .get('body > div.popup-wrapper.popup-options > div.popup-container > div > div > iframe')
            .its('0.contentDocument').should('exist')
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }
    getCart() {
        return cy.get('div#cart');
    }
    /*clickProduct() {
        return this.getProduct().first().click();
    }
    selectColor() {
        return this.getIframeBody().find('span.option-value').first().click();
    }
    clickAddToCart() {
        return this.getIframeBody().find('a#button-cart').click();
    }
    clickCart() {
        return this.getCart().invoke('show').click();
    }*/

    selectFirstProductAndClickCart(){
        // Selecting the First Product
        this.getProduct().first().click();
        cy.wait(4000);

        //Handling the PopUp Iframe
        this.getIframeBody().find('span.option-value').first().click();
        this.getIframeBody().find('a#button-cart').click();
        cy.wait(4000);

         //Clicking on cart
        this.getCart().invoke('show').click();
    }
/*
        // Selecting the First Product
        home.clickProduct();
        cy.wait(4000);

        //Handling the PopUp Iframe
        home.selectColor();
        home.clickAddToCart();
        cy.wait(4000);

        //Clicking on cart
        home.clickCart();*/
}

export default new Home();