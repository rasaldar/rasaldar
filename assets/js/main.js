// Ejemplo de funcionalidad para el formulario de contacto
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensaje enviado con éxito');
    this.reset();
});

// Simulación de registro (puedes expandirlo con localStorage o backend)
function registrarUsuario(nombre, email, password, rol = 'visualizador') {
    const usuario = { nombre, email, password, rol };
    console.log('Usuario registrado:', usuario);
}