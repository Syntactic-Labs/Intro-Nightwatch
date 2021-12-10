module.exports = {
    "Search Blog": browser => {
        browser.url("https://en.wikipedia.org/wiki/Main_Page")
        browser.pause(5 * 1000)
        browser.click("#n-contactpage > a > span")
        browser.pause(3 * 1000)
        browser.click("#mw-content-text > div.mw-parser-output > div.introto__main > div.introto__columns-right > ol > li:nth-child(1) > a")
        browser.pause(5*1000)
    }
}