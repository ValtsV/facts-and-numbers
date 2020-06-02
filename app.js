const fact = document.getElementById("fact");
const factText = document.getElementById("factText");
const input = document.getElementById("input");
const errorCont = document.getElementById("error");

input.addEventListener("input", getFactFetch);
fact.addEventListener("click", closeFunc);

// function getFactAjax() {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", `http://numbersapi.com/${number}`);

//   xhr.onload = function () {
//     if (this.status == 200 && number) {
//       console.log(this.responseText);
//       fact.classList.remove("d-none");
//       factText.innerText = this.responseText;
//     }
//   };

//   xhr.send();
// }

function getFactFetch() {
  const number = input.value;
  fetch(`http://numbersapi.com/${number}`)
    .then((response) => response.text())
    .then((data) => {
      if (number) {
        fact.classList.remove("d-none");
        factText.innerText = data;
      }
    })
    .catch((err) => {
      errorCont.innerText = "Something went wrong!";
    });
}

function closeFunc(e) {
  if (e.target.classList.contains("close")) {
    fact.classList.add("d-none");
  }
}
