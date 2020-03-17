// #!/usr/bin/env node

// const program = require('commander');
// const argv = console.log(program.parse(process.argv))
// const commands = console.log(process)

// const clear = require('clear');
// const chalk = require('chalk');
// const figlet = require('figlet');

// // console.log( "SheBangs" );;

// clear();

// console.log(
//   chalk.yellow(
//     figlet.textSync('Hello ', { horizontalLayout: 'full' })
//   )
// );


// const sensorA = [15,-4,56,10,-23]
// const sensorB = [14,-9,56,14,-23]

// function absolute() {
//   let absDiff = []
//   for(let a = 0; a < sensorA.length; a+=1){
//     for(let b = 0; b < sensorB.length; b+=1){
//       absDiff.push(Math.abs(Math.abs(sensorA[a]) - Math.abs(sensorB[b])));
//     }
//   }
//   return absDiff
// }

//console.log(absolute());

// function recusiveSol(sensorA, sensorB, size = 0) {
//   let absDiff = [];
//   if(size === sensorA.length){
//     return;
//   }
  
//   absDiff.push(Math.abs((Math.abs(sensorA[size]) - Math.abs(sensorB[size]))));
  
//   size+=1;
//   return recusiveSol(sensorA, sensorB)
// }

// const result = recusiveSol(sensorA, sensorB);
// console.log(result);


// https://www.youtube.com/watch?v=2bkfA2fHVwg&list=PLKQ5LYb497AZIZe9dBWy8GwLluVaMQVj0&index=2
//create all possible permutations
// function permutation() {
//   let count = []
//   for(let left = 0; left < 10; left++){
//       for(let middle = 0; middle < 10; middle++){
//           for(let right = 0; right < 10; right++){
//               //condiition 
//               // if(left !== right && left !== middle && right !== middle){
//               //   if(left + middle + right === 12 ){
//               //     if(middle % 2 === 0){
//               //       count.push([left, middle, right]);
//               //     }
//               //   }
//               // }
//               if(isValid(left,middle,right)) count.push([left, middle, right]);
//           }
//       }
//   }
// return count;
// }

//create exceptions: condition
//booleon
// function isValid(left, right, middle) {
//   return (left !== right && left !== middle && right !== middle) && (left + middle + right === 12 ) && (middle % 2 === 0)
// }

// console.log(permutation());

// const flights = [['LGA','BWI'],['BWI','CLT'],['CLT','MIA'],['MIA','LAX']];

// const combineFlights = flights.reduce((a, b) => a.concat(b))

// console.log(combineFlights)

//returns only the dups
// const filterFlights = combineFlights.filter((a, b, arr) => arr.indexOf(a) !== b)

// console.log(filterFlights)

// const set = new Set(combineFlights);
// console.log(set);
// const array = Array.from(set)
// console.log(array)

