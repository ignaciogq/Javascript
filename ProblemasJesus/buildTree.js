let employees = [
	{
		"EmployeeID": 1,
		"LastName": "Davolio",
		"FirstName": "Nancy",
		"Title": "Sales Representative",
		"BirthDate": "1948-12-08T00:00:00",
		"HireDate": "1992-05-01T00:00:00",
		"Address": "507 - 20th Ave. E.\r\nApt. 2A",
		"City": "Seattle",
		"Region": "WA",
		"PostalCode": "98122",
		"Country": "USA",
		"HomePhone": "(206) 555-9857",
		"Extension": "5467",
		"ReportsTo": 2
	},
	{
		"EmployeeID": 2,
		"LastName": "Fuller",
		"FirstName": "Andrew",
		"Title": "Vice President, Sales",
		"BirthDate": "1952-02-19T00:00:00",
		"HireDate": "1992-08-14T00:00:00",
		"Address": "908 W. Capital Way",
		"City": "Tacoma",
		"Region": "WA",
		"PostalCode": "98401",
		"Country": "USA",
		"HomePhone": "(206) 555-9482",
		"Extension": "3457"
	},
	{
		"EmployeeID": 3,
		"LastName": "Leverling",
		"FirstName": "Janet",
		"Title": "Sales Representative",
		"BirthDate": "1963-08-30T00:00:00",
		"HireDate": "1992-04-01T00:00:00",
		"Address": "722 Moss Bay Blvd.",
		"City": "Kirkland",
		"Region": "WA",
		"PostalCode": "98033",
		"Country": "USA",
		"HomePhone": "(206) 555-3412",
		"Extension": "3355",
		"ReportsTo": 2
	},
	{
		"EmployeeID": 4,
		"LastName": "Peacock",
		"FirstName": "Margaret",
		"Title": "Sales Representative",
		"BirthDate": "1937-09-19T00:00:00",
		"HireDate": "1993-05-03T00:00:00",
		"Address": "4110 Old Redmond Rd.",
		"City": "Redmond",
		"Region": "WA",
		"PostalCode": "98052",
		"Country": "USA",
		"HomePhone": "(206) 555-8122",
		"Extension": "5176",
		"ReportsTo": 2
	},
	{
		"EmployeeID": 5,
		"LastName": "Buchanan",
		"FirstName": "Steven",
		"Title": "Sales Manager",
		"BirthDate": "1955-03-04T00:00:00",
		"HireDate": "1993-10-17T00:00:00",
		"Address": "14 Garrett Hill",
		"City": "London",
		"PostalCode": "SW1 8JR",
		"Country": "UK",
		"HomePhone": "(71) 555-4848",
		"Extension": "3453",
		"ReportsTo": 2
	},
	{
		"EmployeeID": 6,
		"LastName": "Suyama",
		"FirstName": "Michael",
		"Title": "Sales Representative",
		"BirthDate": "1963-07-02T00:00:00",
		"HireDate": "1993-10-17T00:00:00",
		"Address": "Coventry House\r\nMiner Rd.",
		"City": "London",
		"PostalCode": "EC2 7JR",
		"Country": "UK",
		"HomePhone": "(71) 555-7773",
		"Extension": "428",
		"ReportsTo": 5
	},
	{
		"EmployeeID": 7,
		"LastName": "King",
		"FirstName": "Robert",
		"Title": "Sales Representative",
		"BirthDate": "1960-05-29T00:00:00",
		"HireDate": "1994-01-02T00:00:00",
		"Address": "Edgeham Hollow\r\nWinchester Way",
		"City": "London",
		"PostalCode": "RG1 9SP",
		"Country": "UK",
		"HomePhone": "(71) 555-5598",
		"Extension": "465",
		"ReportsTo": 5
	},
	{
		"EmployeeID": 8,
		"LastName": "Callahan",
		"FirstName": "Laura",
		"Title": "Inside Sales Coordinator",
		"BirthDate": "1958-01-09T00:00:00",
		"HireDate": "1994-03-05T00:00:00",
		"Address": "4726 - 11th Ave. N.E.",
		"City": "Seattle",
		"Region": "WA",
		"PostalCode": "98105",
		"Country": "USA",
		"HomePhone": "(206) 555-1189",
		"Extension": "2344",
		"ReportsTo": 2
	},
	{
		"EmployeeID": 9,
		"LastName": "Dodsworth",
		"FirstName": "Anne",
		"Title": "Sales Representative",
		"BirthDate": "1966-01-27T00:00:00",
		"HireDate": "1994-11-15T00:00:00",
		"Address": "7 Houndstooth Rd.",
		"City": "London",
		"PostalCode": "WG2 7LT",
		"Country": "UK",
		"HomePhone": "(71) 555-4444",
		"Extension": "452",
		"ReportsTo": 5
	}
]

/*
  añade a cada empleado una propiedad subordinates
  que es un array con los empleados subordinados directos.
  
  Devuelve un array con los empleados que no tienen jefe

*/




/* function buildTree(employees) {

	let rootEmployes = [];

	for (let i = 0; i < employees.length; i++) {
		
		let subordinates = [];
		let currentEmployee = employees[i];
		currentEmployee.Subordinates = subordinates;

		if (currentEmployee.ReportsTo == undefined){
			rootEmployes.push(currentEmployee);
		}

		for (let j = 0; j < employees.length; j++){
			if (currentEmployee.EmployeeID === employees[j].ReportsTo) {
				subordinates.push(employees[j]);
			}
		
		}
		
	}
	return rootEmployes;
}
const rootEmployes = buildTree(employees);
console.log(rootEmployes); */


function buildTree(employees) {
    let employeeById = [];
    let rootEmployees = [];

	for (let i = 0; i < employees.length; i++){

		const emp = employees[i];
		employeeById[emp.EmployeeID] = emp;
		emp.Subordinates = [];
	}

    for (let i = 0; i < employees.length; i++){
        let currentEmployee = employees[i];
        

        if (currentEmployee.ReportsTo == undefined){
			rootEmployees.push(currentEmployee);
		}
        else {
           const manager = employeeById[currentEmployee.ReportsTo];
		   manager.Subordinates.push(currentEmployee); 
        }
    }
    return rootEmployees;
}

console.log(buildTree(employees));
