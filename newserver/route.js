const fs = require("fs"),
  htmlToPDF = require("./htmlToPDF"),
  path = require("path"),
  bodyParser = require("body-parser");

module.exports = (app, hostURL) => {
  app.use(bodyParser.json());

  app.post("/create-pdf", async (req, res) => {
    await htmlToPDF(req.body, hostURL);
    res.json({ message: "Data received" });
  });

  app.get("/get-pdf", (req, res) => {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=Resume.pdf");
    res.download("./resume-template.pdf", function (err) {
      if (err) console.log("API: get-pdf/ Error while sending PDF:", err);
      fs.unlink("resume-template.pdf", function (err) {
        if (err)
          console.log("/get-pdf: Error in File deletion operation.", err);
        else
          console.log(
            "File Deleted at Server",
            new Date().toJSON("hh:mm:ss.ms")
          );
      });
    });
  });

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./build", "index.html"));
  });
};
