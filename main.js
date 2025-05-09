// Función para mostrar los juegos según la categoría seleccionada
function mostrarJuegos(categoria) {
    const contenido = document.getElementById('contenido');

    if (categoria === 'pequeños') {
        contenido.innerHTML = `
            <h2>Juegos para Niños Pequeños</h2>
            <p>Estos son los juegos recomendados para niños pequeños.</p>
<a href="https://www.cokitos.com/" target="_blank">
  <img src="cokitos.png" alt="Cokitos" width="200">
</a>

<a href="https://www.vedoque.com/" target="_blank">
  <img src="vedoque.png" alt="Vedoque" width="200">
</a>

<a href="https://www.poissonrouge.com/" target="_blank">
  <img src="poissonrouge.png" alt="Poisson Rouge" width="200">
</a>

<a href="https://www.peepandthebigwideworld.com/games/" target="_blank">
  <img src="peep.png" alt="Peep and the Big Wide World" width="200">
</a>

<a href="https://pbskids.org/" target="_blank">
  <img src="pbskids.png" alt="PBS Kids" width="200">
</a>

<a href="https://www.nickjr.com/" target="_blank">
  <img src="nickjr.png" alt="Nick Jr" width="200">
</a>

<a href="https://www.sesamestreet.org/games" target="_blank">
  <img src="sesamestreet.png" alt="Sesame Street" width="200">
</a>

<a href="https://www.starfall.com/" target="_blank">
  <img src="starfall.png" alt="Starfall" width="200">
</a>

<a href="https://www.abcya.com/" target="_blank">
  <img src="abcya.png" alt="ABCya!" width="200">
</a>

        `;
    } else if (categoria === 'grandes') {
        const pass = prompt("Introduce la contraseña para acceder a esta sección:");
        if (pass === 'mayores2024') {
            contenido.innerHTML = `
                <h2>Juegos para Niños Grandes</h2>
                <p>Estos son los juegos recomendados para niños grandes.</p>
                
                <!-- Juegos educativos -->
                <h3>Juegos Educativos</h3>
                <a href="https://www.kahoot.com/" target="_blank">
                <img src="kahoot.png" alt="kahoot" width="200">
            </a>
                <a href="https://www.nationalgeographic.com/games/" target="_blank">
                <img src="national geographic.jpg" alt="" width="200">
            </a>

                <a href="https://www.code.org/" target="_blank">
                <img src="code.org.jpeg" alt="" width="200">
            </a>
                <a href="https://www.chess.com/play/computer" target="_blank" class="enlace-juego">
                <img src="chesscom.png" alt="" width="200"></a>

            <!-- Juegos para Gamers -->
                <h3>Juegos para Gamers</h3>
              

                <a href="https://www.roblox.com" target="_blank">
                <img src="roblox.png" alt="" width="200">
            </a>
                <a href="https://www.miniclip.com/games/en/" target="_blank">
                <img src="miniclip.jpg" alt="" width="200">
            </a>
                <a href="https://www.fortnite.com/" target="_blank">
                <img src="fortnite.png" alt="" width="200">
            </a>
                <a href="index..html" target="_blank">
                <img src="icon.png" alt="" width="200">
            `;
        } else {
            alert("Contraseña incorrecta.");
        }
    }
}

// Función para mostrar el modal de login
function mostrarLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Función para cerrar el modal de login
function cerrarLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    if (usuario === 'admin' && contraseña === '12345') {
        localStorage.setItem('usuario', 'admin');
        window.location.href = 'panel.html';
    } else if (usuario === 'sebastian.pasachoa' && contraseña === '456') {
        localStorage.setItem('usuario', 'sebastian.pasachoa');
        window.location.href = 'panel.html';
    } else if (usuario === 'martha.diaz' && contraseña === '789') {
        localStorage.setItem('usuario', 'martha.diaz');
        window.location.href = 'panel.html';
    } else {
        alert('Usuario o contraseña equivocados');
    }
}


// Abrir modal con Alt + F7
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'F7') {
        mostrarLogin();
    }
});
