import {Page} from "@playwright/test"

export default class HomePage{

    constructor(public page: Page){}

    async hoverOnMegaMenu(){
        await this.page.hover("//span[text()[normalize-space()='Mega Menu']]")
    }

    async clickOnHeadPhones(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:"load"}),
            this.page.click("'Headphones'") //linktext
        ])
       
    }
}