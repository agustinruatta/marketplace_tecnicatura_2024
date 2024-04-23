async function cargarDatos() {
    const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1');
    const datos = await response.json();

    //Datos generales
    document.getElementById('titulo-notebook').textContent = datos.title;
    document.getElementById('imagen-notebook').src = datos.image_url;
    document.getElementById('sitio-web-fabricante').href = datos.factory_url;
    document.getElementById('descripcion-notebook').textContent = datos.description;

    //Listado de precios
    for(tipoNotebook of datos.notebooksTypes) {
        const li = document.createElement('li');
        li.textContent = `Cantidad Ram: ${tipoNotebook.ramAmount} | Precio: ARS ${tipoNotebook.price}`;

        document.getElementById('opciones-notebook').appendChild(li);
    }
}

cargarDatos();
