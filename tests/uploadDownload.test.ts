import { test } from "@playwright/test"

test("download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
    await page.type("#textbox", "Hello testing demo website")
    await page.click("id=create")

    const download = await Promise.all([ //don't use await keyword in promise 
        page.waitForEvent("download"),
        await page.click("id=link-to-download")
    ])
    const fileName = download[0].suggestedFilename()
    await download[0].saveAs(fileName);
    // const path = await download.path();
    // console.log(path);

})

test.only("upload Files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    // await page.setInputFiles("input[type='file']",
    //     ["uploaditems/pexels-photo.jpeg","uploaditems/tree.jpg"])

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(["uploaditems/pexels-photo.jpeg", "uploaditems/tree.jpg"])


    await page.waitForTimeout(2000);
})