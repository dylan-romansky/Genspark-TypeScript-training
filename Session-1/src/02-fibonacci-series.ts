function fibonacci(num: number)	{
	let last: number = 0;
	let curr: number = 1;
	for (let i: number = 0; i < num; i++)	{
		console.log(curr);
		let tmp: number = curr;
		curr += last;
		last = tmp;
	}
}

console.log("finding first 10");
fibonacci(10);
