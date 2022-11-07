function isLeapYear(year: number)	{
	return (year % 4 ? false : true);
}

for (let test: number = 2000; test <= 2022; test++)	{
	console.log(test + "" + (isLeapYear(test) ? ": leap" : ""));
}
