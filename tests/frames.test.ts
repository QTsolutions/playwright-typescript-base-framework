import {expect, test} from "@playwright/test"

test("Interact with Frames",async({page})=>{
    
    await page.goto("https://letcode.in/frame")
    const allframes = page.frames();
    console.log("No. of frames:"+ allframes.length);

    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").fill("Preksha");
    await frame.locator("input[name='lname']").fill("vora");
    //nested frame 
    const innerFrame = frame.frameLocator("iframe[src='innerFrame']");
    await innerFrame.locator("input[name='email']").fill("preksha@gmail.com");


    // const myFrame = page.frame("firstFr")
    // await myFrame?.fill("input[name='fname']","Preksha")
    // await myFrame?.fill("input[name='lname']","Vora")
    // expect(await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered")

    await page.waitForTimeout(3000);    
    
})