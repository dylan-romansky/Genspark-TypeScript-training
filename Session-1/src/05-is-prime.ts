function isPrime(num: number)	{
	//due to the properties of division, remainders, and integer math
	//the highest value we will ever need to check to know if our number
	//is prime is the square root of the number
	if (num <= 1)
		return false;
	if (num == 2)
		return true;
	let squ: number = Math.sqrt(num);
	for (let div: number = 2; div < squ; div++)	{
		if (num % 2 == 0)
			return false;
	}
	return true;
}

for (let i: number = 1; i < 20; i++)	{
	console.log(i + (isPrime(i) ? ": prime" : ""));
}
