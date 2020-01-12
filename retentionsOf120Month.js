const retentionList = [85,75,65,60,57,54,51,49,46,43,40,38,36,34,32,30,28,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,5,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2]
function retention(){
    const sinUp = 336
    let monthOfData = 61
    const new_dicofSubscribedList = {};

    let months = 0
    for (months; months < (retentionList.length+1); months++){
        new_retention_list = []
        let month_data = (retentionList.length + 1) - months;  
        
        for (month_data; month_data < 60; month_data++){
            retention_month = parseInt(sinUp*retentionList[month_data -1 ]/100)
            new_retention_list.push(retention_month)
        }
        var str = "month" + monthOfData;
        new_dicofSubscribedList[str] = new_retention_list;
        monthOfData++
    }
    return new_dicofSubscribedList;
}

const listOfRetentions = retention();
console.log(listOfRetentions);