// load quotres

const loadquote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => dispalyQuotes(data));
};

// dispalyQuotes
loadquote();
const dispalyQuotes = (quote) => {
  const display = document.getElementById("display");
  display.innerHTML = `<blockquote class="text">${quote.quote}</blockquote>`;
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
};

const copyText = () => {
  const display = document.getElementById("display");
  navigator.clipboard.writeText(display.innerText);
  const tooltip = document.getElementById("tooltip");
  tooltip.style.display = "block";
};
