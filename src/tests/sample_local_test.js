//local test with chrome driver
require('chromedriver');
require('geckodriver');

var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

//setting chrome options to start the browser fully maximized and incognito mode for no cache
var chromeCapabilities = webdriver.Capabilities.chrome();
var chromeOptions = {
    'args': ['--incognito', '--start-maximized']
};
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver_chrome = new webdriver.Builder().withCapabilities(chromeCapabilities).build();

//var driver_firefox = new webdriver.Builder().forBrowser('firefox').build();
 
localTest(driver_chrome);
//localTest(driver_firefox);




function localTest(driver) {
    driver.get('http://www.google.com');
    driver.findElement(By.name('q')).sendKeys('trilogyed.com');

    driver.sleep(3000).then(function () {
        driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
    });

    driver.findElement(By.name('btnK')).click();

    driver.sleep(7000).then(function () {
        driver.getTitle().then(function (title) {
            if (title === 'trilogyed.com - Google Search') {
                console.log('Test passed');
            } else {
                console.log('Test failed');
                 //wrap this 'quit' when test pass/fail?
                driver.quit();
            }
        });
    });

   
}
