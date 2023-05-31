import { expect, test } from "../base/pomFixture"
import * as data from "../test-Data/addtocart-test-data.json"

test.describe("page object test demo", async () => {
    test("Register test", async ({ page, baseURL, registerPage }) => {
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname)
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.telephone)
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribedCeched()).toBeChecked();
        await registerPage.clickTermandCondition();
        await registerPage.clickContinueToRegister();
    })

    test("Login Test", async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");

    })

    test("Add To Cart", async ({ page, baseURL, loginPage, homePage, megaMenu }) => {
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.login(data.email, data.password)
        await homePage.hoverOnMegaMenu();
        await homePage.clickOnApple(); 
        await megaMenu.clickonproduct();
        expect(await megaMenu.isipodshufflevisible()).toBeVisible
        await megaMenu.clickOnAddToCartButton()
    })
})
