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

console.log(hasAllUniqueCharacters('world'));
