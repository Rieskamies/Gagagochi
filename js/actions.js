
const actions = document.querySelectorAll('.action');
let clicked = false;
console.log("button is not clicked " + clicked)

actions.forEach((item, index) => {
  item.addEventListener('click', () => {
    //Feed
      if(index === 0 && !clicked ) {
          item.style.opacity = '20%';
          clicked = true;
          console.log("button is clicked " + clicked)
          feedAction(item);
      }

        //Play
        if(index === 1 && !clicked ) {
          item.style.opacity = '20%';
          clicked = true;
          console.log("button is clicked " + clicked)
          playAction(item);
      }

        //Rest
        if(index === 2 && !clicked ) {
          item.style.opacity = '20%';
          clicked = true;
          console.log("button is clicked " + clicked)

        }

        //Bathe
        if(index === 3 && !clicked ) {
          item.style.opacity = '20%';
          clicked = true;
          console.log("button is clicked " + clicked)

          }
        //Cure
        if(index === 4 && !clicked ) {
          item.style.opacity = '20%';
          clicked = true;
          console.log("button is clicked " + clicked)

          }
  });
});
