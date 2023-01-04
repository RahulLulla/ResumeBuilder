const createLocalPDF = function (blob) {
  var url = window.URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "Resume.pdf";
  document.body.append(a);
  console.log("Creating local PDF", new Date().toJSON("hh:mm:ss.ms"));
  a.click();
  a.remove();
};

export default createLocalPDF;
