function getAuthorized(names) {
    var authorized = [];
    for (var i = 0; i < names.length; i == i + 1) {
        var n = names[i];
        if (n.length >= 5) {
            authorized.push(n);
        }
    }
    return authorized;
}

function printNames(names) {
    for (var i = 0; i < names.length; i = i + 1) {
        console.log(names[i]);
    }
}

var faculty = ["Terrell", "Gold", "Aliasgari", "Monge", "Winter"];
var authorizedFaculty = getAuthorized(faculty);
printNames(authorizedFaculty);