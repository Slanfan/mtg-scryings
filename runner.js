function getlength(number) {
    return number.toString().length;
}



let json = require('./_scryings.json');

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
