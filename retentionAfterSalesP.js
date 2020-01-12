const detailsOfSalesP = require('./retentionOfSub').detailsOfSalesP;

const retentionList = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 30, 32, 34, 36, 38, 40, 43, 46, 49, 51, 54, 57, 60, 65, 75, 85, 100]

const salesMan = details['salesMan'];
const trailPersons = details['trailPersons'];
const numOfWorkingDays = details['numOfWorkingDays'];
const noShowPerMonth = details['noShowPerMonth'];

sinUp = salesMan*trailPersons*numOfWorkingDays;
const firstSubs = sinUp-(sinUp*noShowPerMonth/100);

function retentionAfterSalesP(firstSubs){

    const allMonths = {};
    let startingMonth = 0;
    let numOfMonth = 61;
    for(startingMonth; startingMonth<retentionList.length; startingMonth++){
        const retentionsOfMonth = [];
        let retention = startingMonth;
        for(retention; retention>0; retention--){
            subscribers = parseInt(firstSubs*retentionList[retention]/100);
            retentionsOfMonth.push(subscribers);
        }
        var month = "month" + numOfMonth;
        allMonths[month] = retentionsOfMonth;
        numOfMonth++;
    }
    return allMonths;
}

const listOfRetentions = retentionAfterSalesP(detailsOfSalesP);
console.log(listOfRetentions);