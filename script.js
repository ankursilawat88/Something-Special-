let currentSlide = 0;
const photos = ["image/photo1.jpg", "image/photo2.jpg", "image/photo3.jpg"];
const slideshow = document.getElementById("slideshow");

// Countdown Logic
let timeLeft = 10;
const countdownEl = document.getElementById("countdown");

const timer = setInterval(() => {
  timeLeft--;
  countdownEl.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    showPage("wishPage");
  }
}, 1000);

// Page Navigation
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");

  if (pageId === "photosPage") startSlideshow();
  if (pageId === "letterPage") typeLetter();
}

// Slideshow
function startSlideshow() {
  setInterval(() => {
    currentSlide = (currentSlide + 1) % photos.length;
    slideshow.src = photos[currentSlide];
  }, 2500);
}

// Letter Typing
const letter = "umm Hello meri Jaan sbse pehle toh mera bacha happy anniversary and I love you soo soo much meri jaan i don't know ki itna jldi humari Anniversary aa gai pta hi ni chala ki humari meeting ko 2 saal ho chuke hai but still wo memories ek dm new jesi hai or mai aaj tk or future me kbh bhi humari ye pehli meeting kbhi bhi ni bhool paunga or na kbhi bhulna chahunga meri jaana my Love, thank you for being the most beautiful part of my life. This journey with you has been nothing less than magical, and I promise to hold your hand forever ❤️.";
let index = 0;
function typeLetter() {
  const textEl = document.getElementById("letterText");
  textEl.textContent = "";
  index = 0;
  const typer = setInterval(() => {
    if (index < letter.length) {
      textEl.textContent += letter.charAt(index);
      index++;
    } else {
      clearInterval(typer);
    }
  }, 50);
}

// Music Autoplay Fix
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.5;
  music.play().catch(() => {
    // Fallback trick
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});
