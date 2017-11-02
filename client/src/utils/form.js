//reduce a list of students to a student object with student._id as key for each student
const studentParser = (list) => {
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
//test
// const students = {
//     1 : {courseSelection : {course : 'gcse'}},
//     2 : {courseSelection : {course : 'gcse'}},
//     3 : {courseSelection : {course : 'ufp'}},
//     4 : {courseSelection : {course : 'alevels'}},
//     5 : {courseSelection : {course : 'ufp'}}
// }