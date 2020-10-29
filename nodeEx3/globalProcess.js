// to work with builtin module 'process'

console.log(process.pid); // obtain process id

console.log(process.versions.node); // obtain the version of running NodeJS

// to obtain input values information from the terminal while we load applications
console.log(process.argv);

// to obtain required arguments variables 
const [, , firstName, LastName] = process.argv;
console.log(`You name is ${firstName} ${LastName}`);
// Type in CLI: node globalProcess Volodymyr Sych
// Result You name is Volodymyr Sych

// to input the typed values for a function
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`${greeting} ${user}`);
// Type in CLI: node globalProcess --user Volodymyr --greeting "Hidely Hoe"
// Result: Hidely Hoe Volodymyr