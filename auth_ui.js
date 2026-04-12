document.addEventListener('DOMContentLoaded', () => {
    updateHeaderAuthUI();
});

function updateHeaderAuthUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userStr = localStorage.getItem('user');
    
    if (isLoggedIn && userStr) {
        const user = JSON.parse(userStr);
        const name = user.name || "Học viên";
        
        const desktopContainer = document.getElementById('auth-buttons-desktop');
        const mobileContainer = document.getElementById('auth-buttons-mobile');
        
        const nameHTML = `
            <div class="flex items-center gap-2 md:gap-4">
                <button onclick="toggleTheme()"
                    class="size-8 md:size-11 flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors shrink-0"
                    title="Đổi giao diện">
                    <span class="material-symbols-outlined text-[14px] md:text-base block dark:hidden">light_mode</span>
                    <span class="material-symbols-outlined text-[14px] md:text-base hidden dark:block text-yellow-400">dark_mode</span>
                </button>
                <div class="flex flex-col items-end leading-tight">
                    <span class="text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary whitespace-nowrap">${name}</span>
                    <button onclick="handleLogout()" class="text-[7px] md:text-[9px] uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/40 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">
                        <span class="material-symbols-outlined text-[8px] md:text-[10px]">logout</span> Đăng xuất
                    </button>
                </div>
                <a href="profile.html" class="size-7 md:size-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center overflow-hidden shrink-0 hover:border-primary transition-all">
                    <span class="material-symbols-outlined text-base md:text-xl transform scale-110">person</span>
                </a>
            </div>
        `;

        if (desktopContainer) {
            desktopContainer.innerHTML = nameHTML;
        }
        
        if (mobileContainer) {
            mobileContainer.innerHTML = nameHTML;
        }
    }
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    localStorage.removeItem('userRole');
    window.location.reload();
}


// --- Unified Theme Logic ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Call initTheme immediately
initTheme();

// Make globally accessible
window.toggleTheme = toggleTheme;
window.initTheme = initTheme;
