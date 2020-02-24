#!/usr/bin/env node

const clear = require('clear');
const chalk = require('chalk');
const figlet = require('figlet');

// console.log( "SheBangs" );;

clear();

console.log(
  chalk.yellow(
    figlet.textSync('Hello ', { horizontalLayout: 'full' })
  )
);