const btnAgregar = document.getElementById('agregar'); //botón para agregar tarea
const btnLimpiar = document.getElementById('limpiar'); //botón para eliminar la lista
const listaItems = document.getElementById('contenedor'); //contenedor que muestra la lista de tareas
const inputItem = document.getElementById('item'); //tarea

function cargarItem() { //guardar en el localstorage el item
    const items = JSON.parse(localStorage.getItem('item')) || []; //array para convertir a JSON y guardar en localStorage cada item
    listaItems.innerHTML = ''; //"limpiar la lista actual de la interfás"

    items.forEach(item => { //para cada item del array
        const lista = document.createElement('li'); //"crear un nuevo elemento de lista"
        lista.textContent = item; //Cambiar el contenido por el item del array
        listaItems.appendChild(lista); //agrega un elemento del array al contenedor
    });
}

function guardarItem(item) { //guardar el item
    const items = JSON.parse(localStorage.getItem('item')) || []; //"Convertir la lista (items) actual de tareas desde localStorage"
    items.push(item); //Agregar elemento a la lista
    localStorage.setItem('item', JSON.stringify(items)); //"guardar en el array actual"
}

function limpiarItem() { //Elimina toda la lista
    localStorage.removeItem('item'); //Elimina los item del localStorage
    cargarItem(); //"volver a cargar la lista de tareas parra actualizar la interfás"
}

btnAgregar.addEventListener('click', () => { //Evento para agregar item a la lista
    const nuevoItem = inputItem.value.trim(); //Guardamos el valor sin espacios (trim) del nuevo item
    if (nuevoItem !== '') { //Si el nuevo item es distinto de vacío
        guardarItem(nuevoItem); //Activamos la función para guardar el item
        cargarItem();//Activamos la función para cargar el item
        inputItem.value = ''; //Y devolvemos el valor del item a vacío
    }
});

btnLimpiar.addEventListener('click', limpiarItem); //Evento para eliminar toda la lista mediante la función limpiar