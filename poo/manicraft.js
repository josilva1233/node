/**
 * Fundamentos da POO
 */

class Bloco {
    //Atributos
    constructor (textura, resistencia){
        this.textura = textura
        this.resistencia = resistencia
    }
    //Ações
    criarBloco(){
        console.log("------------------------------------------")
        console.log("┎─┒")
        console.log("┖─┚")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência de ${this.resistencia}`)
    }
    
    construir(){
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar(){
        console.log("▀ ▀ ▀ ▀ Recursos obtidos!")
    }
}

/**
 * ***** Mundo ******
 */


console.clear()   
console.log("   _____  .___ _______  ______________________________    _____  ______________________")
console.log("  /    \\ |   |\\    \\ \\_   _____/\\_   ___ \______  \\  /  _ \\ \\_ _____/\\__ ___/")
console.log(" / \\ / \\|   |/   |  \\ |    __)_ /    \ \\/|       _/ /  /_\\ \ |    __)    |    |   ")
console.log("/    Y   \\   /    |   \\|        \\    \\___|    |  \\/    |   \\|    \\     |    |   =")
console.log("\____|__  /___\____|__  /_______  / \______  /____|_  /\____|__  /\___  /     |____|   ")
console.log("      \\/            \\/       \\/        \\/      \\/        \\/    \\/               ")
console.log("")

//instancia objeto

const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco2.criarBloco()
bloco2.minerar()
