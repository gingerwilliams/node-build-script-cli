#!/usr/bin/env node
const message = console.log('Hello My Love again')

// const program = require('commander');
// const argv = console.log(program.parse(process.argv))
// const commands = console.log(process)

const fs = require('fs');

// { recursive: true } was the key
const createDir = (dirPath) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) throw err;
        console.log('The dir has been created!');
    })
}

const createFile = (filePath, fileName, fileConent) => {
    fs.writeFile(`${filePath}/${fileName}` , fileConent, 'utf8', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

path = './src';
file = 'index.js'
content = '//Hello Node.js';

createDir(path);
createFile(path,file, content)






// console.log('test fs.mkdir', directory)



// module.exports = {
//     //directory: createDirectory,
//     message: message,
//     //write: write
//     //commands: commands
// }




