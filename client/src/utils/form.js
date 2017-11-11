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
            feeds.push([
                `Admin ${value.name} ${value.mode} ${name.firstName} ${name.lastName}'s student profile`,
                timeParser(value.timeStamp) || 'Some days'
            ])
        })
        return feeds
    }, [])
}

// Parse time for feeds - add month later
const timeParser = (timeStamp) => {
    const duration = Date.now() - timeStamp

    let seconds = parseInt((duration/1000)%60, 10)
    , minutes = parseInt((duration/(1000*60))%60, 10)
    , hours = parseInt((duration/(1000*60*60))%24, 10)
    , days  = parseInt(duration/(1000*60*60*24), 10);

    let hoursDays = parseInt(days*24, 10);
    hours += hoursDays;

    if(days > 0) return `${days} days`
    if(hours > 0) return `${hours} hrs`
    if(minutes > 0) return `${minutes} mins`
    if(seconds > 0) return `${seconds} secs`
}



export { studentsParser, filterCourse, feedParser, timeParser }

