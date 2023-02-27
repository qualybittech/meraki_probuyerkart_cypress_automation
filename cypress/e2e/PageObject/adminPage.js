class AdminPage {
    getUser() {
        return cy.get('#input-username');
    }
    getPass() {
        return cy.get('#input-password');
    }
    getHumanIdentification() {
        return cy.get('iframe[title="reCAPTCHA"]')
            .its('0.contentDocument').should('exist')
            .its('body').should('not.be.undefined')
            .then(cy.wrap).find('div.recaptcha-checkbox-border')
            .should('be.visible').click();
    }
    getLogin() {
        return cy.get('.btn');
    }
    getMenuApp() {
        return cy.get('#menu-apps');
    }
    getWhatsAppSettings() {
        return cy.get('#tab-id-general > .row > :nth-child(4) > .card > .card-body > .btn');
    }
    getSiteMapSettings() {
        return cy.get('#tab-id-general > .row > :nth-child(6) > .card > .card-body > .btn')
    }
    getHeaderInput() {
        return cy.get('input[name="header_title"]');
    }
    getMessageInput() {
        return cy.get('input[name="message"]');
    }
    getStatusDropdown() {
        return cy.get('select[name="status"]');
    }
    getSaveButton() {
        return cy.get('button[aria-label="Save"]');
    }
    login(userId, pass) {
        this.getUser().type(userId);
        this.getPass().type(pass);
        this.getHumanIdentification();
        cy.wait(20000);
        this.getLogin().click();
    }
    navigateApplication() {
        this.getMenuApp().trigger('mouseover').click();
    }
    whatsAppSettings(header, message, status) {
        this.getWhatsAppSettings().click();
        this.getHeaderInput().clear()
            .type(header);
        this.getMessageInput().clear()
            .type(message);
        this.getStatusDropdown().select(status);
        this.getSaveButton().click();
    }
    siteMapSettings() {
        this.getSiteMapSettings().click();
    }

}

export default new AdminPage();