// const cards = require ('./Cards.js')

//Card Collection

const cards =
    [   {name: "2_C", value: 2, num: 0}, 
        {name: "3_C", value: 3, num: 1}, 
        {name: "4_C", value: 4, num: 2}, 
        {name: "5_C", value: 5, num: 3},
        {name: "6_C", value: 6, num: 4},
        {name: "7_C", value: 7, num: 5},
        {name: "8_C", value: 8, num: 6},
        {name: "9_C", value: 9, num: 7}, 
        {name: "10_C", value: 10, num: 8},
        {name: "J_C", value: 10, num: 9}, 
        {name: "Q_C", value: 10, num: 10},
        {name: "K_C", value: 10, num: 11},
        {name: "A_C", value: 11, num: 12, low: 'no'},
        {name: "2_D", value: 2, num: 13}, 
        {name: "3_D", value: 3, num: 14}, 
        {name: "4_D", value: 4, num: 15}, 
        {name: "5_D", value: 5, num: 16},
        {name: "6_D", value: 6, num: 17},
        {name: "7_D", value: 7, num: 18},
        {name: "8_D", value: 8, num: 19},
        {name: "9_D", value: 9, num: 20}, 
        {name: "10_D", value: 10, num: 21},
        {name: "J_D", value: 10, num: 22}, 
        {name: "Q_D", value: 10, num: 23},
        {name: "K_D", value: 10, num: 24},
        {name: "A_D", value: 11, num: 25, low: 'no'},
        {name: "2_H", value: 2, num: 26}, 
        {name: "3_H", value: 3, num: 27}, 
        {name: "4_H", value: 4, num: 28}, 
        {name: "5_H", value: 5, num: 29},
        {name: "6_H", value: 6, num: 30},
        {name: "7_H", value: 7, num: 31},
        {name: "8_H", value: 8, num: 32},
        {name: "9_H", value: 9, num: 33}, 
        {name: "10_H", value: 10, num: 34},
        {name: "J_H", value: 10, num: 35}, 
        {name: "Q_H", value: 10, num: 36},
        {name: "K_H", value: 10, num: 37},
        {name: "A_H", value: 11, num: 38, low: 'no'},
        {name: "2_S", value: 2, num: 39}, 
        {name: "3_S", value: 3, num: 40}, 
        {name: "4_S", value: 4, num: 41}, 
        {name: "5_S", value: 5, num: 42},
        {name: "6_S", value: 6, num: 43},
        {name: "7_S", value: 7, num: 44},
        {name: "8_S", value: 8, num: 45},
        {name: "9_S", value: 9, num: 46}, 
        {name: "10_S", value: 10, num: 47},
        {name: "J_S", value: 10, num: 48}, 
        {name: "Q_S", value: 10, num: 49},
        {name: "K_S", value: 10, num: 50},
        {name: "A_S", value: 11, num: 51, low: 'no'}
]
//Card Randomizer
const randomizer = max => {
        return Math.floor(Math.random() * Math.floor(max))
}

// Card Chooser
let card1 = randomizer(51);
let card2 = randomizer(51);
let card3 = randomizer(51);
let card4 = randomizer(51);
let card5 = randomizer(51);
let card6 = randomizer(51);
let card7 = randomizer(51);
let card8 = randomizer(51);
let card9 = randomizer(51);
let card10 = randomizer(51);
let card11 = randomizer(51);
let card12 = randomizer(51);
let card13 = randomizer(51);
let card14 = randomizer(51);

let total = 0;
let dealTotal = 0;

let playerHand = []
let dealerHand = []

function card1Roll () {
     for (let i = 0; i < 51; i++){
        if (card1 === Number(cards[i].num)){
        total += Number(cards[i].value)
        let card = cards[i].name
        return card;
        }
     }
}

function card2Roll () {
     if (card1 === card2){ 
        card2 = randomizer(51);
        return card2Roll()
        } for (let i = 0; i < 51; i++){
             if (card2 === Number(cards[i].num)){
                total += Number(cards[i].value)
                let card = cards[i].name
                return card;
             }

        }
}

