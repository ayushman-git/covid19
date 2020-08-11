document.querySelector(".advice-btn").addEventListener('click', function clickAnimation(e) {
  let posX = e.layerX;
  let posY = e.layerY;
  let parent = document.querySelector(".advice-btn");
  let span = document.createElement('span');
  span.classList.add('btn-bubble');
  span.style.top = posX + "px";
  span.style.left = posY + "px";

  parent.appendChild(span);
  console.log(posX, posY);  
})