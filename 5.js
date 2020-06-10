const pdf = require('pdf-poppler');
const path = require('path');
let fs= require("fs");
let file = "C:/Users/WIN10/Desktop/Maktab/startToWriteSever/pdf to image/1.pdf"
if(fs.existsSync(file)){
    console.log("file is found");  
}
let opts = {
    format: 'jpeg',
    out_dir: path.dirname(file),
    out_prefix: 'test',
    page: null
}
pdf.convert(file, opts)
    .then(res => {
        console.log('Successfully converted');
    })
    .catch(error => {
        console.error(error);
    })
