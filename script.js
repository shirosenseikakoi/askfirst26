let declineCount = 0;

function accept() {
  window.location.href = "https://t.me/Meiyonnaissee";
}

function decline() {
  showModal();
}

function reset() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="question" id="question">Yo! May ibigay ako sayo.</div>
    <button class="btn accept" onclick="accept()">Accept</button>
    <button class="btn decline" onclick="decline()">Decline</button>
  `;
  hideModal();
  declineCount = 0;
}

function showModal() {
  const modal = document.getElementById("modal");
  const modalText = document.getElementById("modal-text");

  const messages = [
    "No, you must accept.",
    "Again I said — accept it!",
    "Noooo! Just accept it.",
    "Accept it, come on!",
    "Di ka makakatakas hehe"
  ];

  const index = Math.min(declineCount, messages.length - 1);
  modalText.innerText = messages[index];
  modal.style.display = "flex";

  declineCount++;
}

function hideModal() {
  document.getElementById("modal").style.display = "none";
}