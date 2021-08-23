// Put your code here

console.log("My Enemis List!")
console.log("----------------")






const getEnemies = () => {

    const enemies = [
    {
        firstName: "Joshua",
        lastName: "Flowers",
        offenses: [
            "Being a jerk to me in elementary school", 
            "Not being nice to me in elementary school"
        ],
            IsReallyHated: true
    },
    {
        firstName: "Darth",
        lastName: "Vader",
        offenses:  [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
        ],
            IsReallyHated: false
    },
    {
        firstName: "Betty",
        lastName: "Rudelady",
        offenses:  [
            "Phone calls in the theater",
            "Phone calls on the bus",
            "Phone calls in line at the grocery store",
            "Poor conversationalist"
        ],
            IsReallyHated: true
    },
    {
        firstName: "Leon",
        lastName: "Peck",
        offenses:  [
            "Keeps giving me a hotplate"
        ],
            IsReallyHated: false
    }
    ]
    return enemies
}  

console.log(getEnemies())

for (const e of getEnemies()) {
    if (e.IsReallyHated) {
        console.log(`${e.firstName} ${e.lastName} (Really, really dislike!)`)
    } else {
        console.log(`${e.firstName} ${e.lastName}`)
    }
}