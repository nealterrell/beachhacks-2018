// Programming is all patterns. What does this example have in common with loops.js?

function getAThroughG(names) {
    var valid = [];
    for (var i = 0; i < names.length; i = i + 1) {
        var n = names[i];
        if (n[0] >= 'A' && n[0] <= 'G') {
            valid.push(n);
        }
    }
    return valid
}

function printNames(names) {
    for (var i = 0; i < names.length; i = i + 1) {
        console.log(names[i]);
    }
}

var faculty = ["Terrell", "Gold", "Aliasgari", "Monge", "Winter"];
var aThroughG = getAThroughG(faculty);
printNames(aThroughG);