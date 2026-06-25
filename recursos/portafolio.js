document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const tabs = document.querySelectorAll(".tab-btn");
    const panels = document.querySelectorAll(".tab-panel");

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añadir clase activa al botón presionado
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    const btnContacto = document.getElementById('btnContacto');
    const infoContacto = document.getElementById('infoContacto');

    if (btnContacto && infoContacto) {
        btnContacto.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte hacia arriba por el href="#"
            infoContacto.classList.toggle('show'); // Alterna la clase para mostrar/ocultar
        });
    }


    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remover estado activo de todos los botones y paneles
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            // Añadir estado activo al botón clickeado
            tab.classList.add("active");
            
            // Mostrar el panel correspondiente
            const targetPanel = document.getElementById(tab.dataset.tab);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});