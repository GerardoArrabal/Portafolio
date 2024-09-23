// Código JS básico para agregar algunas interacciones si lo necesitas más adelante.
document.addEventListener('DOMContentLoaded', () => {
    console.log("El portafolio está cargado");
    // Aquí podrías agregar validación para el formulario de contacto, animaciones, etc.
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("El portafolio está cargado");

    // Selecciona todos los enlaces que apuntan a secciones de la página
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtener el objetivo del ancla
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Hacer el desplazamiento suave manualmente
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Desplazamiento para ajustar la posición
                behavior: 'smooth' // Comportamiento suave
            });
        });
    });
});

