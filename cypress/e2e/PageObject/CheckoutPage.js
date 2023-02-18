class Checkout {
    getGuest() {
        return cy.get('.form-group > :nth-child(3) > label > input');
    }
    getFirstName() {
        return cy.get('#input-firstname');
    }
    getLastName() {
        return cy.get('#input-lastname');
    }
    getEmail() {
        return cy.get('#input-email');
    }
    getPhoneNum() {
        return cy.get('#input-telephone');
    }
    getCompany() {
        return cy.get('#input-payment-company');
    }
    getAddress1() {
        return cy.get('#input-payment-address-1');
    }
    getAddress2() {
        return cy.get('#input-payment-address-2');
    }
    getCity() {
        return cy.get('#input-payment-city');
    }
    getPinCode() {
        return cy.get('#input-payment-postcode');
    }
    getCountry() {
        return cy.get('#input-payment-country');
    }
    getZone() {
        return cy.get('#input-payment-zone');
    }
    getCashOnDelivery() {
        return cy.get(':nth-child(2) > .radio > label > input');
    }
    getPrivacyPolicy() {
        return cy.get('.section-body > :nth-child(3) > label > input');
    }
    getTermsNdCond() {
        return cy.get(':nth-child(4) > label > input');
    }
    getPlaceOrder() {
        return cy.get('#quick-checkout-button-confirm > span');
    }

    enterGuestDetails(firstName,lastName,email,phoneNumber,company,address1,address2,city,pinCode,country,zone){
        this.getGuest().check();
        this.getFirstName().type(firstName);
        this.getLastName().type(lastName);
        this.getEmail().type(email);
        this.getPhoneNum().type(phoneNumber);
        this.getCompany().type(company);
        this.getAddress1().type(address1);
        this.getAddress2().type(address2);
        this.getCity().type(city);
        this.getPinCode().type(pinCode);
        this.getCountry().select(country);
        this.getZone().select(zone);
        this.getCashOnDelivery().check();
        this.getPrivacyPolicy().check();
        this.getTermsNdCond().check();
        this.getPlaceOrder().click();
    }
}

export default new Checkout();