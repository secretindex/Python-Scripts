const button = document.querySelector(".zap-btn");
const textToSend = document.querySelector("#wpp-text");
const whatsappLink = "https://wa.me/";

const sendMessage = (num, text) => {
  const noSpaceText = encodeURIComponent(text);
  const newLink = `${whatsappLink}${num}?text=${noSpaceText}`;

  window.open(newLink, "_blank");
};

button.addEventListener("click", (e) => {
  e.preventDefault();
  const number = document.querySelector("#wpp-number").value;
  const message = document.querySelector("#wpp-text").value;

  sendMessage(number, message);
});
