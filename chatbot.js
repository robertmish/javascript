const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chat-input span");
chatToggler = document.querySelector(".chatbot-toggler");

let userMessage;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  console.log(userMessage);
  if (!userMessage) return;
  // Append the user's message to the charbox
  chatbox.createChatLi(userMessage, "outgoing");
};

sendChatBtn.addEventListener("click", handleChat);
