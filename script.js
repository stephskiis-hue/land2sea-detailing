document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       PART 1: MOBILE MENU (CRITICAL FUNCTION)
       This is isolated so it always works.
       ========================================= */
    const initMobileMenu = () => {
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const iconContainer = document.getElementById('hamburger-icon');

        if (btn && menu) {
            // Remove any old event listeners by cloning (optional safety)
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);

            newBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevents clicks from bubbling up
                
                // Toggle the menu visibility
                menu.classList.toggle('active');
                
                // Toggle the X icon animation
                if (iconContainer) {
                    // We need to re-select the icon since we cloned the button
                    const newIcon = newBtn.querySelector('#hamburger-icon');
                    if(newIcon) newIcon.classList.toggle('menu-open');
                }
            });
        } else {
            console.log("Mobile menu elements missing. Check HTML IDs.");
        }
    };
    // Run Menu Logic
    initMobileMenu();


    /* =========================================
       PART 2: ACTIVE LINK HIGHLIGHTER
       Blue text for current page (Skips Logo)
       ========================================= */
    try {
        const currentPage = window.location.pathname.split("/").pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav a');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');

            // SAFETY CHECK: If link has no href, skip it
            if (!linkHref) return;

            // 1. SKIP THE LOGO (Has class 'font-black')
            if (link.classList.contains('font-black')) return;

            // 2. SKIP THE BOOK BUTTON (Has class 'bg-blue-600')
            if (link.classList.contains('bg-blue-600')) return;

            // 3. MATCHING LOGIC
            if (linkHref === currentPage) {
                // Remove white
                link.classList.remove('text-white');
                
                // Add Blue
                link.classList.add('text-blue-500');
                
                // Add Underline (Desktop)
                link.classList.add('border-b-2');
                link.classList.add('border-blue-500');

                // Add Background (Mobile Only)
                if (link.closest('#mobile-menu')) {
                    link.classList.add('bg-blue-600/20');
                }
            }
        });
    } catch (err) {
        console.log("Highlighter Error (Menu still works):", err);
    }


    /* =========================================
       PART 3: SCROLL ANIMATIONS
       ========================================= */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});

