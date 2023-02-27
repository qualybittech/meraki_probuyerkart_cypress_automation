class Home {
    openUrl(url) {
        return cy.visit(url);
    }

    getHomeMenu() {
        return cy.get('.main-menu-item-1 > a > .links-text')
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
    getLanguage() {
        return cy.get('.language-title');
    }
    getLanguageArabic() {
        return cy.get('a[data-name="ar"]');
    }
    getLanguageEnglish() {
        return cy.get('a[data-name="en-gb"]');
    }
    getCart() {
        return cy.get('div#cart');
    }
    getWhatsAppIcon() {
        return cy.get('.floating-wpp-button > img');
    }

    navigateHomeMenu() {
        this.getHomeMenu().click();
    }

    selectFirstProductAndClickCart() {
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

    changeLanguage() {
        this.getLanguage().click();
        this.getLanguageArabic().click();
    }

    checkWhatsAppVisiblity() {
        this.getWhatsAppIcon()
            .trigger('mouseover')
            .should('be.visible');
    }

}

export default new Home();