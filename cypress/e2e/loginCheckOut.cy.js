/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Login from './PageObject/LoginPage';
import AddToCartDetailsPage from './PageObject/AddToCartDetailsPage';

describe('Checkout a product as login user', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
    })
    })

    it('Ordering Product as User', () => {

        Home.openUrl(myTestData.url);

        Home.selectFirstProductAndClickCart();

        //Redirecting to AddtoCart Page
        AddToCartDetailsPage.navigateCheckOut(myTestData.checkoutUrl);

        //Loging in
        Login.loginToApp(myTestData.loginEmail,myTestData.loginPwd)

        // //Check Out Details
        /*Checkout.enterGuestDetails(myTestData.firstName,myTestData.lastName,myTestData.email,
            myTestData.phoneNumber,myTestData.company,myTestData.address1,myTestData.address2,
            myTestData.city,myTestData.pinCode,myTestData.country,myTestData.zone);*/
    });

});