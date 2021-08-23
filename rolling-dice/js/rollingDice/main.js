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

    let message = `${die1} + ${die2}`
    if (die1 === die2) {
        message += " DOUBLES!"
    }
    console.log(message)


}

