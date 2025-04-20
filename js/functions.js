let hunger = 100;  // Starting hunger level (max 100)
const hungerElement = document.querySelector('.hunger p');  // Get the <p> element where hunger is displayed

//********************************************************** */

//Function for generating random numbers between given values
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Adjusted random function to include max in range
}
//********************************************************** */

// Function for what happens when you press the "Feed" button
function playActionAnimation(element) {
    const creatureImage = document.querySelector("#creature img");
    creatureImage.src = "./images/idle.png"; // Show action image

    setTimeout(function () {
        creatureImage.src = "./images/idle.gif"; // Go back to idle after 2 sec
        element.style.opacity = '100%'; // Show the action button again

        clicked = false;  // Enable the action button

        if (hunger <= 100) {
            hunger += getRandom(1, 25); // Add hunger by a random amount between 1 and 25
        } else {
            hunger = 100; // Cap hunger at 100 if it's over 90
        }

        // Make sure hunger doesn't exceed 100
        if (hunger > 100) {
            hunger = 100; 
        }

        hungerElement.textContent = hunger;
        console.log("button is not clicked " + clicked)
    }, 2000);
}

//********************************************************** */

// Function for decreasing the hunger
function decreaseHunger() {
    if (hunger > 0) {
        hunger -= getRandom(1, 6); // Decrease hunger by a random amount between 1 and 5
        console.log(`Hunger: ${hunger}`);  // Show the current hunger level
        hungerElement.textContent = hunger;
    } else {
        console.log("You're starving!");  // Message when hunger hits 0
        return;  // Stop the function if hunger is 0
    }

    // Generate a random delay between 1300ms and 15000ms for the next decrease
    let randomDelay = getRandom(1300, 15000);

    // Schedule the decreaseHunger function to run again after the random delay
    setTimeout(decreaseHunger, randomDelay);
}

// Start the hunger countdown for the first time
decreaseHunger();
