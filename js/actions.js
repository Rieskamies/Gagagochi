
const actions = document.querySelectorAll('.action');
let clicked = false;
console.log("button is not clicked " + clicked)

actions.forEach((item, index) => {
  item.addEventListener('click', () => {
      if(index === 0 && !clicked ) {
          item.style.opacity = '20%';
          clicked = true;
          console.log("button is clicked " + clicked)
          playActionAnimation(item);
      }
  });
});
