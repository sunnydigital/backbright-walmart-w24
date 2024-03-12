// O(Nlog(N))
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

// O(Nlog(N))
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

// O(Nlog(N))
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

// O(Nlog(N))
findLongestWord = (arr) => {
    length = 0;
    for (let word in arr) {
        if (word.length > length) {
            length = word.length;
        }
    }
    return length;
}