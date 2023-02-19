const adviceId = document.getElementById("advice-id")
const adviceText = document.getElementById("advice-text")
const quoteGenerator = document.getElementById("quote-generator")

const fetchAdvice = async () => {
  await fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((res) => {
      adviceId.textContent = res.slip.id
      adviceText.textContent = `" ${res.slip.advice} "`
    })
}

quoteGenerator.addEventListener("click", () => fetchAdvice())

fetchAdvice()