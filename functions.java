String[] faculty = {"Terrell", "Gold", "Aliasgari", "Monge", "Winter"};
Stream<String> facultyStream = Arrays.stream(faculty);

List<String> authorizedFaculty = faculty.filter(f -> f.length() >= 5)
    .collect(Collectors.toList());

List<Integer> lengths = facult.map(f -> Integer.valueOf(f.length()))
    .collect(Collectors.toList());