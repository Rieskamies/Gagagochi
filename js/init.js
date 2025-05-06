header = document.querySelector('h2')

// If petName does not exist in localStorage do this:
if (!localStorage.getItem("petName")) {
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form reload
    
        const petName = document.querySelector('#petName').value; //create petName from what was inside input petName
            if (!petName) { //Prevent empty names
                alert("Name cannot be empty!")
            }
            else {
                header.innerHTML = "Your pet name was set to: " + petName
                localStorage.setItem('petName', petName);

                // Initialize or reset game progress
                localStorage.setItem('hunger','100')
                localStorage.setItem('fun','100')
                localStorage.setItem('energy','100')
                localStorage.setItem('cleanliness','100')
                localStorage.setItem('healthy','Healthy')

                // Redirect to game.html after 3 seconds
                    setTimeout(() => {
                        window.location = "game.html"
                    }, 3000)
                 }
            });
  }

  // If name exist go to game.html
  else {
    window.location.replace("game.html");
  }
