const btnAgregar = document.getElementById('agregar');
const btnLimpiar = document.getElementById('limpiar');
const listaItems = document.getElementById('contenedor');
const inputItem = document.getElementById('item'); 

function cargarItem() {
    const items = JSON.parse(localStorage.getItem('item')) || [];
    listaItems.innerHTML = '';

    items.forEach(item => {
        const lista = document.createElement('li');
        lista.textContent = item;
        listaItems.appendChild(lista);
    });
}

function guardarItem(item) {
    const items = JSON.parse(localStorage.getItem('item')) || [];
    items.push(item);
    localStorage.setItem('item', JSON.stringify(items));
}

function limpiarItem() {
    localStorage.removeItem('item');
    cargarItem();
}

btnAgregar.addEventListener('click', () => {
    const nuevoItem = inputItem.value.trim();
    if (nuevoItem !== '') {
        guardarItem(nuevoItem);
        cargarItem();
        inputItem.value = ''; 
    }
});

btnLimpiar.addEventListener('click', limpiarItem);