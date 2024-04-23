document.addEventListener('keydown', function(event) {
    // Prevent default action if the active element is an input or textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
    }

    let button;

    switch (event.key) {
        case ' ':
            // Check for 'Play' button first, if not found, check for 'Cashout'
            button = Array.from(document.querySelectorAll("button.btn-bet")).find(button => button.textContent.includes('Play')) ||
                     Array.from(document.querySelectorAll("button.btn-bet")).find(button => button.textContent.includes('Cashout'));
            break;
        case 'a':
            // 'a' key for "1/2" button
            button = Array.from(document.querySelectorAll("button.btn-multiplier")).find(button => button.textContent.includes('1/2'));
            break;
        case 's':
            // 's' key for "2x" button
            button = Array.from(document.querySelectorAll("button.btn-multiplier")).find(button => button.textContent.includes('2x'));
            break;
        case 'f':
            // 'f' key for "Auto Pick" button
            button = document.querySelector("#headlessui-tabs-panel-12 > div > div.flex-none.mt-2.flex.flex-col.gap-2 > div > button");
            // alternative selector if website changes occur breaking above reference for Auto Pick
            // button = Array.from(document.querySelectorAll("button")).find(button => button.textContent.includes('Auto Pick'));
            break;
    }

    if (button) {
        event.preventDefault();  // Prevent default action if a button is found and will be clicked
        button.click();
    }
});
