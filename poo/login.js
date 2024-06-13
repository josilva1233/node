/**
 * Fundamentos da POO
 * Encapsulamento
 */

class User {
    //atributos
    constructor(login, senha){
        this.login = login
        //encapsulamento
        let _senha = senha
        this.getSenha = () => _senha
        this.setSenha = (novaSenha) => _senha = novaSenha
    }

    //açõa
    logar(){
        console.log("_____________")
        console.log(`Usuário: ${this.login}`)
        console.log(`senha: ${this.getSenha()}`)

        if(this.login === "admin" && this.getSenha() === "123456"){
            console.log("Usuário autenticado")
        }else{
            console.log("Usuário e/ou senha inválido(s)")
        }
    }
}

/** Sistema **/
console.clear()
const user1 = new User("admin", "1234")
user1.logar()
const user2 = new User("admin", "1234")
user2.logar()
user2.setSenha("123456")
user2.logar()
