const dino = document.querySelector(".dino");
function handleKeyUp(event) {
  //32 é o keycode do espaço
  //site para ver outros key code: https://www.toptal.com/developers/keycode
  if (event.keyCode === 32) {
    jump();
  }
}

function jump() {
  let position = 0;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() =>{
          if(position <= 0){
              clearInterval(downInterval);
          }else{
            position-= 20;
            dino.style.bottom = position + "px";
          }
      },20)
    }
     else {
    }
    //subindo
    position += 20;
    dino.style.bottom = position + "px";
  }, 20); // a cada 20 milisegundos o codigo vai ser repetido
}
document.addEventListener("keyup", handleKeyUp);
