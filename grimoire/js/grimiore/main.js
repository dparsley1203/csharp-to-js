// Put your code here


console.log("Do you believe in magic?")
console.log("------------------------")



    
    const allSpells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ability to heal",
            isEvil: false,
            energyRequired: 12.2
        },
        {   
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
        
    ]





const makeGoodSpellBook = allSpells.filter(spell => spell.isEvil === false).map(s => s.name)
const makeEvilSpellBook = allSpells.filter(spell => spell.isEvil === true).map(s => s.name )

console.log("Good Book")
const displayGoodBook = makeGoodSpellBook
for (let book of displayGoodBook) {
    console.log(book)
}

console.log("Evil Book")
const displayEvilBook = makeEvilSpellBook
for (let ebook of displayEvilBook ) {
    console.log(ebook)
}



const goodBook = makeGoodSpellBook
const eveilBook = makeEvilSpellBook

