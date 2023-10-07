//IIFE
(function () {
    
    let myApiUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    //fetch from first API to get a deck of cards
        fetch(myApiUrl)
            .then((response) => response.json())
            .then((data) => {
                let myDeck = data.deck_id;
                let cardHandApiUrl = "https://deckofcardsapi.com/api/deck/" + myDeck + "/draw/?count=5";
    //fetch from second API to get a hand of 5 cards, using data from first API to get a link
        fetch(cardHandApiUrl)
            .then((response) => response.json())
            .then((handData) => {
                let myHandData = handData.cards;
    //create an array using Array.map from myHandData.card information
                let myCards = myHandData.map((card) => ({
                    value: card.value,
                    suit: card.suit
                }));
//function to check if it's a flush
    function isMatchingSuits(input){
        let i = 0;
        while (i < input.length - 1){
            if (input[i + 1].suit === input[i].suit){
                i++
            }
            else {
                return false;
            }

            }
            return true; 
          }


    //testing data with console.log
                console.log(isMatchingSuits(myCards));
    //close second fetch
            });
    //close first fetch
        });

        })();