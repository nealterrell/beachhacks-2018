
std::vector<string> faculty = {"Terrell", "Gold", "Aliasgari", "Monge", "Winter"};
std::vector<string> authorized;
std::copy_if(faculty.begin(), faculty.end(), std::back_inserter(authorized),
    [](string f) {
        return f.length() >= 5;
    });

std::vector<int> facultyLengths;
std::transform(faculty.begin(), facult.end(), std::back_inserter(facultyLengths),
    [](string f) {
        return f.length();
    });