const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile('File.txt','Hello',(err) =>{
console.log("created");});
	// write code here
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	fs.readFile('File.txt','utf-8',(err,data) =>{
console.log(data);});
	// write code here
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFiles('File.txt',' World',(err) =>{
console.log("appended");});
	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	fs.unlink("Newfile.txt",(err) =>{
console.log("delted");});
	// write code here
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
