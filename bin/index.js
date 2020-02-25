#!/usr/bin/env node
const message = console.log('Hello My Love again')

// const program = require('commander');
// const argv = console.log(program.parse(process.argv))
// const commands = console.log(process)

const fs = require('fs');

// { recursive: true } was the key
const createDir = (dirs) => {
    dirs.map(dirPath => {
        fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err) throw err;
            console.log('The dir has been created!');
        })
    })
}

const createFile = (files) => {
    files.map(file => {
        
        fs.writeFile(`${file}`, `//Hello ${file}`, 'utf8', (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
}

rootPath = './app-name'; //dynamic

//list of directories
const dirs = [
    `${rootPath}/dist`,
    `${rootPath}/src`,
]

const files = [
    `${rootPath}/webpack.config.js`,
    `${rootPath}/package.json`,
    `${rootPath}/src/index.js`,
    `${rootPath}/src/index.html`,
    `${rootPath}/dist/index.html`,
]

createDir(dirs);
createFile(files);



