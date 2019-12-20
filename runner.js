function getlength(number) {
    return number.toString().length;
}

// scryfall card object url
// https://api.scryfall.com/cards/be77edac-9a8b-4b7f-a859-27df76b10aa6
// need function to download all images when all cards are spoiled


let json = require('./scryings.json');

json.cards.sort((a, b) => (a.name > b.name) ? 1 : -1)

let counter = 1;
json.cards.forEach(card => {

    let preCounter = '';
    if (getlength(counter) === 2) { preCounter = '0' + counter }
    else if (getlength(counter) === 1) { preCounter = '00' + counter }
    else { preCounter = counter }
    console.log(preCounter + ": " + card.name);
    counter++;
});

console.log("===================================");

json.prospects.forEach(card => {

    let preCounter = '';
    if (getlength(counter) === 2) { preCounter = '0' + counter }
    else if (getlength(counter) === 1) { preCounter = '00' + counter }
    else { preCounter = counter }
    console.log(preCounter + ": " + card.name);
    counter++;
});
