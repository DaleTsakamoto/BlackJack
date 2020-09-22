//Card Collection

class Game {
    constructor(name){
    this.name = name,
    this.cards = 
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
    }

    dealCards () {
        if (card_1.innerHTML === ''){
        card_1.innerHTML = card1Roll();
        card_2.innerHTML = card2Roll();
        card_8.innerHTML = card8Roll();
        hit.addEventListener('click', hitCards)
        deal.removeEventListener('click', dealCards);
        hold.addEventListener('click', holdCards)
        } else {
                location.reload();
        }
    }

    hitCards () {
    if (card_3.innerHTML === ''){
            card_3.innerHTML = card3Roll();
            let num = 3;
            aceInHand(num);
    } else if (card_4.innerHTML === ''){
            card_4.innerHTML = card4Roll();
            let num = 4;
            aceInHand(num);
    }  else if (card_5.innerHTML === ''){
            card_5.innerHTML = card5Roll();
            let num = 5;
            aceInHand(num);
    } else if (card_6.innerHTML === ''){
            card_6.innerHTML = card6Roll();
            let num = 6;
            aceInHand(num);
    } else if (card_7.innerHTML === ''){
            card_7.innerHTML = card7Roll();
            let num = 7;
            aceInHand(num);
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

    holdCards () {
        hit.removeEventListener('click', hitCards);
        hold.removeEventListener('click', holdCards)
        deal.addEventListener('click', dealCards)
        card_9.innerHTML = card9Roll();
        dealer();
}

}


module.exports = Game;