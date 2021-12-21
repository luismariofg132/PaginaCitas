let btnLogIn = document.getElementById('btnLogIn');
let usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
let error = document.getElementById('error');

btnLogIn.addEventListener('click', (e) => {
    e.preventDefault();

    let usuario1 = document.getElementById('usua').value;
    let contraseña = document.getElementById('contraseña').value;

    const usuBusq = nom => nom.usuario === usuario1;
    const usuExistencia = usuarios.filter(usuBusq)

    const usuContra = con => con.contraseña === contraseña;
    const contIgual = usuExistencia.filter(usuContra)

    if (usuExistencia.length !== 0) {
        if (contIgual.length !== 0) {
            window.location.href = "dashboard.html";
        } else {
            error1();
        }
    } else {
        error1();
    }
})

const error1 = () => {
    error.innerHTML = ""
    error.innerHTML = `
    <div class="card mt-5">
        <div class="card-body">
            <h5>Verifique usuario y contraseña</h5>
        </div>
    </div>
    `
}
