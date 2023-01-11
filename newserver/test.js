/*
Code Reference link: https://medium.com/@hardeek.sharma/converting-html-template-to-pdf-using-nodejs-2eff0247b50
*/
const fs = require("fs");
const path = require("path");
const utils = require("util");
const puppeteer = require("puppeteer");
// const hb = require("handlebars");
const readFile = utils.promisify(fs.readFile);
async function getTemplateHtml() {
  console.log("Loading template file in memory");
  try {
    const invoicePath = path.resolve("./resume-template.html");
    return await readFile(invoicePath, "utf8");
  } catch (err) {
    return Promise.reject("Could not load html template");
  }
}

async function generatePdf() {
  let data = {};
  getTemplateHtml()
    .then(async (res) => {
      // console.log(res);
      // console.log("Compiling the template with handlebars");
      // const template = hb.compile(res, { strict: true });
      // const result = template(data);
      const html = res;
      const browser = await puppeteer.launch({
        headless: true,
      });
      const page = await browser.newPage();
      // await page.goto(`data:text/html,${html}`, { waitUntil: "networkidle2" });

      await page.setContent(html, { waitUntil: "networkidle0" });
      await page.addStyleTag({ path: "./resume-template.css" });

      await page.evaluate(async () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
        const promise = new Promise((resolve, reject) => {
          link.onload = resolve;
          link.onerror = reject;
        });
        document.head.appendChild(link);
        await promise;
      });

      await page.evaluate(async () => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = "https://fonts.googleapis.com";
        document.head.appendChild(link);
      });

      await page.evaluate(async () => {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = "https://fonts.gstatic.com";
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });

      await page.evaluate(async () => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href =
          "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
        const promise = new Promise((resolve, reject) => {
          link.onload = resolve;
          link.onerror = reject;
        });
        document.head.appendChild(link);
        await promise;
      });

      // await page.emulateMediaType("print");
      // await page.waitForNavigation();

      await page.pdf({
        path: "invoice.pdf",
        format: "A4",
        printBackground: true,
      });
      await browser.close();
      console.log("PDF Generated");
    })
    .catch((err) => {
      console.error(err);
    });
}
generatePdf();

/*
await page.goto("data:text/html," + html, {
  waitUntil: "networkidle2",
});
await page.goto(
  "file:///C:/Users/rahul/OneDrive/Desktop/Home/Web%20Development/Udemy%20Course/01-starting-setup/01-starting-setup/Resume-Builder/server/testing/web/empty.html"
  // C:\Users\rahul\OneDrive\Desktop\Home\Web Development\Udemy Course\01-starting-setup\01-starting-setup\Resume-Builder\server\testing\web\empty.html
);
*/
