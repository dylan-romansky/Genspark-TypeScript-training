function reverseString(str: string)	{
	let reversed: string = "";
	for (let char of str)	{
		reversed = char + reversed;
	}
	return reversed;
}

console.log("input: this is a test string")
console.log("output: " + reverseString("this is a test string"));
