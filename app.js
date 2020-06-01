const fact = document.getElementById("fact");
const factText = document.getElementById("factText");
const closeBtn = document.getElementsByClassName("close");
const input = document.getElementById("input");

input.addEventListener("input", getFactAjax);
// console.log(closeBtn);
// Array.from(closeBtn).forEach((el) =>
//   el.addEventListener("click", closeBtnFunc)
// );

function getFactAjax() {
  const number = input.value;

  const xhr = new XMLHttpRequest();

  xhr.open("GET", `http://numbersapi.com/${number}`);

  xhr.onload = function () {
    if (this.status == 200 && number) {
      console.log(this.responseText);
      fact.classList.remove("d-none");
      factText.innerText = this.responseText;
    }
  };

  xhr.send();
}

// function closeBtnFunc() {
//   this.parentElement.classList.add("d-none");
// }
