class Login {
    getEmail() {
        return cy.get('#input-login-email');
    }
    getPassWord() {
        return cy.get('#input-login-password');
    }
    getLoginButton() {
        return cy.get('#button-login');
    }
    getLoginCheckBox() {
        return cy.get('.login-options > :nth-child(1) > label > input');
    }
   
    getAccountEmail() {
        return cy.get('#input-email');
    }
    getAccountPassWord() {
        return cy.get('#input-password');
    }
    getAccountLoginButton() {
        return cy.get('.form-horizontal .buttons > .pull-right > .btn');
    }

    getLoginBtn(){
        return cy.get('.secondary-menu > .top-menu > .j-menu > .top-menu-item-1 > a');
    }

    getMyAcccountText() {
        return cy.get('.my-account > .title');
    }

    loginToApp(loginEmail,loginPwd){
        this.getLoginCheckBox().check();
        this.getEmail().type(loginEmail);
        this.getPassWord().type(loginPwd);
        this.getLoginButton().click();
    }

    accountLogin(loginEmail,loginPwd){
        this.getLoginBtn().click();
        this.getAccountEmail().type(loginEmail);
        this.getAccountPassWord().type(loginPwd);
        this.getAccountLoginButton().click();
    }

    verifyLoggedIn(){
        this.getMyAcccountText().should('include.text','My Account')
    }
}

export default new Login();