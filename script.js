let input = document.getElementById("text-field");

document.querySelector("button").addEventListener("click", () => {
  let inputValue = input.value;
  //console.log(inputValue);
  if (inputValue % 2 === 0) {
    document.getElementById("num-para").innerHTML =
      inputValue + " is an even number ✌";
  } else {
    document.getElementById("num-para").innerHTML =
      inputValue + " is an odd number 🍕";
  }
});
