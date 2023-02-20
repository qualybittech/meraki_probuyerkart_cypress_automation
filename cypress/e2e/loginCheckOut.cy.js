/// <reference types="cypress" />

import Home from './PageObject/HomePage';
import Login from './PageObject/LoginPage';
import AddToCartDetailsPage from './PageObject/AddToCartDetailsPage';
import Checkout from './PageObject/CheckoutPage';
describe('Checkout a product as login user', () => {
    let myTestData;
    before(() => {
        cy.fixture('testData').then((fData) => {
            myTestData = fData;
    })
    })

    it('Ordering Product as User', () => {
        Home.openUrl(myTestData.url);
        
        //Loging in
        Login.accountLogin(myTestData.loginEmail,myTestData.loginPwd);
        Login.verifyLoggedIn();

        Home.navigateHomeMenu();
        Home.selectFirstProductAndClickCart();

        //Redirecting to AddtoCart Page
        AddToCartDetailsPage.navigateCheckOutCart();
        
        // //Check Out Details
        Checkout.checkoutAsLoggedInUser();
        Checkout.verifyOrderCreated();
        });

});