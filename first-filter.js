// The list/array type in JavaScript has a method called filter. It takes
// a predicate function as a parameter

function isAuthorized(name) {
    return name.length >= 5;
}

function printNames(names) {
    for (var i = 0; i < names.length; i = i + 1) {
        console.log(names[i]);
    }
}

var faculty = ["Terrell", "Gold", "Aliasgari", "Monge", "Winter"];
var authorizedFaculty = faculty.filter(isAuthorized);
console.log("Authorized faculty:");
printNames(authorizedFaculty);

// But declaring a new predicate is tedious. Instead, we can just create
// an anonymous function and pass that to filter.
var aThroughG = faculty.filter((name) => name[0] >= 'A' && name[0] <= 'G');
console.log("Faculty, A through G:");
printNames(aThroughG);