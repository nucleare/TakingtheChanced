document.addEventListener('keydown', function(event) {
    // Check if the active element is not an input or textarea
    if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        let button;
        
        switch (event.key) {
            case ' ':
                // Spacebar
                button = Array.from(document.querySelectorAll("button.btn-bet")).find(button => button.textContent.includes('Play'));
                break;
            case 'a':
                // 'a' key for "1/2" button
                button = Array.from(document.querySelectorAll("button.btn-multiplier")).find(button => button.textContent.includes('1/2'));
                break;
            case 's':
                // 's' key for "2x" button
                button = Array.from(document.querySelectorAll("button.btn-multiplier")).find(button => button.textContent.includes('2x'));
                break;
        }

        if (button) {
            event.preventDefault();  // Prevent default action if a button is found and will be clicked
            button.click();
        }
    }
});
