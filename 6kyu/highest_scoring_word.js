function high(x) {
    const wordList = x.split(" ");
    let numArr = [];
    for (let val of wordList) {
        let intNum = 0;
        letters = Array.from(val);
        for (let word of letters) {
            intNum += word.charCodeAt(0) - 96;
        }
        numArr.push(intNum);
    }

    return wordList[numArr.indexOf(Math.max(...numArr))];
}