/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import AdminPage from './PageObject/adminPage';

describe('Validation of mandatory fields', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
        })
    })

    it('Check whether the user is getting proper error message after leaving the mandatory field empty', () => {
        //Admin Login Page
        Home.openUrl(myTestData.adminUrl);
        AdminPage.login(myTestData.adminId, myTestData.adminPassword);
        // Admin Home Page
        AdminPage.getMenuApp();
        AdminPage.navigateApplication();
        // Whatsapp Page
        AdminPage.clearFieldValue();
        AdminPage.fieldValidation();
    });
});