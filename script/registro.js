let btnRegistrar = document.getElementById('btnRegistro');
let usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
let mensaje = document.getElementById('mensaje')


btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('nombre').value;
    let usuario = document.getElementById('usua').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let contraseña = document.getElementById('contraseña').value;

    const registroUsuario = {
        nombre,
        usuario,
        nacimiento,
        contraseña
    }

    usuarios.push(registroUsuario);
    localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    window.location.reload();
})

