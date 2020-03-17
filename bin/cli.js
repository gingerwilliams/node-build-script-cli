const arg = require('arg');
// const argv = ['--foo', 'bar', '-ff', 'baz', '--foo', '--foo', 'qux', '-fff', 'qix'];

//processes arguments and returns an object
function parseArgsOptions(flags){
    //takes two objects as arguments arg({},{})
    const args = arg(
        {
            '--yes': Boolean, //fist flag
            '--y': '--yes' //fist flag
        },
        {
            argv: flags.slice(2) //removes the first two elements from the array
        }
    );

    console.log('parseArgsOptions', args);

    return {
        skip: args['--yes'] || false,
        appName: args._[0] || `${template}-app`,
        template: args._[1] || 'react', //parseArgsOptions { _: [ 'typescript' ] }
    }
}

//  Ask for template type
// async function promptForOptions(){
//     const defaultTemplate = 'React';
//     if(options.skip) {
//         return {
//             template: defaultTemplate;
//         }
//     }

//     const questions = []
//     if(options.template) {
//         questions.push()
//     }

//     //option for Typescript Template


// }

const cli = (args)=> {
    let options = parseArgsOptions(args)
    console.log('process.arv',args)
    console.log('options', options);
}

exports.cli = cli;

//Unknown or unexpected option: --test-project
//https://www.npmjs.com/package/arg

// create-react-project --new-project-name
// const program = require('commander');

// const argv = program.parse(process.argv)
// console.log(process.argv);

// export function cli(args){
//     console.log(args);
// }