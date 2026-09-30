function firstWord(s) {
  // your code here
	let first=s.split(" ");
	if(first.length>0) return first[0];
	return  "";
}

// Do not change the code below

const s = prompt("Enter String:");
console.log(alert(firstWord(s)));
