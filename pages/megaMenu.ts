import { Page } from "@playwright/test";

export default class MegaMenu {

    constructor(public page: Page) { }

    //click on first product 
    async addFirstProductToTheCart() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        await this.page.locator("(//button[@title='Add to Cart'])")
            .nth(0).click();
        this.page.waitForTimeout(5000);
    }

    //view cart toast is visible
    async isToastVisible() {
        const toast = this.page.locator("//a[contains(.,'View Cart')]");
        await toast.waitFor({ state: "visible" })
        return toast;
    }
}