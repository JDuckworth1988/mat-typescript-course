import { browser, Config } from "protractor";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    baseUrl: "http://172.20.4.94/dev/vastweb/authenticate",

    allScriptsTimeout: 60000,

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
      "../e2e/features/*.feature",
    ],

    onPrepare: () => {
        browser.manage().window().maximize();
    },

    cucumberOpts: {
      // TypeScript compiler
        compiler: "ts:ts-node/register",
      // Report format
        format: "json:.tmp/results.json",
        profile: false,
      // The locations of out steps and hooks
        require: ["./step_definitions/*.steps.js", "./support/hooks.js"],
      // Tags stating which scenarios we will run
        tags: "not @ignore",
        "no-source": true,
    },

    plugins: [{
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
      },
      package: "protractor-multiple-cucumber-html-reporter-plugin",

    }],
};
