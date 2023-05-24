import { PlaywrightTestConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const Config: PlaywrightTestConfig= {
  
  //testMatch: ["pomtest/addToCart.test.ts"],
  use:{
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "on",
    video: "on"
  },
  retries: 0, // number of time you want to retry the test 

  reporter:[["dot"],["json",{
    outputFile:"jsonReports/jsonReport.json"
  }],["html",{
   // open: "always" //always open the report after execution of test 
   open: "never"
  }]]
};

export default Config;
