/*- **User**, que deverá possuir:
    - um atributo **fullname**, atribuível na instanciação
    - um atributo **email**, atribuível na instanciação
    - um atributo **password**, atribuível na instanciação
    - um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não */

class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  confirmLogin(email1, password1) {
    if (this.email == email1 && this.password == password1) {
      console.log("login autorizado");
    } else {
      console.log("login bloqueado");
    }
  }
}

const usuario = new User(
  "Vinicius Solon",
  "viniciussolonc@gmail.com",
  "dgdaposse"
);
usuario.confirmLogin("viniciussolonc@gmail.com", "dgdaposse");
console.log(usuario);
