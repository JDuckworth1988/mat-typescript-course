import { Before, After, Given, Status } from "cucumber";
import { Actions } from "../support/actions";

import { browser } from "protractor";

// This will run before each scenario
Before({timeout: 100 * 1000}, async function() {

    this.actions = new Actions();

    browser.waitForAngularEnabled(false);
    // Opens the website to the default URL in the 'protractor.config.ts' file
    await browser.get("");

});

Given(/^a slow step$/, {timeout: 60 *1000}, function() {
    // Does some slow browser/filesystem/network actions
});

// This will run after every scenario
After({timeout: 100 * 1000}, async function(scenario) {

    // check to see if the scenario failed
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        // attach the screenshot to the report
        this.attach(screenShot, "image/png");
    }
});
