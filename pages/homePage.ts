import {Locator, Page} from "@playwright/test"

export default class HomePage{

    readonly megaMenuHover: Locator;
    
    constructor(public page: Page){
        this.page = page
        this.megaMenuHover = page.locator("//span[text()[normalize-space()='Mega Menu']]")
    }

    //hover on the megamenu tab on homepage
    async hoverOnMegaMenu(){
        await this.megaMenuHover.hover()
    }

    //click on the apple under the mobile section
    async clickOnApple(){
        this.page.click("'Apple'") //linktext
    }
}