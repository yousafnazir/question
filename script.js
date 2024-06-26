const movingButton = document.getElementById('moving-button');

movingButton.addEventListener('mouseover', () => {
  const buttonWidth = movingButton.offsetWidth;
  const buttonHeight = movingButton.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const newTop = Math.random() * (windowHeight - buttonHeight);
  const newLeft = Math.random() * (windowWidth - buttonWidth);

  movingButton.style.top = newTop + 'px';
  movingButton.style.left = newLeft + 'px';
});

movingButton.addEventListener('touchstart', (event) => {
  const buttonWidth = movingButton.offsetWidth;
  const buttonHeight = movingButton.offsetHeight;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const newTop = Math.random() * (windowHeight - buttonHeight);
  const newLeft = Math.random() * (windowWidth - buttonWidth);

  movingButton.style.top = newTop + 'px';
  movingButton.style.left = newLeft + 'px';
  
  event.preventDefault(); // Prevent default touch event behavior
});

document.getElementById("love-button").addEventListener("click", function() {
  alert("I love you more");
});