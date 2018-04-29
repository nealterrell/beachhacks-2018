// Suppose I want to take a list of names and turn it into a list of integers,
// where each name is replaced by its length.

function namesToLengths(names) {
    var lengths = [];
    for (var i = 0; i < names.length; i++) {
        var n = names[i];
        var l = n.length;
        lengths.push(l);
    }
    return lengths;
}

// More loops! Ugh!
var faculty = ["Terrell", "Gold", "Aliasgari", "Monge", "Winter"];
var facultyLengths = namesToLengths(faculty);


// But this is just another pattern: given a collection, transform each element of the 
// collection into a new value. Lists in JavaScript have a function for this: map.
var newFacultyLengths = faculty.map((name) => name.length);
newFacultyLengths.forEach((l) => console.log(l));