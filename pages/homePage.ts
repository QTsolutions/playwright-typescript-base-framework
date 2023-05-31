import {Page} from "@playwright/test"

export default class HomePage{

    constructor(public page: Page){}

    //hover on the megamenu tab on homepage
    async hoverOnMegaMenu(){
        await this.page.hover("//span[text()[normalize-space()='Mega Menu']]")
    }

    //click on the apple under the mobile section
    async clickOnHeadPhones(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"load"}),
            this.page.click("'Headphones'") //linktext
        ])
       
    }
}