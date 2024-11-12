document.querySelector('#contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
    
    // Mostramos el mensaje de éxito
    var successMessage = document.querySelector('#successMessage');
    successMessage.style.display = 'block'; // Muestra el mensaje
    
    // Opcional: Ocultar el mensaje después de unos segundos
    setTimeout(function() {
        successMessage.style.display = 'none'; // Oculta el mensaje después de 5 segundos
    }, 5000);
});
