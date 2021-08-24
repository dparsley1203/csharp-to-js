// Put your code here

console.log("Let's roll some dice, baby!")
console.log("---------------------------")


const roll = () => {
    const dieValue = Math.floor(Math.random() * 6) + 1

    return dieValue

}




for (let i = 0; i < 10; i++) {
    let die1 = roll()
    let die2 = roll()


    //Long way to replace #s with words
    // if (die1 === 1) {
    //     die1 = "one"
    // } else if (die1 === 2 ) {
    //     die1 = "two"
    // } else if (die1 === 3) {
    //     die1 = "three"
    // } else if (die1 === 4) {
    //     die1 = "four"
    // } else if (die1 === 5) {
    //     die1 = "five"
    // } else {
    //     die1 = "six"
    // }
    
    // if (die2 === 1) {
    //     die2 = "one"
    // } else if (die2 === 2) {
    //     die2 = "two"
    // } else if (die2 === 2) {
    //     die2 = "two"
    // } else if (die2 === 4) {
    //     die2 = "four"
    // } else if (die2 === 5) {
    //     die2 = "five"
    // } else {
    //     die2 = "six"
    // }

    let message = `${die1} + ${die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }
    console.log(message)
    
    
    
}

