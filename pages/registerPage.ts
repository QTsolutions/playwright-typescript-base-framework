import { Locator, Page } from "@playwright/test"

export default class RegisterPage{

    readonly firstname_textbox: Locator;
    readonly lastname_textbox: Locator;
    readonly email: Locator;
    readonly phone_no: Locator;
    readonly password_textbox: Locator;
    readonly confirm_password: Locator;
    readonly subscribed_checkbox: Locator;
    readonly termAndCondition: Locator;
    readonly registration_button: Locator;

    constructor(public page: Page){
        this.page = page;
        this.firstname_textbox = page.locator("#input-firstname")
        this.lastname_textbox = page.locator("input[name='lastname']")
        this.email = page.locator("input[name='email']")
        this.phone_no = page.locator("input[name='telephone']")
        this.password_textbox = page.locator("input[name='password']")
        this.confirm_password = page.locator("input[name='confirm']")
        this.subscribed_checkbox = page.locator("#input-newsletter-no")
        this.termAndCondition = page.locator("//label[@for='input-agree']")
        this.registration_button = page.locator("input[value='Continue']")
    }

    //enter firstname in register page
    async enterFirstName(firstname: string){
        await this.firstname_textbox.type(firstname)
    }

    //enter lastname in register page
    async enterLastName(lastname: string){
        await this.lastname_textbox.type(lastname)
    }

    //enter email in register page
    async enterEmail(email: string){
        await this.email.type(email)
    }

     //enter telephone number in register page
    async enterTelephone(phone: string){
        await this.phone_no.type(phone)
    }

    //enter password in register page
    async enterPassword(password: string){
        await this.password_textbox.type(password)
    }

    //enter confirm password in register page
    async enterConfirmPassword(password: string){
        await this.confirm_password.type(password)
    }

     //subscribed button is checked
     isSubscribedCeched(){
        return this.subscribed_checkbox
    }

     //click on term & condition checkbox
    async clickTermandCondition(){
        await this.termAndCondition.click()
    }

    //click on continue button in register page
    async clickContinueToRegister(){
        await Promise.all([
            this.registration_button.click()
        ])
         
    }
}