const path = require("path");
const html_to_pdf = require("html-pdf-node");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const PORT2 = process.env.PORT || 3002;
const parseHTML = require("./parseHTML");
const hostURL = "http://localhost";
app.use(bodyParser.json());

const htmlToPDF = (resumeData) => {
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
      // const url = `http://localhost:${PORT2}`;
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
const ejs = require("ejs");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/create-pdf", async (req, res) => {
  await htmlToPDF(req.body);
  res.json({ message: "Data received" });
});

app.get("/get-pdf", (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=Resume.pdf");
  res.download("./resume-template.pdf", function (err) {
    if (err) console.log("API: get-pdf/ Error while sending PDF:", err);
    fs.unlink("resume-template.pdf", function (err) {
      if (err) console.log("/get-pdf: Error in File deletion operation.", err);
      else
        console.log("File Deleted at Server", new Date().toJSON("hh:mm:ss.ms"));
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
