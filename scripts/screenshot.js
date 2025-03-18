const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {

  const args = process.argv.slice(2);
  const htmlFile = args[0];
  const screengrabFile = args[1];

  if (!htmlFile ||!screengrabFile) {
    console.error("Usage: node index.js <html_file> <screengrab_file>");
    process.exit(1);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 1000,
    deviceScaleFactor: 1,
  });
  const filePath = "file://" + path.resolve(htmlFile);
  await page.goto(filePath, { waitUntil: "networkidle2" });

  await page.screenshot({ path: screengrabFile, fullPage: true });
  console.log(`\u2705 Screenshot saved: ${screengrabFile}`);

  await browser.close();
})();
