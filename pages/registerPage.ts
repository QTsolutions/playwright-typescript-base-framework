import { Page } from "@playwright/test"

export default class RegisterPage{

    constructor(public page: Page){}

    //enter firstname in register page
    async enterFirstName(firstname: string){
        await this.page.locator("#input-firstname")
        .type(firstname)
    }

    //enter lastname in register page
    async enterLastName(lastname: string){
        await this.page.locator("input[name='lastname']")
        .type(lastname)
    }

    //enter email in register page
    async enterEmail(email: string){
        await this.page.locator("input[name='email']")
        .type(email)
    }

     //enter telephone number in register page
    async enterTelephone(phone: string){
        await this.page.locator("input[name='telephone']")
        .type(phone)
    }

    //enter password in register page
    async enterPassword(password: string){
        await this.page.locator("input[name='password']")
        .type(password)
    }

    //enter confirm password in register page
    async enterConfirmPassword(password: string){
        await this.page.locator("input[name='confirm']")
        .type(password)
    }

     //subscribed button is checked
     isSubscribedCeched(){
        return this.page.locator("#input-newsletter-no")
    }

     //click on term & condition checkbox
    async clickTermandCondition(){
        await this.page.click("//label[@for='input-agree']")
    }

    //click on continue button in register page
    async clickContinueToRegister(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"load"}),
            this.page.click("input[value='Continue']")
        ])
         
    }
}