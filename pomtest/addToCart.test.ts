import { expect, test } from "../base/pomFixture"
import * as data from "../test-Data/addtocart-test-data.json"

// const email = "vora.preksha1@gmail.com"
// const password = "Preksha@10"

test.describe("page object test demo", async () => {
    test("Register test", async ({ page, baseURL, registerPage }) => {
        // const register = new RegisterPage(page);
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
        //const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail(data.email);
        await loginPage.enterPassword(data.password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");

    })

    test("Add To Cart", async ({ page, baseURL, loginPage, homePage, megaMenu }) => {
        // const login = new LoginPage(page);
        // const homePage = new HomePage(page);
        // const megaPage = new MegaMenu(page);
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.login(data.email, data.password)
        await homePage.hoverOnMegaMenu();
        await homePage.clickOnHeadPhones();
        await megaMenu.addFirstProductToTheCart();
        const isCartVisible = await megaMenu.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})
