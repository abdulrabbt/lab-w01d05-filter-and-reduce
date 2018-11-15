


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



var fullTime = employees.filter(function(employee){
    return employee.status == 'full-time';
});

//console.log(fullTime);



var employeesStrike = employees.filter(function(employee){
    var paidLess;

    if (employee.status == 'full-time' && employee.weeklyPay < 500){
        paidLess = employee;
    }

    return paidLess;
});

console.log(employeesStrike);


var paycheck = yourPayments.reduce(function(accum, current){
    return accum + current ;
}, 0);

console.log(paycheck);




var ptPay = employees.reduce(function(accum, current){
    if (current.status === 'part-time'){
        return accum += current.weeklyPay;
    }else {
        return accum;
    }
}, 0);

console.log('Part-time payment', ptPay); 




var ptCheck = employees.reduce(function(acum, curr){
   
    return curr.status == "part-time" ? acum + curr.weeklyPay : acum ;
    
}, 0);

console.log(ptCheck);