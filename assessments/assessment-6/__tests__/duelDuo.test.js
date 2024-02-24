const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  //TO DO
  test("check the clicking the draw button displays the div with id = \"choices\"", async () => {
    const button = await driver.findElement(By.id('button'));
    await button.click();

    const choices = await driver.findElements(By.id('choices'));
    expect(choices.length).toBeGreaterThan(0);
  });
  test("check that licking an \"add to duo\" button displays the div with id = \"player-duo\"", async () => {
    const button = await driver.findElement(By.class('bot-btn'));
    await button.click();

    const playerDuo = await driver.findElements(By.id('player-duo'));
    expect(playerDuo.length).toBeGreaterThan(0);
  });
});