import { chromium, test} from "@playwright/test"

test("Login test demo", async()=>{

    const browser = await chromium.launch({
        headless:false
    });   // lauch the chromium browser 
    const context = await browser.newContext(); //cache and cookies will not cary forward
    const page = await context.newPage();  // your new tab 

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]")
   // await page.click("text=Login")
   await page.click("'Login'")

   await page.fill("//input[@name='email']","vora.preksha2001@gmail.com") // like sendkeys
   await page.fill("//input[@name='password']","Preksha@1011")
   await page.click("//input[@value='Login']")

   await page.waitForTimeout(3000) 

   //dont want to carry forward the cache or cookies to next tab so create a new context
    const newContext = await browser.newContext() // open new browser 

   const newPage = await newContext.newPage(); // carry forward the cache / cookies of previous window
   await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")

   await newPage.waitForTimeout(3000) 

})