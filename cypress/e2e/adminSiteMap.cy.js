/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import AdminPage from './PageObject/adminPage';

describe('Sitemap Validation', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
        })
    })

    it('Check whether the user is able to navigate to the HTMLSitemap', () => {
        //Admin Login Page
        Home.openUrl(myTestData.adminUrl);
        AdminPage.login(myTestData.adminId, myTestData.adminPassword);
        // Admin Home Page
        AdminPage.getMenuApp();
        AdminPage.navigateApplication();
        AdminPage.siteMapSettings();
        cy.get('span#sitemap_link').invoke('text')
            .then((text) => {
                cy.visit(text).should('be.ok');
            });
    });

    it('Check whether the user is able to navigate to the XMLSitemap', () => {
        //Admin Login Page
        Home.openUrl(myTestData.adminUrl);
        AdminPage.login(myTestData.adminId, myTestData.adminPassword);
        // Admin Home Page
        AdminPage.getMenuApp();
        AdminPage.navigateApplication();
        AdminPage.siteMapSettings();
        cy.get('span#sitemapxml_link').invoke('text')
            .then((text) => {
                cy.request(text).should('be.ok');
            });
    });
});