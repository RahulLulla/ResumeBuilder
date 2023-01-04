import createLocalPDF from "./createLocalPDF";

const createAndGetPDF = async function (resumeContext) {
  console.log("Here's the forms data:", resumeContext);
  console.log("Working on POST Request", new Date().toJSON("hh:mm:ss.ms"));
  await fetch("/create-pdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resume: resumeContext }),
  })
    .then(() => {
      console.log("POST Request Finished", new Date().toJSON("hh:mm:ss.ms"));
    })
    .catch((err) => {
      console.log("Fetch Request Err:", err);
    });
  setTimeout(() => {
    console.log("Working on GET Request", new Date().toJSON("hh:mm:ss.ms"));
    fetch("/get-pdf", {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
      },
    })
      .then((res) => res.blob())
      .then((blob) => {
        console.log("GET Request Finished", new Date().toJSON("hh:mm:ss.ms"));
        createLocalPDF(blob);
      })
      .catch((err) => {
        console.log("Fetch Request Err:", err);
      });
  }, 3000);
};

export default createAndGetPDF;
