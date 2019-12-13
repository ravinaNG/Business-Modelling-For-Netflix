let retentions = require('./retentionOfSub')

console.log(retentions);
// const amtPerSubscription = 650;
// const revenue = 40;
// const year = 5;
// const inflationRate = 6;

// let rowM = 0;
// let columnM = 0;
// let dicOfRevenue = {};

// for(columnM; columnM<60; columnM++){
//     let numberOfSubscriber = 0;
//     let revenueOfMoth = 0;
//     let month = 'month';
//     rowM = columnM;
//     let count = 1;
//     for(rowM; rowM >= 0; rowM --){
//         month = "month" + count;
//         numberOfSubscriber = numberOfSubscriber + retentions['listOfRetentions'][month][rowM];
//         count = count + 1;
//     }
//     revenueOfMoth = numberOfSubscriber*amtPerSubscription*revenue/100;
//     dicOfRevenue[month] = revenueOfMoth;
// }

// // console.log(dicOfRevenue);