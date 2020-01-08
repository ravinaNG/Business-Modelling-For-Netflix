let retentions = require('./retentionOfSub')
const readline = require('readline-sync');

var amtOfPerSubscription = parseInt(readline.question('Amount of per Subscriber:- '));
const revenuePerMonth = parseInt(readline.question('Revenue of Sales persion per month? :- '));
const year = 5;
const inflationRatePerYear = parseInt(readline.question('What is the inflation rate in per year? :- '))

let inflationMonth = 12; 
let rowM = 0;
let columnM = 0;
let dicOfRevenue = {};

for(columnM; columnM<60; columnM++){
    let numberOfSubscriber = 0;
    let revenueOfMoth = 0;
    let month = 'month';
    rowM = columnM;
    let count = 1;

    for(rowM; rowM >= 0; rowM --){
        
        if(count === inflationMonth){
            inflationMonth = inflationMonth + 12;
            let inflation = parseInt(amtOfPerSubscription*inflationRatePerYear/100);
            amtOfPerSubscription = amtOfPerSubscription + inflation;
        }
        month = "month" + count;
        numberOfSubscriber = numberOfSubscriber + retentions['listOfRetentions'][month][rowM];
        count = count + 1;
    }
    revenueOfMoth = (numberOfSubscriber*amtOfPerSubscription*revenuePerMonth)/100;
    revenueOfMoth = parseInt(revenueOfMoth);
    dicOfRevenue[month] = revenueOfMoth;
}

console.log(dicOfRevenue);