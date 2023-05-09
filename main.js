const $timeAdd = document.querySelectorAll(".box-style button");

let hrsAdd = 10;
let minAdd = 5;
let secAdd = 1;

$timeAdd.forEach((TimeAddBtn) => {
  TimeAddBtn.addEventListener("click", (e) => {
    const NumberAdd = parseInt(e.target.innerHTML);
    if (TimeAddBtn.id === "secAdd") {
      TimeAddBtn.innerHTML = NumberAdd + 10;
    } else if (TimeAddBtn.id === "minAdd") {
      TimeAddBtn.innerHTML = NumberAdd + 5;
    } else {
      TimeAddBtn.innerHTML = NumberAdd + 1;
    }
  });
});

console.log($timeAdd);
