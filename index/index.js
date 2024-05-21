async function mostrarCantidadArticulos() {
    const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
    const datos = await response.json();
    const cantidadArticulos = datos.amount_of_products;

    document.getElementById('cantidad-articulos').textContent = cantidadArticulos;
}

async function mostrarArticulos() {
    const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/');
    const datos = await response.json();

    for (const notebook of datos) {
        const imagenNotebook = document.createElement('img');
        imagenNotebook.src = notebook.image_url;

        const tituloNotebook = document.createElement('strong');
        tituloNotebook.textContent = notebook.title;

        const link = document.createElement('a');
        link.href = 'notebook.html';
        link.appendChild(imagenNotebook);
        link.appendChild(tituloNotebook);

        const divContenedor = document.createElement('div');
        divContenedor.className = 'preview-producto';
        divContenedor.appendChild(link);

        document.getElementById('listado-productos').appendChild(divContenedor);
    }
}

mostrarCantidadArticulos();
mostrarArticulos();
