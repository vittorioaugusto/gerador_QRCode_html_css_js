const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  
  if (!qrValue) {
    alert("Por favor, insira uma URL ou texto antes de gerar o QR Code.");
    return;
}
  
  updateButtonState("Gerando um Qr Code...");

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  
  qrImg.addEventListener("load", () => {
    updateButtonState("QR Code Gerado com Sucesso!");
    wrapper.classList.add("active");
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    resetFormState();
  }
});

function updateButtonState(text) {
  generateBtn.innerText = text;
}

function resetFormState() {
  wrapper.classList.remove("active");
  updateButtonState("Gerar Qr Code");
}
