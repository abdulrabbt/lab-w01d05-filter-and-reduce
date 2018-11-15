var employees = [
	{
		name: 'Ghadz',
		status: 'full-time',
		weeklyPay: 600
	},
	{
		name: 'Jax',
		status: 'part-time',
		weeklyPay: 200
	},
	{
		name: 'Jars',
		status: 'full-time',
		weeklyPay: 250
	},
	{
		name: 'Trevs',
		status: 'part-time',
		weeklyPay: 500
	},
	{
		name: 'Sauron',
		status: 'full-time',
		weeklyPay: 5000
	},
	{
		name: 'Patty Pancakes',
		status: 'full-time',
		weeklyPay: 300
	}
]


var yourPayments = [
	220,
	350,
	300,
	280,
	500
]
```



Your lovely client, Ms. Crocker, has some more requests.  Use the above data structures to answer the next few problems:

1.  Betty can't remember which of her employees work full-time.  Using filter, create a new array of only the full-time employees.

2.  Some employees are ready to strike!  They claim that they are working full-time but only getting paid part-time rates. Using filter, create an array that only contains the employees that are both full-time and get paid less than 500.  

3.  Betty decisively hates making multiple payments to you so she wants to pay you up front.  All of it.  At once.  Right now.  Use reduce to create a variable called "paycheck" that is equal to the total of your payments.

4.  Betty wants to figure out how much she is paying the part-timers this week.  Use reduce to create a variable called "ptPay" that is equal to the sum of all the part-timers weekly payments.
