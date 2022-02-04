let firstcard = Math.floor(Math.random()*12)
let secondcard = Math.floor(Math.random()*12)
let sum = firstcard + secondcard
let messageEl = document.getElementById('message-el')
sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let cards = [firstcard,secondcard]
function startgame(){
    rendergame()
}
function rendergame(){
cardsEl.textContent = "Cards : "
for (let index = 0; index < cards.length; index++) {
    cardsEl.textContent += cards[index] + " "
}
sumEl.textContent =`Sum: ${sum}`
if(sum < 21){
    messageEl.textContent = ` do u want to draw a new card?`
}else if (sum===21){
    messageEl.textContent =` u won`
}else{
    messageEl.textContent =` u lost`
}
}
function newcard(){
    let card = Math.floor(Math.random()*12)
    sum+=card
    cards.push(card)  
    rendergame()  
}