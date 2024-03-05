const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
const downloadBtn = wrapper.querySelector(".download-button"); // Novo

generateBtn.addEventListener("click", () => {
  const qrValue = qrInput.value;
  
  if (!qrValue) {
    Swal.fire({
      title: "Atenção",
      text: "Por favor, insira uma URL ou texto antes de gerar o QR Code.",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK"
    });
    return;
  }
  
  updateButtonState("Gerando um Qr Code...");

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  
  qrImg.addEventListener("load", () => {
    updateButtonState("QR Code Gerado com Sucesso!");
    wrapper.classList.add("active");
    downloadBtn.classList.remove("hidden");
  });
});

downloadBtn.addEventListener("click", () => {
  const downloadLink = document.createElement("a");
  downloadLink.href = qrImg.src;
  downloadLink.download = "qrcode.png";
  downloadLink.click();
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    resetFormState();
    downloadBtn.classList.add("hidden");
  }
});

function updateButtonState(text) {
  generateBtn.innerText = text;
}

function resetFormState() {
  wrapper.classList.remove("active");
  updateButtonState("Gerar Qr Code");
}
