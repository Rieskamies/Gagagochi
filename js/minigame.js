const box = document.querySelector('#gameBox img');
const countdown = document.querySelector('#countdown');
const countdownContent = document.querySelector('#countdown p');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

/*
box.addEventListener('click', () => {
    console.log("Box clicked")
});
*/


//************************* PLAY    ***************************** */
// Function for what happens when you press the "Play" button

function playAction(element) {
    // Hide the action button immediately

    clicked = true;
    let i = 6;

    const countdownInterval = setInterval(() => {
        i--;
        countdown.style.display = "inherit"; 
        countdownContent.innerHTML = i;

    if (i < 1) {
        countdownContent.innerHTML = "Press the box!";
    }

        if (i <= 0) {
            clearInterval(countdownInterval);

            setTimeout(() => {
                ImageNumber = getRandom(1, 3);
                countdown.style.display = "none"; // hide text so it doesnt interfere

                box.style.display = "block";
                box.style.position = "fixed";  // just in case you need this too
                box.style.top = "100px";
                box.style.left = "200px";
                box.src = "./images/game" + ImageNumber + ".png";

                    box.addEventListener('click', () => {
                        clickSuccess = true;

                        if (clickSuccess) {
                            countdown.style.display = "inherit";
                            countdownContent.innerHTML = "Success!";

                        if (fun <= 100) {
                            fun += getRandom(10, 40); // Add hunger by a random amount between 1 and 40
                            energy -= getRandom(2,15);
                            cleanliness -= getRandom(3,12);
                        } 
                        if (fun > 100) {
                            fun = 100;
                        }
                        else {
                            fun = 100; // Cap hunger at 100 if it's over 90
                        }
                    }
                    funElement.textContent = hunger;
                    energyElement.textContent = energy;
                    clickSuccess = false;
                    });
                
                // After the box shows, start another timer (2 seconds after showing)
                setTimeout(() => {
                    element.style.opacity = '100%'; // Show the action button again
                    clicked = false; // Enable the action button
                    box.style.display = "none";
                    countdown.style.display = "none";
        
                    console.log("button is not clicked " + clicked);
                }, 2000); // waits 2 seconds after the box appears
        
            }, 3000); // waits 3 seconds before showing the box
            
        }
    }, 1000); // every 1 second
}
