const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let isJumping = false;

function handleKeyUp(event) {
  //32 é o keycode do espaço
  //site para ver outros key code: https://www.toptal.com/developers/keycode
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;

  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      //descendo
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 20;
          dino.style.bottom = position + "px";
        }
      }, 20);
    } else {
    }
    //subindo
    position += 20;
    dino.style.bottom = position + "px";
  }, 20); // a cada 20 milisegundos o codigo vai ser repetido
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;
  let randomTime = Math.random() * 6000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let leftInterval = setInterval(() => {
    if (cactusPosition < -60) {
      clearInterval(leftInterval);
      background.removeChild(cactus);
    } else {
      cactusPosition -= 10;
      cactus.style.left = cactusPosition + "px";
    }
  }, 20);

  setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener("keyup", handleKeyUp);
