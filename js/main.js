// Active navbar on scolling
let nav = document.querySelector(".navigation-wrap");
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scoll-on");
  } else {
    nav.classList.remove("scoll-on");
  }
};

// hamburger menu code
let allLink = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
allLink.forEach(function(link) {
  link.addEventListener("click", () => {
    navCollapse.classList.remove('show');

  });
});

// Counter logic new
const objectOfElement = document.querySelectorAll(".count");
const interval = 5000;

objectOfElement.forEach((element) => {
  // let startValue = 0;
  let endValue = parseInt(element.getAttribute("data-val"));
  let startValue = parseInt(element.getAttribute("data-startValue"));
  // console.log(endValue);
  let duration = Math.floor(interval / endValue);
  // It defines same duration within that our count should complete
  let counter = setInterval(() => {
    endValue > startValue ? (startValue += 1) : (startValue -= 1);
    // startValue = startValue+1;
    element.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
