const section = document.querySelector("section");
let playerLivesCount = document.querySelector("span");
let youWon = document.querySelector("h2");
let playerLives = 6;

//Link text
playerLivesCount.textContent = playerLives;

const getData = () => [
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Antonio.jpeg",
    name: "Antonio",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Auba.jpg",
    name: "Auba",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/RonaldoManUtd.jpg",
    name: "Ronaldo",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Antonio.jpeg",
    name: "Antonio",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/vardy.jpg",
    name: "vardy",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/deBruyne.jpg",
    name: "deBruyne",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/salah.jpg",
    name: "salah",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Jimenez.jpg",
    name: "Jimenez",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Son.jpg",
    name: "Son",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Jimenez.jpg",
    name: "Jimenez",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/kante.jpg",
    name: "kante",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Raphinia.jpg",
    name: "Raphinia",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Auba.jpg",
    name: "Auba",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/RonaldoManUtd.jpg",
    name: "Ronaldo",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/salah.jpg",
    name: "salah",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Son.jpg",
    name: "Son",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/kante.jpg",
    name: "kante",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/vardy.jpg",
    name: "vardy",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/Raphinia.jpg",
    name: "Raphinia",
  },
  {
    backSrc: "./images/premierLeageLogo.png",
    imgSrc: "./images/deBruyne.jpg",
    name: "deBruyne",
  },
];

//randomize
const randomize = () => {
  const data = getData();
  data.sort(() => Math.random() - 0.5);
  return data;
};

console.log(randomize());

const cardGenerator = () => {
  const cardData = randomize();
  //generate HTML
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const front = document.createElement("img");
    const back = document.createElement("img");
    card.classList = "card";
    front.classList = "front";
    back.classList = "back";
    card.setAttribute("name", item.name);
    //attach the info to cards
      front.src = item.imgSrc;
      back.src = item.backSrc;
    //attach the cards to the section
    section.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      card.classList.toggle("flipped");
      cardChecker(e);
    });
  });
};
//Check Cards
const cardChecker = (e) => {
  const flippedCards = document.querySelectorAll(".flipped");
  console.log(flippedCards);

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ==
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((item) => {
        item.classList.remove("flipped");
        item.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;
      let cards = document.querySelectorAll(".card");
      if (playerLives === 0) {
        setTimeout(() => restart(), 3000);
        youWon.textContent = "try again!";

        cards.forEach((card) => {
          card.style.pointerEvents = "none";
        });
      }
    }
  }
  let toggles = document.querySelectorAll(".toggleCard");
  if (toggles.length == 20) {
    youWon.textContent = "You Win!!!";
    setTimeout(() => restart(), 2000);
  }
};

const restart = () => {
  let cardData = randomize();
  let cards = document.querySelectorAll(".card");
  let faces = document.querySelectorAll(".front");
  youWon.textContent = "";

  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      (cards[index].style.pointerEvents = "all"),
        (faces[index].src = item.imgSrc),
        cards[index].setAttribute("name", item.name);
    }, 100);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;
};

cardGenerator();
