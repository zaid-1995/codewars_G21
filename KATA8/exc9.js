function sorter(textbooks) {
    textbooks.sort(function (subject1, subject2) {
        return subject1.toLowerCase().localeCompare(subject2.toLowerCase());
    });

    return textbooks;
}

let textbooks = ["Mathematics", "biology", "Physics", "Chemistry"];
textbooks = sorter(textbooks);

console.log(textbooks);