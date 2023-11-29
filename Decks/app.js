//1

// async function getCard() {
//     const res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
//     let { suit, value } = res.data.cards[0];
//     console.log(`${value} OF ${suit}`)
// }

// getCard()

//2

async function drawCards() {
    let firstCard = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/');
    let deckId = firstCard.data.deck_id;
    let secondCard = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let { suit: suit1, value: value1 } = firstCard.data.cards[0];
    console.log(`${value1} OF ${suit1}`)
    let { suit: suit2, value: value2} = secondCard.data.cards[0];
    console.log(`${value2} OF ${suit2}`)
}

drawCards()