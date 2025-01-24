const quotes = [
  "Do you have a name, or can I call you mine?" ,

"Are you an artist? Because you're really good at drawing me in." ,

"Do you know what you'd look beautiful in? My arms." ,

"If you were a vegetable, you'd be a 'cute-cumber.'",

"Is your name Google? Because you've got everything I've been searching for.",

"Do you have a Band-Aid? Because I scraped my knee falling for you."
,
"Are you a magician? Because whenever I look at you, everyone else disappears.",

"Is your name Wi-Fi? Because I'm feeling a connection.",
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
