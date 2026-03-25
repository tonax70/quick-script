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
let grid = [  ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','.','.','.','.','.','.','.','.'],
              ['.','.','.','.','.','ඞ','.','.','.','.','.','.','.'],
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
let velY = 2;
const isBall = (ch) => ch === 'ඞ';
let posX = locateBall(grid)[0];
let posY = locateBall(grid)[1];
const clearBall = (grid,x,y) => {
	grid[y][x] = ".";
	return grid;
}
const placeBall = (grid,x,y) => {
	grid[y][x] = "ඞ";
	return grid;
}

function locateBall (grid) {
		for (let i = 0; i < grid.length; i++) {
		     for (let j = 0; j < grid[i].length;j++) {
				 if (isBall(grid[i][j])) {
				 return [j, i]; 
				 break;
				 }
		}
	}
	return [-1, -1];
}

function updateBall(grid) {
    let gridtmp = grid.map(row => row.slice());

    clearBall(gridtmp, posX, posY);

    const maxX = grid[0].length - 1;
    const maxY = grid.length - 1;

    if (posX + velX > maxX) {
        posX = maxX;
        velX *= -1;
    } else if (posX + velX < 0) {
        posX = 0;
        velX *= -1;
    }

    if (posY + velY > maxY) {
        posY = maxY;
        velY *= -1;
    } else if (posY + velY < 0) {
        posY = 0;
        velY *= -1;
    }

    posX += velX;
    posY += velY;

    placeBall(gridtmp, posX, posY);

    return gridtmp;
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

const intervalId = setInterval(() => {
    console.clear();
	console.log(locateBall(grid));
    grid = updateBall (grid);	
    console.log(drawTable(grid));
  if (val > 10) {
       clearInterval(intervalId); 
   }
}, 100);

