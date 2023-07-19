function sumByClosure(firstNum = 0){
    return function (secondNum = 0) {
        return firstNum + secondNum;
    }
}

console.log(sumByClosure(3)(4));