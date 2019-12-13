let retentions = require('./retentionOfSub')
const readline = require('readline-sync');

const amtOfPerSubscription = readline.question('Amount of per Subscriber:- ');
const amtPerSubscription = parseInt(amtOfPerSubscription);
const revenuePerMonth = readline.question('Revenue of Sales persion per month? :- ');
const revenue = parseInt(revenuePerMonth);
const year = 5;
const inflationRatePerYear = readline.question('What is the inflation rate in per year? :- ')
const inflationRate = parseInt(inflationRatePerYear);

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
        month = "month" + count;
        numberOfSubscriber = numberOfSubscriber + retentions['listOfRetentions'][month][rowM];
        count = count + 1;
    }
    revenueOfMoth = numberOfSubscriber*amtPerSubscription*revenue/100;
    dicOfRevenue[month] = revenueOfMoth;
}

console.log(dicOfRevenue);