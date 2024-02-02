// Selecting the html items

const userInput = document.querySelector(".user_input");
const sendBtn = document.querySelector(".send_btn");
const chatbox = document.querySelector(".chat_text");

// We create an empty userMessage variable
let userMessage;

const createChatLi = (message, className) => {
  // Create a chat <li> element
  const chatLi = document.createElement("li");

  // Add a class name to the <li> element
  chatLi.classList.add("msg", className);

  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p><span class="material-symbols-outlined">smart_toy</span>`
      : `<p>${message}</p><span class="material-symbols-outlined">smart_toy</span>`;
  chatLi.innerHTML = chatContent;

  return chatLi;
};

const handleClick = () => {
  // saves the user input value inside a new const variable

  const userMessage = userInput.value.trim().toLowerCase();

  if (!userMessage) return;

  // Appends the user message to the output
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  console.log(userMessage);

  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking...", "incoming"));
  }, 600);

  if (userMessage.includes("name")) {
    setTimeout(() => {
      chatbox.appendChild(createChatLi("Your name is Robert!", "incoming"));
    }, 600);
  }

  if (userMessage.includes("age")) {
    setTimeout(() => {
      chatbox.appendChild(createChatLi("You are 34 years old!", "incoming"));
    }, 600);
  }

  if (userMessage.includes("javascript")) {
    setTimeout(() => {
      chatbox.appendChild(
        createChatLi("JavaScript is a programming language!", "icoming")
      );
    }, 600);
  }
};

sendBtn.addEventListener("click", handleClick);
