let $ = document;
const counters = $.querySelectorAll(".num");
let benefitCountainer = $.querySelector(".benefits");
let startCounter = false

window.addEventListener("scroll", () => {
  if (window.scrollY >= benefitCountainer.offsetTop) {
    if (!startCounter) {
        
        counters.forEach((counter) => setCounter(counter));
    }
    startCounter = true;
  }
});

function setCounter(el) {
  let elemNumCount = el.dataset.count;

  let counterInterval = setInterval(() => {
    if (el.textContent == elemNumCount) {
      clearInterval(counterInterval);
    }
    el.textContent++;
  }, 5);
}
