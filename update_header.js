const fs = require('fs');
let content = fs.readFileSync('d:/THEDUNGQUIZZ/login.html', 'utf8');

// Fix missing 'T' by using justify-start
content = content.replace('justify-center w-full lg:w-auto text-[9px]', 'justify-start lg:justify-center w-full lg:w-auto px-4 lg:px-0 text-[9px]');

// Fix header scale on mobile
const css = `
        /* Sync header size with zoom 0.85 */
        @media (max-width: 768px) {
            header, #mobileMenu {
                transform: scale(0.85);
                transform-origin: top left;
                width: 117.647%;
            }
        }
    </style>`;
content = content.replace('</style>', css);

fs.writeFileSync('d:/THEDUNGQUIZZ/login.html', content);
console.log('done');
