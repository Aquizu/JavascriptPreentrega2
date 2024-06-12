// Objeto vehiculo
function Auto(marca, modelo, año, precio, stock) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.precio = precio;
    this.stock = stock;
}

// Funcion para agregar un vehiculo al stock
function agregarAuto(inventario) {
    var marca = prompt("Ingrese la marca del vehiculo:");
    var modelo = prompt("Ingrese el modelo del vehiculo:");
    var año = parseInt(prompt("Ingrese el año del vehiculo:"));
    var precio = parseFloat(prompt("Ingrese el precio del vehiculo:"));
    var stock = parseInt(prompt("Ingrese la cantidad en stock del vehiculo:"));

    var nuevoAuto = new Auto(marca, modelo, año, precio, stock);
    inventario.push(nuevoAuto);

    alert("¡Vehiculo agregado al inventario!");
}

// Funcion para buscar un vehiculo por marca y modelo
function buscarAutoPorMarcaModelo(inventario) {
    var marcaBuscada = prompt("Ingrese la marca del vehiculo que desea buscar:");
    var modeloBuscado = prompt("Ingrese el modelo del vehiculo que desea buscar:");
    var encontrado = inventario.find(function(auto) {
        return auto.marca === marcaBuscada && auto.modelo === modeloBuscado;
    });

    if (encontrado) {
        alert("vehiculo encontrado:\n" +
            "Marca: " + encontrado.marca + "\n" +
            "Modelo: " + encontrado.modelo + "\n" +
            "Año: " + encontrado.año + "\n" +
            "Precio: $" + encontrado.precio.toFixed(2) + "\n" +
            "Stock: " + encontrado.stock);
    } else {
        alert("vehiculo no encontrado en el inventario.");
    }
}

// Funcion principal
function main() {
    var inventario = [];

    var opcion;
    do {
        opcion = parseInt(prompt(
            "Seleccione una opción:\n" +
            "1. Agregar un vehiculo al inventario.\n" +
            "2. Buscar un vehiculo por marca y modelo.\n" +
            "3. Salir"
        ));

        switch (opcion) {
            case 1:
                agregarAuto(inventario);
                break;
            case 2:
                buscarAutoPorMarcaModelo(inventario);
                break;
            case 3:
                alert("Gracias por usar nuestro sistema.");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== 3);
}

main();