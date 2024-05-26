document.querySelectorAll('.emoji-btn').forEach(button => {
    button.addEventListener('click', () => {
        const emoji = button.textContent;
        addEmojiToContainer(emoji);
    });
});

function addEmojiToContainer(emoji) {
    const reactionContainer = document.getElementById('reaction-container');
    const emojiElement = document.createElement('span');
    emojiElement.textContent = emoji;
    reactionContainer.appendChild(emojiElement);
}
