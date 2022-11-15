const card_deck = [
    "fa-diamond",
    "fa-paper-plane-o",
    "fa-anchor",
    "fa-bolt",
    "fa-cube",
    "fa-anchor",
    "fa-leaf",
    "fa-bicycle",
    "fa-diamond",
    "fa-bomb",
    "fa-leaf",
    "fa-bomb",
    "fa-bolt",
    "fa-bicycle",
    "fa-paper-plane-o",
    "fa-cube"];

  const deck = document.querySelector(".deck");
  const moves = document.querySelector(".moves");
  const playAgain = document.querySelector(".playAgain");
  const restart = document.querySelector(".restart");
  const stars = document.querySelector(".stars");

  const modal = document.querySelector(".modal");
  const modalText = document.querySelector(".modalText");
  let timer = document.querySelector(".timer");




    let interval;
    let second = 0;
    let minute = 0;
    let timeStart = false;

    // variables to keep track of the game

    let cards_open = [];
    let matches = 0;
    let numberOfMoves = moves.textContent;
    let numberOfStars = 3;





  function startNewGame() {
    	resetTimer();
    	timer.style.display = "none";
    	timeStart = false;
    	timer.textContent = minute + ":" + second;
    	shuffle(card_deck); // use given shuffle function on card_deck
    	cards_open = [];
    	matches = 0;
    	moves.textContent = 0;
    	numberOfMoves = moves.textContent;

    	// Get rid of classes and, thus, slip all cards to backside, set icons according to shuffled card deck

    	for (let i = 0; i < card_deck.length; i++) {
    		let deck_element = deck.getElementsByTagName("li");
    		let class_element = deck_element[i].getAttribute("class");
    		deck_element[i].className = "";
    		deck_element[i].classList.add("card");

    		let icon_element = deck.getElementsByTagName("i");
    		let icon_class = icon_element[i].getAttribute("class");
    		icon_element[i].className = "";
    		icon_element[i].classList.add("fa", card_deck[i]);
    	}

    	// Return three stars to score-panel

    	stars.innerHTML = '<li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li> <li><i class="fa fa-star"></i></li>';
    	numberOfStars = 3;
    }

   // playAgain.style.display = "none";

function flipCard(card) {
    	card.classList.add("open", "show");

    }


function youHaveAMatch() {
	cards_open[0].classList.remove("open", "show");
	cards_open[0].classList.add("match");
	cards_open[1].classList.remove("open", "show");
	cards_open[1].classList.add("match");
	cards_open = [];
	matches++;
}


function addMove(card) {
	if (!card.classList.contains("match")) {
		numberOfMoves++;
		moves.innerText = numberOfMoves;
	}
}

// End of game
function endGame() {
 if (numberOfMoves <= 14){
    numberOfStars = 5;
  };
  if (14 < numberOfMoves && numberOfMoves <= 19){
    numberOfStars = 4;
  }
  if (19 < numberOfMoves && numberOfMoves <= 22){
    numberOfStars = 3;
  }else{
    numberOfStars = 2;
  };
  if (matches === 8) {
    modal.style.display = "block";
   
    modalText.textContent = "Felicitaciones! Lo hiciste en " + minute + " minutos y " + second + " Segundos!\nCompletaste el juego con " + numberOfMoves +
     " movimientos y una puntuacion de "  + numberOfStars +  " Estrellas" + "\nPuedes hacerlo mejor ";

  };

}

// if the card dont match

function notDSame() {
  setTimeout(function () {
  cards_open[0].classList.remove("open", "show");
  cards_open[1].classList.remove("open", "show");
  cards_open  = [];
}, 900);

}

playAgain.addEventListener("click", function () {

  modal.style.display = "none";
  startNewGame();

});

restart.addEventListener("click", function () {
  startNewGame();

});


deck.addEventListener("click", function (e) {
  let card = e.target;

  if (e.target !== e.currentTarget) {
    // resetTimer();
    //  // timer.style.display = "none";
    //  timeStart = false;
    //  timer.textContent = minute + " minutes " + second + " seconds";
    if (!timeStart) {
  		 startTimer();
  		 timeStart = true;
  		timer.style.display = "inline-block";
  	}
     if (!card.classList.contains("open")) {

       if (cards_open.length < 2) {
        flipCard(card);
        cards_open.push(card);

      }


      if (cards_open.length  === 2) {
       addMove(card);

      if (cards_open[0].innerHTML === cards_open[1].innerHTML) {
        youHaveAMatch();
     }else {
      notDSame();
    }



  }
  endGame();

}

}



})



function resetTimer() {
	clearInterval(interval);
	second = 0;
	minute = 0;
}


function startTimer() {
	interval = setInterval(function() {
		timer.textContent = minute + " : " + second ;
		second++;
		if (second === 60) {
			minute++;
			second = 0;
		}
	}, 1000)
}



  function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

startNewGame();
