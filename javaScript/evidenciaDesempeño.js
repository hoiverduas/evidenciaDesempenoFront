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

    let { finalTotal, discount10, discount5, iva } = calculateTotal(total, productsCount);
    
    alert(`El total final a pagar es: $${finalTotal.toFixed(2)}\n` +
          `Cantidad total de productos ingresados: ${productsCount}\n` +
          `Descuento del 10% aplicado: $${discount10.toFixed(2)}\n` +
          `Descuento adicional del 5% aplicado: $${discount5.toFixed(2)}\n` +
          `IVA (19%): $${iva.toFixed(2)}`); 

    let detailsMessage = "Detalles de los productos:\n";
    productsDetails.forEach(product => {
        detailsMessage += `- ${product.name}: $${product.price.toFixed(2)}\n`;
    });
    alert(detailsMessage);
}

function calculateTotal(total, productsCount) {
    let discount10 = 0;
    let discount5 = 0;
    let iva = 0;

    if (productsCount > 5) {
        discount10 = total * 0.10; 
        total -= discount10; 
    }

    iva = total * 0.19; 
    total += iva; 

    if (total > 500000) {
        discount5 = total * 0.05; 
        total -= discount5; 
    }

    return { finalTotal: total, discount10, discount5, iva }; 
}

logIn();
