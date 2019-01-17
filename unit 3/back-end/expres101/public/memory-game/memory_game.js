// add a ready listener to the whole DOM 
$(document).ready(()=>{
    console.log("sanity check")
    $('button').click(function(){
        console.log($(this));
        let gridSize = $(this).attr('diff');
        console.log(gridSize);
        let cards = [];
        // our monsters start at 1. so start i at 1
        // evrytime thorugh the loop, we push 2 monsters
        // on becuase this is amatching game, we need 2
        // so we loop half of the grid size(gridsize/2), but
        // we need to add 1, becuase we started at 1 , not 0 or
        // we need to end at <=
        for(let i = 1; i <= gridSize/2; i++){
            let monsterNumber = i;
            if(i<10){
                monsterNumber = "0"+i
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`)
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`)
        }
        cards = shuffleDeck(cards);
        console.log(cards)
        let memoryHTML = '';
        // loop through all of the cards
        cards.forEach((card)=>{
            memoryHTML += `
                <div class="card col-sm-3">
                    <div class="card-holder">
                        <div class="card-front">${card}</div>
                        <div class="card-back"></div>
                    </div>
                </div>
            `
        })
        console.log(memoryHTML);
        // I'm sorry Jonathan... I will teach them a better way later!
        $('.memory_game').html(memoryHTML);
        $('.card-holder').click(function(){
            $(this).addClass('flip');
            let cardsUp = $('.flip');
            // if cardsUp has 2 customElements, this is the second card. compare
            if(cardsUp.length === 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];
                if(card1.innerHTML == card2.innerHTML){
                    // these cards match 
                    // remove flip
                    cardsUp.removeClass('flip');
                    cardsUp.addClass('matched');
                }else{
                    // these are not a match becuase the html is different
                    // js is too damn fast we have to let the user
                    // see the card before we flip it back
                    // settimerout to rescue
                    setTimeout(() => {
                        cardsUp.removeClass('flip'); 
                    }, 2000);
                }
            }else{

            }
            
        })
    });
});


function shuffleDeck(aDeckToBeShuffle){
    // loop. a lot
    // when the loop(lots of times) is document, the Array
    // (deck) will be shuffle
    for(let i = 0; i < 10000; i++){
        let rand1 = Math.floor(Math.random() * aDeckToBeShuffle.length);
        let rand2 = Math.floor(Math.random() * aDeckToBeShuffle.length);
        // we need to switch aDeckToBeShuffle[rand1] with
        // aDeckToBeShuffle{rand2}
        //  but we need to save the value of one of them 
        //  so wwe can keep it for later
        let card1Defender = aDeckToBeShuffle[rand1];
        aDeckToBeShuffle[rand1] = aDeckToBeShuffle[rand2]
        aDeckToBeShuffle[rand2] = card1Defender;
    }
    console.log(aDeckToBeShuffle)
    return aDeckToBeShuffle; 
}