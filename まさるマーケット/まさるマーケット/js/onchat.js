console.log("Online");

const chatbox = document.getElementById('chat-box');
        const userInput = document.getElementById('chat-message');

        function sendMessage() {
            const userMessage = userInput.value;
            if (userMessage.trim() === '') return;

            appendMessage('User', userMessage);

            // Simulate a simple response from the chatbot
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => {
                appendMessage('Chatbot', botResponse);
            }, 500);

            userInput.value = '';
        }

        function appendMessage(sender, message) {
            const messageElement = document.createElement('p');
            messageElement.textContent = `${sender}: ${message}`;
            chatbox.appendChild(messageElement);
            chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
        }

        function getBotResponse(userMessage) {
            // Replace this with your actual chatbot logic
            if (userMessage.toLowerCase().includes('hello')) {
                    return 'Hello! How can I assist you today?';} 
                else if (userMessage.toLowerCase().includes('hi')) {
                    return 'Hi! How can I assist you today?';} 
                else if (userMessage.toLowerCase().includes('goodbye')) {
                    return 'Goodbye! Have a great day!';} 
                else if (userMessage.toLowerCase().includes('thank you')) {
                    return 'Glad to be able to help!';} 
                else {// Default response
                    return 'I did not understand that. Can you please clarify?';}
        }
        