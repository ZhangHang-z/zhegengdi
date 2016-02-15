
function getYearMonthDate() {
	var d = new Date,
		year = d.getFullYear().toString(),
		monthNumber = d.getMonth() + 1,
		month = monthNumber.toString(),
		date = d.getDate().toString();
	return year + month + date;
}

console.log(getYearMonthDate());


exports.getYearMonthDate = getYearMonthDate;