function card3Roll () {
        if ((card2 === card3) || (card1 === card3)){ 
           card3 = randomizer(51);
           return card3Roll()
           }for (let i = 0; i < 51; i++){
                if (card3 === Number(cards[i].num)){
                        total += Number(cards[i].value);
                        let card = cards[i].name
                        return card;
                }
   
           }
   }


   function card4Roll () {
        if ((card1 === card4) || (card2 === card4) || (card3 === card4)){ 
           card4 = randomizer(51);
           return card4Roll()
           }for (let i = 0; i < 51; i++){
                if (card4 === Number(cards[i].num)){
                        total += Number(cards[i].value)
                        let card = cards[i].name
                return card;
                }
   
           }
   }


   function card5Roll () {
        if ((card1 === card5) || (card2 === card5) || (card3 === card5) || (card4 === card5)){ 
           card5 = randomizer(51);
           return card5Roll()
           }for (let i = 0; i < 51; i++){
                if (card5 === Number(cards[i].num)){
                        total += Number(cards[i].value)
                        let card = cards[i].name
                return card;
                }
   
           }
   }

   function card6Roll () {
        if ((card1 === card6) || (card2 === card6) || (card3 === card6) || (card4 === card6) || (card5 === card6)){ 
           card6 = randomizer(51);
           return card6Roll()
           }for (let i = 0; i < 51; i++){
                if (card5 === Number(cards[i].num)){
                        total += Number(cards[i].value)
                        let card = cards[i].name
                return card;
           }
   }
}

   function card7Roll () {
        if ((card1 === card7) || (card2 === card7) || (card3 === card7) || (card4 === card7) || (card5 === card7) || (card6 === card7)){ 
           card7 = randomizer(51);
           return card7Roll()
           }for (let i = 0; i < 51; i++){
                if (card5 === Number(cards[i].num)){
                        total += Number(cards[i].value)
                        let card = cards[i].name
                        return card;
                }
   
           }
   }

   function card8Roll () {
        if ((card1 === card8) || (card2 === card8) || (card3 === card8) || (card4 === card8) || (card5 === card8) || (card6 === card8) || (card7 === card8)){ 
           card8 = randomizer(51);
           return card8Roll()
           }for (let i = 0; i < 51; i++){
                if (card8 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

   function card9Roll () {
        if ((card1 === card9) || (card2 === card9) || (card3 === card9) || (card4 === card9) || (card5 === card9) || 
        (card6 === card9) || (card7 === card9) ||  (card8 === card9)){ 
           card9 = randomizer(51);
           return card9Roll()
           }for (let i = 0; i < 51; i++){
                if (card9 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

   function card10Roll () {
        if ((card1 === card10) || (card2 === card10) || (card3 === card10) || (card4 === card10) || 
        (card5 === card10) || (card6 === card10) || (card7 === card10) ||  (card8 === card10) || (card9 === card10)){ 
           card10 = randomizer(51);
           return card10Roll()
           }for (let i = 0; i < 51; i++){
                if (card10 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

   function card11Roll () {
        if ((card1 === card11) || (card2 === card11) || (card3 === card11) || (card4 === card11) || (card5 === card11) || 
        (card6 === card11) || (card7 === card11) ||  (card8 === card11) || (card9 === card11) || (card10 === card11)){ 
           card11 = randomizer(51);
           return card11Roll()
           }for (let i = 0; i < 51; i++){
                if (card11 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

   function card12Roll () {
        if ((card1 === card12) || (card2 === card12) || (card3 === card12) || (card4 === card12) || (card5 === card12) || 
        (card6 === card12) || (card7 === card12) ||  (card8 === card12) || (card9 === card12) || (card10 === card12) || (card11 === card12)){ 
           card12 = randomizer(51);
           return card12Roll()
           }for (let i = 0; i < 51; i++){
                if (card12 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

   function card13Roll () {
        if ((card1 === card13) || (card2 === card13) || (card3 === card13) || (card4 === card13) || (card5 === card13) || 
        (card6 === card13) || (card7 === card13) ||  (card8 === card13) || (card9 === card13) || (card10 === card13) || 
        (card11 === card13) || (card12 === card13)){ 
           card13 = randomizer(51);
           return card13Roll()
           }for (let i = 0; i < 51; i++){
                if (card13 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

   function card14Roll () {
        if ((card1 === card14) || (card2 === card14) || (card3 === card14) || (card4 === card14) || (card5 === card14) || 
        (card6 === card14) || (card7 === card14) ||  (card8 === card14) || (card9 === card14) || (card10 === card14) || 
        (card11 === card14) || (card12 === card14) || (card13 === card14)){ 
           card14 = randomizer(51);
           return card14Roll()
           }for (let i = 0; i < 51; i++){
                if (card14 === Number(cards[i].num)){
                        dealTotal += Number(cards[i].value)
                return cards[i].name;
                }
   
           }
   }

         //Ace High/Low

         function aceInHand (num) {
                for (let i = 0; i<=num; i++){
                        let el = playerHand[i];
                        if (el.includes('A')){
                        acer(el);
                        }
                }
         }


         function acer (card) {
                 for (let i = 0; i < 51; i++){
                        if (card === cards[i].name){
                                if ((total > 21) && (cards[i].low === "no")){
                                        total -= 10;
                                        cards[i].low = "yes";
                         }
                 }
                 }
         }



         function aceInHandDealer (num) {
                for (let i = 0; i<=num; i++){
                        let el = dealerHand[i]
                        if (el.includes('A')){
                        acerDealer(el);
                        }
                }
         }

         function acerDealer (card) {
                for (let i = 0; i < 51; i++){
                       if (card === cards[i].name){
                               if ((dealTotal > 21) && (cards[i].low === "no")){
                                       dealTotal -= 10;
                                       cards[i].low = "yes";
                        }
                }
                }
        }


        //Button Clicks

window.addEventListener("DOMContentLoaded", event => {
        const deal = document.getElementById('deal');
        const hold = document.getElementById('hold');
        const hit = document.getElementById('hit');
        const card_1 = document.getElementById('card-1');
        const card_2 = document.getElementById('card-2');
        const card_3 = document.getElementById('card-3');
        const card_4 = document.getElementById('card-4');
        const card_5 = document.getElementById('card-5');
        const card_6 = document.getElementById('card-6');
        const card_7 = document.getElementById('card-7');
        const card_8 = document.getElementById('deal-card-8');
        const card_9 = document.getElementById('deal-card-9');
        const card_10 = document.getElementById('deal-card-10');
        const card_11 = document.getElementById('deal-card-11');
        const card_12 = document.getElementById('deal-card-12');
        const card_13 = document.getElementById('deal-card-13');
        const card_14 = document.getElementById('deal-card-14');

        

        //Deal button event
        function dealCards () {
                if (card_1.innerHTML === ''){
                const one = card1Roll();
                card_1.innerHTML = `<img class="card-in-hand" src= "./cardImg/${one}.png">`
                playerHand.push(one)
                const two = card2Roll();
                card_2.innerHTML = `<img class="card-in-hand" src= "./cardImg/${two}.png">`
                playerHand.push(two)
                const eight = card8Roll()
                card_8.innerHTML = `<img class="card-in-hand" src= "./cardImg/${eight}.png">`
                dealerHand.push(eight)
                card_9.innerHTML = `<img class="card-in-hand" src= "./cardImg/purple_back.png">`
                hit.addEventListener('click', hitCards)
                deal.removeEventListener('click', dealCards);
                hold.addEventListener('click', holdCards)
                } else {
                        location.reload();
                }
        }

        deal.addEventListener('click', dealCards)


        //Hit button event
        function hitCards () {
                if (card_3.innerHTML === ''){
                        const three = card3Roll()
                        card_3.innerHTML = `<img class="card-in-hand" src= "./cardImg/${three}.png">`
                        playerHand.push(three)
                        aceInHand(2);
                } else if (card_4.innerHTML === ''){
                        const four = card4Roll()
                        card_4.innerHTML = `<img class="card-in-hand" src= "./cardImg/${four}.png">`
                        playerHand.push(four)
                }  else if (card_5.innerHTML === ''){
                        const five = card5Roll()
                        card_5.innerHTML = `<img class="card-in-hand" src= "./cardImg/${five}.png">`
                        playerHand.push(five)
                        aceInHand(4);
                } else if (card_6.innerHTML === ''){
                        const six = card6Roll()
                        card_6.innerHTML = `<img class="card-in-hand" src= "./cardImg/${six}.png">`
                        playerHand.push(six)
                        aceInHand(5);
                } else if (card_7.innerHTML === ''){
                        const seven = card7Roll()
                        card_7.innerHTML = `<img class="card-in-hand" src= "./cardImg/${seven}.png">`
                        playerHand.push(seven)
                        aceInHand(6);
                }else {
                        return;
                }

                if (total > 21) {
                        const h2 = document.createElement('h2')
                        h2.innerHTML = "YOU LOSE!"
                        document.body.appendChild(h2)
                        hit.removeEventListener('click', hitCards);
                        hold.removeEventListener('click', holdCards);
                        deal.addEventListener('click', dealCards)
                }
        }


        //Hold button event
        function holdCards () {
                hit.removeEventListener('click', hitCards);
                hold.removeEventListener('click', holdCards)
                deal.addEventListener('click', dealCards)
                const nine = card9Roll()
                card_9.innerHTML = card_9.innerHTML = `<img class="card-in-hand" src= "./cardImg/${nine}.png">`
                dealerHand.push(nine)
                dealer();
        }



        //Dealer event
        function dealer () {
                if (dealTotal > 21){
                        const h2 = document.createElement('h2')
                        h2.innerHTML = "YOU WIN!"
                        document.body.appendChild(h2)
                } else if (dealTotal > 16){
                        if (total >= dealTotal){
                                const h2 = document.createElement('h2')
                                h2.innerHTML = "YOU WIN!"
                                document.body.appendChild(h2)
                        } else {
                                const h2 = document.createElement('h2')
                                h2.innerHTML = "YOU LOSE!"
                                document.body.appendChild(h2)
                        }
                }else if (card_10.innerHTML === ''){
                        const ten = card10Roll()
                        card_10.innerHTML = card_10.innerHTML = `<img class="card-in-hand" src= "./cardImg/${ten}.png">`
                        dealerHand.push(ten)
                        aceInHandDealer(2);
                        return dealer();
                }else if (card_11.innerHTML === ''){
                        const eleven = card11Roll()
                        card_11.innerHTML = card_11.innerHTML = `<img class="card-in-hand" src= "./cardImg/${eleven}.png">`
                        dealerHand.push(eleven)
                        aceInHandDealer(3);
                        return dealer();
                }else if (card_12.innerHTML === ''){
                        const twelve = card12Roll()
                        card_12.innerHTML = card_12.innerHTML = `<img class="card-in-hand" src= "./cardImg/${twelve}.png">`
                        dealerHand.push(twelve)
                        aceInHandDealer(4);
                        return dealer();
                }
        }

})


