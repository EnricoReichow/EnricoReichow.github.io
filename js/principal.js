class Eu {
    idade
    email
    conhecimentos

    constructor(idade, email, conhecimentos) {
        this.idade = idade
        this.email = email
        this.conhecimentos = conhecimentos
    }

    meApresentar() {
        return "Olá tenho " + this.idade + " anos, pode entrar o contato pelo email" + this.email + " no momento aprendi sobre: <ul> " + this.aprendizado()+"</ul>"
    }

    aprendizado() {
        let texto = ""
        for (let contador = 0; contador < this.conhecimentos.length; contador++) {
            texto += "<li>" + this.conhecimentos[contador]+"</li>"
        }
        return texto
    }
}

let conhecimentos = [
    "Algoritmos 1 (Pseudocódigo com VisualG)",
    "Algoritmos 2 (Linguagem de Programação JavaScript"
]

let enrico = new Eu(17, "enricobernzreichow@gmail.com", conhecimentos)

document.writeln(enrico.meApresentar())