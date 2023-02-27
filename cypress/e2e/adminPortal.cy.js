/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import AdminPage from './PageObject/adminPage';

describe('Enable WhatsApp floating button on Meraki home page', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
        })
    })

    it('Check whether the user is able to enable the WhatsApp floating button on Meraki home page', () => {
        //Admin Login Page
        Home.openUrl(myTestData.adminUrl);
        AdminPage.login(myTestData.adminId, myTestData.adminPassword);
        // Admin Home Page
        AdminPage.getMenuApp();
        AdminPage.navigateApplication();
        AdminPage.getWhatsAppSettings();
        // Navigating to Meraki homepage for verification
        Home.openUrl(myTestData.url);
        Home.checkWhatsAppVisiblity();
    });

});