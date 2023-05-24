import { Page, expect, test } from "@playwright/test"
let facebookPage: Page;

test("Interact with Multiple tabs", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    // console.log(page.url())

    // const [newWindow] = await Promise.all([
    //     page.waitForEvent("popup"),
    //     page.click("'Follow On Twitter'")
    // ])
    // console.log(newWindow.url());

    //Multiple Window
    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState();  //pages will load completely 

    const pages = multiPage.context().pages() //how many pages are present 
    console.log("No of tabs: " + pages.length);

    pages.forEach(tab => {
        console.log(tab.url());
    })

   
    for (let index = 0; index < pages.length; index++) {
        const url = pages[index].url();
        if (url == "https://www.facebook.com/lambdatest/") {
            facebookPage = pages[index];
        }
        const text = await facebookPage.textContent("//h1")
        console.log(text);
    }

})