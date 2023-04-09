const button = document.querySelector("#btnShow");
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("#btnClose");

button.onclick = function () {
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};

const closeMessage = document.querySelector("#close-message");
const message = document.querySelector(".message");

closeMessage.addEventListener("click", () => {
  message.style.display = "none";
});

setTimeout(() => {
  message.style.display = "none";
}, 5000);
