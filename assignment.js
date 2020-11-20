(function () {
  const listOfStudents = [
    { firstName: "John", lastName: "Doe", age: 25, score: 80.5 },
    { firstName: "Anna", lastName: "Cameron", age: 32, score: 83.0 },
    { firstName: "Jeffrey", lastName: "Way", age: 28, score: 79.13 },
    { firstName: "Ava", lastName: "Brown", age: 30, score: 94.27 },
    { firstName: "Abraham", lastName: "Doe", age: 36, score: 63.1 },
  ];

  // #1. Sort students by firstName and lastName
  const sortByName = (students) => {
    // TODO: Complete function
    return students.sort(function(a,b) {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  };

  // #2. Filter all students by age >= 30
  const filterByAge = (students) => {
    // TODO: Complete function
    return students.filter(listOfStudents=>listOfStudents.age>=30);
  };

  // #3. Calculate total score
  const totalScore = (students) => {
    // TODO: Complete function
   return students.reduce((total,listOfStudents)=> {
    return total + listOfStudents.score
   },0)
   };

  // #4. Attach upper cased `fullName` property to all students
  // e.g. { firstName: "John", lastName: "Doe", age: 25, score: 80.5, fullName: 'JOHN DOE' }
  const appendFullNameProperty = (students) => {
    // TODO: Complete function
    return students.map(listOfStudents => {
      let newProperty = listOfStudents.firstName.toUpperCase() + " " + listOfStudents.lastName.toUpperCase()
      return {...listOfStudents, fullName: newProperty}
    })
  };

  console.log("#1", sortByName(listOfStudents));
  console.log("#2", filterByAge(listOfStudents));
  console.log("#3", totalScore(listOfStudents));
  console.log("#4", appendFullNameProperty(listOfStudents));
})();



