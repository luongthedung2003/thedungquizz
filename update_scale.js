const fs = require('fs');
const files = ['d:/THEDUNGQUIZZ/index.html', 'd:/THEDUNGQUIZZ/courses.html', 'd:/THEDUNGQUIZZ/login.html'];
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Scale down the logo container
    content = content.replace(/size-10 md:size-12/g, 'size-8 md:size-12');
    
    // Scale down the header py and gap
    content = content.replace(/py-4 gap-4 relative w-full/g, 'py-2 md:py-4 gap-3 md:gap-4 relative w-full');
    content = content.replace(/flex items-center gap-3/g, 'flex items-center gap-2 md:gap-3');
    
    // Scale down text
    content = content.replace(/text-lg md:text-xl font-semibold/g, 'text-base md:text-xl font-semibold');
    
    // Scale down mobile action buttons
    content = content.replace(/class="size-9 flex items-center justify-center border/g, 'class="size-8 md:size-9 flex items-center justify-center border');
    content = content.replace(/h-9 items-center justify-center/g, 'h-8 md:h-9 items-center justify-center');
    content = content.replace(/text-sm block dark:hidden/g, 'text-xs md:text-sm block dark:hidden');
    content = content.replace(/text-sm hidden dark:block/g, 'text-xs md:text-sm hidden dark:block');
    content = content.replace(/class="material-symbols-outlined text-sm">menu/g, 'class="material-symbols-outlined text-[18px] md:text-sm">menu');
    
    content = content.replace(/h-11 min-w-\[150px\] items-center/g, 'h-9 md:h-11 min-w-[120px] md:min-w-[150px] items-center');
    content = content.replace(/h-11 min-w-\[150px\] px-5/g, 'h-9 md:h-11 min-w-[120px] md:min-w-[150px] px-3 md:px-5');
    
    fs.writeFileSync(file, content);
});
console.log('Applied mobile-specific scaling via Tailwind classes to all headers.');
