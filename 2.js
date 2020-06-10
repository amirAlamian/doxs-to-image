// var docxConverter = require('docx-pdf');
// docxConverter('1.docx', '1.pdf', function (err, result) {
//   if (err) {
//     console.log(err);
//   }
//   console.log('result' + result);
// });
const PDF2Pic = require("pdf2pic");
 
const pdf2pic = new PDF2Pic({
  density: 100,           // output pixels per inch
  savename: "untitled",   // output file name
  savedir: "./images",    // output file location
  format: "png",          // output file format
  size: "600x600"         // output size in pixels
});
 
pdf2pic.convertBulk("./1.pdf", [3,4,6]).then((resolve) => {
  console.log("image converter successfully!");
 
  return resolve;
});