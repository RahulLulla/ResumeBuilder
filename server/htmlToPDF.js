const path = require("path"),
  html_to_pdf = require("html-pdf-node"),
  parseHTML = require("./parseHTML"),
  ejs = require("ejs"),
  fs = require("fs"),
  express = require("express");

const PORT2 = process.env.PORT || 3002;

const htmlToPDF = (resumeData, hostURL) => {
  const app = express();
  return new Promise((resolve, reject) => {
    const template = fs.readFileSync(
      "./src/public/resume-template.html",
      "utf-8"
    );
    const content = ejs.render(template, { title: "Resume" });
    const newContent = parseHTML(content, resumeData.resume);
    fs.writeFileSync(
      path.resolve(__dirname, "./src/public/index.html"),
      newContent
    );

    app.use(express.static(__dirname + "/src/public"));
    console.log(
      "Inside POST method(htmlToPDF):",
      new Date().toJSON("hh:mm:ss.ms")
    );

    const server = app.listen(PORT2, async () => {
      const url = `${hostURL}:${PORT2}`;
      const options = { format: "A4", path: "resume-template.pdf" };
      const file = { url };
      await html_to_pdf.generatePdf(file, options);
      console.log("Server PDF created at:", new Date().toJSON("hh:mm:ss.ms"));
      server.close();
      resolve("Success");
    });
  });
};

module.exports = htmlToPDF;
