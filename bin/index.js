#!/usr/bin/env node
const message = console.log('Hello My Love again')


// const program = require('commander');
// const argv = console.log(program.parse(process.argv))
// const commands = console.log(process)

const fs = require('fs');

const callback = (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}
// fs.writeFile('filename', 'fileContents', 'utf8', callback);
const write = fs.writeFile('message.js', '//Hello Node.js', 'utf8', callback);

module.exports = {
    message: message,
    write: write
    //commands: commands
}

//start 


