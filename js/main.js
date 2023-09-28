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
const objectOfElement = document.querySelectorAll('.count');
const interval = 5000

objectOfElement.forEach((element) => {
    // let startValue = 0;
    let endValue = parseInt(element.getAttribute("data-val"));
    let startValue = parseInt(element.getAttribute("data-startValue"));
    // console.log(endValue);
    let duration = Math.floor(interval/endValue);
    // It defines duration within that our count should complete
    let counter = setInterval(()=>{
        endValue>startValue?startValue+=1:startValue-=1;
        // startValue = startValue+1;
        element.textContent = startValue; 
        if(startValue === endValue){
            clearInterval(counter);
        }
    },duration);

  });




  
