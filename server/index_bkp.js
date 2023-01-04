const path = require("path");
const html_to_pdf = require("html-pdf-node");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());
const PORT2 = process.env.PORT || 3002;

const parseHTML = (content, resumeData) => {
  content = content.replace(
    "{profile-fullName}",
    resumeData.firstName + " " + resumeData.lastName
  );
  content = content.replace("{profile-phoneNumber}", resumeData.phoneNumber);
  content = content.replace("{profile-email}", resumeData.email);
  content = content.replace("{profile-website}", resumeData.website);
  content = content.replace(
    "{profile-address}",
    resumeData.city + ", " + resumeData.state
  );
  content = content.replace("{profile-company1Pos}", resumeData.company1Pos);
  content = content.replace(
    "{profile-company1Exp}",
    "@ " + resumeData.company1Exp
  );
  content = content.replace(
    "{profile-company1Duration}",
    resumeData.company1Duration
  );
  content = content.replace("{profile-company1Desc}", resumeData.company1Desc);
  content = content.replace("{profile-company2Pos}", resumeData.company2Pos);
  content = content.replace(
    "{profile-company2Exp}",
    "@ " + resumeData.company2Exp
  );
  content = content.replace(
    "{profile-company2Duration}",
    resumeData.company2Duration
  );
  content = content.replace("{profile-company2Desc}", resumeData.company2Desc);
  content = content.replace(
    "{profile-projectTitle1}",
    resumeData.projectTitle1
  );
  content = content.replace("{profile-projectLink1}", resumeData.projectLink1);
  content = content.replace("{profile-projectDesc1}", resumeData.projectDesc1);
  content = content.replace(
    "{profile-projectTitle2}",
    resumeData.projectTitle2
  );
  content = content.replace("{profile-projectLink2}", resumeData.projectLink2);
  content = content.replace("{profile-projectDesc2}", resumeData.projectDesc2);
  content = content.replace(
    "{profile-projectTitle1}",
    resumeData.projectTitle1
  );
  content = content.replace("{profile-skill1}", resumeData.skill1);
  content = content.replace("{profile-skill2}", resumeData.skill2);
  content = content.replace("{profile-skill3}", resumeData.skill3);
  content = content.replace("{profile-skill4}", resumeData.skill4);
  content = content.replace("{profile-skill5}", resumeData.skill5);
  content = content.replace("{profile-skill6}", resumeData.skill6);

  content = content.replace("{profile-collegeQual}", resumeData.collegeQual);
  content = content.replace("{profile-college}", resumeData.college);
  content = content.replace(
    "{profile-collegeYears}",
    resumeData.collegeStart + "-" + resumeData.collegeEnd
  );
  content = content.replace("{profile-collegeDesc}", resumeData.collegeDesc);
  content = content.replace("{profile-schoolQual}", resumeData.schoolQual);
  content = content.replace("{profile-school}", resumeData.school);
  content = content.replace(
    "{profile-schoolYears}",
    resumeData.schoolStart + "-" + resumeData.schoolEnd
  );
  content = content.replace("{profile-schoolDesc}", resumeData.schoolDesc);

  content = content.replace("{profile-interest1}", resumeData.interest1);
  content = content.replace("{profile-interest2}", resumeData.interest2);
  content = content.replace("{profile-interest3}", resumeData.interest3);
  content = content.replace("{profile-interest4}", resumeData.interest4);
  content = content.replace("{profile-interest5}", resumeData.interest5);
  content = content.replace("{profile-interest6}", resumeData.interest6);

  content = content.replace("{profile-linkedIn}", resumeData.linkedIn);
  content = content.replace("{profile-github}", resumeData.github);
  content = content.replace("{profile-twitter}", resumeData.twitter);
  return content;
};

const htmlToPDF = async (resumeData) => {
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
  console.log("Inside htmlToPDF:", new Date().toJSON("hh:mm:ss.ms"));
  const server = app.listen(PORT2, async () => {
    const url = `http://localhost:${PORT2}`;
    const options = { format: "A4", path: "resume-template.pdf" };
    const file = { url };
    await html_to_pdf.generatePdf(file, options);
    console.log("PDF created at:", new Date().toJSON("hh:mm:ss.ms"));
    server.close();
    //Wrong loc
    // fs.unlinkSync("resume-template.pdf");
    // console.log("File Deleted at Server");
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
    try {
      fs.unlinkSync("resume-template.pdf");
    } catch (err) {
      console.log(err);
    }
    console.log("File Deleted at Server", new Date().toJSON("hh:mm:ss.ms"));
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
