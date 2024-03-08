addToZero = (arr) => {
    zeroLst = []
    for (let ele of arr) {
        if (arr.includes(-ele)) {
            return true;
        }
        zeroLst.push(-ele);
    }
    return false;
}

uniqueChars = (word) => {
    usedLetters = [];
    for(let char of word) {
        if(usedLetters.includes(char)) {
            return false;
        }
        usedLetters.push(char);
    }
    return true;
}

isPangram = (sentence) => {
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    sentence = sentence.toLowerCase()
    for (let char of alphabet) {
        if (!sentence.includes(char)) {
            return false;
        }
    }
    return true;
}

findLongestWord = (arr) => {
    length = 0;
    for (let word in arr) {
        if (word.length > length) {
            length = word.length;
        }
    }
    return length;
}