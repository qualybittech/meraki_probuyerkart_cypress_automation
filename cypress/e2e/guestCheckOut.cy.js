/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Checkout from './PageObject/CheckoutPage';
import AddToCartDetailsPage from './PageObject/AddToCartDetailsPage';

describe('Checkout a product as a guest user', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
    })
    })

    it('Ordering Product as Guest', () => {
        Home.openUrl(myTestData.url);

        Home.selectFirstProductAndClickCart();

        //Redirecting to AddtoCart Page
        AddToCartDetailsPage.navigateCheckOut(myTestData.checkoutUrl);

        //Entering Guest Details
        Checkout.enterGuestDetails(myTestData.firstName,myTestData.lastName,myTestData.email,
            myTestData.phoneNumber,myTestData.company,myTestData.address1,myTestData.address2,
            myTestData.city,myTestData.pinCode,myTestData.country,myTestData.zone);
    });

});