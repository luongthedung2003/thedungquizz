const fs = require('fs');

try {
    let indexHtml = fs.readFileSync('d:/THEDUNGQUIZZ/index.html', 'utf8');

    // Extract Tailwind config and fonts
    const tailwindConfig = indexHtml.match(/<script id=\"tailwind-config\">[\s\S]*?<\/script>/)[0];
    const fonts = indexHtml.match(/<link href=\"https:\/\/fonts\.googleapis\.com\/css2\?family=Be\+Vietnam\+Pro[^\"]+\"[\s\S]*?rel=\"stylesheet\" \/>/)[0];

    // Extract Header
    const headerStart = indexHtml.indexOf('<header');
    const headerEnd = indexHtml.indexOf('</header>') + '</header>'.length;
    let header = indexHtml.substring(headerStart, headerEnd);
    
    // For login.html, we don't really want the header to be fixed to the layout if it ruins the scroll. Oh wait, we DO want it fixed.
    // Let's modify the header in login.html to make sure the login links point correctly, or let's leave them as they are pointing to "login.html".

    // Read login.html
    let loginHtml = fs.readFileSync('d:/THEDUNGQUIZZ/login.html', 'utf8');

    if (!loginHtml.includes('tailwind-config')) {
        // Insert Tailwind Config & Fonts
        loginHtml = loginHtml.replace('</head>', fonts + '\n    ' + tailwindConfig + '\n</head>');

        // Insert Header after <body ...>
        loginHtml = loginHtml.replace(/(<body[^>]*>)/, '$1\n' + header);

        // Adjust main container for header padding: 'p-3 lg:p-5' -> 'p-3 lg:p-5 pt-[120px] lg:pt-[130px]'
        loginHtml = loginHtml.replace('class="flex w-full h-full p-3 lg:p-5 gap-6"', 'class="flex w-full h-full p-3 lg:p-5 pt-[120px] lg:pt-[130px] gap-6"');

        // Add toggleMenu logic and ensure Be Vietnam Pro is available.
        loginHtml = loginHtml.replace('</body>', '\n    <script>\n      function toggleMenu() {\n        const menu = document.getElementById(\'mobileMenu\');\n        if(menu) menu.classList.toggle(\'active\');\n      }\n      function toggleTheme() {\n        document.documentElement.classList.toggle(\'dark\');\n      }\n    </script>\n</body>');

        fs.writeFileSync('d:/THEDUNGQUIZZ/login.html', loginHtml);
        console.log("Success");
    } else {
        console.log("Already updated");
    }
} catch (e) {
    console.error(e);
}
