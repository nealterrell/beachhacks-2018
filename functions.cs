string[] faculty = {"Terrell", "Gold", "Aliasgari", "Monge", "Winter"};

var authorizedFaculty = faculty.Where(f => f.Length >= 5).ToList();
var facultyLengths = facult.Select(f => f.Length);