const { Builder, Capabilities, By, util, Key } = require("selenium-webdriver")

let driver;

beforeEach(async () => {
    driver = new Builder().withCapabilities(Capabilities.chrome()).build();
    await driver.get('http://localhost:3000')
});

afterEach(async () => {
    await driver.quit()
});

describe("Add movies test", () => {
    test("Create movie", async() => {
        let message;
        await driver.findElement(By.id("add-movie-input")).sendKeys("AAAAAAAAAA", Key.RETURN)
    });

    test("Check box", async() => {
        let message;

        //Check box
        //TODO find the check box and click it
        await driver.findElement(By.id("movie-0")).click()
        //TODO check that the aside occurs to confirm the click was successful
        await driver.wait(until.elementIsNotVisible(message), 1000)
    })

    test("Delete movie", async() => {
        // Find the delete button and click
        await driver.findElement(By.id("delete-btn")).click()
    })
})