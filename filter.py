import itertools

faculty = ["Terrell", "Gold", "Aliasgari", "Monge", "Winter"]
authorizedFaculty = filter(lambda f: len(f) >= 5, faculty)
facultyLengths = map(lambda f: len(f), faculty)