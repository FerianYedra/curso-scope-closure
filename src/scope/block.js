function fruits() {
    if(true){
        var fruitOne = 'apple'; //function scope
        let fruitTwo = 'kiwi'; // block scope
        const fruitThree = 'banana'; // block scope

        console.log(fruitTwo);
        console.log(fruitThree);
    }
    console.log(fruitOne);
}

fruits();