//**************************************************
//                    INITIAL SETUP
//**************************************************

// Starting stat levels (max 100)
let hunger = 100;
let fun = 100;
let energy = 100;
let cleanliness = 100;
let healthy = "Healthy";

const hungerElement = document.querySelector('.hunger p');
const funElement = document.querySelector('.fun p');
const energyElement = document.querySelector('.energy p');
const cleanlinessElement = document.querySelector('.cleanliness p');
const healthyElement = document.querySelector('.healthy p');
const creatureImage = document.querySelector("#creature img");

// Display initial stats
hungerElement.textContent = hunger;
funElement.textContent = fun;
energyElement.textContent = energy;
cleanlinessElement.textContent = cleanliness;
healthyElement.textContent = healthy;

// Utility - Random number between min and max
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//**************************************************
//                    ACTION FUNCTIONS
//**************************************************

function resetGifAnimation(img, src) {
    img.src = "";
    void img.offsetWidth; 
    img.src = src;
}

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
        if (cleanliness < 100) {
            cleanliness += getRandom(1, 5);
            cleanlinessElement.textContent = cleanliness;
        }
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
        if (energy < 100) {
            energy += getRandom(1, 10);
            energyElement.textContent = energy;
        }
    }, 1000);

    setTimeout(() => {
        clearInterval(sleeping);
        creatureImage.src = "./images/idle.gif";
        element.style.opacity = '100%';
        clicked = false;
    }, 10000);
}

//**************************************************
//                    STAT DECREASE
//**************************************************

function decreaseHunger() {
    if (hunger > 0) {
        hunger -= getRandom(1, 4);
        hungerElement.textContent = hunger;
    }
    setTimeout(decreaseHunger, getRandom(5000, 10000));
}

function decreaseEnergy() {
    if (energy > 0) {
        energy -= getRandom(1, 2);
        energyElement.textContent = energy;
    }
    setTimeout(decreaseEnergy, getRandom(6000, 12000));
}

function decreaseFun() {
    if (fun > 0) {
        fun -= getRandom(2, 5);
        funElement.textContent = fun;
    }
    setTimeout(decreaseFun, getRandom(4000, 8000));
}

function decreaseCleanliness() {
    if (cleanliness > 0) {
        cleanliness -= getRandom(1, 3);
        cleanlinessElement.textContent = cleanliness;
    }
    setTimeout(decreaseCleanliness, getRandom(7000, 15000));
}

// Start stat decrease loops
decreaseHunger();
decreaseEnergy();
decreaseFun();
decreaseCleanliness();

//**************************************************
//                    END
//**************************************************
