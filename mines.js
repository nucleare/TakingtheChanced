document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        event.preventDefault();
      // Spacebar activates Play button
        const playButton = Array.from(document.querySelectorAll("button.btn-bet")).find(button => button.textContent.includes('Play'));
        if (playButton) {
            playButton.click();
        }
    }
});
