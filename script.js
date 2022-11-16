

        
       
 class Player {
    constructor(name) {
        this.name = name;
        this.hand =[];
        this.Score = 0;
    }
    
    }
    let player1 = new Player('sam')
console.log("player1:", player1)

let player2 = new Player('john')
    console.log("player2", player2);
class Deck {
    constructor() {
        this.SUITS = ['hearts','diamonds', 'clubs', 'spades'];
        this. faceVALUES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
        this.ranks = [2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ];
        this.deck =[]
    }
    createDeck() {
for (let s = 0 ; s < this.SUITS.length; s++) {
    
    for (let o = 0; o < this.faceVALUES.length; o++) {


        const suit = this.SUITS[s];
        const faceVALUES = this.faceVALUES[o];
        const rank = this.ranks[o];
        //push each card variable
        this.deck.push({suit, faceVALUES, rank})
    }
}
console.log("printing deck:", this.deck);
    }
    shuffleDeck() {

        for (let g = this.deck.length -1; g > 0; g--) {
            let i = Math.floor(Math.random() * g);
            let temp = this.deck[g];
            this.deck[g] =this.deck[i];
            this.deck[i] = temp;
        }
    }
    dealDeck() {
        console.log(player1.hand);
        player1.hand =  this.deck.slice(0, 26);
        console.log("player1 hand - 26 cards:",player1.hand);
        player2.hand = this.deck.slice(26, 52)
        console.log("player2 hand - 26 cards:", player2.hand);
    }

        }
        let gameDeck = new Deck();
        gameDeck.createDeck();
        gameDeck.shuffleDeck();
        gameDeck.dealDeck();
    
        class Game {
            compareCards() {
               for ( let round = 0; round < 26; round++) {
                   console.log(round);
                   console.log(player1.name, player1.hand[round]);
                   console.log(player2.name, player2.hand [round]);
                   
                   if(player1.hand[round].rank > player2.hand[round].rank) {
                    player1.Score += 1;
                    console.log(`${player1.name} score: ${player2.Score}`)
                    console.log(`${player2.name} score: ${player2.Score}`)
                    console.log(`${player2.name} is the winner!
                    `)
                   } else if(player2.hand[round].rank > player1.hand[round].rank) {
                    player2.Score += 1;
                    console.log(`${player1.name} score: ${player1.Score}`)
                    console.log(`${player2.name} score: ${player2.score}`)
                    console.log(`${player2.name} is the winner!
                    `)
       
       
                   } else {
                    console.log(`${player1.name} score: ${player1.score}`)
                    console.log(`${player2.name} score: ${player2.score}`)
                    console.log(`${player1.name} and ${player2.name} tied this round!
                    `)
                   }
                 }
              }
              determineWinner() { 
          
                if(player1.score > player2.score) {
console.log(`${player1.name} score: ${player1.score}`)
console.log(`${player2.name} score: ${player2.score}`);
console.log(`${player1.name} is declared winner!!`);
                }else if (player2.score > player1.score) {
                    console.log(`${player1.name} score: ${player1.score}`)
                    console.log(`${player2.name} score: ${player2.score}`)
                    console.log(`${player2.name} and ${player1.name} tiedthe game!`);
                }

         
            

            }
           }
  


        
        let playGame = new Game();
        playGame.compareCards();
        playGame.determineWinner();


  
 
  