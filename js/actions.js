
const actions = document.querySelectorAll('.action');
const actionImages = document.querySelectorAll('.action img');

let clicked = false;
console.log("button is not clicked " + clicked)

actions.forEach((item, index) => {
  item.addEventListener('click', () => {

    //Feed
      if(index === 0 && !clicked ) {
          item.style.opacity = '20%';
          console.log("button is clicked " + clicked)
          feedAction(item);
      }
        //Play
        if(index === 1 && !clicked ) {
          item.style.opacity = '20%';
          console.log("button is clicked " + clicked)
          playAction(item);
      }

        //Bathe
        if(index === 2 && !clicked ) {
          item.style.opacity = '20%';
          console.log("button is clicked " + clicked)
          batheAction(item);

        }

        //Sleep
        if(index === 3 && !clicked ) {
          item.style.opacity = '20%';
          console.log("button is clicked " + clicked)
          sleepAction(item);
          }

        //Cure
        if(index === 4 && !clicked ) {
          item.style.opacity = '20%';
          console.log("button is clicked " + clicked)

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