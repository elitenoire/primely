//reduce a list of students to a student object with student._id as key for each student
const studentsParser = (list) => {
    return list.reduce((students, student) =>{
        students[student._id] = student;
        return students;
    },{})
}

// Helper to count student per course
const filterCourse = (students) => {
    return Object.keys(students).reduce((courseCount, id) => {
        if(courseCount.hasOwnProperty(students[id].courseSelection.course)){
            courseCount[students[id].courseSelection.course] += 1
        }
        else {
            courseCount[students[id].courseSelection.course] = 1
        }
        return courseCount
    }, {})
}

// Doesn't parse data to get time
const feedParser = (students) => {
    return Object.keys(students).reduce((feeds, id) => {
        const admin = students[id].admin
        const name = students[id].persona.name
        admin.forEach(value =>{
            feeds.push(`Admin ${value.name} ${value.mode} ${name.firstName} ${name.lastName}'s student profile`)
        })
        return feeds
    }, [])
}

// Validate Form
const validate = fields => values => {
    return fields.reduce((errors, field) => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
        return errors
    }, {})
}

export { studentsParser, filterCourse, feedParser, validate }

//test -> filterCourse
// const students = {
//     1 : {courseSelection : {course : 'gcse'}},
//     2 : {courseSelection : {course : 'gcse'}},
//     3 : {courseSelection : {course : 'ufp'}},
//     4 : {courseSelection : {course : 'alevels'}},
//     5 : {courseSelection : {course : 'ufp'}}
// }

//test -> feedParser
// const students = {
//     1 : {persona : {name : {firstName : 'Ada', lastName : 'jina'}},
//         admin : [{name : 'keduti', mode : 'viewed'},{name : 'Tami', mode : 'created'}]},
//     2 : {persona : {name : {firstName : 'Toby', lastName : 'Joe'}},
//     admin : [{name : 'Nelsy', mode : 'edited'},{name : 'Kola', mode : 'created'}]},
//     3 : {persona : {name : {firstName : 'Promise', lastName : 'Kel'}},
//     admin : [{name : 'Jenny', mode : 'viewed'},{name : 'Tami', mode : 'created'}]},
//     4 :{persona : {name : {firstName : 'Elina', lastName : 'lani'}},
//     admin : [{name : 'keduti', mode : 'viewed'},{name : 'keduti', mode : 'edited'},{name : 'Jenny', mode : 'created'}]}
// }