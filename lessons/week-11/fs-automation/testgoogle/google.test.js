const { Builder, Capabilities, By, Key, until } = require("selenium-webdriver");

let driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  // TODO: Navigate to google.com
  await driver.get("https://www.google.com/");
});

afterEach(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  await driver.findElement(By.name("q")).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Fix the TODOs below to finish the test
  let searchBar = await driver.findElement(By.name('q'))
  
  // TODO Search for something in Google and wait for the page to load
  searchBar.sendKeys("something", Key.RETURN)
  await driver.wait(until.titleContains("something"), 1000)
  
  // TODO Call .clear() on the search bar element to clear the old search term
  await searchBar.clear()

  // TODO Call .sendKeys() on the search bar element to search for a new term
  await searchBar.sendKeys("New term", Key.RETURN)
  
  // TODO Wait for the results page to load
  await driver.wait(until.titleContains("New term"), 1000)
});
