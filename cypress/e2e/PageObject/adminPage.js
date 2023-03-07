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
    getSettings() {
        return cy.get('#menu-system');
    }
    getWhatsAppSettings() {
        return cy.get('img[alt=Whatsapp] + .card-body > .btn.btn-primary.fathershops-button-primary.btn-sm');
    }
    getSiteMapSettings() {
        return cy.get('img[alt="Site Maps"] + .card-body >.btn.btn-primary.fathershops-button-primary.btn-sm');
    }
    getWhatsAppPhoneNo() {
        return cy.get('input[name="phone_no"]');
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
    
    getErrorPhoneMessage() {
        return cy.get('input[name="phone_no"]+div[class="text-danger"]');
    }
    getErrorHeaderInput() {
        return cy.get('input[name="header_title"]+div[class="text-danger"]');
    }
    getErrorMessageInput() {
        return cy.get('input[name="message"]+div[class="text-danger"]');
    }
    getDomainButton() {
        return cy.get('div.fs-card-title').contains('Add Domain');
    }
    getDomain() {
        return cy.get('#input-meta-domain');
    }
    getSave() {
        return cy.get('#button-save');
    }
    getConfirmationAlert() {
        return cy.get('.alert');
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
    navigateSetting() {
        this.getSettings().trigger('mouseover').click();
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
        this.getSiteMapSettings().first().click();
    }
    htmlSiteMap() {
        cy.get('span#sitemap_link').invoke('text')
            .then((text) => {
                cy.visit(text).should('be.ok');
            });
    }
    xmlSiteMap() {
        cy.get('span#sitemapxml_link').invoke('text')
            .then((text) => {
                cy.request(text).should('be.ok');
            });
    }

    clearFieldValue() {
        this.getWhatsAppSettings().click();
        this.getWhatsAppPhoneNo().clear();
        this.getHeaderInput().clear();
        this.getMessageInput().clear();
        this.getSaveButton().click();
    }
    fieldValidation() {
        this.getErrorPhoneMessage().should('be.visible');
        this.getErrorHeaderInput().should('be.visible');
        this.getErrorMessageInput().should('be.visible');
    }

    domainSetting(domain) {
        this.getDomainButton().click();
        this.getDomain().clear().type(domain);
        this.getSave().click();
        this.getConfirmationAlert().should('be.visible');
    }

export default new AdminPage();