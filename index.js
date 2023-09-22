/* Your Code Here */
function createEmployeeRecord (array){
    const employee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
   return employee 
}

function createEmployeeRecords (array){
    return array.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent (date){
    const timeIn = {
        type: "TimeIn",
        hour: parseInt(date.slice(11)),
        date: date.slice(0, 10)
    }
     this.timeInEvents.push(timeIn)
    
    return this
}

function createTimeOutEvent (date) {
    const timeOut = {
        type: 'TimeOut',
        hour: parseInt(date.slice(11)),
        date: date.slice(0, 10)
    }
    this.timeOutEvents.push(timeOut)
    return this
}
function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.filter(dayIn => dayIn.date === date)
    const timeOut = this.timeOutEvents.filter(dayOut => dayOut.date === date)
    const totalHours = (timeOut[0].hour - timeIn[0].hour ) / 100
    return totalHours
}

function wagesEarnedOnDate (date){
    const hoursWorked = hoursWorkedOnDate.call(this, date)
    return hoursWorked * this.payPerHour
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

