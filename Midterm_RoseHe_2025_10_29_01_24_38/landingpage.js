let phase = 0; 
let progress = 0;
let noisePixels = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  frameRate(30);


  setTimeout(() => {
    phase = 1;
  }, 3000);
}

function draw() {
  if (phase === 0) {
    drawStaticNoise();
  } 
  else if (phase === 1) {
    drawLoading();
  } 
  else if (phase === 2) {
    noLoop(); 
    document.getElementById("welcome-box").style.display = "block";
  }
}

// pixels
function drawStaticNoise() {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let brightness = random(255);
    pixels[i] = brightness;
    pixels[i + 1] = brightness;
    pixels[i + 2] = brightness;
    pixels[i + 3] = 255;
  }
  updatePixels();
}

// Loading
function drawLoading() {
  background(0, 0, 128);
  fill(0, 255, 255);
  rect(width / 2 - 150, height / 2 + 100, progress, 20);

  progress += 5;
  if (progress >= 300) {
    progress = 300;
    phase = 2;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// buttom
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const loadingText = document.getElementById("loading-text");

  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      loadingText.textContent = "Loading Menu...";
      let dots = 0;
      const interval = setInterval(() => {
        dots = (dots + 1) % 4;
        loadingText.textContent = "Loading Menu" + ".".repeat(dots);
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
        window.location.href = "menu.html";
      }, 2000);
    });
  }
});

