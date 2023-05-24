import { expect, test } from "@playwright/test"
import moment from "moment"

test("calender demo using fill function", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    let date = "2001-03-10"

    await page.fill("id=birthday", date)
    await page.waitForTimeout(2000)
})

test.only("calender demo using moment", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
   
    await selectDate(14,"September 2023")
    
    await page.reload();
    await selectDate(16,"September 2024")

    await page.reload();
    await selectDate(27,"April 2023")


    async function selectDate(date:number, dateToSelect: string) {
        await page.click("//input[@placeholder='Start date']")
        
        const mmyy = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")

       // let dateToSelect: string = "December 2023"
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore()
        console.log("this month ? " + thisMonth)


        while (await mmyy.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click()
            } else {
                await next.click()
            }
        }
        await page.click(`//td[@class='day'][text()='${date}']`)
    }
})