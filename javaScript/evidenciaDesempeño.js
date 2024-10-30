class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}

const adminUser = new User("admin", "1234");

function logIn() {
    let exit = false;
    let cont = 0;

    do {
        let inputUserName = prompt('Ingrese nombre de usuario:');
        let inputPassword = prompt('Ingrese su contraseña:');

        if (inputPassword === adminUser.password && inputUserName === adminUser.userName) {
            alert("Acceso concedido");
            exit = true;
            salesSystem();
        } else {
            alert("Nombre de usuario o contraseña incorrectos");
            cont++;
        }

        if (cont === 3 && !exit) {
            alert("Demasiados intentos. Saliendo.");
            exit = true;
        }
    } while (!exit);
}

function salesSystem() {
    let total = 0;
    let productsCount = 0;
    let productsDetails = [];

    while (true) {
        let productName = prompt('Ingrese el nombre del producto (o ingrese "salir" para terminar):');

        if (productName.toLowerCase() === "salir") {
            break;
        }

        let price = parseFloat(prompt('Ingrese el precio del producto:'));

        if (isNaN(price) || price < 0) {
            alert("Precio inválido. Intente nuevamente.");
            continue;
        }

        productsCount++;
        total += price;
        productsDetails.push({ name: productName, price: price });

        alert(`Total hasta ahora (sin descuentos ni IVA): $${total.toFixed(2)}\nCantidad de productos ingresados: ${productsCount}`);
    }
}
