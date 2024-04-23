document.addEventListener('DOMContentLoaded', function() {
    // Locate the container where the links are located
    const linksContainer = document.querySelector('.flex.flex-grow.flex-row.gap-2.text-sm');
    
    // Check if the container exists
    if (linksContainer) {
        // Create the toggle link
        const toggleContainer = document.createElement('div');
        toggleContainer.className = 'hotkeys-toggle';

        const enableLink = document.createElement('a');
        enableLink.href = '#';
        enableLink.textContent = 'Enable Hotkeys';
        enableLink.style.marginRight = '10px';
        enableLink.onclick = function() {
            localStorage.setItem('hotkeysEnabled', 'true');
            updateLinkVisibility();
            return false;
        };

        const disableLink = document.createElement('a');
        disableLink.href = '#';
        disableLink.textContent = 'Disable Hotkeys';
        disableLink.onclick = function() {
            localStorage.setItem('hotkeysEnabled', 'false');
            updateLinkVisibility();
            return false;
        };

        toggleContainer.appendChild(enableLink);
        toggleContainer.appendChild(document.createTextNode('|'));
        toggleContainer.appendChild(disableLink);
        linksContainer.appendChild(toggleContainer);

        // Function to update visibility of links based on current state
        function updateLinkVisibility() {
            const isEnabled = localStorage.getItem('hotkeysEnabled') === 'true';
            enableLink.style.display = isEnabled ? 'none' : 'inline';
            disableLink.style.display = isEnabled ? 'inline' : 'none';
        }

        // Initialize the link visibility
        updateLinkVisibility();
    }

    // Hotkeys functionality
    document.addEventListener('keydown', function(event) {
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
            let button;
            const isEnabled = localStorage.getItem('hotkeysEnabled') === 'true';

            if (isEnabled) {
                switch (event.key) {
                    case ' ':
                        button = Array.from(document.querySelectorAll("button.btn-bet")).find(btn => btn.textContent.includes('Play')) ||
                                 Array.from(document.querySelectorAll("button.btn-bet")).find(btn => btn.textContent.includes('Cashout'));
                        break;
                    case 'a':
                        button = Array.from(document.querySelectorAll("button.btn-multiplier")).find(btn => btn.textContent.includes('1/2'));
                        break;
                    case 's':
                        button = Array.from(document.querySelectorAll("button.btn-multiplier")).find(btn => btn.textContent.includes('2x'));
                        break;
                    case 'f':
                        button = document.querySelector("#headlessui-tabs-panel-12 > div > div.flex-none.mt-2.flex.flex-col.gap-2 > div > button");
                        break;
                }

                if (button) {
                    event.preventDefault();
                    button.click();
                }
            }
        }
    });
});
