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
    /*loginCheckBox() {
        return this.getLoginCheckBox().check();
    }
    email() {
        return this.getEmail().type('ank.si@gmail.com');
    }
    passWord() {
        return this.getPassWord().type('123456');
    }
    clickLoginButton() {
        return this.getLoginButton().click();
    }*/

    loginToApp(loginEmail,loginPwd){
        this.getLoginCheckBox().check();
        this.getEmail().type(loginEmail);
        this.getPassWord().type(loginPwd);
        this.getLoginButton().click();
    }

            //Loging in
         /*   login.loginCheckBox();
            login.email();
            login.passWord();
            login.clickLoginButton();
            cy.pause();*/
}

export default new Login();