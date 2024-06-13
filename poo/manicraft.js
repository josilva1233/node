/**
 * Fundamentos da POO
 */

class Bloco {
    //Atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //Ações
    criarBloco() {
        console.log("------------------------------------------")
        console.log("┎─┒")
        console.log("┖─┚")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência de ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("▀ ▀ ▀ ▀ Recursos obtidos!")
    }
}

class Enxada extends Bloco {
    //Atributos
    constructor(textura, resistencia, conquista) {
        //atributos reutilizados
        super(textura, resistencia)
        this.conquista = conquista
    }

    criarEnxada() {
        console.log("---------------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true) {
            console.log(" (^.^) S2 Conquista obtida!!!")
        }
    }
    //polimorfismo
    minerar(){
         console.log("¢ (-_-) Dado atribuído")
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
bloco3.criarBloco()
bloco3.minerar()


const enxada1 = new Enxada("Madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("Ferro", 5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("Diamante", 10, false)
enxada3.criarEnxada()
enxada3.minerar()
