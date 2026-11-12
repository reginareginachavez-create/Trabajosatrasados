var btnSave = document.getElementById("btnSave");
let productos = [];

btnSave.onclick = () => {
    let txtNombre = document.getElementById("nombre");
    let txtPrecio = document.getElementById("precio");
    if (txtNombre.value.trim() == "" || txtPrecio.value.trim() == "") {
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'CAMPOS VACIOS'
        });
        return;
    }
    const producto = {
        nombre: txtNombre.value,
        precio: txtPrecio.value
    };
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarProductos();
    txtNombre.value = "";
    txtPrecio.value = "";
    document.getElementById("addProducto").close();
};

const cargarProductos = () => {
    productos = JSON.parse(localStorage.getItem("productos")) || [];
    let tbody = document.getElementById("productos");
    var tabla = "";
    productos.map((producto) => {
        tabla += `<tr class="text-center">
            <td><b>${producto.nombre.toUpperCase()}</b></td>
            <td><b>$ ${parseFloat(producto.precio).toFixed(2)}</b></td>
            <td><b>1</b></td>
            <td><b>$ ${parseFloat(producto.precio).toFixed(2)}</b></td>
        </tr>`;
    });
    tbody.innerHTML = tabla;
};

cargarProductos();