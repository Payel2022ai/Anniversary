const quotes = [
  "Every love story is beautiful, but ours is my favorite.",
  "You are the finest, loveliest, tenderest, and most beautiful person I have ever known.",
  "Meeting you was like listening to a song for the first time and knowing it would be my favorite.",
  "You are my sun, my moon, and all my stars.",
  "Three years ago, I met you, and my world hasn’t been the same since. From that moment, my heart found its home in you. Here's to the day that changed my life forever.❤️",
  "You are the most beautiful woman in the world, not just for how you look, but for the kindness in your heart, the sparkle in your eyes, and the love you give so effortlessly.❤️"
];

function showQuote(index, element) {
  const quoteContainer = document.getElementById("quoteContainer");

  // Clear any existing quote
  quoteContainer.innerHTML = "";

  // Create a new quote element
  const quoteText = document.createElement("p");
  quoteText.textContent = quotes[index];
  quoteText.classList.add("typewriter");
  quoteContainer.appendChild(quoteText);

  // Ensure the quote container is visible
  quoteContainer.style.display = "block";

  element.classList.add("heartbeat");
  setTimeout(() => element.classList.remove("heartbeat"), 1000);

  playVideo();
}

function playVideo() {
  const video = document.getElementById("videoBackground");
  video.play();
}

function launchGame() {
  window.location.href = "game.html";
}

function goHome() {
  window.location.href = "index3.html";
}
