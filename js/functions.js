//**************************************************
//                    INITIAL SETUP
//**************************************************

const getName = document.querySelector('#nameLabel');

    if (!localStorage.getItem('petName')) {
        window.location = "index.html"
    }

    if (localStorage.getItem('petName') ) {
        getName.textContent = localStorage.getItem('petName');
    }
  
// Initialize variables with localStorage
let hunger = Number(localStorage.getItem('hunger'));
let fun = Number(localStorage.getItem('fun'));
let energy = Number(localStorage.getItem('energy'));
let cleanliness = Number(localStorage.getItem('cleanliness'));
let healthy = localStorage.getItem('healthy');

const hungerElement = document.querySelector('.hunger p');
const funElement = document.querySelector('.fun p');
const energyElement = document.querySelector('.energy p');
const cleanlinessElement = document.querySelector('.cleanliness p');
const healthyElement = document.querySelector('.healthy p');
const creatureImage = document.querySelector("#creature img");

// Display stats
hungerElement.textContent = hunger;
funElement.textContent = fun;
energyElement.textContent = energy;
cleanlinessElement.textContent = cleanliness;
healthyElement.textContent = healthy;

// General use - Random number between min and max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// General use - reset gifs to avoid displaying the wrong gif
function resetGifAnimation(img, src) {
    img.src = "";
    void img.offsetWidth; 
    img.src = src;
}

//**************************************************
//                    ACTION FUNCTIONS
//**************************************************

//************************************************************************* */
// --------------------------------------Feed --------------------------------------------------------------------
function feedAction(element) {
    if (clicked) return;
    clicked = true;
    element.style.opacity = '50%';

    resetGifAnimation(creatureImage, "./images/eat.gif");

    setTimeout(() => {
        creatureImage.src = "./images/idle.gif";
        element.style.opacity = '100%';
        clicked = false;

        hunger += getRandom(1, 45);
        energy += 10;

        if (hunger > 100) hunger = 100;
        if (energy > 100) energy = 100;

        hungerElement.textContent = hunger;
        energyElement.textContent = energy;
        localStorage.setItem('hunger', hunger);
        localStorage.setItem('energy', energy)
    }, 2500); 
}

//************************************************************************* */
// ------------------------------------- Bathe -----------------------------------------------------------------------
function batheAction(element) {
    if (clicked) return;
    clicked = true;
    element.style.opacity = '50%';

    resetGifAnimation(creatureImage, "./images/bathe.gif");

    const bathing = setInterval(() => {
        if (cleanliness < 100) cleanliness += getRandom(1, 5);
         if (cleanliness > 100) cleanliness = 100;
        if (cleanliness > 10) healthyElement.style.color = "black";
        cleanlinessElement.textContent = cleanliness;
        localStorage.setItem('cleanliness', cleanliness);
    }, 1000);

    setTimeout(() => {
        clearInterval(bathing);
        creatureImage.src = "./images/idle.gif";
        element.style.opacity = '100%';
        clicked = false;
    }, 15000);
}

//************************************************************************* */
// ------------------------------------- Sleep -----------------------------------------------------------------------
function sleepAction(element) {
    if (clicked) return;
    clicked = true;
    element.style.opacity = '50%';

    resetGifAnimation(creatureImage, "./images/sleep.gif");

    const sleeping = setInterval(() => {
        if (energy < 100) energy += getRandom(1, 10);
        if (energy > 100) energy = 100;

        energyElement.textContent = energy;
        localStorage.setItem('energy',energy);
    }, 1000);

    setTimeout(() => {
        clearInterval(sleeping);
        creatureImage.src = "./images/idle.gif";
        element.style.opacity = '100%';
        clicked = false;
    }, 10000);
}

//************************************************************************* */
// ------------------------------------- Cure -----------------------------------------------------------------------

