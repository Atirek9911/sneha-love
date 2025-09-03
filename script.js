// Hearts Animation
function showHearts() {
  const canvas = document.getElementById("hearts");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let hearts = [];
  
  function Heart(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
  }
  
  Heart.prototype.draw = function() {
    ctx.font = this.size + "px Arial";
    ctx.fillText("💖", this.x, this.y);
  }
  
  Heart.prototype.update = function() {
    this.y -= this.speed;
    this.draw();
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((h, i) => {
      h.update();
      if (h.y < 0) hearts.splice(i, 1);
    });
    requestAnimationFrame(animate);
  }
  
  setInterval(() => {
    let x = Math.random() * canvas.width;
    let y = canvas.height;
    let size = Math.random() * 20 + 20;
    let speed = Math.random() * 2 + 1;
    hearts.push(new Heart(x, y, size, speed));
  }, 200);
  
  animate();
}

// Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}
