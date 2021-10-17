function placeCapybaraGrid(startingHeight, screenWidth, screenHeight, capybaraSize) {
  let numCapybaras = Math.floor(screenHeight * screenWidth / capybaraSize);
  console.log("capybaras: " + numCapybaras)
  for (let i = 0; i < numCapybaras; i++) {
    let img = document.createElement("img");
    img.src = "images/capybara.svg";
    img.style.height = `${capybaraSize}px`;
    img.style.width = `${capybaraSize}px`;
    let randomHueRotation = Math.floor(Math.random() * 360);
    let randomSepia = Math.floor(Math.random() * 100);
    let randomInvert = Math.floor(Math.random() * 100);
    let randomAxisRotation = Math.floor(Math.random() * 360);
    img.style.filter = `invert(${randomInvert}%) sepia(${randomSepia}%) saturate(3000%) hue-rotate(${randomHueRotation}deg) brightness(88%) contrast(103%)`;
    img.style.position = "absolute";
    let thisLeftPositionn = Math.floor(screenWidth / 10 * 1.1 * (i % (screenWidth * 3 / capybaraSize))) - 2 * capybaraSize;
    let thisTopPosition = Math.floor(screenHeight / 10 * 1.1 + capybaraSize / 22 * i) + startingHeight;
    img.style.left = `${thisLeftPositionn}px`;
    img.style.top = `${thisTopPosition}px`;
    src.appendChild(img);
  }
}
let src = document.querySelector("body");
const screenWidth = document.documentElement.clientWidth;
const screenHeight = document.documentElement.clientHeight;
const capybaraSize = screenWidth / 4.75
placeCapybaraGrid(-600 + (capybaraSize / 3), screenWidth, screenHeight, capybaraSize)
placeCapybaraGrid(-600, screenWidth,  screenHeight, capybaraSize)