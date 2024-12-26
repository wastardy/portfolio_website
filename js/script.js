function runTypingEffect() {
    const text = 'I am Andrii Kononenko.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 150;

    typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, typingDelay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, typingDelay * i);
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect);