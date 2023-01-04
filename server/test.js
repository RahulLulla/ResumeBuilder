const path = require("path");
const express = require("express");
const html_to_pdf = require("html-pdf-node");
const fs = require("fs");
const app = express();
const PORT = 3000;
// process.env.PORT || 3001;
const ejs = require("ejs");

const template = fs.readFileSync("./src/public/resume-template.html", "utf-8");
const content = ejs.render(template, { title: "Resume" });
fs.writeFile(
  path.resolve(__dirname, "./src/public/index.html"),
  content,
  () => {
    app.use(express.static(__dirname + "/src/public"));

    const server = app.listen(PORT, async () => {
      const url = `http://localhost:${PORT}`;
      const options = { format: "A4", path: "example.pdf" };
      const file = { url };
      await html_to_pdf.generatePdf(file, options);
      console.log("Server is running....");
      server.close();
    });
  }
);
/*
const html_to_pdf = require("html-pdf-node");
const fs = require("fs");
let options = {
  format: "A4",
  path: "./example.pdf",
};
fs.readFile("./resume-template.html", function (err, html) {
  if (err) {
    throw (":Error:", err);
  }
  let file = {
    // content: "<h1>Welcome to html-pdf-node</h1>",
    content: html,
  };
  html_to_pdf.generatePdf(file, options).then((pdfBuffer) => {
    console.log("PDF Buffer:-", pdfBuffer);
  });
});
*/
