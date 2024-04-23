async function mostrarCantidadArticulos() {
    const response = await fetch('https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics');
    const datos = await response.json();
    const cantidadArticulos = datos.amount_of_products;

    document.getElementById('cantidad-articulos').textContent = cantidadArticulos;
}

mostrarCantidadArticulos();
