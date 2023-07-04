import { Locator, Page } from "@playwright/test"

export default class LoginPage {

    readonly emailaddress: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(public page: Page) { 
        this.page = page
        this.emailaddress = page.locator("input[name='email']")
        this.password = page.locator("input[name='password']")
        this.loginButton = page.locator("input[value='Login']")
    }

     //login to the application
    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    //enter emailaddress in the login page
    async enterEmail(emailaddress: string) {
        await this.emailaddress.type(emailaddress)
    }

    //enter password in the login page
    async enterPassword(password: string) {
        await this.password.type(password)
    }

     //click on the login button
    async clickLoginBtn() {
        await Promise.all([
            this.loginButton.click()
        ])

    }
}