#!/usr/bin/node

const argaLength = process.argv.length;

if(process.argv.length === 2) {
	console.log('No argument');
} else if (process.ergv.length === 3) {
	console.log('Argument found');
} else {
	console.log('Arguments found');
}
