const age = 25
const name = "Sarah"
const totalAmount = 165

if (age >= 18 && age <= 25) {
console.log ("Je krijgt 50% korting!");

} else {
    console.log ("Je betaalt de normale prijs");
}

if (name === "Sarah" || name === "Bram") {
console.log ("Met zo'n naam kun je wel een gratis drankje gebruiken!");
} else {
    console.log ("Betaal je eigen drank");
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log ("Je krijgt gratis een portie (vega)bitterballen");
} else if (totalAmount > 50 && totalAmount < 100){
    console.log ("Je krijgt gratis een portie nacho's");
} else if (totalAmount >= 100){
    console.log ("Je krijgt gratis een fles champagne!!");
} else {
    console.log ("bestel voor meer dan 25 euro voor een lekere snack");
}