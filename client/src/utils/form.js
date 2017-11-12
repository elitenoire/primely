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
    const duration = Date.now() - Date.parse(timeStamp)

    let secs = parseInt((duration/1000)%60, 10)
    , mins = parseInt((duration/(1000*60))%60, 10)
    , hrs = parseInt((duration/(1000*60*60))%24, 10)
    , days  = parseInt(duration/(1000*60*60*24), 10);

    let hrsDays = parseInt(days*24, 10);
    hrs += hrsDays;

    if(days > 0) return `${days === 1 ? 'a day' : `${days} days`}`
    if(hrs > 0) return `${hrs === 1 ? 'an hour' : `${hrs} hrs`}`
    if(mins > 0) return `${mins === 1 ? 'a min' : `${mins} mins`}`
    if(secs >= 0) return 'Just a moment'
}


export { studentsParser, filterCourse, feedParser, timeParser }

