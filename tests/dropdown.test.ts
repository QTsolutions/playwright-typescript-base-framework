import {  test} from "@playwright/test"

test("handling dropdown", async ({page})=>{
    
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")

    await page.selectOption("#select-demo",{
        //label: "Tuesday"
        //value: "Friday"
        index: 4
    })
    await page.waitForTimeout(3000);
})

test("handling multi select dropdown", async ({page})=>{
    
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")

    await page.selectOption("#multi-select",[{
        label: "Texas"
    },{
        index: 2
    },{
        value: "Florida"
    }])
})

test.only("Bootstrap dropdown", async ({page})=>{
    
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")

    await selectCountry("India")
    await selectCountry("Denmark")
    await selectCountry("Hong Kong")

    async function selectCountry(countryName) {
    await page.click("#country+span")
    await page.locator("ul#select2-country-results")
    .locator("li",{
        hasText: countryName
    }).click()
    }
    
})
