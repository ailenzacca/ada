const sim = {
    hambre: 8,
    energia: 8,
    dinero: 8,
    felicidad: 8,
    nombre: "Lisa",
    edad: 28,
    ubicacion: "Capital Federal",
    profesion: "programadora",
    info: "crack en JS",
    img: "character.png",
    dormir() {
        this.energia += 5;
        this.hambre -= 3;
        this.limitarEstados();
    },
    morfar() {
        this.energia -= 5;
        this.hambre += 5;
        this.limitarEstados();
    },
    laburar() {
        this.felicidad -= 5;
        this.dinero += 5;
        this.limitarEstados();
    },
    salir() {
        this.felicidad += 5;
        this.dinero -= 5;
        this.limitarEstados();
    },
    ejercitar() {
        this.felicidad += 3;
        this.hambre -= 3;
        this.limitarEstados();
    },
    viciar() {
        this.hambre -= 3;
        this.felicidad += 3;
        this.limitarEstados();
    },
    limitarEstados() {
        const estados = ["hambre", "energia", "dinero", "felicidad"];
        for (const estado of estados) {
            if (this[estado] >= 10) {
                this[estado] = 10;
            }
            if (this[estado] <= 0) {
                this[estado] = 0;
            }
        }
    }
}