function cureAction(element) {
    if (clicked) return;
    clicked = true;
    const cursor = document.getElementById('main');
    cursor.style.cursor = "url('./images/syringe.png') 0 0, auto";
    creatureImage.style.pointerEvents = 'all';


    creatureImage.addEventListener('click', () => {

        healthy = "Healthy";
        healthyElement.textContent = "Healthy";
        healthyElement.style.color = "black";
        localStorage.setItem('healthy', 'Healthy');

        if (cleanliness < 100) cleanliness += getRandom(1, 50);
        if (cleanliness > 100) cleanliness = 100;
        cleanlinessElement.textContent = cleanliness;
        localStorage.setItem('cleanliness', cleanliness);

        element.style.opacity = '100%';
        cursor.style.cursor = 'auto';
        clicked = false;
    
    });

}

//**************************************************
//                    STAT DECREASE
//**************************************************

function decreaseHunger() {
    if (hunger > 0) {
        hunger -= getRandom(1, 4);
        hungerElement.textContent = hunger;
        localStorage.setItem('hunger', hunger);
        if (hunger < 0) {
            hunger = 0;
            hungerElement.textContent = hunger;
            localStorage.setItem('hunger', hunger);
        }
    }
    setTimeout(decreaseHunger, getRandom(5000, 10000));
}

function decreaseEnergy() {
    if (energy > 0) {
        energy -= getRandom(1, 2);
        energyElement.textContent = energy;
        localStorage.setItem('energy', energy);
        if (energy < 0) {
            energy = 0;
            energyElement.textContent = energy;
            localStorage.setItem('energy', energy);
        }
    }
    setTimeout(decreaseEnergy, getRandom(6000, 12000));
}

function decreaseFun() {
    if (fun > 0) {
        fun -= getRandom(2, 5);
        funElement.textContent = fun;
        localStorage.setItem('fun', fun);
    }

    if (fun < 0) {
        fun = 0;
        funElement.textContent = fun;
        localStorage.setItem('fun', fun);
    }
    setTimeout(decreaseFun, getRandom(4000, 8000));
}

function decreaseCleanliness() {
    if (cleanliness > 0) {
        cleanliness -= getRandom(1, 3);
        cleanlinessElement.textContent = cleanliness;
        localStorage.setItem('cleanliness', cleanliness);

        if (cleanliness < 0) {
            cleanliness = 0;
            cleanlinessElement.textContent = cleanliness;
            localStorage.setItem('cleanliness', cleanliness);
        }
    }
    setTimeout(decreaseCleanliness, getRandom(7000, 15000));
}

//---------RESET BUTTON------------
document.querySelector('#resetPet').addEventListener('click', () => {
    localStorage.removeItem('petName');
    window.location = "index.html"
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Start stat decrease loops after load
    decreaseHunger();
    decreaseEnergy();
    decreaseFun();
    decreaseCleanliness();
  });

//**************************************************
//                    END
//**************************************************

const checkInterval = setInterval(() => {
    console.log("checking stats...", hunger, energy); // add this

    function checkStats() {
        if (hunger <= 0 && energy <= 0) {
            console.log("dead");
            hunger = 0;
            hungerElement.textContent = 0;
            localStorage.setItem('hunger',hunger);

            endGame();
        }
        if (cleanliness <= 10) {
            console.log("Your creature is really dirty");
            if (cleanliness <= 0) {
                cleanliness = 0;
                cleanlinessElement.textContent = 0;
                localStorage.setItem('cleanliness',cleanliness);
            }


        }
        // roll for 0 if cleanliness more than 1. You have a 1 in 15 chance to get sick every 5 seconds meaning a 6.67% chance every 5 seconds
        if (cleanliness >= 10) {
            
            if (Math.floor(Math.random() * 15) === 0) {
                console.log("It happened!");
                healthy = "Sick"
                healthyElement.textContent = "Sick";
                healthyElement.style.color = "red";
                localStorage.setItem('healthy','Sick')
            } else {
                console.log("It didn't happen.");
            }
        }
    }
    checkStats();
}, 5000);


function endGame() {
     clearInterval(checkInterval); 
    alert("Your creature has passed away!")
    localStorage.removeItem('petName');
    window.location = "index.html"
}
