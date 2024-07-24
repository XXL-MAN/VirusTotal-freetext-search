// ==UserScript==
// @name         VirusTotal Extension Free TEXT
// @namespace    http://www.xxlman.es/
// @version      0.1
// @description  Buscar texto seleccionado en VirusTotal desde el menú contextual
// @author       Andrés Naranjo @TheXXLMAN
// @match        *://*/*
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

    // Function to search selected text in VirusTotal
    function searchInVirusTotal() {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            const vtUrl = `https://www.virustotal.com/gui/search/${encodeURIComponent(selectedText)}`;
            GM_openInTab(vtUrl, { active: true, insert: true });
        } else {
            alert('Please select some text to search in VirusTotal.');
        }
    }

    // Register the menu command
    GM_registerMenuCommand('Search in VirusTotal', searchInVirusTotal);

    // Add custom CSS to ensure the context menu is styled properly
    GM_addStyle(`
        menuitem {
            cursor: pointer;
            padding: 5px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            margin: 2px 0;
        }
        menuitem:hover {
            background-color: #e0e0e0;
        }
    `);

    // Add event listener for context menu
    document.addEventListener('contextmenu', function(event) {
        // Remove any existing custom context menu item
        const existingMenuItem = document.getElementById('vt-search-context-menu');
        if (existingMenuItem) {
            existingMenuItem.remove();
        }

        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            const contextMenu = document.createElement('menuitem');
            contextMenu.label = 'Search in VirusTotal';
            contextMenu.id = 'vt-search-context-menu';
            contextMenu.onclick = searchInVirusTotal;
            contextMenu.style.cursor = 'pointer';
            contextMenu.style.padding = '5px';
            contextMenu.style.backgroundColor = '#f0f0f0';
            contextMenu.style.border = '1px solid #ccc';
            contextMenu.style.margin = '2px 0';
            contextMenu.onmouseover = function() {
                contextMenu.style.backgroundColor = '#e0e0e0';
            };
            contextMenu.onmouseout = function() {
                contextMenu.style.backgroundColor = '#f0f0f0';
            };
            event.target.appendChild(contextMenu);
        }
    });

})();
