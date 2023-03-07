/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import AdminPage from './PageObject/adminPage';

describe('Domain update validation', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
        })
    })

    it('Check whether the user is able to update the domain', () => {
        //Admin Login Page
        Home.openUrl(myTestData.adminUrl);
        AdminPage.login(myTestData.adminId, myTestData.adminPassword);
        // Admin Home Page
        AdminPage.getMenuApp();
        // Domain Setting
        AdminPage.navigateSetting();
        AdminPage.domainSetting(myTestData.domains.prodDomain);
    });
});