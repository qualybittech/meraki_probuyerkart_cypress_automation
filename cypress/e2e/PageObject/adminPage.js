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
    whatsAppSettings() {
        this.getWhatsAppSettings().click();
        this.getHeaderInput().clear()
            .type('Welcome to Meraki');
        this.getMessageInput().clear()
            .type('Hi, Welcome. How may I help you?');
        this.getStatusDropdown().select('Enable');
        this.getSaveButton().click();
    }

}

export default new AdminPage();