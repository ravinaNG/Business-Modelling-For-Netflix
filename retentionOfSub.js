const readline = require('readline-sync');
// readline-sync is the module for taking user-Input

const retentionList = [100, 85,75,65,60,57,54,51,49,46,43,40,38,36,34,32,30,28,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,5,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2]
// retentions of 60 months

function details(){ 
    // to store details of sales p and policies
    const details = {};

    // parseInt is for converting user Input in int
    // question is the function of readline-sync module.
    const salesMan = parseInt(readline.question("How many sales persons are working? :- "));
    const trailPersons = parseInt(readline.question('How many sign ups are there in a day? :- '));
    const noShowPerMonth = parseInt(readline.question('what is the percentage of no show? :- '));
    const numOfWorkingDays = parseInt(readline.question('Working Days? :- '));

    // storing in dictionary with key and value.
    details['salesMan'] = salesMan;
    details['trailPersons'] = trailPersons;
    details['noShowPerMonth'] = noShowPerMonth;
    details['numOfWorkingDays'] = numOfWorkingDays;

    return details;
}

function retentionListOfSubs(detailsOfSalesP){

    // Dictionary Of Subscribed List, this dictionary will store per months subscriber 
    const dicOfSubscribedList = {};

    //month is for loop of 60 months
    let month = 1

    // taking datas from the details dictionary
    const salesMan = detailsOfSalesP['salesMan'];
    const trailPersons = detailsOfSalesP['trailPersons'];
    const numOfWorkingDays = detailsOfSalesP['numOfWorkingDays'];
    const noShowPerMonth = detailsOfSalesP['noShowPerMonth'];

    // signUps of the first month
    sinUp = salesMan*trailPersons*numOfWorkingDays;

    // removing noShow and got first months subscriber
    const firstSubs = sinUp-(sinUp*noShowPerMonth/100)

    // collecting 60 months data 
    // Improvement - we can take user input after each month, because sales man can increase or decrease and subscriber too.
    for(month; month<=60; month++){

        // list for per month retentions. 
        const subscribedList = []

        // Doing this because q 
        const lengthOfRetentionList = retentionList.length - (month-1)
        let retentionM = 0;
        
        for (retentionM; retentionM<lengthOfRetentionList; retentionM++){
            const retentionOfMonth = firstSubs*retentionList[retentionM]/100;
            const intoInt = Math.floor(retentionOfMonth);
            subscribedList.push(intoInt);
        }
        var str = "month" + month;
        dicOfSubscribedList[str] = subscribedList;
    }
    return dicOfSubscribedList;
}

const detailsOfSalesP = details();                                      

const listOfRetentions = retentionListOfSubs(detailsOfSalesP);
console.log(listOfRetentions);
// console.log(typeof(listOfRetentions));
// console.log(JSON.stringify(listOfRetentions));
module.exports = {detailsOfSalesP, listOfRetentions, retentionList}

