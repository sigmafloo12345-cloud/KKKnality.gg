const screen = document.querySelector(".screen");
const discordUrl = "https://discord.gg/fA2nBym7GA";
const welcome = document.querySelector(".welcome");

const text = welcome.textContent;
welcome.textContent = "";

Array.from(text).forEach((character, index) => {
  const letter = document.createElement("span");
  letter.className = character === " " ? "letter space" : "letter";
  letter.style.setProperty("--letter-index", index);
  const direction = index % 2 === 0 ? -1 : 1;
  letter.style.setProperty("--drift", `${direction * (14 + (index % 5) * 5)}px`);
  letter.textContent = character === " " ? "\u00a0" : character;
  welcome.appendChild(letter);
});

window.setTimeout(() => {
  screen.classList.add("logo-visible");
}, 4050);

if (!new URLSearchParams(window.location.search).has("preview")) {
  window.setTimeout(() => {
    window.location.assign(discordUrl);
  }, 6500);
}
