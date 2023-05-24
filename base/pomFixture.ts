import {test as baseTest} from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import MegaMenu from "../pages/megaMenu"

type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    megaMenu: MegaMenu;
}

const testPages = baseTest.extend<pages>({

    registerPage: async({ page},use)=>{
        await use(new RegisterPage(page));
    },
    loginPage: async({ page},use)=>{
        await use(new LoginPage(page));
    },
    homePage: async({ page},use)=>{
        await use(new HomePage(page));
    },
    megaMenu: async({ page},use)=>{
        await use(new MegaMenu(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;