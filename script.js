//question 1
const hasAllUniqueCharacters = function(input){
    const characters = input.split('');
    let result;
    for(let character of characters){
        console.log(character);
        const allSimilarCharacter = characters.filter(char => char === character);
        if(allSimilarCharacter.length > 1){
            result = false;
            break;
        } else {
            result = true;
        }
    }
    return result;
}

// console.log(hasAllUniqueCharacters('world'));

//question 2 task 2
//a salesData object = {CustomerName: "Lahiru", TotalSpent: 50} 
const customerWithHighestTotalSpent = function(salesData){
    const sortedSalesData = salesData.sort((a, b) => a.TotalSpent - b.TotalSpent);
    return sortedSalesData[sortedSalesData.length - 1];
}
