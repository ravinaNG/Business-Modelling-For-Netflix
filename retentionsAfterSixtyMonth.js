const retentionFile = require('./retentionOfSub');
const retentionList = retentionFile.retentionList;
const retentionsOfSixtyMonths = retentionFile.listOfRetentions;
const detailsOfSalesP = retentionFile.detailsOfSalesP;

const salesMan = detailsOfSalesP['salesMan'];
const trailPersons = detailsOfSalesP['trailPersons'];
const numOfWorkingDays = detailsOfSalesP['numOfWorkingDays'];
const noShowPerMonth = detailsOfSalesP['noShowPerMonth'];

const sinUp = salesMan*trailPersons*numOfWorkingDays;
const firstSubs = sinUp-(sinUp*noShowPerMonth/100);

let nextMonth = 0;
let nextSixtyMonths = 60;
let nextSixtyMonRetn = {};
let numOfMonth = 61;

for(nextMonth; nextMonth<retentionList.length; nextMonth++){
	let nextMonthRetnList = [];
	let month = 'month' + (nextMonth + 1);
	// let lengthOflastMonthRetns = retentionsOfSixtyMonths[month].length;
	let lastIndex = retentionsOfSixtyMonths[month].length;

	for(lastIndex; lastIndex<nextSixtyMonths; lastIndex++){
		let nextMonthRetn = parseInt(firstSubs*retentionList[lastIndex]/100)
		nextMonthRetnList.push(nextMonthRetn); 
	}
	monthName = 'month'+numOfMonth;
	nextSixtyMonRetn[monthName] = nextMonthRetnList;
	numOfMonth++;
}

console.log(nextSixtyMonRetn);