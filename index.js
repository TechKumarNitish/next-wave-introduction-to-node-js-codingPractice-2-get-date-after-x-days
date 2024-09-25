const {format, addDays} = require('date-fns')
function getDAateAfterXdays(days) {
  const currentDate = new Date('22-Aug-2020')
  const newDate = addDays(currentDate, days)
  const formattedDate = format(newDate, 'd-M-yyyy')
  return formattedDate
}


module.exports = getDAateAfterXdays
