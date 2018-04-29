var faculty = ["Terrell", "Gold", "Aliasgari", "Monge", "Winter"];
var authorizedFaculty = faculty.filter((name) => name.length >= 5);
authorizedFaculty.forEach((name) => console.log(name));