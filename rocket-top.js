document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTopBtn");
    let isFlying = false;

    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (isFlying) return;
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove("opacity-0", "pointer-events-none", "translate-y-4");
                backToTopBtn.classList.add("opacity-100", "translate-y-0");
            } else {
                backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
                backToTopBtn.classList.remove("opacity-100", "translate-y-0");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            if (isFlying) return;
            isFlying = true;

            // Remove visibility classes that might have conflicting transforms
            backToTopBtn.classList.remove("translate-y-4", "translate-y-0");

            // Start rocket animation
            backToTopBtn.classList.add("rocket-fly");

            // Smooth scroll up coordinated with blast off (~20% of 2.5s = 500ms)
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 500);

            // Fallback scroll and reset animation
            setTimeout(() => {
                document.body.scrollTop = 0; // Safari fix
                document.documentElement.scrollTop = 0;
                backToTopBtn.classList.remove("rocket-fly");
                backToTopBtn.classList.add("opacity-0", "pointer-events-none", "translate-y-4");
                backToTopBtn.classList.remove("opacity-100", "translate-y-0");
                isFlying = false;
            }, 2500);
        });
    }
});
