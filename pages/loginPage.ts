import { Page } from "@playwright/test"

export default class LoginPage {

    constructor(public page: Page) { }

     //login to the application
    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    //enter emailaddress in the login page
    async enterEmail(emailaddress: string) {
        await this.page.locator("input[name='email']")
            .type(emailaddress)
    }

    //enter password in the login page
    async enterPassword(password: string) {
        await this.page.locator("input[name='password']")
            .type(password)
    }

     //click on the login button
    async clickLoginBtn() {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("input[value='Login']")
        ])

    }
}