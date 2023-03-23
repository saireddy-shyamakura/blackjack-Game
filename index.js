let player = {
    name: "Sai Reddy",
    chips: 100
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let messageEl2 = document.getElementById("message-el2")
let messageEl3 = document.getElementById("message-el3")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = "name : "+player.name + ", chips :$" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    if(player.chips === 0){
         alert("you dont have enough chips refresh the page")
    } 
    else{
    isAlive = true
    hasBlackJack=false
    sum=0
    for(let count =0; count<=cards.length +2; count++){
        cards.pop()
    }
    newCard()
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length  ; i++) {
        cardsEl.textContent += cards[i] + " "
    }
        
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive=true
        hasBlackJack= false
    } else if (sum === 21) {
        message = "You've got Blackjack! you won $10 chips"
        hasBlackJack = true
        isAlive =true
        player.chips = player.chips + 10
         playerEl.textContent = "name : "+player.name + ", chips :$" + player.chips
    } else {
        message = "You're out of the game! you lost $ 10 press START GAME for new game"
         player.chips = player.chips - 10
         playerEl.textContent = "name : "+player.name + ", chips :$" + player.chips
         console.log(player.chips)
        isAlive = false
        hasBlackJack= false
    }
    messageEl.textContent=message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
         sum += card
        cards.push(card)
        renderGame()        
    }
     else if (isAlive=== false && hasBlackJack=== false){
        alert('press start game')
    }
    else if (isAlive=== true && hasBlackJack=== true){
          alert('press start game')
     }
}
