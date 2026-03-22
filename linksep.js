let str = '15000000,"15 triệu",https://www.facebook.com/reel/d23663926847/| 6500000,"6,5 triệu",https://www.facebook.com/reel/8v3720771137/|';
let separated = str.split("|");
let res = [];
let count = 0;
let extractLink = separated.map(
(vidBlock) => 	vidBlock
					.trim()
					.split(",")
					.filter( 
							(e) => e.includes("https"))
							).forEach(
										(e) => res.push(e[0])
										);
res.forEach(
	e => {console.log(e); count++}
	);
console.log("Extracted: " + count + " links.");