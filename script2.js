const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();

    if (message === '') return;

    addUserMessage(currentUser, message);
    
    saveMessageToLocalStorage(currentUser, message);

    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function addUserMessage(user, message) {
    const userMessage = createMessageElement(user, message, 'user');
    chatBox.appendChild(userMessage);
}

function addBotMessage(message) {
    const botMessage = createMessageElement('Bot', message, 'bot');
    chatBox.appendChild(botMessage);
}

function createMessageElement(user, message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat');
    messageElement.classList.add(sender);

    const userSpan = document.createElement('span');
    userSpan.classList.add('user');
    userSpan.textContent = user;

    const messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;

    messageElement.appendChild(userSpan);
    messageElement.appendChild(messageParagraph);

    return messageElement;
}

// Load messages from local storage and display them
function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    messages.forEach(({ user, message }) => {
        addUserMessage(user, message);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Save new message to local storage
function saveMessageToLocalStorage(user, message) {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ user, message });
    localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Load existing messages on page load
loadMessages();

// Simulate user authentication or assign a default user
let currentUser = 'User' + Math.floor(Math.random() * 1000);
