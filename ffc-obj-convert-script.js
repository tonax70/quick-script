// create object string out of webpage table separated by linebreak and more space

const input = `
id	name	role	isEVAEligible	priority
2	"Bart"	"Pilot"	false	8
3	"Caroline"	"Engineer"	true	4
4	"Diego"	"Scientist"	false	1
5	"Elise"	"Medic"	true	7
6	"Felix"	"Navigator"	true	6
7	"Gertrude"	"Communications"	false	4
8	"Hank"	"Mechanic"	true	2
9	"Irene"	"Specialist"	true	5
10	"Joan"	"Technician"	false	1

`;

const lines = input.trim().split(/\n/);
const header = lines[0].trim().split(/\t/);

console.log("FFC vertical obj data generator\n");

function horizontalObjCreator (name, header, values) {
	if (header.length !== values.length) {
		console.log('invalid object');
		return;
	}
	let output = '';
	output += `const ${name} = {\n`;
	
	let idx = 0;
	for (const key of header) {
	output += `${key} : ${values[idx]},\n`;
	idx++;
	}
	
	output += `};\n`;
	return output;
}

lines.forEach((line, index) => {
	if (index === 0) return;
	const objName = "obj"+index;
	const objStr = horizontalObjCreator(objName, header, lines[index].trim().split(/\t/));
	console.log(objStr + '\n');
});