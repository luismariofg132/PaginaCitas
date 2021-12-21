let formulario = document.getElementById('form');
let listarCita = document.getElementById('listarCita')
let citas = JSON.parse(localStorage.getItem('Citas')) || [];
let buscar = document.getElementById('btnBuscar');
let busqueda = document.getElementById('busqueda');

const capturarDatos = () => {
    let nombre = document.getElementById('nombre').value;
    let fecha = document.getElementById('fecha').value;
    let hora = document.getElementById('hora').value;
    let sintomas = document.getElementById('sintomas').value;

    const registro = {
        nombre,
        fecha,
        hora,
        sintomas
    }

    citas.unshift(registro);
    localStorage.setItem('Citas', JSON.stringify(citas))
    getLocalstorage();
}

const getLocalstorage = () => {
    listarCita.innerHTML = ""
    let citasLocalStorage = JSON.parse(localStorage.getItem('Citas'))
    citasLocalStorage?.map(cita => {
        const { nombre, fecha, hora, sintomas } = cita;
        listarCita.innerHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${fecha}</td>
                <td>${hora}</td>
                <td>${sintomas}</td>
            </tr>
        `
    })
}

document.addEventListener('DOMContentLoaded', getLocalstorage)

formulario.addEventListener('submit', e => {
    e.preventDefault();
    capturarDatos();
    e.target.reset();
})

buscar.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById('inputBuscar').value;
    let data = JSON.parse(localStorage.getItem('Citas'));
    let filtro = data.filter(cita => cita.nombre.toLowerCase() === input.toLowerCase())

    busqueda.innerHTML = ""

    filtro.length === 0 ?
        busqueda.innerHTML += `
        <div class="card mt-5 p-3 restBusqueda">El nombre ${input} no existe</div>
    `
        :
        filtro.map(cita => {
            const { nombre, fecha, hora, sintomas } = cita
            busqueda.innerHTML += `
            <div class="card mt-5 p-3 restBusqueda">
            <div id="nombreBusq">${nombre}</div>
            <div>Fecha: ${fecha}</div>
            <div>Hora: ${hora}</div>
            <div>Sintomas: ${sintomas}</div>
            <div>
                <button id="btnBorrar" onclick="borrar();" class="btn btn-primary">Borrar</button>
            </div>
            </div>
            <br>
        `
        })
})

const borrar = () => {
    const nombreBusq = document.getElementById('nombreBusq').textContent;
    const nomBusq = nom => nom.nombre !== nombreBusq;
    const citasNuevo = citas.filter(nomBusq)

    citas = citasNuevo;
    localStorage.setItem('Citas', JSON.stringify(citas))
    getLocalstorage();
    window.location.reload();
}

