const readline = require('readline-sync');

function retentionListOfSubs(){
    const salesMan = parseInt(readline.question("How many sales persons are working? :- "));
    const trailPersons = parseInt(readline.question('How many sign ups are there in a day? :- '));
    const noShowPerMonth = parseInt(readline.question('what is the percentage of no show? :- '));
    const numOfWorkingDays = parseInt(readline.question('Working Days? :- '));
    
    const dicOfSubscribedList = {};
    let month = 1

    for(month; month<=60; month++){
        sinUp = salesMan*trailPersons*numOfWorkingDays;
        const firstSubs = sinUp-(sinUp*noShowPerMonth/100)
        const subscribedList = []
        const retentionList = [85,75,65,60,57,54,51,49,46,43,40,38,36,34,32,30,28,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,5,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2]
        let retentionM = 0;
        subscribedList.push(firstSubs);

        for (retentionM; retentionM<retentionList.length; retentionM++){
            const retentionOfMonth = firstSubs*retentionList[retentionM]/100;
            const intoInt = Math.floor(retentionOfMonth);
            subscribedList.push(intoInt);
        }
        var str = "month" + month;
        dicOfSubscribedList[str] = subscribedList;
    }
    return dicOfSubscribedList;
}

const listOfRetentions = retentionListOfSubs();
// console.log(listOfRetentions);
// console.log(typeof(listOfRetentions));
// console.log(JSON.stringify(listOfRetentions));
module.exports.listOfRetentions = listOfRetentions;

