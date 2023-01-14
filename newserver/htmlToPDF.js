const path = require("path"),
  parseHTML = require("./parseHTML"),
  fs = require("fs"),
  express = require("express"),
  utils = require("util"),
  puppeteer = require("puppeteer");

const readFile = utils.promisify(fs.readFile);

async function getHtmlFile(file) {
  try {
    const filePath = path.resolve(file);
    return await readFile(filePath, "utf8");
  } catch (err) {
    return Promise.reject("Could not load html file");
  }
}

const htmlToPDF = (resumeData) => {
  return new Promise((resolve, reject) => {
    console.log(
      "Inside POST method(htmlToPDF):",
      new Date().toJSON("hh:mm:ss.ms")
    );
    const template = fs.readFileSync("./resume-template.html", "utf-8");
    // const content = ejs.render(template, { title: "Resume" });
    const newContent = parseHTML(template, resumeData.resume);
    fs.writeFileSync(path.resolve(__dirname, "./resume.html"), newContent);
    getHtmlFile("./resume.html")
      .then(async (res) => {
        const html = res;
        const browser = await puppeteer.launch({
          args: ["--no-sandbox"],
          headless: true,
        });
        const page = await browser.newPage();

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

        await page.pdf({
          path: "resume-template.pdf",
          format: "A4",
          printBackground: true,
        });
        await browser.close();
        console.log("Server PDF created at:", new Date().toJSON("hh:mm:ss.ms"));
        fs.unlink("./resume.html", function (err) {
          if (err)
            console.log(
              "/get-pdf: Error in resume.html file deletion operation.",
              err
            );
          else
            console.log(
              "resume.html file Deleted at Server",
              new Date().toJSON("hh:mm:ss.ms")
            );
        });
        resolve("Success");
      })
      .catch((err) => {
        console.error(err);
        reject("Failure");
      });
  });
};

module.exports = htmlToPDF;
