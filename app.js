console.log("Welcome to the temperature converter.");

var debugging = false;

function debug(msg) {
    if(debugging) {
        console.log(msg);
    }
}

debug("testing");

debug(process.argv);

if(process.argv.length < 4) {
	console.log("Usage: " + process.argv[1] + " <temperature(C/F/K)> <C/F/K>\n  Example: " + process.argv[1] + " 100C F");
}

const ctemps = require('./cf.js');
const ktemps = require('./ck.js');

let srcTemp = process.argv[2].slice(0, process.argv[2].length-1);
let srcScale = process.argv[2][process.argv[2].length-1].toUpperCase();
let destTemp = process.argv[3].toUpperCase();
let answer;

debug(srcTemp + '\n' + srcScale + '\n' + destTemp);



switch(srcScale.toUpperCase()) {
	case 'F':
		if(destTemp === 'C') {
			answer = ctemps.FtoC(srcTemp) + 'C';
		} else if(destTemp ==='K') {
			//console.log(ctemps.FtoC(srcTemp));
			answer = ktemps.CtoK(ctemps.FtoC(srcTemp)) + 'K';
		}
		break;
	case 'K':
		if(destTemp === 'C') {
			answer = ktemps.KtoC(srcTemp) + 'C';
		} else if(destTemp ==='F') {
			//console.log(ctemps.FtoC(srcTemp));
			answer = ctemps.CtoF(ktemps.KtoC(srcTemp)) + 'F';
		}
		break;
	case 'C':
		if(destTemp === 'F') {
			answer = ctemps.CtoF(srcTemp) + 'F';
		} else if(destTemp ==='K') {
			//console.log(ctemps.FtoC(srcTemp));
			answer = ktemps.CtoK(srcTemp) + 'K';
		}
		break;
	default:
		console.log("Must choose between F, C, and K in your temperature.")
}

console.log("Answer: " + answer);