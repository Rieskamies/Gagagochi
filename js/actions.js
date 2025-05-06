
const actions = document.querySelectorAll('.action');
const actionImages = document.querySelectorAll('.action img');

let clicked = false;

actions.forEach((item, index) => {
  item.addEventListener('click', () => {

    //Feed
      if (index === 0 && !clicked) {
        const img = item.querySelector('img');
    
        if (hunger > 90) {
            img.src = './images/buttonDisabled.png';
    
            setTimeout(() => {
                img.src = './images/feedBtn.png';
            }, 1000);
        } else {
            item.style.opacity = '0.2';
            feedAction(item);
            console.log("button is clicked " + clicked);
        }
    }


        //Play
      if (index === 1 && !clicked) {
        const img = item.querySelector('img');
        if (fun > 85) {
            img.src = './images/buttonDisabled.png';
    
            setTimeout(() => {
                img.src = './images/playBtn.png';
            }, 1000);
        } else {
            item.style.opacity = '0.2';
            playAction(item);
            console.log("button is clicked " + clicked);
        }
    }

        //Bathe
        if (index === 2 && !clicked) {
          const img = item.querySelector('img');
      
          if (cleanliness > 85) {
              img.src = './images/buttonDisabled.png';
      
              setTimeout(() => {
                  img.src = './images/batheBtn.png';
              }, 1000);
          } else {
              item.style.opacity = '0.2';
              batheAction(item);
              console.log("button is clicked " + clicked);
          }
      }

        //Sleep
          if (index === 3 && !clicked) {
            const img = item.querySelector('img');
        
            if (energy > 85) {
                img.src = './images/buttonDisabled.png';
        
                setTimeout(() => {
                    img.src = './images/restBtn.png';
                }, 1000);
            } else {
                item.style.opacity = '0.2';
                sleepAction(item);
                console.log("button is clicked " + clicked);
            }
        }

          //Cure
          if (index === 4 && !clicked) {
            const img = item.querySelector('img');
        
            if (healthy === "Healthy") {
                img.src = './images/buttonDisabled.png';
        
                setTimeout(() => {
                    img.src = './images/cureBtn.png';
                }, 1000);
            } else {
                item.style.opacity = '0.2';
                cureAction(item);
                console.log("button is clicked " + clicked);
            }
        }
  });
});

actionImages.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    if (index === 0) item.src = './images/feedBtnPress.png';
    if (index === 1) item.src = './images/playBtnPress.png';
    if (index === 2) item.src = './images/batheBtnPress.png';
    if (index === 3) item.src = './images/restBtnPress.png';
    if (index === 4) item.src = './images/cureBtnPress.png';
  });
  
  item.addEventListener('mouseleave', () => {
    if (index === 0) item.src = './images/feedBtn.png';
    if (index === 1) item.src = './images/playBtn.png';
    if (index === 2) item.src = './images/batheBtn.png';
    if (index === 3) item.src = './images/restBtn.png';
    if (index === 4) item.src = './images/cureBtn.png';
  });
});



/*  OLD CODE FOR ACTIONS (RIP)

        if(index === 3 && !clicked ) {
          item.style.opacity = '20%';
          sleepAction(item);
          } 
*/