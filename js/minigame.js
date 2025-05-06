const box = document.querySelector('#gameBox img');
const countdown = document.querySelector('#countdown');
const countdownContent = document.querySelector('#countdown p');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


//************************* PLAY    ***************************** */
// Function for what happens when you press the "Play" button

function playAction(element) {
    // Hide the action button immediately
    clickSuccess = false;
    clicked = true;
    let i = 6;
    countdownContent.style.color = "white";

    const countdownInterval = setInterval(() => {
        i--;
        countdown.style.display = "inherit"; 
        countdownContent.innerHTML = i;

    if (i < 1) {
        countdownContent.innerHTML = "Click the box!";
    }

        if (i <= 0) {
            clearInterval(countdownInterval);

            setTimeout(() => {
                // Calculating a random position (top for Y and left for X) for the box to appear
                let randomX =  Math.floor(Math.random()*windowWidth);
                let randomY =  Math.floor(Math.random()*windowHeight);

                ImageNumber = getRandom(1, 3);
                countdown.style.display = "none"; // Hide text so it does not interfere

                box.style.display = "block";
                box.style.position = "fixed"; 
                box.style.top = randomY + "px";
                box.style.left = randomX + "px";
                box.src = "./images/game" + ImageNumber + ".png";

                    box.addEventListener('click', () => {
                        clickSuccess = true;

                        if (clickSuccess) {
                            countdown.style.display = "inherit";
                            countdownContent.style.color = "green";
                            countdownContent.innerHTML = "Success!";


                        if (fun <= 100) {
                            
                            if (fun <= 0) {
                                fun = 0;
                            }
                            fun += getRandom(10, 35); // Add fun by a random amount between 1 and 40
                            energy -= getRandom(2,15);
                            cleanliness -= getRandom(3,12);
                            hunger -= getRandom(5,15);
                        } 
                        if (fun > 100) {
                            fun = 100;
                        }
                    }
                    funElement.textContent = fun;
                    energyElement.textContent = energy;
                    hungerElement.textContent = hunger;
                    });

                // After the box shows, start another timer (2 seconds after showing)
                setTimeout(() => {

                    element.style.opacity = '100%'; // Show the action button again
                    

                     if (!clickSuccess) {
                            box.style.display = "none";
                            countdown.style.display = "inherit"; 
                            countdownContent.style.color = "red";
                            countdownContent.innerHTML = "Fail!";
                            

                            fun -= getRandom(10, 25); // Add hunger by a random amount between 1 and 40
                            energy -= getRandom(2,15);
                            cleanliness -= getRandom(3,12);
                            funElement.textContent = fun;
                            energyElement.textContent = energy;
                            clicked = false; // Enable the action button

                            setTimeout(() => {

                                countdown.style.display = "none";
                            }, 2000);
                        }
                        else {
                            box.style.display = "none";
                            countdown.style.display = "none";
                            clicked = false; // Enable the action button
                        }

                }, 2000); // waits 2 seconds after the box appears
                

            }, 3000); // waits 3 seconds before showing the box
            
        }
    }, 1000); // every 1 second
}
