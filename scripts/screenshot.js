const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 1000,
    deviceScaleFactor: 1,
  });
  const filePath = "file://" + path.resolve(__dirname, "../transformations/index.html");
  await page.goto(filePath, { waitUntil: "networkidle2" });

  await page.screenshot({ path: "screengrab.png", fullPage: true });
  console.log(filePath);

  await browser.close();
})();
