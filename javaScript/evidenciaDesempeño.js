


class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
}

const adminUser = new User("admin", "12345");

function logIn() {
    let exit = false;
    let cont = 0;

    do {
        let inputUserName = prompt('Ingrese nombre de usuario:');
        let inputPassword = prompt('Ingrese su contraseña:');

        if (inputPassword === adminUser.password && inputUserName === adminUser.userName) {
            alert("okey");
        } else {
            alert("Invalid username or password");
            cont++;
        }

        if (cont === 3) {
            alert("Demasiados intentos. Saliendo."); 
            exit = true; 
        }
    } while (!exit);    
}

logIn();
