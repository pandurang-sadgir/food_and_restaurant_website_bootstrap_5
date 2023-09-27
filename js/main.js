// console.log('welcome to javascript');

// counter logic
// document.addEventListener("DOMContentLoaded", () => {
//   function counter(id, start, end, duration) {
//     console.log("welcome to javascript");
//     let element = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1;
//       (step = Math.abs(Math.floor(duration / range))),
//       (timer = setInterval(() => {
//         current = current + increment;
//         element.textContent = current;
//         if (current === end) {
//           clearInterval(timer);
//         }
//       }, step));
//   }

//   counter("count1", 0, 2, 3000);
//   counter("count2", 0, 70, 3000);
//   counter("count3", 0, 45, 3000);
//   counter("count4", 0, 65, 3000);
// });


// Counter logic new
const valueDisplay = document.querySelectorAll('.count');
const interval = 5000

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    // console.log(endValue);
    let duration = Math.floor(interval/endValue);
    // It defines duration within that our count should complete
    let counter = setInterval(()=>{
        startValue = startValue+1;
        valueDisplay.textContent = startValue; 
        if(startValue === endValue){
            clearInterval(counter);
        }
    },duration);

  });
