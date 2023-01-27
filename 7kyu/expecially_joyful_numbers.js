function reverseInt(n) {
    return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n);
}

function numberJoy(n) {
    let sumOfParts = 0;
    for (let i of new String(n)) {
        sumOfParts += parseInt(i);
    }
    let reverseSum = reverseInt(sumOfParts);
    if (sumOfParts * reverseSum == n) {
        return true;
    } else {
        return false;
    }
}
