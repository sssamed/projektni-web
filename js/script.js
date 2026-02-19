document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('main h2[id], main h3[id]');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (sidebarToggle) sidebarToggle.checked = false;
        });
    });

    const updateActiveLink = () => {
        let currentId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Ako smo skrolovali blizu vrha sekcije
            if (window.scrollY >= sectionTop - 30) {
                currentId = section.getAttribute('id');
            }
        });

        if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
            currentId = sections[sections.length - 1].getAttribute('id');
        }

        sidebarLinks.forEach(link => {
            const href = link.getAttribute('href').substring(1);
            if (href === currentId) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});

// za temu
const themeIcon = document.querySelector('#theme-icon-btn');
let theme = localStorage.getItem('theme');

const switchTheme = (e) => {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.setAttribute('src', 'img/icons/dark_mode_icon.svg');
        theme = 'light';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.setAttribute('src', 'img/icons/light_mode_icon.svg');
        theme = 'dark';
    }    
};

themeIcon.addEventListener('click', switchTheme, false);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeIcon.setAttribute('src', 'img/icons/dark_mode_icon.svg');
    } else if (currentTheme === 'dark') {
        themeIcon.setAttribute('src', 'img/icons/light_mode_icon.svg');
    }
}