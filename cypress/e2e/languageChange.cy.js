/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Login from './PageObject/LoginPage';
import AddToCartDetailsPage from './PageObject/AddToCartDetailsPage';
import Checkout from './PageObject/CheckoutPage';
const sizes = ['iphone-6', [1400, 768]]

describe('Checkout a product as login user', () => {
    sizes.forEach((size) => {
        let myTestData;
        before(() => {
            cy.fixture('testData').then((fData) => {
                myTestData = fData;
            })
        })

        it(`Ordering Product as User ${size}`, () => {
            if (Cypress._.isArray(size)) {
                cy.viewport(size[0], size[1])
              } else {
                cy.viewport(size)
              }
              
            Home.openUrl(myTestData.url);

            //Changing of Language
            Home.changeLanguage();
        });
    })
});