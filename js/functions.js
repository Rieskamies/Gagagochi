
// Starting stat levels (max 100)
let hunger = 100;  
let fun = 100;
let energy = 100;
let cleanliness = 100;
let healthy = "Healthy"

const hungerElement = document.querySelector('.hunger p');  // Get the <p> element where hunger is displayed
const funElement = document.querySelector('.fun p');  // Get the <p> element where fun is displayed
const energyElement = document.querySelector('.energy p');  // Get the <p> element where energy is displayed
const cleanlinessElement = document.querySelector('.cleanliness p');  // Get the <p> element where cleanliness is displayed
const healthyElement = document.querySelector('.healthy p');  // Get the <p> element where healthiness is displayed

funElement.textContent = fun;
energyElement.textContent = energy;
cleanlinessElement.textContent = cleanliness;
healthyElement.textContent = healthy;



//********************************************************** */

//Function for generating random numbers between given values
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Adjusted random function to include max in range
}

/**************************************************
*
*                                 ACTION  FUNCTIONS
*
**************************************************/

//************************  FEED  ********************************** */

// Function for what happens when you press the "Feed" button
function feedAction(element) {
    const creatureImage = document.querySelector("#creature img");
    creatureImage.src = "./images/idle.png"; // Show action image

    setTimeout(function () {
        creatureImage.src = "./images/idle.gif"; // Go back to idle after 2 sec
        element.style.opacity = '100%'; // Show the action button again

        clicked = false;  // Enable the action button

        if (hunger <= 100) {
            hunger += getRandom(1, 25); // Add hunger by a random amount between 1 and 25
            energy += 10;
        } else {
            hunger = 100; // Cap hunger at 100 if it's over 90
        }

        // Make sure hunger doesn't exceed 100
        if (hunger > 100 || energy > 100) {
            hunger = 100; 
            energy = 100;
        }
     //   if (hunger > 20)     
     //   hungerElement.style.color = "black";
    //    hungerElement.textContent = hunger;
    //    energyElement.textContent = energy;
        
        console.log("button is not clicked " + clicked)
    }, 2000);
}


/**************************************************
*
*                                 STAT  FUNCTIONS
*
**************************************************/


function decreaseHunger() {
    if (hunger > 0) {
        hunger -= getRandom(1, 4); // Decrease hunger by a random amount between 1 and 5
        hungerElement.textContent = hunger; //Update hunger
        console.log(`Hunger: ${hunger}`); // Show the current hunger level
    }

    let randomDelay = getRandom(5000, 10000);      // Generate a random delay between 1300ms and 15000ms for the next decrease

    setTimeout(decreaseHunger, randomDelay);       // Schedule the decreaseHunger function to run again after the random delay
}

function decreaseEnergy() {
    if (energy > 0) {
        energy -= getRandom(1, 2);
        energyElement.textContent = energy;
        console.log(`Energy: ${energy}`);
    }
    let randomDelay = getRandom(6000, 12000);
    setTimeout(decreaseEnergy, randomDelay);
}

function decreaseFun() {
    if (fun > 0) {
        fun -= getRandom(2, 5);
        funElement.textContent = fun;
        console.log(`Fun: ${fun}`);
    }
    let randomDelay = getRandom(4000, 8000);
    setTimeout(decreaseFun, randomDelay);
}

function decreaseCleanliness() {
    if (cleanliness > 0) {
        cleanliness -= getRandom(1, 3);
        cleanlinessElement.textContent = cleanliness;
        console.log(`Cleanliness: ${cleanliness}`);
    }
    let randomDelay = getRandom(7000, 15000);
    setTimeout(decreaseCleanliness, randomDelay);
}

decreaseHunger();
decreaseEnergy();
decreaseFun();
decreaseCleanliness();

//*********************     CODE MEMORIAL    ************************************* */
/*
// 
           if (healthy === "Healthy") {
            healthyElement.textContent = "Healthy"
            healthyElement.style.color = "green";
        }
        
        if (hunger < 50 && fun < 35 && energy < 25 || cleanliness < 10) {
            healthyElement.textContent = "Sick"
            healthyElement.style.color = "red";
        }

*/
//******************************************************************************* */
