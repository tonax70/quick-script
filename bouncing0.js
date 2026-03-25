//========== Notepad++ template | Press F5 to opne the RUN window ============

//For running the file right away, use:

//## How to run it on notepad++
//- press F5
//- to run the file right away, use:
//- enter `"C:\Program Files\Git\git-bash.exe" -c 'cd "$(cygpath -u "$(CURRENT_DIRECTORY)")"; node "$(cygpath -u "$(FULL_CURRENT_PATH)")"; exec bash'`
//
//- to just open the directory path, use: 
//- `"C:\Program Files\Git\git-bash.exe" -c 'cd "$(cygpath -u "$(CURRENT_DIRECTORY)")"; exec bash;`
//
const grid = [['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','O','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
];
let velX = 1;
const velY = 2;
const isBall = (ch) => ch === 'O';
const clearBall = (grid,x,y) => grid[y][x] = ".";
const placeBall = (grid,x,y) => grid[y][x] = "O";

function locateBall (grid) {
	let x = -1;
	let y = -1;
		for (let i = 0; i < grid.length; i++) {
		     for (let j = 0; j < grid[i].length;j++) {
				 if (isBall(grid[i][j])) {
				 x = j;
				 y = i;
				 break;
				 }
		}
	}
	return [x,y];
}

function updateBall (grid) {
	let [x,y] = locateBall(grid);
	if 
}


function drawTable (grid) {
	const verticalEdge = "=".repeat(grid[0].length*2+2).concat('\n');
	let tableString = "";
				tableString += verticalEdge;
	for (let i = 0; i < grid.length; i++) {
		tableString += "|";
		for (let j = 0; j < grid[i].length;j++) {
			if (j < grid[i].length - 1) {
				tableString += ` ${grid[i][j]}`;
			} else {
				tableString +=` ${grid[i][j]} |\n`;
			}
		}
	}
			tableString += verticalEdge;
	return tableString;
}
//console.log(drawTable(grid));


let val = 0;

// 1. setInterval returns an ID we need for later
const intervalId = setInterval(() => {
    console.clear();
    console.log(val);
    console.log(drawTable(grid));
    val++; 
console.log(locateBall(grid));
    if (val > 10) {
        clearInterval(intervalId); 
    }
}, 100);

