// Menu Mobile
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('fa-times');
            hamburger.classList.toggle('fa-bars');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('fa-times');
                hamburger.classList.add('fa-bars');
            });
        });

        // Header Sombra ao Rolar
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
                header.style.height = "80px";
            } else {
                header.style.boxShadow = "0 2px 20px rgba(0,0,0,0.05)";
                header.style.height = "90px";
            }
        });

        // Animação de Scroll (Reveal)
        const observerOptions = {
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));