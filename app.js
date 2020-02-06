console.log("Welcome to the temperature converter.");

//console.log(process.argv);

if(process.argv.length < 4) {
	console.log("Usage: " + process.argv[1] + " <temperature(C/F/K)> <C/F/K>\n  Example: " + process.argv[1] + " 100C F");
}

const temps = require('./cf.js');

console.log(temps.CtoF(100));
console.log(temps.FtoC(32));