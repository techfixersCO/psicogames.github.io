document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'F7') {
        mostrarLogin(); // Esto muestra el modal de login al presionar ALT+F7
    }
});
